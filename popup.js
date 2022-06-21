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
    var percent = d.msg;
    var percpercent = Math.round(percent*100);
    const elem = document.getElementById('text');
    //const elem1 = document.getElementById('whole');
    var greenColor = Math.round(255*percent);
    var percentDiff = 1-percent;
    var redColor = Math.round(255*percentDiff);
    elem.style.color = "rgb("+redColor+","+greenColor+", 0)";
    //elem.style.fontFamily = "Comfortaa, cursive";
    elem.style.fontSize = "100px";
    elem.style.fontWeight = "bold";
    elem.style.textAlign = "center";
    //elem.style.textShadow = "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
    //elem1.style.background = "linear-gradient(to bottom, rgb("+redColor+","+greenColor+", 0) 0%, #00BFFF 100%)";
    document.getElementById('text').innerHTML = 100-percpercent+"%";
    
  });
});