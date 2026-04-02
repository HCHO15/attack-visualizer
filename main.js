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
        {
            name: "ツルギ",
            atk: 18177,
            type: "indicator",
            iconPath: "tsurugi.png",
            visible: true,
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
            atk: 18007,
            type: "indicator",
            iconPath: "tsurugi.png",
            visible: true,
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
        {
            name: "ジュンコ",
            atk: 11135,
            type: "target",
            iconPath: "junko.png",
            visible: true,
            detail: {
                固有武器: "固有4レベル20",
                絆: "30.1.1",
                WB: "0",
                NS: "10",
                PS: "10",
                装備: "10.10.10",
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

    function drawAll() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        iconLayer.innerHTML = "";

        drawNumberLine();
        drawIndicators();
        drawTargets();
    }

    // -----------------------------
    // 数直線（仮：線形のまま）
    // -----------------------------
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

    // 攻撃力 → X座標（非線形スケール：密集部を広げ、疎な部を圧縮）
function atkToX(atk) {
    const w = canvas.width - 100; // 左右50pxずつ余白

    // 1. 攻撃力を昇順に並べる
    const sorted = [...characters]
        .filter(c => c.visible) // 非表示キャラはスケールに影響させない
        .sort((a, b) => a.atk - b.atk);

    // 2. atk の順位（0〜1）を求める
    const index = sorted.findIndex(c => c.atk === atk);
    const rank = index / (sorted.length - 1);

    // 3. 隣接差分を計算（密集部を広げるための係数）
    let localWeight = 1;
    if (index > 0 && index < sorted.length - 1) {
        const prev = sorted[index - 1].atk;
        const next = sorted[index + 1].atk;
        const diffPrev = atk - prev;
        const diffNext = next - atk;

        // 差が小さいほど weight を大きくする（広げる）
        const localDiff = Math.min(diffPrev, diffNext);

        // 200 は「密集をどれだけ広げるか」の強さ
        localWeight = 1 + (200 / (localDiff + 1));
    }

    // 4. 非線形変換（rank をベースに局所補正）
    const nonlinear = Math.pow(rank, 0.7) * localWeight;

    // 5. 正規化（0〜1に収める）
    const maxNonlinear = Math.pow(1, 0.7) * (1 + 200 / 1);
    const normalized = nonlinear / maxNonlinear;

    // 6. キャンバス座標に変換
    return 50 + normalized * w;
}

    // -----------------------------
    // 指標キャラの縦帯
    // -----------------------------
    function drawIndicators() {
        const h = canvas.height;

        characters
            .filter(c => c.type === "indicator" && c.visible)
            .forEach(c => {
                const x = atkToX(c.atk);

                ctx.fillStyle = "rgba(100,150,255,0.25)";
                ctx.fillRect(x - 50, 0, 50, h);

                ctx.strokeStyle = "#0033aa";
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, h);
                ctx.stroke();

                placeIcon(c, x - 20, h - 60);
            });
    }

    // -----------------------------
    // 調整対象キャラ
    // -----------------------------
    function drawTargets() {
        const h = canvas.height;

        characters
            .filter(c => c.type === "target" && c.visible)
            .forEach(c => {
                const x = atkToX(c.atk);
                const y = h / 2 + (Math.random() * 20 - 10);

                ctx.fillStyle = "#e06666";
                ctx.beginPath();
                ctx.arc(x, y, 6, 0, Math.PI * 2);
                ctx.fill();

                const iconX = 80;
                const iconY = 80;
                placeIcon(c, iconX, iconY);

                const startX = iconX + 20;
                const startY = iconY + 20;
                const midX = startX + 40;
                const midY = startY;

                ctx.strokeStyle = "#e06666";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(startX, startY);
                ctx.lineTo(midX, midY);
                ctx.lineTo(x, y);
                ctx.stroke();
            });
    }

    // -----------------------------
    // アイコン配置（tooltip）
    // -----------------------------
    function placeIcon(char, x, y) {
        const div = document.createElement("div");
        div.className = "character-icon";
        div.style.left = x + "px";
        div.style.top = y + "px";
        div.style.backgroundImage = `url(${char.iconPath})`;

        div.addEventListener("mouseenter", (e) => showTooltip(e, char));
        div.addEventListener("mouseleave", hideTooltip);

        div.addEventListener("click", (e) => {
            e.stopPropagation();
            showTooltip(e, char);
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
