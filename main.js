window.addEventListener("load", () => {
    const canvas = document.getElementById("main-canvas");
    const ctx = canvas.getContext("2d");

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function resizeCanvas() {
        const wrapper = document.getElementById("canvas-wrapper");
        canvas.width = wrapper.clientWidth;
        canvas.height = wrapper.clientHeight;

        drawBaseUI();
    }

    function drawBaseUI() {
        const w = canvas.width;
        const h = canvas.height;

        ctx.clearRect(0, 0, w, h);

        ctx.strokeStyle = "#333";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(50, h / 2);
        ctx.lineTo(w - 50, h / 2);
        ctx.stroke();
    }
});
