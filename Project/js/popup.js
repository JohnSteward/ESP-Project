function test()
{
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
  let tab = tabs[0];
  let url = new URL (tab.url)
  console.log(url.hostname)
  if(url.hostname == "www.youtube.com")
  {
    document.getElementById("Youtube").style = "display: inline-block"
  }
  else if(url.hostname == "www.instagram.com")
  {
    document.getElementById("Instagram").style = "display: inline-block"
  }
  else if(url.hostname == "www.facebook.com")
  {
    document.getElementById("Facebook").style = "display: inline-block"
  }
  else
  {
    document.getElementById("Default").style = "display: inline-block"
  }
});
}
test()