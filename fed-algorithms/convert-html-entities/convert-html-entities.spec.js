var HTMLEntities = require('./convert-html-entities');

describe('convertHTML()', function(){
  var htmlentities = new HTMLEntities();

  it('converts `&` to `&amp;`', function() {
    expect(htmlentities.convertHTML("Hamburgers & Pizza & Tacos")
  ).toEqual("Hamburgers &​amp; Pizza &​amp; Tacos");
  });

  it('converts `<` to `&lt;`', function() {
    expect(htmlentities.convertHTML("Hamburgers < Pizza < Tacos")
      ).toEqual("Hamburgers &​lt; Pizza &​lt; Tacos");
  });

  it('converts `>` to `&gt;`', function() {
    expect(htmlentities.convertHTML("Sixty > twelve")).toEqual("Sixty &​gt; twelve");
  });

  it('converts `"` to `&​quot;`', function() {
    expect(htmlentities.convertHTML('Stuff in "quotation marks"')
      ).toEqual("Stuff in &​quot;quotation marks&​quot;");
  });

  it('converts `\'` to `&apos;`', function() {
    expect(htmlentities.convertHTML("Shindler's List")
      ).toEqual("Shindler&​apos;s List");
  });

  it('does not convert anything in a letters-only string', function() {
    expect(htmlentities.convertHTML("abc")).toEqual("abc");
  });

});
