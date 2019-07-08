## Description

Lightside is an app built in React. It highlights our use of single responsability, DRY component usage, asynchronous JavaScript fetching and StarWars themed styling. We did our best to implement React components that communicate to each other as needed, take advantage of State, props, and class/functional components, write modular, reusable code that attempts to adhere to the following principles: the Open/Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, Dependency Inversion Principle, and Test Driven Development, and robust usage of object and array prototype methods to perform rich data manipulation.

On load, the app fetches from a StarWars API, displaying a random movie intro crawl, and three categories for data display: people, vehicles and planets. By clicking on one of these categories, the user will be routed to the collection of info-cards at which point they may favorite any card that is being displayed. By doing that, the cards will be added to the Favorites category, which is also accessible by clicking on the Favorites tab. Clicking again on the 'favorited' cards, they will be eliminated from the Favorites category, and cease to be highlighted.

The app was created using `create-react-app`.


## Installation

```
git clone https://github.com/andreeahanson/lightside.git
```
Once you have cloned the repo, install the library dependencies. Run:

```
npm install
```
To view the app in action, run the following command in your terminal:

```
npm start
```
Then, go to http://localhost:8080/ in your browser to see the code running in the browser.


## Screenshots
![Crawll](https://github.com/andreeahanson/lightside/blob/master/src/images/Crawll.png)

![People](https://github.com/andreeahanson/lightside/blob/master/src/images/People.png)

![PeopleFav](https://github.com/andreeahanson/lightside/blob/master/src/images/People-with-favs.png)

![Favorites](https://github.com/andreeahanson/lightside/blob/master/src/images/Favorites-full.png)

![FavoritesEmpty](https://github.com/andreeahanson/lightside/blob/master/src/images/Favorites-empty.png)

![GIF](https://media.giphy.com/media/kZty7ldVvp8m4Sih2G/200w_d.gif)

## Learning goals

- Learn how to wireframe and know why it is important.
- Write squeaky clean, well refactored code using ES6 & ES7 syntax.
- Make informed design decisions to create a user-friendly application.
- Keep state based components to a minimum and leverage more functional components.
- Use a modular architecture for your application file structure.
- Think deeply about React Lifecycle Methods.
- Understand and utilize React Router to effectively display data.
- Use propTypes for every component receiving props.

## Team members

[Jev Forsberg] (https://github.com/baldm0mma)
[Andreea Hanson] (https://github.com/andreeahanson)
