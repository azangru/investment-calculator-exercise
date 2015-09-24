$(function(){

  var tooltip = $('<div class="tooltip">').html('1 000 $');
  
  $(".slider").slider({
    range: "min",
    min: 100,
    max: 10000,
    step: 100,
    value: 1000,
    slide: function(event, ui) { 
      console.log(ui.value); 
    }
  });
  
  $(".ui-slider-handle").append(tooltip);
  
});
