const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navbar-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  burger.classList.toggle('toggle'); 
});

// 获取按钮
var mybutton = document.getElementById("back-to-top");

// 当用户向下滚动100px时，显示按钮
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// 当用户点击按钮时，滚动到页面顶部
mybutton.onclick = function() {
  document.body.scrollTop = 0; // 对于Safari
  document.documentElement.scrollTop = 0; // 对于Chrome, Firefox, IE和Opera
}

