function addBoxEventListener(features) {

    // Find appropriate buttons and call storeFeature on each, passing on their id and checked status as arguments.
    features.forEach(feature => document.querySelector("input[name="+feature+"]").addEventListener("change", function() {
        storeFeature(this);
        if (this.checked === true) hideIG(feature);
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
    console.log("Instagram updating");
    window.onload = function () {
        let features = ["extension_stories", "extension_discover", "extension_ignotifications", "extension_sugg", "extension_feed"];
        addBoxEventListener(features);
        features.forEach(loadBoxes);
        //checkCSSButtons();
    }
}

startProcess();

//!! LOOK INTO SAVING THE CHECKED AND UNCHECKED BOXES INTO SETTING.JS VARIABLES AS WELL AS CHROME STORAGE