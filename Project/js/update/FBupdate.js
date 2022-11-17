function addBoxEventListener(features) {

    // Find appropriate buttons and call storeFeature on each, passing on their id and checked status as arguments.
    features.forEach(feature => document.querySelector("input[name="+feature+"]").addEventListener("change", function() {
        storeFeature(this);
        if (this.checked === true) hideFacebook(feature);
		chrome.tabs.reload(); // reload the currently opened tab (just hope it is YouTube)
    }));
}


function changeCSS(stylesheet) { // Change the css sheet to the passed on stylesheet
    document.getElementById("css-sheet").setAttribute("href", stylesheet);
}


function storeFeature(feature) {
    chrome.storage.local.set({[feature.id]: feature.checked}, function() {
        //alert(id + ' is set to ' + checked);
      });
}


function loadBoxes(feature) {
    chrome.storage.local.get([feature], function(result) {
        if (result[feature] === true) {
            document.getElementById(feature).checked = true;
        }
      });
}

function startProcess() {
    console.log("Youtube updating");
    window.onload = function () {
        let features = ["extension_contacts", "extension_people", "extension_watchblock", "extension_marketplace", "extension_fbstories", "extension_fbfeed"];
        addBoxEventListener(features);
        features.forEach(loadBoxes);
        //checkCSSButtons();
    }
}

startProcess();