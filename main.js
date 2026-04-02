window.addEventListener("load", () => {
    const canvas = document.getElementById("main-canvas");
    const ctx = canvas.getContext("2d");
    const iconLayer = document.getElementById("icon-layer");
    const tooltip = document.getElementById("tooltip");

    // キャラデータ
    const characters = [
        {
            name: "シロコ＊テラー",
            atk: 11284,
            type: "indicator",
            iconPath: "sirokoterror.png",
            visible: true,
            iconX: null,
            iconY: null,
            detail: {
                固有武器: "固有4レベル60",
                絆: "50.1.1",
                WB: "25",
                NS: "10",
                PS: "10",
                装備: "10.10.10",
                SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
            }
        },
        {
            name: "シロコ＊テラー",
            atk: 11102,
            type: "indicator",
            iconPath: "sirokoterror.png",
            visible: true,
            iconX: null,
            iconY: null,
            detail: {
                固有武器: "固有3レベル50",
                絆: "50.1.1",
                WB: "25",
                NS: "10",
                PS: "10",
                装備: "10.10.10",
                SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
            }
        },

        // ツルギ（指標）
        {
            name: "ツルギ",
            atk: 14306,
            type: "indicator",
            iconPath: "tsurugi.png",
            visible: true,
            iconX: null,
            iconY: null,
            detail: {
                固有武器: "固有4レベル60",
                絆: "30.20.1",
                WB: "25",
                NS: "10",
                PS: "10",
                装備: "10.10.10",
                SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
            }
        },
        {
            name: "ツルギ",
            atk: 14172,
            type: "indicator",
            iconPath: "tsurugi.png",
            visible: true,
            iconX: null,
            iconY: null,
            detail: {
                固有武器: "固有4レベル50",
                絆: "30.20.1",
                WB: "25",
                NS: "10",
                PS: "10",
                装備: "10.10.10",
                SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
            }
        },

        // ジュンコ（target）
        {
            name: "ジュンコ",
            atk: 11135,
            type: "target",
            iconPath: "junko.png",
            visible: true,
            iconX: null,
            iconY: null,
            detail: {
                固有武器: "固有4レベル20",
                絆: "30.1.1",
                WB: "0",
                NS: "10",
                PS: "10",
                装備: "10.10.10",
                SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
            }
        },

        // ★ ムツキ（正月）4人（target）
        {
            name: "ムツキ（正月）",
            atk: 15038,
            type: "target",
            iconPath: "mutsuki_newyear.png",
            visible: true,
            iconX: null,
            iconY: null,
            detail: {
                固有武器: "固有4レベル40",
                絆: "30.30.1",
                WB: "0",
                NS: "10",
                PS: "10",
                装備: "10.10.10",
                SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
            }
        },
        {
            name: "ムツキ（正月）",
            atk: 14288,
            type: "target",
            iconPath: "mutsuki_newyear.png",
            visible: true,
            iconX: null,
            iconY: null,
            detail: {
                固有武器: "固有4レベル14",
                絆: "30.30.1",
                WB: "0",
                NS: "10",
                PS: "10",
                装備: "10.10.10",
                SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
            }
        },
        {
            name: "ムツキ（正月）",
            atk: 14170,
            type: "target",
            iconPath: "mutsuki_newyear.png",
            visible: true,
            iconX: null,
            iconY: null,
            detail: {
                固有武器: "固有4レベル40",
                絆: "30.30.1",
                WB: "0",
                NS: "3",
                PS: "10",
                装備: "10.10.10",
                SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
            }
        },
        {
            name: "ムツキ（正月）",
            atk: 14263,
            type: "target",
            iconPath: "mutsuki_newyear.png",
            visible: true,
            iconX: null,
            iconY: null,
            detail: {
                固有武器: "固有4レベル40",
                絆: "30.30.1",
                WB: "0",
                NS: "3",
                PS: "10",
                装備: "8.10.10",
                SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
            }
        },

        // ★ ノノミ（target）
        {
            name: "ノノミ",
            atk: 13971,
            type: "target",
            iconPath: "nonomi.png",
            visible: true,
            iconX: null,
            iconY: null,
            detail: {
                固有武器: "固有4レベル60",
                絆: "30.20.1",
                WB: "0",
                NS: "10",
                PS: "10",
                装備: "10.10.10.T2",
                SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
            }
        }
    ];

    // -----------------------------
    // キャラ名でグループ化
    // -----------------------------
    function groupCharactersByName() {
        const groups = {};
        characters.forEach(c => {
            if (!groups[c.name]) groups[c.name] = [];
            groups[c.name].push(c);
        });
        return groups;
    }

    // -----------------------------
    // キャラ一覧（表示/非表示）
    // -----------------------------
    function buildCharacterList() {
        const list = document.getElementById("character-list");
        list.innerHTML = "";

        const groups = groupCharactersByName();

        Object.keys(groups).forEach((name, idx) => {
            const id = "chk_group_" + idx;
            const checked = groups[name].some(c => c.visible);

            const label = document.createElement("label");
            label.innerHTML = `
                <input type="checkbox" id="${id}" ${checked ? "checked" : ""}>
                ${name}
            `;
            list.appendChild(label);

            document.getElementById(id).addEventListener("change", (e) => {
                const isChecked = e.target.checked;
                groups[name].forEach(c => c.visible = isChecked);
                drawAll();
            });
        });
    }

    // -----------------------------
    // Canvas 初期化
    // -----------------------------
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    buildCharacterList();

    function resizeCanvas() {
        const wrapper = document.getElementById("canvas-wrapper");
        canvas.width = wrapper.clientWidth;
        canvas.height = wrapper.clientHeight;
        drawAll();
    }

    // -----------------------------
    // 非線形スケール（大小関係を絶対に維持）
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
        const normalized = (cum[idx] - minC) / (maxC - minC);

        return leftMargin + normalized * usableWidth;
    }

    // -----------------------------
    // ターゲットアイコン自動配置（円形）
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
        iconLayer.innerHTML = "";

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
            const x = atkToX(c.atk);

            // 縦帯
            ctx.fillStyle = "rgba(100,150,255,0.25)";
            ctx.fillRect(x - 50, 0, 50, h);

            // 中央ライン
            ctx.strokeStyle = "#0033aa";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
            ctx.stroke();

            // アイコン配置（位置を保存）
            const iconX = x - 20;
            const iconY = h - 60;
            placeIcon(c, iconX, iconY);

            // ★ 攻撃力をアイコンの下に描画（iconX/Y に同期）
            ctx.fillStyle = "#0033aa";
            ctx.font = "14px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(c.atk, iconX + 20, iconY + 60);
        });
}

    // -----------------------------
    // 調整対象キャラ
    // -----------------------------
    function drawTargets() {
    const h = canvas.height;

    const targets = characters.filter(c => c.type === "target" && c.visible);

    targets.forEach((c) => {
        // プロット点の位置
        const px = atkToX(c.atk);
        const py = h / 2;

        // プロット点の描画
        ctx.fillStyle = "#e06666";
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fill();

        // アイコン位置（自動配置 or ドラッグ後の位置）
        const iconX = c.iconX;
        const iconY = c.iconY;

        // アイコンを描画（ドラッグ対応）
        placeIcon(c, iconX, iconY);

        // アイコン中心座標
        const sx = iconX + 20;
        const sy = iconY + 20;

        // ★ 中間点（鈍角を保証するために 30% プロット側へ寄せる）
        const midX = sx + (px - sx) * 0.3;
        const midY = sy;

        // 折れ線の描画
        ctx.strokeStyle = "#e06666";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(midX, midY);
        ctx.lineTo(px, py);
        ctx.stroke();
    });
}

    // -----------------------------
    // アイコン配置（ドラッグ対応）
    // -----------------------------
    function placeIcon(char, x, y) {
        const div = document.createElement("div");
        div.className = "character-icon";

        char.iconX = x;
        char.iconY = y;

        div.style.left = x + "px";
        div.style.top = y + "px";
        div.style.backgroundImage = `url(${char.iconPath})`;

        div.addEventListener("mouseenter", (e) => showTooltip(e, char));
        div.addEventListener("mouseleave", hideTooltip);

        let dragging = false;
        let offsetX = 0;
        let offsetY = 0;

        div.addEventListener("mousedown", (e) => {
            dragging = true;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
        });

        document.addEventListener("mousemove", (e) => {
            if (!dragging) return;
            char.iconX = e.pageX - offsetX;
            char.iconY = e.pageY - offsetY;
            div.style.left = char.iconX + "px";
            div.style.top = char.iconY + "px";
            drawAll();
        });

        document.addEventListener("mouseup", () => {
            dragging = false;
        });

        iconLayer.appendChild(div);
        return div;
    }

    // -----------------------------
    // Tooltip
    // -----------------------------
    function showTooltip(e, char) {
        let html = `<strong>${char.name}</strong><br>`;
        html += `攻撃力：${char.atk}<br>`;

        for (const key in char.detail) {
            html += `${key}：${char.detail[key]}<br>`;
        }

        tooltip.innerHTML = html;
        tooltip.style.display = "block";

        const rect = e.target.getBoundingClientRect();
        tooltip.style.left = rect.right + 10 + "px";
        tooltip.style.top = rect.top + "px";
    }

    function hideTooltip() {
        tooltip.style.display = "none";
    }

    document.addEventListener("click", hideTooltip);
});
