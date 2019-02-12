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
  return No1 / No2;
}

$(document).ready(function() {
  $("form#addThis").submit(function(event) {
    event.preventDefault();
    var No1 = parseInt($("#addOne").val());
    var No2 = parseInt($("#addTwo").val());
    var result = addThis(No1, No2);
    console.log(result);
    $("#answerThis").text(result);
    $("#Winestein").show();
  });
});
