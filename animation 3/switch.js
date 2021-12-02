$(document).ready(function () {
  
  $(".switch").click(function () {
    
    if ($(".sun").css("right") == "5px") {
      $(".sun").css({ 'right': "52px", 'border-color':'#dddfc8', 'background-color':'#eeeedb'});
      $(".cloud").css({ opacity: "0" });
      $(".switch").css({ 'border-color':'#202020', 'background-color':'#484848'});
      
      for (let i = 1; i < 8; i++) {
        $('.star' + i).css({ opacity: "1" });
      }
      
      for (let i = 1; i < 4; i++) {
        $('.crater' + i).css({ opacity: "1" });
      }
      
    } else {
      $(".sun").css({'right': "5px", 'border-color':'#e0cc4e', 'background-color':'#f5ec47'});
      $(".cloud").css({ opacity: "1" });
      $(".switch").css({ 'border-color':'#8abdd0', 'background-color':'#c0e5f5'});
      
      for (let i = 1; i < 8; i++) {
        $('.star' + i).css({ opacity: "0" });
      }
      
      for (let i = 1; i < 4; i++) {
        $('.crater' + i).css({ opacity: "0" });
      }
    }
  });
});
