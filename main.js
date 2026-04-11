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
        固有武器: "固有4<strong>レベル27</strong>",
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
        スキル: "MM<strong>3</strong>M",
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
        スキル: "MM<strong>3</strong>M",
        装備: "8.10.10",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},

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
{
    name: "ツルギ",
    groupName: "ツルギ",
    atk: 14657,
    type: "indicator",
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

{
    name: "水着ヒヨリ",
    groupName: "水着ヒヨリ",
    atk: 14393,
    type: "target",
    iconPath: "hiyorimizugi.png",
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4レベル60",
        絆: "50.50.1",
        WB: "25",
        スキル: "MMMM",
        装備: "10.10.10",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},
{
    name: "水着ヒヨリ",
    groupName: "水着ヒヨリ",
    atk: 14102,
    type: "target",
    iconPath: "hiyorimizugi.png",
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4レベル60",
        絆: "50.50.1",
        WB: "0",
        スキル: "MMMM",
        装備: "10.10.10",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},
{
    name: "モモイ（ミドリシナジー）",
    groupName: "モモミド",
    atk: 10812,
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
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）",
    }
},
{
    name: "ミドリ",
    groupName: "モモミド",
    atk: 12154,
    type: "target",
    iconPath: "midori.png",
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "<strong>固有1レベル1</strong>",
        絆: "20.1.1",
        WB: "0",
        スキル: "MMMM",
        装備: "10.10.10.T2",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},
{
    name: "ミドリ",
    groupName: "モモミド",
    atk: 10862,
    type: "target",
    iconPath: "midori.png",
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "<strong>固有1レベル1</strong>",
        絆: "50.50.1",
        WB: "0",
        スキル: "MMMM",
        装備: "10.10.10.<strong>T0</strong>",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},
            
{
    name: "ドレスヒナ",
    groupName: "ドレスヒナ",
    atk: 15937,
    type: "indicator",
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
    atk: 15447,
    type: "indicator",
    iconPath: "hinadress.png",
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4レベル60",
        絆: "<strong>30</strong>.<strong>1</strong>.50",
        WB: "25",
        スキル: "MMMM",
        装備: "10.10.10",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
},
{
    name: "ドレスヒナ",
    groupName: "ドレスヒナ",
    atk: 15680,
    type: "indicator",
    iconPath: "hinadress.png",
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4レベル60",
        絆: "30.30.50",
        WB: "25",
        スキル: "MMMM",
        装備: "10.10.10",
        SP: "シロコ（固有3-50絆40.30.30WB25装備10.10.10）、サツキ（固有3-50絆40.30.30WB25装備10.10.10）"
    }
}     
        ],
        2: [
{
    name: "アツコ(ミチルNS)",
    groupName: "アツコ",
    atk: 7537,
    type: "indicator",
    iconPath: "atsuko.png",
    starCount: 2,
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有2レベル40",
        絆: "50.50.1",
        WB: "25",
        スキル: "MMMM",
        装備: "10.10.10",
        SP: "ドレスミチル（固有2-40WB0絆20.20.1WB0装備10.10.10）、サキ（固有3-50絆20.20.30WB0装備10.10.10）"
    }
},
{
    name: "アツコ(ミチルNS)",
    groupName: "アツコ",
    atk: 7648,
    type: "indicator",
    iconPath: "atsuko.png",
    starCount: 3,
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有3レベル50",
        絆: "50.50.1",
        WB: "25",
        スキル: "MMMM",
        装備: "10.10.10",
        SP: "ドレスミチル（固有2-40絆20.20.1WB0装備10.10.10）、サキ（固有3-50絆20.20.30WB0装備10.10.10）"
    }
},
{
    name: "アツコ(ミチルNS)",
    groupName: "アツコ",
    atk: 7758,
    type: "indicator",
    iconPath: "atsuko.png",
    starCount: 4,
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4レベル60",
        絆: "50.50.1",
        WB: "25",
        スキル: "MMMM",
        装備: "10.10.10",
        SP: "ドレスミチル（固有2-40絆20.20.1WB0装備10.10.10）、サキ（固有3-50絆20.20.30WB0装備10.10.10）"
    }
},
{
    name: "チェリノ(ミチルNS)",
    groupName: "チェリノ",
    atk: 7530,
    type: "target",
    iconPath: "cherino.png",
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "なし星3",
        絆: "20.20.1",
        WB: "0",
        スキル: "MMMM",
        装備: "10.10.10",
        SP: "ドレスミチル（固有2-40絆20.20.1WB0装備10.10.10）、サキ（固有3-50絆20.20.30WB0装備10.10.10）"
    }
},
{
    name: "チェリノ(ミチルNS)",
    groupName: "チェリノ",
    atk: 7526,
    type: "target",
    iconPath: "cherino.png",
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "なし星3",
        絆: "30.20.1",
        WB: "0",
        スキル: "MM3M",
        装備: "10.10.10",
        SP: "ドレスミチル（固有2-40絆20.20.1WB0装備10.10.10）、サキ（固有3-50絆20.20.30WB0装備10.10.10）"
    }
},
{
    name: "マリナ(ミチルNS)",
    groupName: "マリナ",
    atk: 7805,
    type: "target",
    iconPath: "marina.png",
    badgeText: "WB",
    starCount: 4,
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4レベル60",
        絆: "50.50.1",
        WB: "25",
        スキル: "MMMM",
        装備: "10.10.10",
        SP: "ドレスミチル（固有2-40絆20.20.1WB0装備10.10.10）、サキ（固有3-50絆20.20.30WB0装備10.10.10）"
    }
},
{
    name: "マリナ(ミチルNS)",
    groupName: "マリナ",
    atk: 7683,
    type: "target",
    iconPath: "marina.png",
    starCount: 4,
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4レベル60",
        絆: "50.50.1",
        WB: "0",
        スキル: "MMMM",
        装備: "10.10.10",
        SP: "ドレスミチル（固有2-40絆20.20.1WB0装備10.10.10）、サキ（固有3-50絆20.20.30WB0装備10.10.10）"
    }
},
{
    name: "マリナ(ミチルNS)",
    groupName: "マリナ",
    atk: 7694,
    type: "target",
    iconPath: "marina.png",
    badgeText: "WB",
    starCount: 4,
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4レベル60",
        絆: "40.40.1",
        WB: "25",
        スキル: "MMMM",
        装備: "10.10.10",
        SP: "ドレスミチル（固有2-40絆20.20.1WB0装備10.10.10）、サキ（固有3-50絆20.20.30WB0装備10.10.10）"
    }
},
{
    name: "マリナ(ミチルNS)",
    groupName: "マリナ",
    atk: 7572,
    type: "target",
    iconPath: "marina.png",
    starCount: 4,
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4レベル60",
        絆: "40.40.1",
        WB: "0",
        スキル: "MMMM",
        装備: "10.10.10",
        SP: "ドレスミチル（固有2-40絆20.20.1WB0装備10.10.10）、サキ（固有3-50絆20.20.30WB0装備10.10.10）"
    }
},
{
    name: "マリナ(ミチルNS)",
    groupName: "マリナ",
    atk: 7639,
    type: "target",
    iconPath: "marina.png",
    badgeText: "WB",
    starCount: 4,
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4レベル60",
        絆: "30.30.1",
        WB: "25",
        スキル: "MMMM",
        装備: "10.10.10",
        SP: "ドレスミチル（固有2-40絆20.20.1WB0装備10.10.10）、サキ（固有3-50絆20.20.30WB0装備10.10.10）"
    }
},
{
    name: "マリナ(ミチルNS)",
    groupName: "マリナ",
    atk: 7517,
    type: "target",
    iconPath: "marina.png",
    starCount: 4,
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有4レベル60",
        絆: "30.30.1",
        WB: "0",
        スキル: "MMMM",
        装備: "10.10.10",
        SP: "ドレスミチル（固有2-40絆20.20.1WB0装備10.10.10）、サキ（固有3-50絆20.20.30WB0装備10.10.10）"
    }
},
{
    name: "マリナ(ミチルNS)",
    groupName: "マリナ",
    atk: 7698,
    type: "target",
    iconPath: "marina.png",
    badgeText: "WB",
    starCount: 3,
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有3レベル50",
        絆: "50.50.1",
        WB: "25",
        スキル: "MMMM",
        装備: "10.10.10",
        SP: "ドレスミチル（固有2-40絆20.20.1WB0装備10.10.10）、サキ（固有3-50絆20.20.30WB0装備10.10.10）"
    }
},
{
    name: "マリナ(ミチルNS)",
    groupName: "マリナ",
    atk: 7576,
    type: "target",
    iconPath: "marina.png",
    starCount: 3,
    visible: true,
    iconX: null,
    iconY: null,
    detail: {
        固有武器: "固有3レベル50",
        絆: "50.50.1",
        WB: "0",
        スキル: "MMMM",
        装備: "10.10.10",
        SP: "ドレスミチル（固有2-40絆20.20.1WB0装備10.10.10）、サキ（固有3-50絆20.20.30WB0装備10.10.10）"
    }
}
            
            
        ],
        3: [
    {
        name: "アツコ(ミチルNS)",
        groupName: "アツコ",
        atk: 6565,
        type: "indicator",
        iconPath: "atsuko.png",
        starCount: 2,
        visible: true,
        iconX: null,
        iconY: null,
        detail: {
            固有武器: "固有2レベル40",
            絆: "50.50.1",
            WB: "25",
            スキル: "MMMM",
            装備: "10.10.10",
            SP: "ドレスミチル（固有2-40絆20.20.1WB0装備10.10.10）、ヒビキ（固有4-60絆20.20.1WB0装備10.10.10）"
        }
    },
    {
        name: "アツコ(ミチルNS)",
        groupName: "アツコ",
        atk: 6667,
        type: "indicator",
        iconPath: "atsuko.png",
        starCount: 3,
        visible: true,
        iconX: null,
        iconY: null,
        detail: {
            固有武器: "固有3レベル50",
            絆: "50.50.1",
            WB: "25",
            スキル: "MMMM",
            装備: "10.10.10",
            SP: "ドレスミチル（固有2-40絆20.20.1WB0装備10.10.10）、ヒビキ（固有4-60絆20.20.1WB0装備10.10.10）"
        }
    },
    {
        name: "アツコ(ミチルNS)",
        groupName: "アツコ",
        atk: 6767,
        type: "indicator",
        iconPath: "atsuko.png",
        starCount: 4,
        visible: true,
        iconX: null,
        iconY: null,
        detail: {
            固有武器: "固有4レベル60",
            絆: "50.50.1",
            WB: "25",
            スキル: "MMMM",
            装備: "10.10.10",
            SP: "ドレスミチル（固有2-40WB0絆20.20.1装備10.10.10）、ヒビキ（固有4-60WB0絆20.20.1WB0装備10.10.10）"
        }
    },

    {
        name: "チェリノ(ミチルNS)",
        groupName: "チェリノ",
        atk: 6506,
        type: "target",
        iconPath: "cherino.png",
        visible: true,
        iconX: null,
        iconY: null,
        detail: {
            固有武器: "なし星3",
            絆: "20.20.1",
            WB: "0",
            スキル: "MMMM",
            装備: "10.10.10",
            SP: "ドレスミチル（固有2-40WB0絆20.20.1装備10.10.10）、ヒビキ（固有4-60WB0絆20.20.1WB0装備10.10.10）"
        }
    },

    {
        name: "マリナ(ミチルNS)",
        groupName: "マリナ",
        atk: 6777,
        type: "target",
        iconPath: "marina.png",
        badgeText: "WB",
        starCount: 4,
        visible: true,
        iconX: null,
        iconY: null,
        detail: {
            固有武器: "固有4レベル60",
            絆: "50.50.1",
            WB: "25",
            スキル: "MMMM",
            装備: "10.10.10",
            SP: "ドレスミチル（固有2-40絆20.20.1WB0装備10.10.10）、ヒビキ（固有4-60絆20.20.1WB0装備10.10.10）"
        }
    },
    {
        name: "マリナ(ミチルNS)",
        groupName: "マリナ",
        atk: 6667,
        type: "target",
        iconPath: "marina.png",
        starCount: 4,
        visible: true,
        iconX: null,
        iconY: null,
        detail: {
            固有武器: "固有4レベル60",
            絆: "50.50.1",
            WB: "0",
            スキル: "MMMM",
            装備: "10.10.10",
            SP: "ドレスミチル（固有2-40絆20.20.1WB0装備10.10.10）、ヒビキ（固有4-60絆20.20.1WB0装備10.10.10）"
        }
    },
    {
        name: "マリナ(ミチルNS)",
        groupName: "マリナ",
        atk: 6677,
        type: "target",
        iconPath: "marina.png",
        badgeText: "WB",
        starCount: 4,
        visible: true,
        iconX: null,
        iconY: null,
        detail: {
            固有武器: "固有4レベル60",
            絆: "40.40.1",
            WB: "25",
            スキル: "MMMM",
            装備: "10.10.10",
            SP: "ドレスミチル（固有2-40絆20.20.1装備10.10.10）、ヒビキ（固有4-60WB0絆20.20.1装備10.10.10）"
        }
    },
    {
        name: "マリナ(ミチルNS)",
        groupName: "マリナ",
        atk: 6566,
        type: "target",
        iconPath: "marina.png",
        starCount: 4,
        visible: true,
        iconX: null,
        iconY: null,
        detail: {
            固有武器: "固有4レベル60",
            絆: "40.40.1",
            WB: "0",
            スキル: "MMMM",
            装備: "10.10.10",
            SP: "ドレスミチル（固有2-40絆WB020.20.1装備10.10.10）、ヒビキ（固有4-60WB0絆20.20.1装備10.10.10）"
        }
    },
    {
        name: "マリナ(ミチルNS)",
        groupName: "マリナ",
        atk: 6627,
        type: "target",
        iconPath: "marina.png",
        badgeText: "WB",
        starCount: 4,
        visible: true,
        iconX: null,
        iconY: null,
        detail: {
            固有武器: "固有4レベル60",
            絆: "30.30.1",
            WB: "25",
            スキル: "MMMM",
            装備: "10.10.10",
            SP: "ドレスミチル（固有2-40絆20.20.1WB0装備10.10.10）、ヒビキ（固有4-60絆20.20.1WB0装備10.10.10）"
        }
    },
    {
        name: "マリナ(ミチルNS)",
        groupName: "マリナ",
        atk: 6516,
        type: "target",
        iconPath: "marina.png",
        starCount: 4,
        visible: true,
        iconX: null,
        iconY: null,
        detail: {
            固有武器: "固有4レベル60",
            絆: "30.30.1",
            WB: "0",
            スキル: "MMMM",
            装備: "10.10.10",
            SP: "ドレスミチル（固有2-40絆20.20.1WB0装備10.10.10）、ヒビキ（固有4-60絆20.20.1WB0装備10.10.10）"
        }
    },
    {
        name: "マリナ(ミチルNS)",
        groupName: "マリナ",
        atk: 6680,
        type: "target",
        iconPath: "marina.png",
        badgeText: "WB",
        starCount: 3,
        visible: true,
        iconX: null,
        iconY: null,
        detail: {
            固有武器: "固有3レベル50",
            絆: "50.50.1",
            WB: "25",
            スキル: "MMMM",
            装備: "10.10.10",
            SP: "ドレスミチル（固有2-40絆20.20.1WB0装備10.10.10）、ヒビキ（固有4-60絆20.20.1WB0装備10.10.10）"
        }
    },
    {
        name: "マリナ(ミチルNS)",
        groupName: "マリナ",
        atk: 6570,
        type: "target",
        iconPath: "marina.png",
        starCount: 3,
        visible: true,
        iconX: null,
        iconY: null,
        detail: {
            固有武器: "固有3レベル50",
            絆: "50.50.1",
            WB: "0",
            スキル: "MMMM",
            装備: "10.10.10",
            SP: "ドレスミチル（固有2-40絆20.20.1WB0装備10.10.10）、ヒビキ（固有4-60絆20.20.1WB0装備10.10.10）"
        }
    }            
        ]
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
        initializeIcons(); // ← 再利用方式なので初期化が必要
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
                groups[group].forEach(c => {
                    c.visible = checkbox.checked;

        // ★ アイコンの表示/非表示を反映
        if (c._iconDiv) {
            c._iconDiv.style.display = c.visible ? "block" : "none";
        }
    });

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
                updateIconPosition(c, iconX, iconY);

                drawAtkLabel(c.atk, iconX + 20, iconY + 60, "#0033aa");
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

            updateIconPosition(c, iconX, iconY);

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

            drawAtkLabel(c.atk, iconX + 20, iconY + 60, "#e06666");
        });
    }

    // -----------------------------
    // ATK ラベル描画
    // -----------------------------
    function drawAtkLabel(text, tx, ty, color) {
        ctx.font = "14px sans-serif";
        ctx.textAlign = "center";

        const paddingX = 6;
        const textWidth = ctx.measureText(text).width;
        const boxWidth = textWidth + paddingX * 2;
        const boxHeight = 20;

        ctx.fillStyle = "white";
        ctx.strokeStyle = color;
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

        ctx.fillStyle = color;
        ctx.fillText(text, tx, ty + 5);
    }

    // -----------------------------
    // アイコン初期生成（再利用方式）
    // -----------------------------
    function initializeIcons() {
    // 初期化時のみクリア
    iconLayer.innerHTML = "";

    characters.forEach(c => {
        const div = document.createElement("div");
        div.className = "character-icon";
        div.style.backgroundImage = `url(${c.iconPath})`;

        // バッジ
        if (c.badgeText) {
            const badge = document.createElement("div");
            badge.className = "icon-badge";
            badge.textContent = c.badgeText;
            div.appendChild(badge);
        }

        // ★ 星バッジ（右上）
if (c.starCount && c.starCount > 0) {
    const starBox = document.createElement("div");
    starBox.className = "icon-stars";

    for (let i = 0; i < c.starCount; i++) {
        const s = document.createElement("div");
        s.className = "star";
        s.textContent = "★";
        starBox.appendChild(s);
    }

    div.appendChild(starBox);
}

        // ハイライト
        if (c.highlight) {
            div.classList.add("icon-highlight");
        }

        // Tooltip（ドラッグ中は表示しない）
        div.addEventListener("mouseenter", (e) => {
            if (!c._dragging) showTooltip(e, c);
        });
        div.addEventListener("mouseleave", hideTooltip);

        // ドラッグ制御
        let dragging = false;
        let offsetX = 0;
        let offsetY = 0;

        div.addEventListener("mousedown", (e) => {
            dragging = true;
            c._dragging = true;   // ★ ドラッグ開始フラグ
            offsetX = e.offsetX;
            offsetY = e.offsetY;
            hideTooltip();        // ★ ドラッグ開始時に tooltip を消す
        });

        window.addEventListener("mousemove", (e) => {
            if (!dragging) return;

            const rect = iconLayer.getBoundingClientRect();
            const nx = e.clientX - rect.left - offsetX;
            const ny = e.clientY - rect.top - offsetY;

            c.iconX = nx;
            c.iconY = ny;

            div.style.left = nx + "px";
            div.style.top = ny + "px";

            drawAll();            // ★ 線を追従
        });

        window.addEventListener("mouseup", () => {
            dragging = false;
            c._dragging = false;  // ★ これがないと tooltip が復活しない
        });

        iconLayer.appendChild(div);
        c._iconDiv = div;
    });
}

    // -----------------------------
    // アイコン位置更新（再利用方式）
    // -----------------------------
    function updateIconPosition(char, x, y) {
        const div = char._iconDiv;
        if (!div) return;

        div.style.left = x + "px";
        div.style.top = y + "px";
    }

    // 初回アイコン生成
    initializeIcons();
    drawAll();

});
