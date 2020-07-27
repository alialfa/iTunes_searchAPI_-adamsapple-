# ADAMS APPLE | iTunes Media Search App

- _(an iTunes store search media engine)_
- [http://adams-apple.herokuapp.com](http://adams-apple.herokuapp.com)

**TABLE of CONTENTS:**

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Testing](#testing)
5. [Security](#security)
6. [Languages](#languages)
7. [Credits](#credits)

## DESCRIPTION:

Adam's Apple Search is a an application that is integrated with Apple's iTunes API to pull data based on a search term. Search media is based on various categories ranging from Music, Videos, Podcasts, Audiobooks, eBooks, Movies & TV Shows.

The goal of this project is to demonstrate the creation of a full stack web application with the flavour of seamless API integration.

## INSTALLATION:

1. Clone files to your local repo
2. Open a new terminal
3. Navigate to the folder "server" **cd server**
4. Type in: **npm install**
5. Type: **npm start** OR **npm run server** to the server
6. Navigate to the folder "client" **cd client**
7. Type in: **npm install**
8. Type: **npm start** to start the app
9. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
10. Get searching & ENJOY!!!

## USAGE:

After you have this locally in your machine, all navigation occurs in the browser.
| File | What it Does |
| -------------- | ------------- |
| App.js | main application class |
| Home.js | core class of the game |
| Header.js | header area component |
| Menubar.js | nav bar component |
| Sidebar.js | holds input component |
| SearchInput.js | allows term input and processing|
| SearchWelcome.js | search page welcome banner |
| SearchBuffer.js | search page loading banner |
| SearchResults.js | displays rsults for an active search |
| ResultCard.js | generates a card for a single search item |
| {custom/fontawesome}.css | css site styling|
| /bin/www.js | server network app settings |
| app.js | api usage and configuration defaults |
| /routes/search.js | router function for app.js to run search API |
| /config/default.json | api usage and configuration defaults |

## TESTING

1. To test the back-end of this app:
2. **cd server**
3. **npm test**
4. To test the front-end of this app:
5. **cd client**
6. **npm test**

## SECURITY

This app is maintained via use of Helmet middelware, that is used early within the applications server's configuration viewable in server/app.js.

Additionally, API keys and network protocols have been stored in a config folder within a file called default.json

## LANGUAGES

A combination of REACT.JS/ HTML/ CSS for the frontend & NODE.JS / EXPRESS.JS was used to bring this project to life.

## CREDITS:

This project was compiled by the following author:

- Ali Mongi - [Email Me](mailto:alphan.mongi@gmail.com)
