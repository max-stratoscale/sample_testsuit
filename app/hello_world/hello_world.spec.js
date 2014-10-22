describe("Hello world", function () {
  var hw;

  beforeEach(function () {
    hw = new HelloWorld();
  });
  it("Should have nuts", function () {
    expect(hw.echo())
      .toBe('HelloWorld');
  });

});
