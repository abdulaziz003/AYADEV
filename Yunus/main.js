// change the language of the Html
flag = false;
function changeText() {
  if(!flag){
    title1.innerHTML = "اختبار الالوان";
    btnAr.innerHTML = "English";
    document.getElementById("mainHtml").style.direction = "rtl";
    document.getElementById("myTabContent").style.textAlign = "right";
    flag = true;
  }
  else{
    title1.innerHTML = "True Color Test";
    btnAr.innerHTML = "عربي";
    document.getElementById("mainHtml").style.direction = "ltr";
    document.getElementById("myTabContent").style.textAlign = "left";
    flag = false;
  }
}
