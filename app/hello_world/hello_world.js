(function () {
  var HelloWorld = this.HelloWorld = function (options) {
    options = options || {
      message: "HelloWorld"
    };
    this.message = options.message;
  };

  HelloWorld.prototype.echo = function () {
    return this.message;
  };
})();
