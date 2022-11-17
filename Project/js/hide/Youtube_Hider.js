function hideYT(feature) {

    switch (feature) {
        
        case "extension_homePage":
            h_hide();
            break;
        case "extension_comments":
            c_hide();
            break;
        case "extension_sidebar":
            s_hide();
            break;
        case "extension_shorts":
            sh_hide();
            break;
        case "extension_explore":
            e_hide();
            break;
        case "extension_autoplay":
            a_hide();
            break;
        case "extension_notifications":
             n_hide();
             break;
		case "extension_hideAll":
			all_hide();
			break;
        default:
            h_hide();
            c_hide();
            s_hide();

            sh_hide();
            e_hide();
            a_hide();
            n_hide();
			all_hide();
    }
}

function h_hide() {
    chrome.storage.local.get('extension_homePage', function(result) {
        if (result.extension_homePage === true) {
            console.log("Hiding home screen");
            let youtubeHomeRecommended = document.querySelector('[class="style-scope ytd-two-column-browse-results-renderer"]');
            youtubeHomeRecommended.style.display = "none";
        }
    });
}

function c_hide() {
    chrome.storage.local.get('extension_comments', function(result) {
        if (result.extension_comments === true) {
            console.log("Hiding comments");
            let youtubeComments= document.getElementById("comments");
            youtubeComments.style.display = "none";
        }
    });
}

function s_hide() {
    chrome.storage.local.get('extension_sidebar', function(result) {
        if (result.extension_sidebar === true) {
            console.log("Hiding sidebar");
            let youtubeSidebar = document.getElementById("related");
            youtubeSidebar.style.display = "none";
        }
    });
}

function sh_hide() {
    chrome.storage.local.get('extension_shorts', function(result) {
        if (result.extension_shorts === true) {
            console.log("Hiding shorts");
            let youtubeSidebar = document.querySelector('[title="Shorts"]');
            youtubeSidebar.style.display = "none";
        }
    });
}

function e_hide() {
    chrome.storage.local.get('extension_explore', function(result) {
        if (result.extension_explore === true) {
            console.log("Hiding explore");
            let youtubeExplore = document.querySelector('[title="Explore"]'); //
            youtubeExplore.style.display = "none";
        }
    });
}

function a_hide() {
    chrome.storage.local.get('extension_autoplay', function(result) {
        if (result.extension_autoplay === true) {
            console.log("Hiding autoplay");
            let youtubeAutoplay = document.querySelector('[class="ytp-autonav-toggle-button"]');
            youtubeAutoplay.ariaChecked = "false";
            let autoplayButton = document.querySelector('[class="ytp-button"]');
            autoplayButton.style.display = "none";
        }
    });
}

function n_hide() {
    chrome.storage.local.get('extension_notifications', function(result) {
        if (result.extension_notifications === true) {
            console.log("Hiding notifications");
            let youtubeNotifications = document.querySelector('[class="style-scope ytd-notification-topbar-button-renderer"]');
            youtubeNotifications.style.display = "none";
        }
    });
}

function all_hide() {
	chrome.storage.local.get('extension_hideAll', function(result) {
        if (result.extension_hideAll === true) {
            console.log("Hiding Everything lmao");
            let youtube = document.querySelector('body');
            youtube.innerHTML = "<h1>The Timer has been exceeded</h1>";
        }
    });
}


function main() {
    console.log("Hiding comments normally");
    setTimeout(hideYT, 3000);
	

    // "primary" is homescreen
    // "related" is sidebar videos
    // "comments" is comments
}

main();