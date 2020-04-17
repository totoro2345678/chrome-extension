

chrome.contextMenus.onClicked.addListener(function (info, tab) {


    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
        + "auto" + "&tl=" + "zh-TW" + "&dt=t&q=" + encodeURI(info.selectionText);
    var translate;
    fetch(url).then(function (resp) {

        return resp.json()
    }).then(function (data) {

        translate = data[0][0][0];
    });
    var query = info.selectionText.toLowerCase();
    var query_wiki_w = ""
    fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + query + "&limit=5&namespace=0&format=json&origin=*")
        .then(function (response) { return response.json(); })
        .then(function (response) {
            var createData = {
                "url": "wiki.html",
                "type": "popup",
                "top": screen.availHeight / 4,
                "left": screen.availWidth / 5,
                "width": screen.availWidth / 2,
                "height": screen.availHeight / 2
            };

            // console.log(response);
            if (!response.error) {
                if (response[1][0]) {
                    // console.log(response[1][0]);
                    query_wiki_w = response[1][0]; //console.log(response);
                    fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + query_wiki_w).then(function (resp) {


                        return resp.json()
                    }).then(function (data) {



                        chrome.windows.create(createData, function () {
                            chrome.storage.local.set({
                                updateTextTo: JSON.stringify(data),
                                translate_text: translate,
                                selectionText: info.selectionText,
                                error_long_word: "0"

                            }, function () {
                                chrome.tabs.executeScript({
                                    file: "wiki.js"
                                }, () => chrome.runtime.lastError);
                            });
                        });

                    });
                } else {
                    data = { "none": "none" };

                    chrome.windows.create(createData, function () {
                        chrome.storage.local.set({
                            updateTextTo: JSON.stringify(data),
                            translate_text: translate,
                            selectionText: info.selectionText,
                            error_long_word: "0"

                        }, function () {
                            chrome.tabs.executeScript({
                                file: "wiki.js"
                            }, () => chrome.runtime.lastError);
                        });
                    });
                }


            } else {
                data = { "none": "none" };

                chrome.windows.create(createData, function () {
                    chrome.storage.local.set({
                        updateTextTo: JSON.stringify(data),
                        translate_text: translate,
                        selectionText: info.selectionText,
                        error_long_word: "1"

                    }, function () {
                        chrome.tabs.executeScript({
                            file: "wiki.js"
                        }, () => chrome.runtime.lastError);
                    });
                });
            }


        }).catch(function (error) {
        });




});



function createMenus() {
    var parent = chrome.contextMenus.create({
        "title": "wiki",
        "contexts": ["selection"]
    });

}

createMenus();
