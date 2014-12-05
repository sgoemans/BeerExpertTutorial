BeerExpertTutorial
==================

###Let's begin with some simple HTML5 and CSS3
Goal: Develop a simple webpage for beer experts to look at a selection of beer labels, arranged in a table

#####1) Prerequisites:

none

#####2) Create a new project in WebStorm 'BeerExpertTutorial'

#####3) Create a folder structure:

/src

/src/scss

/src/img


#####4) Create an index.html file

As a starting point, the index.html file will contain a static webpage. Layout will be added in the next
step by the use of CSS3.

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beer Expert</title>
    <link href="scss/beer-styles.css" rel="stylesheet" />
</head>
<body>
<nav id="top-nav"></nav>
<header id="top-header">
    <img src="./img/banner.png" class="banner">
</header>
<main>
    <section class="beer-table">
        <div class="beer-row">
            <div class="beer-cell"></div>
            <div class="cell-header">
                British Stout
            </div>
            <div class="desc">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua.
            </div>
            <p>
                <img src="./img/beer1.jpg">
            </p>

            <div class="beer-cell">
            .
            .
            .
```

#####5) Create a beer-styles.scss file in the /src/scss folder:
```
body {
  background-color: antiquewhite;
}

.banner {
  max-width: 100%;
  height: auto;
}

.beer-table {
  border-spacing: 10px;
  display: table;
}
// CSS font properties:
//    font-weight: bold;
//    font-style: italic;
//    font-variant: small-caps;
//    font-size: 1em;
//    line-height: 1.5em;
//    font-family: verdana,sans-serif
//
// CSS font property, shorthand style:
//    font: bold italic small-caps 1em/1.5em verdana,sans-serif
//
 .cell-header {
   font: bold italic 24px/1.8em "Bookman", Georgia, "Times New Roman", serif;
 }

.beer-row {
  display: table-row;
}

.beer-cell {
  display: table-cell;
}
```

#####6) Open the index.html file in a browser

