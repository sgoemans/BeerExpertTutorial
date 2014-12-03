describe("beerExpertCollection spec checks", function () {
	beforeEach(function () {
		this.beerExpertCollection = new App.Collections.BeerExpertCollection();
		this.beerExpertCollection.add({});
	});
	it("whether a newly added model is part of the collection", function () {
		expect(this.beerExpertCollection.at(0).get("title")).toEqual("Title");
	});
});