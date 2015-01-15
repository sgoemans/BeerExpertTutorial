/**
 * @file The BeerExpertTutorial's start module. It creates an array with test data which is used to
 * intitially fill the beerExpertCollection.
 * @see {@link App.Views.BeerExpertListview} line 9
 * @author Stephan Goemans
 */
/** @constant */
app.data = [
	{
		title: "Pale Ale",
		text: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata"
		+ "sanctus est Lorem ipsum dolor sit amet.",
		pic: "beer2.jpg"
	},
	{
		title: "British Stout",
		text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
		+ "labore et dolore magna aliquyam erat, sed diam voluptua.",
		pic: "beer1.jpg"
	},
	{
		title: "Dead Man's Ale",
		text: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum"
		+ "dolore eu feugiat nulla facilisis at vero eros.",
		pic: "beer3.jpg"
	},
	{
		title: "Monster Brew",
		text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
		+ "labore et dolore magna aliquyam erat, sed diam voluptua.",
		pic: "beer4.jpg"
	},
	{
		title: "Slacker's Delight",
		text: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum"
		+ "dolore eu feugiat nulla facilisis at vero eros.",
		pic: "beer5.jpg"
	},
	{
		title: "Goose Punks",
		text: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata"
		+ "sanctus est Lorem ipsum dolor sit amet.",
		pic: "beer6.jpg"
	}
];
/** @object */
app.beerExpertCollection = new App.Collections.BeerExpertCollection( app.data );
app.beerExpertListview = new App.Views.BeerExpertListview({ collection: app.beerExpertCollection });
app.beerExpertListview.render();
