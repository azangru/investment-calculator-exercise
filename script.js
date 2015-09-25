$(function(){

  // INITIAL DATA
  var investment = 1000;
  var account = '11970';

  var accounts = {
    11970: 1.265,
    7348: 1.35,
    10555: 1.20,
    10504: 1.40,
    10469: 1.37
  };
  // END OF INITIAL DATA
  
  var tooltip = $('<div class="tooltip">').html('1 000 $');
  
  $(".slider").slider({
    range: "min",
    min: 100,
    max: 10000,
    step: 100,
    value: 1000,
    slide: function(event, ui) {
      investment = ui.value;
      updateTooltip();
      updateInfo();
    }
  });
  
  $(".ui-slider-handle").append(tooltip);

  $(".accounts-list-item a").click(function(e){
    e.preventDefault();
    // change styling
    $(".active").removeClass("active");
    $(this).closest(".accounts-list-item").addClass("active");
    // update returns on investment
    account = $(this).data('account');
    updateInfo(investment, accounts[account]);
  });
  
  var updateTooltip = function(){
    var formattedInvestment = format(investment);
    $('.tooltip').html(formattedInvestment);
  };

  var updateInfo = function(){
    var coefficient = accounts[account];
    var returnInAWeek = (investment * coefficient).toFixed();
    $('.today .value').html(format(returnInAWeek));
    var returnInAYear = calculateAnnualReturn(investment, coefficient);
    $('.next-year .value').html(format(returnInAYear));
  };

  var calculateAnnualReturn = function(investment, coefficient){
    // this is a bogus function;
    // I could not deduce a function that would
    // return the same results as on the mockup
    var result = investment;
    for (var i = 0; i < 14 ; i++){
      result = result + result * (coefficient - 1);
    }
    return result.toFixed();
  };

  // take a number and return a string with spaces between orders of magnitude
  // and with the dollar sign
  var format = function(number){
    var stringified = number.toString();
    var digitsArray = stringified.split('');
    if(digitsArray.length > 3){
      digitsArray.splice((digitsArray.length - 3), 0, ' ');
      if(digitsArray.length > 7){
        digitsArray.splice((digitsArray.length - 7), 0, ' ');
      }
    }
    var result = digitsArray.join('') + ' $';
    return result;
  };

  updateTooltip();
  updateInfo();
  
});
