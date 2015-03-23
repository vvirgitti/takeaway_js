describe("dish", function() {
  beforeEach(function() {
    dish = new Dish();
  });

  it('has a name', function() {
    expect(dish.name).toEqual("ramen");
  });

  it('has a price', function() {
    expect(dish.price),toEqual(8);
  });



});
