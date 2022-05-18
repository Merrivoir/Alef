/* скрытие верхнего меню при прокрутке */

let prevScrollPos = window.scrollY;
    
window.onscroll = function (event) {
  let currentScrollPos = window.scrollY;
  /*console.log('начальная позиция: ' + prevScrollPos);
  console.log('текущая позиция ' + currentScrollPos);*/
      
  if (currentScrollPos > 60 && currentScrollPos > prevScrollPos) {
    document.querySelector('.top-bar').style.top = "-60px";
  } else {
    document.querySelector('.top-bar').style.top = "0";
  }
    
  prevScrollPos = currentScrollPos;
}
