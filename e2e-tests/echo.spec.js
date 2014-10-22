describe('Echo test', function () {
  beforeEach(function () {
    browser.ignoreSynchronization = true;
  });
  it('It should output hellowolrd', function () {
    browser.get('index.html');

    element(by.css('#echo'))
      .click();

    var output = element(by.css('#output'));

    expect(output.getAttribute('value'))
      .toEqual('HelloWorld');

  });
});
