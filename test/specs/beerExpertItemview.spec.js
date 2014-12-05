describe("A BeerExpertItemview", function () {
	beforeEach(function () {
		var beerExpertModel = new App.Models.BeerExpertModel({
			title: "Pale Ale",
			text: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata"
			+ "sanctus est Lorem ipsum dolor sit amet.",
			pic: "../../src/img/beer2.jpg"
		});
		this.beerExpertItemview = new App.Views.BeerExpertItemview({ model: beerExpertModel});
	});
	it("shall render an itemview", function () {
		expect(this.beerExpertItemview.render().$el.find(".cell-header").text().trim()).toEqual("Pale Ale");
	});
});
