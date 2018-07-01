// change the language of the Html
flag = false;
function changeText() {
  if(!flag){
    title1.innerHTML = "اختبار الالوان";
    btnAr.innerHTML = "English";
    document.getElementById("mainHtml").style.direction = "rtl";
    flag = true;
  }
  else{
    title1.innerHTML = "True Color Test";
    btnAr.innerHTML = "عربي";
    document.getElementById("mainHtml").style.direction = "ltr";
    flag = false;
  }
}
