window.addEventListener('DOMContentLoaded', (event) => {
  
/* скрытие верхнего меню при прокрутке */
let prevScrollPos = window.scrollY;
    
window.onscroll = function (event) {
  let currentScrollPos = window.scrollY;
  /* console.log('начальная позиция: ' + prevScrollPos);
  console.log('текущая позиция ' + currentScrollPos); */
      
  if (currentScrollPos > 60 && currentScrollPos > prevScrollPos) {
    document.querySelector('.top-bar').style.top = "-60px";
  } else {
    document.querySelector('.top-bar').style.top = "0";
  }
    
  prevScrollPos = currentScrollPos;
}
  
  /* Гамбургер меню */
  let hamButtonMenu = document.querySelector('.hamburger-button');
  let hamDropMenu = document.querySelector('.hamburger-menu');
  let hamClose = document.querySelector('.hamburger-close');
  let hamMenuItems = document.querySelectorAll('.hamburger-menu-item');

  hamButtonMenu.onclick = function() {
    hamDropMenu.style.display = "flex";
  }

  hamClose.onclick = function() {
    hamDropMenu.removeAttribute('style');
  }

  for (let hamMenuItem of hamMenuItems) {
    hamMenuItem.onclick = function() {
      hamDropMenu.removeAttribute('style');
    }
  }
  
  window.onclick = function (event) {
    if (event.target !== hamButtonMenu && hamDropMenu.getAttribute('style')) {
      hamDropMenu.removeAttribute('style');
    }
  }

  /* Клик по миниатюре */
  let miniImages = document.querySelectorAll('.mini');
  let mainImage = document.querySelector('.main');
  let mainImg = mainImage.getAttribute('src');
        
  miniImages[0].setAttribute('style', 'opacity:1');
        
  for (let miniImage of miniImages) {
    miniImage.onclick = function() {
      let activePath =  miniImage.getAttribute('src');
      mainImage.setAttribute('src', activePath);
      miniImage.setAttribute('style', 'opacity:1');
            
      for (let miniImg of miniImages) {
        let miniPath = miniImg.getAttribute('src');
        if (miniPath !== activePath) {
          miniImg.removeAttribute('style');
        }
      }
    }
  }

  /* Выпадающее меню выбора размера */
  let dropDownMenu = document.querySelector('.size-dropdown');
  let dropButtons = document.querySelectorAll('.size-btn');
  let sizeItems = document.querySelectorAll('.size-dropdown span');

  for (let dropButton of dropButtons) {
    dropButton.onclick = function(event) {
      event.stopPropagation()
      dropDownMenu.classList.toggle('show');
      /*if (event.target.classList.contains('drop-btn')) {
        dropDownMenu.classList.toggle('show');
      } else if (dropDownMenu.classList.contains('show')) {
        dropDownMenu.classList.remove('show'); 
        // код на случай если получится заставить работать addEventListener на iOS
      }*/
    }
  }

  for (let sizeItem of sizeItems) {
    sizeItem.onclick = function() {
      dropDownMenu.classList.remove('show');
      dropButtons[1].textContent = sizeItem.textContent;
    }
  }
        
  /* Увеличить и уменьшить количество */
  let plusCart = document.querySelector('.count-inc');
  let numCart = document.querySelector('.count-value');
  let minusCart = document.querySelector('.count-dec');
  let cartCount = Number(numCart.textContent);

  plusCart.onclick = function() {
    cartCount += 1;
    numCart.textContent = cartCount;
  };

  minusCart.onclick = function() {
    cartCount -=1 ? cartCount > 1 : cartCount = 1;
    numCart.textContent = cartCount;
  };
          
  /* Добавить в Корзину */
  let nameItem = document.querySelector('.mb-info-name').textContent;
  let addCartButton = document.querySelector('.add-cart');
  let modal = document.querySelector('.modal');
  let modalContent = document.querySelector('.modal-content p');
  let modalCloseButton = document.querySelector('.close');

  addCartButton.onclick = function() {
    modalContent.textContent = 'Товар "' + nameItem + '" в количестве ' + cartCount + ' шт. добавлен в корзину';
    modal.style.display = "block";
    modal.classList.remove("hidden");

    setTimeout(function(){
      modal.classList.add("hidden");
    }, 2000);
  }
  
  /*Добавить в Избранное */
  let likeButton = document.querySelector('.add-favorite');
  let likeImg = document.querySelector('.like')
  
  likeButton.onclick = function () {
    let likeChoose = likeImg.getAttribute('src');
    if (likeChoose == 'img/heart-f_l.PNG') {
      likeImg.setAttribute('src', 'img/heart-e_l.PNG');
      modalContent.textContent = 'Товар "' + nameItem + '" удален из избранного';
    } else {
      likeImg.setAttribute('src', 'img/heart-f_l.PNG');
      modalContent.textContent = 'Товар "' + nameItem + '" добавлен в избранное';
    };
    modal.style.display = "block";
    modal.classList.remove("hidden");
            
    setTimeout(function(){
      modal.classList.add("hidden");
    }, 1200);
  }

  /* удаление Email */
  let eraseButton = document.querySelector('.erase-email');
  let emailField = document.querySelector('.email')

    eraseButton.onclick = function() {
      if (emailField.value) {
        emailField.value='';
      }
    }
  
  /* Отправка формы */
  let submitButton = document.querySelector('.submit');
  let subscribeForm = document.querySelector('.subscribe-form');
   
  submitButton.onclick = function() {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(!reg.test(emailField.value)) {
      modalContent.textContent = 'Неправильный адрес электронной почты';
    } else {
      modalContent.textContent = 'Адрес "' + emailField.value + '" добавлен в рассылку';
      //subscribeForm.submit();
      emailField.value='';
    }
    modal.style.display = "block";
    modal.classList.remove("hidden");
            
    setTimeout(function(){
      modal.classList.add("hidden");
    }, 1200);
  }

  modalCloseButton.onclick = function() {
    modal.style.display = 'none';
  }

  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  window.addEventListener('touchstart', function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  let overLayers = document.querySelectorAll('.sub-gallery');

  for (let over of overLayers) {
    over.addEventListener('mouseover', function() {
      over.children[1].setAttribute('style', 'visibility:visible');
    });
    over.addEventListener('mouseout', function() {
      over.children[1].removeAttribute('style');
    });
  }

});
