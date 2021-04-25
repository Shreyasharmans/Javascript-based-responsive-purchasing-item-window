function price(){
  var input = document.getElementsByName("item");
  var total = 400;
  for (var i = 0; i < input.length; i++) {
    if (input[i].checked) {
      total += parseFloat(input[i].value);
    }
  }
  document.getElementsByName("total")[0].value = "$" + total.toFixed(2);
}  