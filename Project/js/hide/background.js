// chrome.browserAction.onClicked.addListener(function () {
//   chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
// });

function main() {
  chrome.storage.local.set({current_timer: 0});
  chrome.storage.local.set({extension_timer: -1});
  chrome.storage.local.set({extension_hideAll: false});
  setInterval(function () {
	  chrome.storage.local.set({current_timer: 0}); 
	  chrome.storage.local.set({extension_hideAll: false});
	  }, 86400000);
  setInterval(function() {
    chrome.storage.local.get('extension_timer', function(e_timer) {
      console.log("Extension_timer:", e_timer.extension_timer);
	  if (e_timer.extension_timer < 0) return;
      chrome.storage.local.get('current_timer', function(c_timer) {
        console.log("Current_timer:", c_timer.current_timer);
        if (c_timer.current_timer >= e_timer.extension_timer*60) {
          chrome.storage.local.set({extension_hideAll: true});
        } else {
          chrome.storage.local.set({current_timer: c_timer.current_timer+1});
        }
      });
    })
  }, 1000);
}

main();
