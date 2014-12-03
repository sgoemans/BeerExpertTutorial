describe("BeerExpertModel", function () {
	beforeEach(function () {
		this.beerExpertModel = new App.Models.BeerExpertModel();
	});
	it("exists with default attributes", function () {
		expect(this.beerExpertModel.get("title")).toEqual("Title");
	});
});