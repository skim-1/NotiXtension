chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, async function(selection) {
  // alert(selection[0]);
  var chicken = selection[0];
  // alert(chicken);

  await fetch ('http://localhost:5000/spam',  {
    method: 'POST',
    body: JSON.stringify({
      'text': chicken
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then(async function(res){
    let d = await res.json();
    document.write(d.msg);
  });

});