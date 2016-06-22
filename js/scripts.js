$(document).ready(function() {
  $("#blankform form").submit(function(event) {
    event.preventDefault();

    var number = $("input#number").val();
    var allNumbers = [];

    for ( var i = 2; i <= number; i += 1 ) {
      allNumbers.push(i);
    };

    allNumbers.forEach(function(input) {
      for ( var prime = 2; prime < input; prime += 1 ) {
        if (Number.isInteger(input / prime) === true ) {
          var index = allNumbers.indexOf(input);
          allNumbers[index] = "A";
        };
      };
    });
    alert(allNumbers);
  });
});
