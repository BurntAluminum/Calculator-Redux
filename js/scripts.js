// Business Logic

var addThis = function(No1, No2) {
  return No1 + No2;
};

var subtrThis = function (No1, No2) {
  return No1 - No2;
}

var diviThis = function (No1, No2) {
  return No1 / No2
}

var multiThis = function (No1, No2) {
  return No1 * No2;
}

//User interface

$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    var No1 = parseInt($("#input1").val());
    var No2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    console.log("1st number: " + No1);
    console.log("2nd number: " + No2);
    console.log("operator: " + operator);
    var result;
    if (operator === "addition") {
      result = addThis(No1, No2);
    } else if (operator === "subtraction") {
      result = subtrThis(No1, No2);
    } else if (operator === "multiplication") {
      result = multiThis(No1, No2);
    } else if (operator === "division") {
      result = diviThis(No1, No2);
    }
    $("#answerThis").text(result);
    $("#Winestein").show();
  });
});
