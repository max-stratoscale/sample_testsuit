describe("Hello world", function () {
  var hw;

  beforeEach(function () {
    hw = new HelloWorld();
  });
  it("Should echo HelloWorld", function () {
    expect(hw.echo())
      .toBe('HelloWorld');
  });

});
