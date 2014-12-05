describe("BeerExpertModel", function () {
	beforeEach(function () {
		this.beerExpertModel = new App.Models.BeerExpertModel({
			title: "Pale Ale",
			text: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata"
			+ "sanctus est Lorem ipsum dolor sit amet.",
			pic: "../../src/img/beer2.jpg"
		});

	});
	it("exists with default attributes", function () {
		expect(this.beerExpertModel.get("title")).toEqual("Pale Ale");
	});
});