var app = angular.module('myApp', []);
app.controller('ToolsCtrl', function($scope) {
    $scope.tools = [{
        "name": "Google Analytics",
        "intro": "不只能讓您估算銷售量和轉換率，還能提供最新的分析資料，方便您瞭解訪客如何使用您的網站、他們如何前來，以及如何吸引他們持續回訪",
        "link": "http://www.google.com/analytics",
        "url": "image/GA.jpg",
        "tag":"#web #analytics"
    }, {
        "name": "mixpanel",
        "intro": "世界最先進的行動或網頁分析平台",
        "link": "http://www.mixpanel.com",
        "url": "image/mixpanel.jpg",
        "tag":"#web #APP #analytics"
    }, {
        "name": "UXCam",
        "intro": "捕獲和視覺化用戶行為數據，來改善您的應用程式或網站",
        "link": "http://www.uxcam.com",
        "url": "image/UXCam.png",
        "tag":"#web #APP #analytics #UX #visualization"
    }, {
        "name": "OPTIMIZELY",
        "intro": "可以簡單進行A/B & multivariate testing的強大平台",
        "link": "https://www.optimizely.com",
        "url": "image/optimizely.png",
        "tag":"#analytics #APP #A/B testing"
    }, {
        "name": "CHARTIO",
        "intro": "強大商業智能平台，可輕易視覺化和美化數據資料和整合其他分析工具",
        "link": "http://www.chartio.com",
        "url": "image/CHARTIO.png",
        "tag":"#APP #analytics #visualization"
    }, {
        "name": "crazyegg",
        "intro": "利用熱點的地圖視覺化網站造訪者的點擊，分析使用者的使用狀況",
        "link": "http://www.crazyegg.com",
        "url": "image/crazyegg.png",
        "tag":"#web #analytics #UX #visualization"
    }, {
        "name": "SumoMe",
        "intro": "內建包括電子報名單建立工具、網站熱點分析，輕鬆讓你的網站流量增長吧！",
        "link": "https://sumome.com/",
        "url": "image/sumome.png",
        "tag":"#web #analytics #UX #visualization"
    }, {
        "name": "CrunchBase",
        "intro": "迅速洞察新創公司的背景及狀況",
        "link": "https://www.crunchbase.com",
        "url": "image/crunchbase.png",
        "tag":"#market research #startup"
    }, {
        "name": "statista",
        "intro": "世界最大的統計資料網站之一，擁有超過18000個資料來源",
        "link": "http://www.statista.com",
        "url": "image/statista.jpg",
        "tag":"#market research #statistics"
    }, {
        "name": "Google Trends",
        "intro": "獲取全球搜索的洞察趨勢",
        "link": "https://www.google.com/trends",
        "url": "image/googletrends.png",
        "tag":"#trends"
    }, {
        "name": "Google Public Data",
        "intro": "公眾資料搜尋平台",
        "link": "http://www.google.com/publicdata/",
        "url": "image/googlepublicdata.png",
        "tag":"#data #statistics"
    }, {
        "name": "strikingly",
        "intro": "只要數分鐘就可以輕鬆打造你的個人漂亮網站",
        "link": "https://www.strikingly.com",
        "url": "image/strikingly.png",
        "tag":"#web #prototype #templates #MVP"
    }, {
        "name": "Similarweb",
        "intro": "一個輕鬆分析與比較各競爭者網站流量的好工具，具有高度參考價值。",
        "link": "http://www.similarweb.com",
        "url": "image/similarweb.png",
        "tag":"#web #traffic #analytics #market research"
    }, {
        "name": "Alexa",
        "intro": "老牌的分析平台，可以調查別人網站流量的好工具，但數據誤差較大。",
        "link": "http://www.alexa.com/",
        "url": "image/alexa.jpg",
        "tag":"#web #traffic #analytics #market research"
    }, {
        "name": "compete",
        "intro": "立刻比較網站流量及搜尋分析",
        "link": "https://www.compete.com/",
        "url": "image/compete.png",
        "tag":"#web #traffic #analytics #market research"
    }, {
        "name": "QuickMVP",
        "intro": "讓你可以快速驗證市場的軟體MVP工具",
        "link": "http://quickmvp.com",
        "url": "image/quickmvp.png",
        "tag":"#MVP #prototype"
    }, {
        "name": "proto.io",
        "intro": "快速打造行動app初步模型的平台",
        "link": "https://proto.io/",
        "url": "image/proto.png",
        "tag":"#MVP #prototype"
    }, {
        "name": "UXPin",
        "intro": "讓你快速建立你的使用者介面，包含框架、樣品或原型",
        "link": "https://www.uxpin.com/",
        "url": "image/uxpin.png",
        "tag":"#prototype #MVP #UX #UI"
    }, {
        "name": "POP",
        "intro": "直接將你紙上畫的想法快速建立成app",
        "link": "https://popapp.in/",
        "url": "image/pop.png",
        "tag":"#MVP #prototype"
    }, {
        "name": "Typeform",
        "intro": "免費又華麗的線上問卷表單系統，分析功能也很不錯",
        "link": "http://www.typeform.com/",
        "url": "image/typeform.png",
        "tag":"#survey #form #analytics"
    }, {
        "name": "Google Form",
        "intro": "建立精美的表單",
        "link": "https://www.google.com/forms/about/",
        "url": "image/googleform.png",
        "tag":"#form #survey"
    }, {
        "name": "qualtrics",
        "intro": "世界領先的問卷調查平台",
        "link": "http://www.qualtrics.com",
        "url": "image/qualtrics.png",
        "tag":"#survey"
    }, {
        "name": "UICloud",
        "intro": "世界最大的使用者介面設計元素庫",
        "link": "http://ui-cloud.com/",
        "url": "image/uicloud.png",
        "tag":"#UI #design"
    }, {
        "name": "invision",
        "intro": "讓設計師共享自己的原型設計，與他人合作或互動，並獲得回饋",
        "link": "http://www.invisionapp.com",
        "url": "image/invision.png",
        "tag":"#design #prototype"
    }, {
        "name": "APP UI",
        "intro": "收藏非常多中國的行動介面設計元素",
        "link": "http://appui.mobi",
        "url": "image/appui.png",
        "tag":"#APP #UI"
    }, {
        "name": "pttrns",
        "intro": "各式各樣的介面設計樣式都收藏在這裡",
        "link": "http://pttrns.com/",
        "url": "image/pttrns.jpeg",
        "tag":"#UI #APP #design"
    }, {
        "name": "UI4App",
        "intro": "可說是中國版的pttrns",
        "link": "http://ui4app.com/",
        "url": "image/ui4app.png",
        "tag":"#UI #APP #design"
    }, {
        "name": "AWWWARDS",
        "intro": "這裡有來自世界各種頂尖的網頁設計可參考",
        "link": "http://www.awwwards.com",
        "url": "image/awwwards.jpeg",
        "tag":"#design #web #UI"
    }, {
        "name": "FltDsgn",
        "intro": "扁平網站設計風格的集中地",
        "link": "http://fltdsgn.com",
        "url": "image/fltdsgn.png",
        "tag":"#design #web #UI"
    }, {
        "name": "S5-Style",
        "intro": "想要知道日北風格的網站設計怎麼做？來這就對了",
        "link": "http://bm.s5-style.com/",
        "url": "image/s5.jpg",
        "tag":"#design #web #UI"
    }, {
        "name": "UXTesting",
        "intro": "想知道使用者都在你的App裡面做什麼嗎？快用UXTesting測試一下",
        "link": "https://www.uxtesting.io/",
        "url": "image/UXtesting.jpg",
        "tag":"#APP #UX #Analytics"
    }, {
        "name": "Product Hunt",
        "intro": "全美最大創新產品資訊平台，快速掌握世界每日最新的產品",
        "link": "https://www.producthunt.com/",
        "url": "image/producthunt.png",
        "tag":"#market research #startup"
    }, {
        "name": "Noun Project",
        "intro": "找Icon嗎？這裡收集了全世界的視覺語言",
        "link": "https://thenounproject.com/",
        "url": "image/nounproject.jpg",
        "tag":"#visualization #icon"
    }, {
        "name": "flaticon",
        "intro": "最大的向量圖資料庫",
        "link": "http://www.flaticon.com/",
        "url": "image/Flaticon.png",
        "tag":"#visualization #icon"
    }, {
        "name": "Chartico",
        "intro": "可輕易製作簡單美麗的長條圖",
        "link": "http://www.chartico.com/",
        "url": "image/chartioco.jpg",
        "tag":"#visualization #infographic"
    }, {
        "name": "資料視覺化",
        "intro": "超猛的台灣視覺化資訊網站，搜集了超多實用資訊提供給華人族群使用",
        "link": "http://blog.infographics.tw/",
        "url": "image/datavisualization.jpg",
        "tag":"#visualization #UI #UX #infographic"
    }, {
        "name": "infogr.am",
        "intro": "將你的數據資料用華麗視覺化的方式創造和推廣出去吧",
        "link": "https://infogr.am/",
        "url": "image/inforam.png",
        "tag":"#infographic #visualization"
    }, {
        "name": "BOX-a-VOX",
        "intro": "這裡有許多投影片模板以及資料視覺化的好用工具",
        "link": "http://www.boxavox.com/",
        "url": "image/boxavox.png",
        "tag":"@visualization #slide"
    }, {
        "name": "Adobe Color CC",
        "intro": "不知道色彩怎麼配才好看？讓你輕鬆配出好顏色",
        "link": "https://color.adobe.com/zh/explore/newest/",
        "url": "image/adobecolorcc.png",
        "tag":"#design #visualization"
    }, {
        "name": "Line.do",
        "intro": "在這可以找到各種時間軸呈現的故事！你也可製作自己想要的時間軸故事分享給他人",
        "link": "https://line.do/",
        "url": "image/linedo.png",
        "tag":"#timeline #visualization"
    }, {
        "name": "keynotopia",
        "intro": "讓你在20鐘內，利用Keynote快速做出APP原型",
        "link": "http://keynotopia.com/",
        "url": "image/keynotopia.jpg",
        "tag":"#slide #design #prototype #UI #APP"
    }, {
        "name": "freepik",
        "intro": "免費的圖像、向量、icon資源平台",
        "link": "http://www.freepik.com/",
        "url": "image/freepik.jpeg",
        "tag":"#icon #visualization #vector #design"
    }, {
        "name": "Vector4Free",
        "intro": "免費及共享全世界的向量圖案庫",
        "link": "http://vector4free.com/",
        "url": "image/vector4free.png",
        "tag":"#vector #icon #design"
    }, {
        "name": "DataBasic",
        "intro": "適合資料科學初學者的工具平台，除了教學還提供了三個不同類型的工具讓你使用",
        "link": "https://www.databasic.io/en/",
        "url": "image/databasic.jpg",
        "tag":"#analytics #visualization"
    }, {
        "name": "geojson.io",
        "intro": "利用『地圖面量圖(Choropleth)』來視覺化你的數據吧",
        "link": "http://geojson.io/",
        "url": "image/geojson.jpg",
        "tag":"#visualization #infographic #choropleth"
    }, {
        "name": "visme",
        "intro": "資訊視覺化好像沒什麼？那如果是『會動的』視覺化資訊呢？",
        "link": "http://www.visme.co/",
        "url": "image/visme.jpeg",
        "tag":"#visualization #infographic #animation"
    }, {
        "name": "visage",
        "intro": "適合初學者的資料視覺化工具平台",
        "link": "http://visage.co/",
        "url": "image/visage.png",
        "tag":"#visualization #infographic"
    }, {
        "name": "",
        "intro": "",
        "link": "",
        "url": "",
        "tag":""
    }, {
        "name": "",
        "intro": "",
        "link": "",
        "url": "",
        "tag":""
    }, {
        "name": "",
        "intro": "",
        "link": "",
        "url": "",
        "tag":""
    }];
});
