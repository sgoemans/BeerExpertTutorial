describe("BeerExpertCollection spec checks", function () {
	var server;
	beforeEach(function () {
		this.beerExpertCollection = new App.Collections.BeerExpertCollection();
		server = sinon.fakeServer.create();
		server.respondWith("GET", "/beers",
			[200, {"Content-Type": "application/json"}, '[{"title": "Pale Ale",	"text": "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", "pic": "beer2.jpg"}]']);
	});
	it("whether a newly added model is part of the collection", function () {
		this.beerExpertCollection.fetch();
		server.respond();
		expect(server.requests.length).toEqual(1);
		expect(server.requests[0].method).toEqual("GET");
		expect(server.requests[0].url).toEqual("/beers");
		expect(this.beerExpertCollection.at(0).get("title").trim()).toEqual("Pale Ale");
	});
	afterEach(function () {
		server.restore();
	});

});
