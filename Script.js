dotCount = 0;

$('#button-dot').click(function() {
var lastChar = $('#disp').val().slice(-1);
var firstChar = $('#disp').val().slice(0);

if (dotCount == 0){
    if ($('#disp').hasClass("result")) {
      $('#disp').removeClass("result").val("");
      addChar(this.form.display,'0' + '.');
    }
    else if (lastChar == '.'){
        // DO NOTHING
    }
    else if (lastChar == '1' || lastChar == '2' || lastChar == '3' || lastChar == '4' || lastChar == '5' || lastChar == '6' || lastChar == '7' || lastChar == '8' || lastChar == '9' || lastChar == '0' && firstChar != '0'){
        addChar(this.form.display,'.');
    }
    else if (firstChar == '0'){
        addChar(this.form.display,'0' + '.');
    }
    else {
        addChar(this.form.display,'0' + '.');
    }
}// END OF dotCount == 0

else if (dotCount == 1){
    //DO NOTHING
}
  $('#disp').removeClass("result");
  dotCount = 1;
});