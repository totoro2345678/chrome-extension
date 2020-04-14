
document.getElementById("wiki_content").innerHTML = "";
var flag = 0;
chrome.storage.local.get('updateTextTo', function (items) {

    object = JSON.parse(items.updateTextTo);
    if (object.content_urls) {
        document.getElementById("notfound").style.display = "none";
        document.getElementById("find").style.display = "block";
        document.getElementById("wiki_content").innerHTML = object.extract_html;

        document.getElementById("link").innerHTML = `<a href="` + object.content_urls.desktop.page + `" >` + object.content_urls.desktop.page + `</a>`;

        var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
            + "auto" + "&tl=" + "zh-TW" + "&dt=t&q=" + encodeURI(object.extract);
        var translate = "";

        fetch(url).then(function (resp) {
            // console.log(resp);
            return resp.json()
        }).then(function (data) {
            // console.log(data[0].length)
            for (var i = 0; i < data[0].length; i++) {
                translate += data[0][i][0];
            }
            document.getElementById("wiki_content_2").innerHTML = translate;


        });
    }
    else {
        flag = 1;


    }

    chrome.storage.local.remove('updateTextTo');
});
chrome.storage.local.get('translate_text', function (items) {
    if (flag == 0)
        document.getElementById("zh-tw_link").innerHTML = `<a href="https://zh.wikipedia.org/wiki/` + items.translate_text + '"' + `>` + "https://zh.wikipedia.org/wiki/" + items.translate_text + `</a>`;
    chrome.storage.local.remove('translate_text');
});

chrome.storage.local.get('selectionText', function (items) {
    if (flag == 1) {

        document.getElementById("notfound").innerHTML = ""
        document.getElementById("notfound").style.display = "block";
        document.getElementById("find").style.display = "none";
        document.getElementById("notfound").innerHTML = '<div class="d-flex justify-content-center"><h3 class="mt-5">wikipedia  not found</h3></div>';
        document.getElementById("notfound").innerHTML += '<br>' + `<a  href="https://www.google.com/search?q=` + items.selectionText + '"' + "target='_blank' id='googlesearch' class='btn btn-outline-primary btn-lg btn-block'" + `>` + "Search By Google" + `</a>`;;

        function click() {
            window.close();
        }
        document.getElementById('googlesearch').addEventListener("click", click);
    }
    chrome.storage.local.remove('selectionText');
});
