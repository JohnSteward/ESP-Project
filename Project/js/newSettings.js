document.getElementById("YoutubeSelector").addEventListener("click", loadYoutube);
document.getElementById("InstagramSelector").addEventListener("click", loadInstagram);
document.getElementById("FacebookSelector").addEventListener("click", loadFacebook);

function loadYoutube() {
    console.log("Youtube is pressed");
    window.open("../html/settingsYT.html", "_self");
}

function loadInstagram() {
    console.log("Instagram is pressed");
    window.open("../html/settingsIT.html", "_self");
}

function loadFacebook() {
    console.log("Facebook is pressed");
    window.open("../html/settingsFB.html", "_self");
}

/* CODE IS UNNECESSARILY REPEATED IN OTHER DOCUMENTS: THE SPECIFIC SOCIAL MEDIA COULD BE ABSRTACTED AWAY WITH APPROACH ALONG THE LINES OF WHAT FOLLOWS
//Social media currently being edited
const current = {
    Youtube : 0,
    Instagram : 1,
    Facebook : 2
}

//Simulating enumeration behaviour
Object.freeze(current);
let currentlyEditing = current.Youtube;

let features = [["extension_homePage", "extension_comments", "extension_sidebar", "extension_shorts", "extension_explore", "extension_autoplay", "extension_notifications"], ["extension_stories", "extension_discover", "extension_ignotifications", "extension_sugg", "extension_feed"], ["extension_contacts", "extension_people", "extension_watchblock", "extension_marketplace", "extension_fbstories", "extension_fbfeed"]];

//...

function startProcess() {
    console.log(currentlyEditing + " updating");
    window.onload = function () {
        let currentFeatures = features[currentlyEditing];
        addBoxEventListener(currentFeatures);
        currentFeatures.forEach(loadBoxes);
        //checkCSSButtons();
    }
}

*/