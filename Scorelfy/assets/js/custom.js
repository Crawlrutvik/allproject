// alert("df")


$(document).ready(function(){
    $(".menu-toggle-btn").click(function(){
      $(this).toggleClass("fa-times");
      $(".heaer-titel").toggleClass("active")
    });
  });