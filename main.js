window.addEventListener("load", () => {

    // -----------------------------
    // Canvas / Layer / Tooltip
    // -----------------------------
    const canvas = document.getElementById("main-canvas");
    const ctx = canvas.getContext("2d");
    const iconLayer = document.getElementById("icon-layer");
    const tooltip = document.getElementById("tooltip");

    // -----------------------------
    // プリセットキャラデータ
    // -----------------------------
    const presetCharacters = {
        1: [ /* ← ここは省略（あなたの元データそのまま） */ ],
        2: [],
        3: []
    };

    // -----------------------------
    // 現在のプリセット
    // -----------------------------
    let currentPreset = 1;
    let characters = JSON.parse(JSON.stringify(presetCharacters[currentPreset]));

    // -----------------------------
    // プリセット切り替え
    // -----------------------------
    document.getElementById("preset-select").addEventListener("change", (e) => {
        currentPreset = Number(e.target.value);
        characters = JSON.parse(JSON.stringify(presetCharacters[currentPreset]));
        rebuildCharacterList();
        drawAll();
    });

    // -----------------------------
    // グループ化
    // -----------------------------
    function groupCharactersByName() {
        const groups = {};
        characters.forEach(c => {
            const key = c.groupName || c.name;
            if (!groups[key]) groups[key] = [];
            groups[key].push(c);
        });
        return groups;
    }

    // -----------------------------
    // キャラ一覧（表示切替）
    // -----------------------------
    function rebuildCharacterList() {
        const list = document.getElementById("character-list");
        list.innerHTML = "";

        const groups = groupCharactersByName();

        for (const group in groups) {
            const label = document.createElement("label");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = groups[group].some(c => c.visible);

            checkbox.addEventListener("change", () => {
                groups[group].forEach(c => c.visible = checkbox.checked);
                drawAll();
            });

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(group));
            list.appendChild(label);
        }
    }

    // -----------------------------
    // Tooltip
    // -----------------------------
    function showTooltip(e, char) {
        let html = `<strong>${char.name}</strong><br>`;
        for (const key in char.detail) {
            html += `${key}：${char.detail[key]}<br>`;
        }
        tooltip.innerHTML = html;
        tooltip.style.left = e.pageX + 10 + "px";
        tooltip.style.top = e.pageY + 10 + "px";
        tooltip.style.display = "block";
    }

    function hideTooltip() {
        tooltip.style.display = "none";
    }

    // -----------------------------
    // Canvas 初期化
    // -----------------------------
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    rebuildCharacterList();

    function resizeCanvas() {
        const wrapper = document.getElementById("canvas-wrapper");
        canvas.width = wrapper.clientWidth;
        canvas.height = wrapper.clientHeight;
        drawAll();
    }

    // -----------------------------
    // atk → X 座標（非線形）
    // -----------------------------
    function atkToX(atk) {
        const leftMargin = canvas.width * 0.20;
        const rightMargin = canvas.width * 0.20;
        const usableWidth = canvas.width - leftMargin - rightMargin;

        const sorted = [...characters]
            .filter(c => c.visible)
            .sort((a, b) => a.atk - b.atk);

        const gaps = [];
        for (let i = 0; i < sorted.length - 1; i++) {
            const diff = sorted[i + 1].atk - sorted[i].atk;
            gaps.push(1 + (200 / (diff + 1)));
        }

        const cum = [0];
        for (let i = 0; i < gaps.length; i++) {
            cum.push(cum[i] + gaps[i]);
        }

        const minC = Math.min(...cum);
        const maxC = Math.max(...cum);
        const idx = sorted.findIndex(c => c.atk === atk);
        const nonlinear = (cum[idx] - minC) / (maxC - minC);

        const minAtk = sorted[0].atk;
        const maxAtk = sorted[sorted.length - 1].atk;
        const linear = (atk - minAtk) / (maxAtk - minAtk);

        const w = 0.4;
        const hybrid = linear * (1 - w) + nonlinear * w;

        return leftMargin + hybrid * usableWidth;
    }

    // -----------------------------
    // 自動配置
    // -----------------------------
    function autoPlaceTargetIcons() {
        const targets = characters.filter(c => c.type === "target" && c.visible);

        const angleStep = (Math.PI * 2) / targets.length;
        const radius = 70;

        targets.forEach((c, i) => {
            if (c.iconX != null && c.iconY != null) return;

            const px = atkToX(c.atk);
            const py = canvas.height / 2;

            const angle = i * angleStep;

            c.iconX = px + radius * Math.cos(angle);
            c.iconY = py + radius * Math.sin(angle);
        });
    }

    // -----------------------------
    // 描画
    // -----------------------------
    function drawAll() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        autoPlaceTargetIcons();

        drawNumberLine();
        drawIndicators();
        drawTargets();
    }

    function drawNumberLine() {
        const w = canvas.width;
        const h = canvas.height;

        ctx.strokeStyle = "#333";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(50, h / 2);
        ctx.lineTo(w - 50, h / 2);
        ctx.stroke();
    }

    // -----------------------------
    // 指標キャラ
    // -----------------------------
    function drawIndicators() {
        const h = canvas.height;

        characters
            .filter(c => c.type === "indicator" && c.visible)
            .forEach(c => {

                const leftX = atkToX(c.atk - 50);
                const rightX = atkToX(c.atk);

                ctx.fillStyle = "rgba(100,150,255,0.25)";
                ctx.fillRect(leftX, 0, rightX - leftX, h);

                ctx.strokeStyle = "#0033aa";
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(rightX, 0);
                ctx.lineTo(rightX, h);
                ctx.stroke();

                const iconX = rightX - 20;
                const iconY = h - 90;
                placeIcon(c, iconX, iconY);

                const text = String(c.atk);
                ctx.font = "14px sans-serif";
                ctx.textAlign = "center";

                const tx = iconX + 20;
                const ty = iconY + 60;

                const paddingX = 6;
                const textWidth = ctx.measureText(text).width;
                const boxWidth = textWidth + paddingX * 2;
                const boxHeight = 20;

                ctx.fillStyle = "white";
                ctx.strokeStyle = "#0033aa";
                ctx.lineWidth = 1;

                const radius = 5;
                ctx.beginPath();
                ctx.moveTo(tx - boxWidth/2 + radius, ty - boxHeight/2);
                ctx.lineTo(tx + boxWidth/2 - radius, ty - boxHeight/2);
                ctx.quadraticCurveTo(tx + boxWidth/2, ty - boxHeight/2, tx + boxWidth/2, ty - boxHeight/2 + radius);
                ctx.lineTo(tx + boxWidth/2, ty + boxHeight/2 - radius);
                ctx.quadraticCurveTo(tx + boxWidth/2, ty + boxHeight/2, tx + boxWidth/2 - radius, ty + boxHeight/2);
                ctx.lineTo(tx - boxWidth/2 + radius, ty + boxHeight/2);
                ctx.quadraticCurveTo(tx - boxWidth/2, ty + boxHeight/2, tx - boxWidth/2, ty + boxHeight/2 - radius);
                ctx.lineTo(tx - boxWidth/2, ty - boxHeight/2 + radius);
                ctx.quadraticCurveTo(tx - boxWidth/2, ty - boxHeight/2, tx - boxWidth/2 + radius, ty - boxHeight/2);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                ctx.fillStyle = "#0033aa";
                ctx.fillText(text, tx, ty + 5);
            });
    }

    // -----------------------------
    // 調整対象キャラ
    // -----------------------------
    function drawTargets() {
        const h = canvas.height;

        const targets = characters.filter(c => c.type === "target" && c.visible);

        targets.forEach((c) => {

            const px = atkToX(c.atk);
            const py = h / 2;

            ctx.fillStyle = "#e06666";
            ctx.beginPath();
            ctx.arc(px, py, 6, 0, Math.PI * 2);
            ctx.fill();

            const iconX = c.iconX;
            const iconY = c.iconY;

            placeIcon(c, iconX, iconY);

            const sx = iconX + 20;
            const sy = iconY + 20;

            const midX = sx + (px - sx) * 0.3;
            const midY = sy;

            ctx.strokeStyle = "#e06666";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(midX, midY);
            ctx.lineTo(px, py);
            ctx.stroke();

            const text = String(c.atk);
            ctx.font = "14px sans-serif";
            ctx.textAlign = "center";

            const tx = iconX + 20;
            const ty = iconY + 60;

            const paddingX = 6;
            const textWidth = ctx.measureText(text).width;
            const boxWidth = textWidth + paddingX * 2;
            const boxHeight = 20;

            ctx.fillStyle = "white";
            ctx.strokeStyle = "#e06666";
            ctx.lineWidth = 1;

            const radius = 5;
            ctx.beginPath();
            ctx.moveTo(tx - boxWidth/2 + radius, ty - boxHeight/2);
            ctx.lineTo(tx + boxWidth/2 - radius, ty - boxHeight/2);
            ctx.quadraticCurveTo(tx + boxWidth/2, ty - boxHeight/2, tx + boxWidth/2, ty - boxHeight/2 + radius);
            ctx.lineTo(tx + boxWidth/2, ty + boxHeight/2 - radius);
            ctx.quadraticCurveTo(tx + boxWidth/2, ty + boxHeight/2, tx + boxWidth/2 - radius, ty + boxHeight/2);
            ctx.lineTo(tx - boxWidth/2 + radius, ty + boxHeight/2);
            ctx.quadraticCurveTo(tx - boxWidth/2, ty + boxHeight/2, tx - boxWidth/2, ty + boxHeight/2 - radius);
            ctx.lineTo(tx - boxWidth/2, ty - boxHeight/2 + radius);
            ctx.quadraticCurveTo(tx - boxWidth/2, ty - boxHeight/2, tx - boxWidth/2 + radius, ty - boxHeight/2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "#e06666";
            ctx.fillText(text, tx, ty + 5);
        });
    }

    // -----------------------------
    // アイコン配置（ドラッグ対応・再利用方式）
    // -----------------------------
    function placeIcon(char, x, y) {

        // 既存アイコンがあれば再利用
        let div = char._iconDiv;
        if (!div) {
            div = document.createElement("div");
            div.className = "character-icon";
            div.style.backgroundImage = `url(${char.iconPath})`;

            // バッジ
            if (char.badgeText) {
                const badge = document.createElement("div");
                badge.className = "icon-badge";
                badge.textContent = char.badgeText;
                div.appendChild(badge);
            }

            // ハイライト
            if (char.highlight) {
                div.classList.add("icon-highlight");
            }

            // Tooltip
            div.addEventListener("mouseenter", (e) => showTooltip(e, char));
            div.addEventListener("mouseleave", hideTooltip);

            // ドラッグ
            let dragging = false;
            let offsetX = 0;
            let offsetY = 0;

            div.addEventListener("mousedown", (e) => {
                dragging = true;
                offsetX = e.offsetX;
                offsetY = e.offsetY;
            });

            window.addEventListener("mousemove", (e) => {
                if (!dragging) return;

                const rect = iconLayer.getBoundingClientRect();
                const nx = e.clientX - rect.left - offsetX;
                const ny = e.clientY - rect.top - offsetY;

                char.iconX = nx;
                char.iconY = ny;

                div.style.left = nx + "px";
                div.style.top = ny + "px";

                drawAll(); // ★ 線を追従
            });

            window.addEventListener("mouseup", () => dragging = false);

            iconLayer.appendChild(div);
            char._iconDiv = div;
        }

        // 再利用時の位置更新
        div.style.left = x + "px";
        div.style.top = y + "px";
    }

});
