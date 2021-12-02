document.addEventListener('DOMContentLoaded', function() {
  
  let balls = document.querySelector('.balls'),
      boxFirst = document.querySelector('.first'),
      boxLast = document.querySelector('.last'),
      animationPlay = false;
      
  
  balls.addEventListener('click', function() {
    if (!animationPlay) {
       animationPlay = true;
       
      boxFirst.style.animation = 'pendulum-left 10s ease-in-out';
      boxLast.style.animation = 'pendulum-right 10s ease-in-out';
       
      let timerId = setTimeout(function() {
         animationPlay = false;
         boxFirst.style.animation = 'none';
         boxLast.style.animation = 'none';
        clearTimeout(timerId);
      }, 9000);
      
    };

    
    
  });
  
  
  
});