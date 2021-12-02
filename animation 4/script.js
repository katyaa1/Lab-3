window.addEventListener("DOMContentLoaded", function () {
  let arrLeft = document.querySelector(".arrow-left"),
    arrRight = document.querySelector(".arrow-right"),
    arrLeftTop = document.querySelector(".arrow-left-top"),
    arrLeftBottom = document.querySelector(".arrow-left-bottom"),
    arrRightTop = document.querySelector(".arrow-right-top"),
    arrRightBottom = document.querySelector(".arrow-right-bottom"),
    counter = document.querySelector(".left-count"),
    dg = parseInt(counter.innerHTML = '1');

  arrLeft.addEventListener("click", function () {
    dg = parseInt(counter.innerHTML); //получаем текущее значение счетчика
    if (dg > 1) { // если больше 1 то уменьшаем на единицу
      dg -= 1;
      counter.innerHTML = dg;
      arrowsRotate(dg);
    }
  });

  arrRight.addEventListener("click", function () {
    dg = parseInt(counter.innerHTML); //получаем текущее значение счетчика
    if (dg < 5) { // если меньше 5 то прибавляем единицу
      dg += 1;
      counter.innerHTML = dg;
     arrowsRotate(dg);
    }
  });

  function arrowsRotate(a) {
    if (a == 1) {
      arrLeftTop.style.transform = "rotate(0deg)";
      arrLeftBottom.style.transform = "rotate(0deg)";
      arrLeftTop.style.opacity = "0.5";
      arrLeftBottom.style.opacity = "0.5";
      arrRightTop.style.transform = "rotate(40deg)";
      arrRightBottom.style.transform = "rotate(-40deg)";
    } else {
      arrLeftTop.style.opacity = "1";
      arrLeftBottom.style.opacity = "1";
    }
    if (a == 2) {
      arrLeftTop.style.transform = "rotate(10deg)";
      arrLeftBottom.style.transform = "rotate(-10deg)";
      arrRightTop.style.transform = "rotate(30deg)";
      arrRightBottom.style.transform = "rotate(-30deg)";
    }
    if (a == 3) {
      arrLeftTop.style.transform = "rotate(20deg)";
      arrLeftBottom.style.transform = "rotate(-20deg)";
      arrRightTop.style.transform = "rotate(20deg)";
      arrRightBottom.style.transform = "rotate(-20deg)";
    }
    if (a == 4) {
      arrLeftTop.style.transform = "rotate(30deg)";
      arrLeftBottom.style.transform = "rotate(-30deg)";
      arrRightTop.style.transform = "rotate(10deg)";
      arrRightBottom.style.transform = "rotate(-10deg)";
    }
    if (a == 5) {
      arrLeftTop.style.transform = "rotate(40deg)";
      arrLeftBottom.style.transform = "rotate(-40deg)";
      arrRightTop.style.transform = "rotate(0deg)";
      arrRightBottom.style.transform = "rotate(0deg)";
      arrRightTop.style.opacity = "0.5";
      arrRightBottom.style.opacity = "0.5";
    } else {
      arrRightTop.style.opacity = "1";
      arrRightBottom.style.opacity = "1";
    }
  };
  
  arrowsRotate(dg);
  
});