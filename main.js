window.addEventListener("load", () => {
    const canvas = document.getElementById("main-canvas");
    const ctx = canvas.getContext("2d");
    const iconLayer = document.getElementById("icon-layer");
    const tooltip = document.getElementById("tooltip");

    // キャラデータ（固定）
    const characters = [
        {
            name: "シロコ＊テラー（指標1）",
            atk: 11284,
            type: "indicator",
            iconPath: "sirokoterror.png",
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
            name: "シロコ＊テラー（指標2）",
            atk: 11102,
            type: "indicator",
            iconPath: "sirokoterror.png",
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
            name: "ジュンコ（調整対象）",
            atk: 11135,
            type: "target",
            iconPath: "junko.png",
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
    // Canvas 初期化
    // -----------------------------
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

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
    // 数直線
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

    // 攻撃力 → X座標（線形）
    function atkToX(atk) {
        const minAtk = 10000;
        const maxAtk = 13000;
        const w = canvas.width - 100;
        return 50 + ((atk - minAtk) / (maxAtk - minAtk)) * w;
    }

    // -----------------------------
    // 指標キャラの縦帯
    // -----------------------------
    function drawIndicators() {
        const h = canvas.height;

        characters.filter(c => c.type === "indicator").forEach(c => {
            const x = atkToX(c.atk);

            // 半透明帯（攻撃力位置が右端になるように x - 50 〜 x）
            ctx.fillStyle = "rgba(100,150,255,0.25)";
            ctx.fillRect(x - 50, 0, 50, h);

            // 右端の濃い縦線（攻撃力位置）
            ctx.strokeStyle = "#0033aa";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
            ctx.stroke();

            // アイコン（帯の下）
            placeIcon(c, x - 20, h - 60);
        });
    }

    // -----------------------------
    // 調整対象キャラ（プロット点＋矢印）
    // -----------------------------
    function drawTargets() {
        const h = canvas.height;

        characters.filter(c => c.type === "target").forEach(c => {
            const x = atkToX(c.atk);
            const y = h / 2 + (Math.random() * 20 - 10); // ±10px ずらし

            // プロット点
            ctx.fillStyle = "#e06666";
            ctx.beginPath();
            ctx.arc(x, y, 6, 0, Math.PI * 2);
            ctx.fill();

            // アイコン配置（左上固定）
            const iconX = 80;
            const iconY = 80;
            placeIcon(c, iconX, iconY);

            // アイコン中心座標
            const startX = iconX + 20;
            const startY = iconY + 20;

            // 折れ線の中間点
            const midX = startX + 40;
            const midY = startY;

            // 折れ線矢印
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
    // アイコン配置（tooltip 対応）
    // -----------------------------
    function placeIcon(char, x, y) {
        const div = document.createElement("div");
        div.className = "character-icon";
        div.style.left = x + "px";
        div.style.top = y + "px";
        div.style.backgroundImage = `url(${char.iconPath})`;

        // Tooltip 表示
        div.addEventListener("mouseenter", (e) => showTooltip(e, char));
        div.addEventListener("mouseleave", hideTooltip);

        // スマホ用（タップで表示）
        div.addEventListener("click", (e) => {
            e.stopPropagation();
            showTooltip(e, char);
        });

        iconLayer.appendChild(div);
        return div;
    }

    // -----------------------------
    // Tooltip 表示
    // -----------------------------
    function showTooltip(e, char) {
        let html = `<strong>${char.name}</strong><br>`;
        html += `攻撃力：${char.atk}<br>`;

        for (const key in char.detail) {
            html += `${key}：${char.detail[key]}<br>`;
        }

        tooltip.innerHTML = html;
        tooltip.style.display = "block";

        // 位置調整（アイコンの右側）
        const rect = e.target.getBoundingClientRect();
        tooltip.style.left = rect.right + 10 + "px";
        tooltip.style.top = rect.top + "px";
    }

    function hideTooltip() {
        tooltip.style.display = "none";
    }

    // スマホで画面タップしたら閉じる
    document.addEventListener("click", hideTooltip);
});
