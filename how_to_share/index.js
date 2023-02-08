
function currentLanguage() {
    return (navigator.browserLanguage || navigator.language).toLowerCase();
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded");
    onLoadSuccess();
})

function onLoadSuccess() {
    console.log("onLoadSuccess --- start");

    const maps = new Map();
    if (currentLanguage().startsWith("zh")) {
        console.log("language zh");
        maps.set("step1", "1. 打开 CoinMaster App");
        maps.set("step2", "2. 打开邀请页面");
        maps.set("step3", "3. 点击邀请按钮");
        maps.set("step4", "4. 点击 Spin Link 去分享");
    } else {
        console.log("language en");
        // maps.set("step1", "1. Open the CM Game APP");
        // maps.set("step2", "2. Open the invitation page");
        // maps.set("step3", "3. Click the invite button");
        // maps.set("step4", "4. Click the “Spin Link” icon to share");
        return
    }

    maps.forEach((key, value) => {
        console.log("key = " + key + ", " + "value = " + value);
        const id = document.getElementById(value).innerHTML = key
    })

    console.log("onLoadSuccess --- end");
}