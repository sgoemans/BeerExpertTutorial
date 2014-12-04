describe("A BeerExpertItemview", function () {
	beforeEach(function () {
		app.beerExpertModel = new App.Models.BeerExpertModel({
			title: "Pale Ale",
			text: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata"
			+ "sanctus est Lorem ipsum dolor sit amet.",
			pic: "../../src/img/beer2.jpg"
		});

		app.beerExpertItemview = new App.Views.BeerExpertItemview({ model: app.beerExpertModel});
	});
	it("shall render an itemview", function () {
		console.log(app.beerExpertItemview.render().$el.find(".beer-cell > .cell-header"));
		expect(app.beerExpertItemview.render().$el.find(".beer-cell > .cell-header").text().trim()).toEqual("Pale Ale");
	});
});
