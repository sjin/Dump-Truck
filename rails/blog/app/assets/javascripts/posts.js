$(document).ready(function() {
  $("#new-comment-form").hide();
  
  $("#show-new-comment-form").click( function(){
    $("#new-comment-form").slideToggle();
  });
});