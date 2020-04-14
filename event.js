

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    // console.log(info.selectionText);
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
        + "auto" + "&tl=" + "zh-TW" + "&dt=t&q=" + encodeURI(info.selectionText);
    var translate;
    fetch(url).then(function (resp) {
        // console.log(resp);
        return resp.json()
    }).then(function (data) {

        translate = data[0][0][0];
    });

    var object_data;
    fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + info.selectionText + "?SameSite=None").then(function (resp) {
        // console.log(resp);

        return resp.json()
    }).then(function (data) {
        object_data = data;

        // console.log(data);
        var createData = {
            "url": "wiki.html",
            "type": "popup",
            "top": screen.availHeight / 4,
            "left": screen.availWidth / 5,
            "width": screen.availWidth / 2,
            "height": screen.availHeight / 2
        }
        chrome.windows.create(createData, function () {
            chrome.storage.local.set({
                updateTextTo: JSON.stringify(data),
                translate_text: translate,
                selectionText: info.selectionText

            }, function () {
                chrome.tabs.executeScript({
                    file: "wiki.js"
                }, () => chrome.runtime.lastError);
            });
        });

    });
});



function createMenus() {
    var parent = chrome.contextMenus.create({
        "id": "sampleContextMenu",
        "title": "wiki",
        "contexts": ["selection"]
    });

}

createMenus();
