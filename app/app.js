(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var hw = new window.HelloWorld(),
      output = document.getElementById('output'),
      echoBtn = document.getElementById('echo');

    echoBtn.addEventListener("click", function (evt) {
      evt.preventDefault();

      output.value = hw.echo();
    });

  }, false);
})();
