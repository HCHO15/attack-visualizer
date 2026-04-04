window.addEventListener("load", () => {
    const canvas = document.getElementById("main-canvas");
    const ctx = canvas.getContext("2d");
    const iconLayer = document.getElementById("icon-layer");
    const tooltip = document.getElementById("tooltip");

    // キャラデータ
    const presetCharacters = {
    1: [
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
                スキル: "MMMM",
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
                スキル: "MMMM",
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
                スキル: "MMMM",
                装備: "10.10.10.T2",
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
                固有武器: "固有4レベル60",
                絆: "30.10.1",
                WB: "25",
                スキル: "MMMM",
                装備: "10.10.10.T2",
                SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
            }
        },
        
// -----------------------------
// ツルギ（EX発動）1体（indicator）
// -----------------------------
{
    name: "ツルギ（EX発動）",
    groupName: "ツルギ",
    atk: 18177,
    type: "indicator",
    iconPath: "tsurugi.png",
    badgeText: "EX", 
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4レベル60",
        絆: "30.20.1",
        WB: "25",
        スキル: "MMMM",
        装備: "10.10.10.T2",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},

        // ジュンコ（target）
        {
            name: "ジュンコ",
            atk: 11197,
            type: "target",
            iconPath: "junko.png",
            visible: true,
            iconX: null,
            iconY: null,
            detail: {
                固有武器: "固有4<strong>レベル20</strong>",
                絆: "30.<strong>10</strong>.1",
                WB: "0",
                スキル: "MMMM",
                装備: "10.10.10.T2",
                SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
            }
        },
        // -----------------------------
// ジュンコ（target）4体
// -----------------------------
{
    name: "ジュンコ",
    groupName: "ジュンコ",
    atk: 11284,
    type: "target",
    iconPath: "junko.png",
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4<strong>レベル29</strong>",
        絆: "30.<strong>1</strong>.1",
        WB: "0",
        スキル: "MMMM",
        装備: "10.10.10.T2",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},
{
    name: "ジュンコ",
    groupName: "ジュンコ",
    atk: 11279,
    type: "target",
    iconPath: "junko.png",
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4<strong>レベル29</strong>",
        絆: "20.10.1",
        WB: "0",
        スキル: "MMMM",
        装備: "10.10.10.T2",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},
{
    name: "ジュンコ",
    groupName: "ジュンコ",
    atk: 11284,
    type: "target",
    iconPath: "junko.png",
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4<strong>レベル30</strong>",
        絆: "<strong>25</strong>.1.1",
        WB: "0",
        スキル: "MMMM",
        装備: "10.10.10.T2",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},
{
    name: "ジュンコ",
    groupName: "ジュンコ",
    atk: 12469,
    type: "target",
    iconPath: "junko.png",
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4<strong>レベル60</strong>",
        絆: "<strong>50</strong>.<strong>50</strong>.1",
        WB: "<strong>25</strong>",
        スキル: "MMMM",
        装備: "10.10.10.T2",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},

// -----------------------------
// イオリ（target）5体
// -----------------------------
{
    name: "イオリ",
    groupName: "イオリ",
    atk: 11416,
    type: "target",
    iconPath: "iori.png",
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4レベル60",
        絆: "30.20.1",
        WB: "0",
        スキル: "MMMM",
        装備: "10.10.10.T2",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},
{
    name: "イオリ",
    groupName: "イオリ",
    atk: 11276,
    type: "target",
    iconPath: "iori.png",
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4<strong>レベル48</strong>",
        絆: "30.20.1",
        WB: "0",
        スキル: "MMMM",
        装備: "10.10.10.T2",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},
{
    name: "イオリ",
    groupName: "イオリ",
    atk: 11282,
    type: "target",
    iconPath: "iori.png",
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4<strong>レベル50</strong>",
        絆: "<strong>25</strong>.<strong>20</strong>.1",
        WB: "0",
        スキル: "MMMM",
        装備: "10.10.10.T2",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},
{
    name: "イオリ",
    groupName: "イオリ",
    atk: 11229,
    type: "target",
    iconPath: "iori.png",
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4<strong>レベル60</strong>",
        絆: "30.<strong>1</strong>.1",
        WB: "0",
        スキル: "MMMM",
        装備: "10.10.10.T2",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},
{
    name: "イオリ",
    groupName: "イオリ",
    atk: 11279,
    type: "target",
    iconPath: "iori.png",
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4<strong>レベル60</strong>",
        絆: "<strong>40</strong>.<strong>1</strong>.1",
        WB: "0",
        スキル: "MMMM",
        装備: "10.10.10.T2",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},

        // ★ ムツキ（正月）4人（target）
        {
            name: "ムツキ（正月）",
            atk: 15038,
            type: "target",
            iconPath: "mutsuki_newyear.png",
            highlight: true,
            visible: true,
            iconX: null,
            iconY: null,
            detail: {
                固有武器: "固有4レベル40",
                絆: "30.30.1",
                WB: "0",
                スキル: "MMMM",
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
                固有武器: "固有4<strong>レベル14</strong>",
                絆: "30.30.1",
                WB: "0",
                スキル: "MMMM",
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
                スキル: "M<strong>3</strong>MM",
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
                スキル: "M<strong>3</strong>MM",
                装備: "8.10.10",
                SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
            }
        },

        // ★ ノノミ（target）
        {
            name: "ノノミ(NS発動時)",
            groupName: "ノノミ",
            atk: 13971,
            type: "target",
            iconPath: "nonomi.png",
            badgeText: "NS",
            highlight: true,
            visible: true,
            iconX: null,
            iconY: null,
            detail: {
                固有武器: "固有4レベル60",
                絆: "30.20.1",
                WB: "0",
                スキル: "MMMM",
                装備: "10.10.10.T2",
                SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
            }
        },
        // -----------------------------
// ノノミ（NS発動）6体（target）
// -----------------------------
{
    name: "ノノミ（NS発動）",
    groupName: "ノノミ",
    atk: 13178,
    type: "target",
    iconPath: "nonomi.png",
    badgeText: "NS", 
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4<strong>レベル20</strong>",
        絆: "30.20.1",
        WB: "0",
        スキル: "MMMM",
        装備: "10.10.10.T2",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},
{
    name: "ノノミ（NS発動）",
    groupName: "ノノミ",
    atk: 14306,
    type: "target",
    iconPath: "nonomi.png",
    badgeText: "NS", 
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4レベル60",
        絆: "<strong>50</strong>.<strong>50</strong>.1",
        WB: "0",
        スキル: "MMMM",
        装備: "10.10.10.T2",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},
{
    name: "ノノミ（NS発動）",
    groupName: "ノノミ",
    atk: 14264,
    type: "target",
    iconPath: "nonomi.png",
    badgeText: "NS", 
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4レベル60",
        絆: "30.30.1",
        WB: "<strong>25</strong>",
        スキル: "MMMM",
        装備: "10.10.10.T2",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},
{
    name: "ノノミ（NS発動）",
    groupName: "ノノミ",
    atk: 11574,
    type: "target",
    iconPath: "nonomi.png",
    badgeText: "NS", 
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4<strong>レベル1</strong>",
        絆: "30.20.1",
        WB: "0",
        スキル: "M<strong>1</strong>MM",
        装備: "10.10.10.T2",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},
{
    name: "ノノミ（NS発動）",
    groupName: "ノノミ",
    atk: 11269,
    type: "target",
    iconPath: "nonomi.png",
    badgeText: "NS", 
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4<strong>レベル1</strong>",
        絆: "30.20.1",
        WB: "0",
        スキル: "M<strong>1</strong>MM",
        装備: "8.10.10.T2",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},
{
    name: "ノノミ（NS発動）",
    groupName: "ノノミ",
    atk: 11242,
    type: "target",
    iconPath: "nonomi.png",
    badgeText: "NS", 
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4<strong>レベル1</strong>",
        絆: "20.1.1",
        WB: "0",
        スキル: "M<strong>1</strong>MM",
        装備: "9.10.10",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},
        // -----------------------------
// ツルギ（target）
// -----------------------------
{
    name: "ツルギ",
    groupName: "ツルギ",
    atk: 14687,
    type: "target",
    iconPath: "tsurugi.png",
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4レベル60",
        絆: "50.50.1",
        WB: "25",
        スキル: "MMMM",
        装備: "10.10.10.T2",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},

// -----------------------------
// 水着ヒヨリ（target）
// -----------------------------
{
    name: "水着ヒヨリ",
    groupName: "水着ヒヨリ",
    atk: 14687,
    type: "target",
    iconPath: "hiyorimizugi.png",
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4レベル60",
        絆: "30.30.1",
        WB: "25",
        スキル: "MMMM",
        装備: "10.10.10",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},

{
    name: "モモイ（ミドリシナジー）",
    groupName: "モモイ",
    atk: 10847,
    type: "target",
    iconPath: "momoi.png",
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4レベル60",
        絆: "50.50.1",
        WB: "25",
        スキル: "MMMM",
        装備: "10.10.10.T2",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},

// -----------------------------
// ドレスヒナ（target）3体
// -----------------------------
{
    name: "ドレスヒナ",
    groupName: "ドレスヒナ",
    atk: 15970,
    type: "target",
    iconPath: "hinadress.png",
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4レベル60",
        絆: "50.50.50",
        WB: "25",
        スキル: "MMMM",
        装備: "10.10.10",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},
{
    name: "ドレスヒナ",
    groupName: "ドレスヒナ",
    atk: 15480,
    type: "target",
    iconPath: "hinadress.png",
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4レベル60",
        絆: "50.30.1",
        WB: "25",
        スキル: "MMMM",
        装備: "10.10.10",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},
{
    name: "ドレスヒナ",
    groupName: "ドレスヒナ",
    atk: 15713,
    type: "target",
    iconPath: "hinadress.png",
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4レベル60",
        絆: "50.30.30",
        WB: "25",
        スキル: "MMMM",
        装備: "10.10.10",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
}
        ],
    2: [],
    3: []
};


    // -----------------------------
    // キャラ名でグループ化
    // -----------------------------
    function groupCharactersByName() {
    const groups = {};
    characters.forEach(c => {
        const key = c.groupName || c.name; // ★ groupName があればそちらを使う
        if (!groups[key]) groups[key] = [];
        groups[key].push(c);
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

    // 1. 可視キャラを攻撃力順に並べる
    const sorted = [...characters]
        .filter(c => c.visible)
        .sort((a, b) => a.atk - b.atk);

    // 2. 非線形用の gap 計算（密集部を広げる）
    const gaps = [];
    for (let i = 0; i < sorted.length - 1; i++) {
        const diff = sorted[i + 1].atk - sorted[i].atk;
        gaps.push(1 + (200 / (diff + 1))); // diff が小さいほど gap が大きい
    }

    // 3. 累積和（非線形の基礎）
    const cum = [0];
    for (let i = 0; i < gaps.length; i++) {
        cum.push(cum[i] + gaps[i]);
    }

    // 4. 非線形スケールを 0〜1 に正規化
    const minC = Math.min(...cum);
    const maxC = Math.max(...cum);
    const idx = sorted.findIndex(c => c.atk === atk);
    const nonlinear = (cum[idx] - minC) / (maxC - minC);

    // 5. 線形スケール（直感）
    const minAtk = sorted[0].atk;
    const maxAtk = sorted[sorted.length - 1].atk;
    const linear = (atk - minAtk) / (maxAtk - minAtk);

    // 6. ハイブリッド（線形 × 非線形）
    const w = 0.4; // 0.3〜0.5 が最も自然
    const hybrid = linear * (1 - w) + nonlinear * w;

    // 7. 左右20%の余白にマッピング
    return leftMargin + hybrid * usableWidth;
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

            // ★ 新仕様：縦帯は atk-50 〜 atk の範囲
            const leftX = atkToX(c.atk - 50);
            const rightX = atkToX(c.atk);

            // 縦帯
            ctx.fillStyle = "rgba(100,150,255,0.25)";
            ctx.fillRect(leftX, 0, rightX - leftX, h);

            // 濃い縦線（攻撃力位置）
            ctx.strokeStyle = "#0033aa";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(rightX, 0);
            ctx.lineTo(rightX, h);
            ctx.stroke();

            // アイコン
            const iconX = rightX - 20;
            const iconY = h - 90;
            placeIcon(c, iconX, iconY);

            // ★ 攻撃力数字（枠付き）
            const text = String(c.atk);
            ctx.font = "14px sans-serif";
            ctx.textAlign = "center";

            const tx = iconX + 20;
            const ty = iconY + 60;

            // 背景の丸角矩形
            const paddingX = 6;
            const paddingY = 4;
            const textWidth = ctx.measureText(text).width;
            const boxWidth = textWidth + paddingX * 2;
            const boxHeight = 20;

            ctx.fillStyle = "white";
            ctx.strokeStyle = "#0033aa";
            ctx.lineWidth = 1;

            // 丸角矩形
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

            // 数字
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

        // ★ 攻撃力数字（枠付き）
const text = String(c.atk);
ctx.font = "14px sans-serif";
ctx.textAlign = "center";

const tx = iconX + 20;
const ty = iconY + 60;

// 背景の丸角矩形
const paddingX = 6;
const paddingY = 4;
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

// 数字
ctx.fillStyle = "#e06666";
ctx.fillText(text, tx, ty + 5);
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
        // ★ 特定キャラだけ黄色枠
        if (char.highlight) {
            div.classList.add("icon-highlight");
        }

        // ★ 右下バッジ（例：NS）
        if (char.badgeText) {
            const badge = document.createElement("div");
            badge.className = "icon-badge";
            badge.textContent = char.badgeText;
            div.appendChild(badge);
        }

        div.addEventListener("mouseenter", (e) => showTooltip(e, char));
        div.addEventListener("mouseleave", hideTooltip);

        let dragging = false;
let dragStarted = false;
let startX = 0;
let startY = 0;
let offsetX = 0;
let offsetY = 0;

div.addEventListener("mousedown", (e) => {
    dragging = true;
    dragStarted = false;
    startX = e.pageX;
    startY = e.pageY;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
});

document.addEventListener("mousemove", (e) => {
    if (!dragging) return;

    // ★ しきい値（3px）を超えたらドラッグ開始
    if (!dragStarted) {
        const dx = Math.abs(e.pageX - startX);
        const dy = Math.abs(e.pageY - startY);
        if (dx < 3 && dy < 3) return; // まだドラッグ扱いにしない
        dragStarted = true;
    }

    char.iconX = e.pageX - offsetX;
    char.iconY = e.pageY - offsetY;
    div.style.left = char.iconX + "px";
    div.style.top = char.iconY + "px";
    drawAll();
});

document.addEventListener("mouseup", () => {
    dragging = false;
    dragStarted = false;
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
    const iconCenterX = rect.left + rect.width / 2;

    // ★ キャンバス右30%以内なら左側に表示
    const canvasRightThreshold = canvas.width * 0.7;

    if (iconCenterX > canvasRightThreshold) {
        // 左側に表示
        tooltip.style.left = (rect.left - tooltip.offsetWidth - 10) + "px";
        tooltip.style.top = rect.top + "px";
    } else {
        // 右側に表示（従来）
        tooltip.style.left = rect.right + 10 + "px";
        tooltip.style.top = rect.top + "px";
    }
}

    function hideTooltip() {
        tooltip.style.display = "none";
    }

    document.addEventListener("click", hideTooltip);
});
