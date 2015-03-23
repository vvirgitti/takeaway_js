describe("menu", function() {

  beforeEach(function() {
    menu = new Menu;
  });

  it('can add a dish to the menu', function() {
    menu.addDish({"ramen":8});
    expect(menu.numberDishes).toEqual(1);
  });

  it('has a list of dishes', function() {
    expect(menu.listDishes).toEqual({"ramen":8, "sushi":10});
  });



});
