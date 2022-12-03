(function name() {
  let input = document.querySelector(".input");
  let button = document.querySelectorAll(".button");
  var a = 0;

  button.forEach(function (button) {

    button.addEventListener("click", function (e) {
        input.value = "";
      let value = e.target.dataset.num;
     /*!-- if(a<0){
        input.value +0;
      }
      else --!*/if (value == 1) {
        a++;
      } else {
        a--;
      }
      input.value += a;
    });
   

  });


})();
