describe("dish", function() {
  beforeEach(function() {
    dish = new Dish();
  });

  it('has a name', function() {
    expect(dish.name).toEqual("ramen");
  });



});
