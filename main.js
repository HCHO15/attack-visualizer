// 指標キャラの縦帯（右端が攻撃力位置になるように修正）
function drawIndicators() {
    const h = canvas.height;

    characters.filter(c => c.type === "indicator").forEach(c => {
        const x = atkToX(c.atk);

        // 半透明帯（攻撃力位置が右端になるように x - 50 〜 x）
        ctx.fillStyle = "rgba(100,150,255,0.25)";
        ctx.fillRect(x - 50, 0, 50, h);

        // 右端の濃い縦線（攻撃力位置）
        ctx.strokeStyle = "#0033aa"; // 濃い青
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();

        // アイコン（帯の下）
        placeIcon(c, x - 20, h - 60);
    });
}
