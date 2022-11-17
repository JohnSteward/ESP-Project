function hideIG(feature){
    switch (feature){
        case "extension_stories":
            s_hide();
            break;
        case "extension_discover":
            d_hide();
            break;
        case "extension_ignotifications":
            c_hide();
            break;
        case "extension_sugg":
            su_hide();
            break;
        case "extension_feed":
            f_hide();
            break;
        default:
            s_hide();
            d_hide();
            c_hide();
            su_hide();
            f_hide();
    }
}

function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.appendChild(style);
}

function s_hide(){
    chrome.storage.local.get('extension_stories', function(result) {
        if (result.extension_stories === true) {
            //alert(result.extension_stories);
            //addStyle('.zGtbP' + '{display:none}');
            let instagramStories = document.querySelector('[class="EcJQs"]');
            //alert(instagramStories.outerHTML);
            console.log(instagramStories);
            instagramStories.style.display = "none";
        }
    });
}

function d_hide(){
    chrome.storage.local.get('extension_discover', function(result) {
        if (result.extension_discover === true) {
            //addStyle('_lz6s' + '{display:none}');
            let instagramDiscover = document.querySelector('[href="/explore/"]').parentElement;
            instagramDiscover.style.display = "none";
        }
    });
}
function c_hide(){
    chrome.storage.local.get('extension_ignotifications', function(result) {
        if (result.extension_ignotifications === true) {
            //addStyle('_lz6s' + '{display:none}');
            let instagramNotifs = document.querySelector('[href="/accounts/activity/"]').parentElement;
            instagramNotifs.style.display = "none";
        }
    });
}
function su_hide(){
    chrome.storage.local.get('extension_sugg', function(result) {
        if (result.extension_sugg === true) {
            //addStyle('_lz6s' + '{display:none}');
            let instagramSugg = document.querySelector('[class="_8UZ6e"]');
            instagramSugg.style.display = "none";
        }
    });
}
function f_hide(){
    chrome.storage.local.get('extension_feed', function(result) {
        if (result.extension_feed === true) {
            //addStyle('_lz6s' + '{display:none}');
            let instagramFeed = document.querySelector('[role="main"]');
            instagramFeed.style.display = "none";
        }
    });
}

//_lz6s
function main() {
    console.log("Hiding comments normally");
    setTimeout(hideIG, 3000);
}

main();
