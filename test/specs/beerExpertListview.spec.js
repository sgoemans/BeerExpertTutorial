describe("The BeerExpertListview", function () {
	beforeEach(function () {
		this.server = sinon.fakeServer.create();
		this.server.respondWith("GET", "/beers",
			[200, {"Content-Type": "application/json"}, JSON.stringify(app.beerExpertFixture)]);
		var beerExpertCollection = new App.Collections.BeerExpertCollection();
		beerExpertCollection.fetch();
		this.server.respond();
		this.beerExpertListview = new App.Views.BeerExpertListview({collection: beerExpertCollection});
		this.beerExpertListview.render();
	});

	it(" renders six models from collection", function () {
		expect(this.beerExpertListview.$el.find(".cell-header").length).toEqual(6);
	});
	afterEach(function () {
		this.server.restore();
	});
});
