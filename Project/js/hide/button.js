function checkCSSButtons() {
    // Add click event handlers to change the CSS stylesheet for each button

    let style_button_1 = document.getElementById("style-button-1");
    let style_button_2 = document.getElementById("style-button-2");

    if (style_button_1) {
        document.getElementById("style-button-1").addEventListener("click", function () {
            return changeCSS("temp-style.css");
        });
    }

    if (style_button_2) {
        document.getElementById("style-button-2").addEventListener("click", function () {
            return changeCSS("default.css");
        });
    }
}

function addBoxEventListener(features) {

    // Find appropriate buttons and call storeFeature on each, passing on their id and checked status as arguments.
    features.forEach(feature => document.querySelector("input[name="+feature+"]").addEventListener("change", function() {
        storeFeature(this);
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

function addTimerEventListener() {
    let timer = document.getElementById("extension_timer");
    timer.addEventListener('input', function () {
        storeTimer(this);
    })
}

function storeTimer(timer) {
    chrome.storage.local.set({extension_timer: timer.value});
}

function displayTime() {
	let timeLeftDisplay = document.getElementById("time_left");
	chrome.storage.local.get('extension_timer', function(e_timer) {
		if (e_timer.extension_timer < 0) return;
		chrome.storage.local.get('current_timer', function(c_timer) {
			let timeLeft = e_timer.extension_timer * 60 - c_timer.current_timer;
			if (timeLeft < 0) timeLeft = 0;
			let hour = ('00'+parseInt(timeLeft / 3600)).slice(-2);
			timeLeft %= 3600;
			let mins = ('00'+parseInt(timeLeft / 60)).slice(-2);
			let secs = ('00'+(timeLeft % 60)).slice(-2);
			timeLeftDisplay.innerHTML=hour+":"+mins+":"+secs
		});
	});
}

function startProcess() {
    window.onload = function () {
        let features = ["extension_homePage", "extension_comments", "extension_sidebar", "extension_shorts", "extension_explore", "extension_autoplay", "extension_notifications", "extension_stories", "extension_discover", "extension_ignotifications", "extension_sugg", "extension_feed", "extension_contacts", "extension_people", "extension_watchblock", "extension_marketplace", "extension_fbstories", "extension_fbfeed"];
        addBoxEventListener(features);
        features.forEach(loadBoxes);
        addTimerEventListener();
        checkCSSButtons();
		displayTime();
    }
}

startProcess();