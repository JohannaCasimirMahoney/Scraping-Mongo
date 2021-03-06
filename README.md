# Scraping Mongo

### Overview

Scraping Mongo is a web app that lest users view and leave comments on the latest news. But here's the catch. You'r not going to actually write any articles; instead, you'll scrape news from another site. How exciting is that. 


### Before You Begin

1. Create a GitHub repo for this assignment and clone it to your computer. Any name will do -- just make sure it's related to this project in some fashion.

 <img width="400" height="300" src="https://github.com/JohannaCasimirMahoney/Scraping-Mongo/blob/master/Screen%20Shot%202019-07-20%20at%201.50.36%20PM.png">

  <img width="400" height="300" src="https://github.com/JohannaCasimirMahoney/Scraping-Mongo/blob/master/Screen%20Shot%202019-07-20%20at%201.52.27%20PM.png">
  

2. Run `npm init`. When that's finished, install and save these npm packages:

   * Express

   * Express-handlebars

   * Mongoose

   * Cheerio

   * Axios

## Instructions

* Create an app that accomplishes the following:

  1. Whenever a user visits your site, the app should scrape stories from a news outlet of your choice and display them for the user. Each scraped article should be saved to your application database. At a minimum, the app should scrape and display the following information for each article:

     * Headline - the title of the article

     * Summary - a short summary of the article

     * URL - the url to the original article

     * Feel free to add more content to your database (photos, bylines, and so on).

  2. Users should also be able to leave comments on the articles displayed and revisit them later. The comments should be saved to the database as well and associated with their articles. Users should also be able to delete comments left on articles. All stored comments should be visible to every user.

* Beyond these requirements, be creative and have fun with this!


### Technology Used

* HTML 

* CSS 

* Boostrap 

* Pure

* Node.js

* Express

* Express-Handlebars

* MongoDB and Mongoose

* Cheerio

* Axios

* Hosting on Heroku
