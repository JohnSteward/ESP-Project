function hideFacebook(feature) {

    switch (feature) {
        case "extension_contacts":
            co_hide();
            break;
        case "extension_people":
            p_hide();
            break;
        case "extension_watchblock":
            wb_hide();
            break;
        case "extension_marketplace":
            mp_hide();
            break;
        case "extension_fbstories":
            fs_hide();
            break;
        case "extension_fbfeed":
            ff_hide();
            break;
        default:
            co_hide();
            p_hide();
            wb_hide();

            mp_hide();
            fs_hide();
            ff_hide();
    }
}

function co_hide() {
    chrome.storage.local.get('extension_contacts', function (result) {
        if (result.extension_contacts === true) {
            console.log("Hiding contacts");
            let facebookContacts = document.querySelector('[role="complementary"]'); // I don't know exactly if this is the one, may require testing
            facebookContacts.style.display = "none";
        }
    });
}

function p_hide() {
    chrome.storage.local.get('extension_people', function (result) {
        if (result.extension_people === true) {
            console.log("Hiding Recommended People");
            let facebookPeople = document.querySelector('[role="article"]'); // hopefully works, test please lmao
            facebookPeople.style.display = "none";
        }
    });
}

function wb_hide() {
    chrome.storage.local.get('extension_watchblock', function (result) {
        if (result.extension_watchblock === true) {
            console.log("Blocking watch page");
            let facebookWatchBlock = document.querySelector('[href="https://www.facebook.com/watch/"]').parentElement.parentElement;
            facebookWatchBlock.style.display = "none";
        }
    });
}

function mp_hide() {
    chrome.storage.local.get('extension_marketplace', function (result) {
        if (result.extension_marketplace === true) {
            console.log("Blocking Marketplace page");
            let facebookMarketPlace = document.querySelector('[href="https://www.facebook.com/marketplace/?ref=bookmark"]').parentElement.parentElement;
            facebookMarketPlace.style.display = "none";
        }
    });
}

function fs_hide() {
    chrome.storage.local.get('extension_fbstories', function (result) {
        if (result.extension_fbstories === true) {
            console.log("Blocking Facebook Stories");
            let facebookStories = document.querySelector('[data-pagelet="Stories"]');
            facebookStories.style.display = "none";
        }
    });
}

function ff_hide() {
    chrome.storage.local.get('extension_fbfeed', function (result) {
        if (result.extension_fbfeed === true) {
            console.log("Blocking Facebook Feed");
            let facebookFeed = document.querySelector('[role="feed"]');
            facebookFeed.style.display = "none";
        }
    });
}
function main() {
    console.log("Online on Facebook Biatch");
    setTimeout(hideFacebook, 3000);
}

main();