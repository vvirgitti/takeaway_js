describe("menu", function() {

  beforeEach(function() {
    menu = new Menu;
  });

  it('can add a dish to the menu', function() {
    menu.add({"ramen":8});
    expect(menu.dishes).toEqual(2);
  });



});
