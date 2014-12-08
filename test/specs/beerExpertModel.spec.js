describe("BeerExpertModel", function () {
	beforeEach(function () {
		this.beerExpertModel = new App.Models.BeerExpertModel({
			title: "Pale Ale",
			text: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata"
			+ "sanctus est Lorem ipsum dolor sit amet.",
			pic: "../../src/img/beer2.jpg"
		});

	});
	it("should have default title value", function () {
		expect(new App.Models.BeerExpertModel().get("title")).toEqual("Title");
	});
	it("exists with new attributes", function () {
		expect(this.beerExpertModel.get("title")).toEqual("Pale Ale");
	});
});