
chrome.storage.local.get('updateTextTo', function (items) {

    document.getElementById("wiki_content").innerHTML = "";
    object = JSON.parse(items.updateTextTo);
    if (object.content_urls)
        document.getElementById("wiki_content").innerHTML = object.extract_html + `<br>` + `<a href="` + object.content_urls.desktop.page + `" >` + object.content_urls.desktop.page + `</a>`;
    else
        document.getElementById("wiki_content").innerHTML = '<div class="d-flex justify-content-center"><h3 class="mt-5">wikipedia  not found</h3></div>';
    // if (items.updateTextTo != 0) {
    // object = JSON.parse(items.updateTextTo);
    // if (object.extract_html)
    // document.getElementById("wiki_content").innerHTML = object.extract_html + `<br>` + `<a href="` + object.content_urls.desktop.page + `" >` + object.content_urls.desktop.page + `</a>`;
    // else
    // document.getElementById("wiki_content").innerHTML = '<div class="d-flex justify-content-center"><p>wikipedia  not found</p></div>';
    // } else
    // document.getElementById("wiki_content").innerHTML = "<p>wikipedia not found</p>";
    chrome.storage.local.remove('updateTextTo');
});

