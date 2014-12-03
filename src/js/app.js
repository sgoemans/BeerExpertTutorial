
app.beerExpertModel = new App.Models.BeerExpertModel({
	title: "Pale Ale",
	text: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata"
	+ "sanctus est Lorem ipsum dolor sit amet.",
	pic: "beer2.jpg"
});

app.beerExpertCollection = new App.Collections.BeerExpertCollection();
app.beerExpertCollection.add(app.beerExpertModel);
app.beerExpertItemview = new App.Views.BeerExpertItemview({ model: app.beerExpertModel});
app.beerExpertItemview.render();