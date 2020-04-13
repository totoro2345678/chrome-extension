

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    console.log(info.selectionText);
    var object_data;
    fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + info.selectionText + "?SameSite=None").then(function (resp) {
        console.log(resp);

        return resp.json()
    }).then(function (data) {
        object_data = data;
        console.log(data);
        var createData = {
            "url": chrome.extension.getURL("wiki.html"),
            "type": "popup",
            "top": screen.availHeight / 4,
            "left": screen.availWidth / 5,
            "width": screen.availWidth / 2,
            "height": screen.availHeight / 2
        }
        chrome.windows.create(createData, function () {
            chrome.storage.local.set({
                updateTextTo: JSON.stringify(data)
            }, function () {
                chrome.tabs.executeScript({
                    file: "wiki.js"
                });
            });
        });


        // chrome.storage.local.set({
        //     updateTextTo: JSON.stringify(data)
        // }, function () {
        //     chrome.tabs.executeScript({
        //         file: "wiki.js"
        //     });
        // });
    });

    // var wikiURL = "https://en.wikipedia.org/wiki/" + info.selectionText;

    // chrome.tabs.executeScript({
    //     code: 'document.body.style.backgroundColor="orange"'
    // });
    // console.log("id: %s, selection: %s, url: %s", info.menuItemId, info.selectionText, tab.url);
});



function createMenus() {
    var parent = chrome.contextMenus.create({
        "id": "sampleContextMenu",
        "title": "wiki",
        "contexts": ["selection"]
    });
    console.log(parent);

}

createMenus();
