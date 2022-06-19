chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
  alert(selection[0]);
  var chicken = selection[0]
});