# Netflix standby screen

This project is a simple movie carousel that fetches movie data from an external source and displays it on a webpage with a rotating animation. Each movie's backdrop image, title, and genres are displayed and updated every 15 seconds.

## Table of Contents

- [Netflix standby screen](#netflix-standby-screen)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Code explanation](#code-explanation)
    - [Fetching Data](#fetching-data)
    - [Generating Genre Names](#generating-genre-names)
    - [Animating the Carousel](#animating-the-carousel)
    - [Dependencies](#dependencies)
  - [Contributing](#contributing)
  - [Contact](#contact)

## Installation

To use this project, you need to have Node.js installed. Then, you can clone the repository and install the necessary dependencies:

```bash
git clone <repository-url>
cd <repository-directory>
npm install
```

In root of the repository create api_keys.js file

```bash
touch api_keys.js
```

Add code to this file like in api_keys_example.js

```js
const api_key = 'YOUR_API_KEY';

export default api_key;
```

You can get your api key from [themoviedb api](https://developer.themoviedb.org/reference/intro/getting-started).

## Code explanation

### Fetching Data

The script starts by importing a fetchDatas function from fetch.js and genres data from genres.js. It then fetches the movie data and logs it to the console.

### Generating Genre Names

The generateNameById function takes a genre ID and returns the corresponding genre name by filtering the genres array.

### Animating the Carousel

The script sets up a carousel animation that updates the displayed movie's backdrop image, title, and genres every 15 seconds.

It initializes variables to keep track of the number of movies and the current state (index of the currently displayed movie).

It selects DOM elements where the image, title, and genres will be displayed.

The animation function updates these elements with the current movie's data and then schedules itself to run again after 15 seconds.

### Dependencies

fetch.js: This module should export a function that fetches movie data.
genres.js: This module should export an array of genre objects with id and name properties.
Make sure these dependencies are correctly set up for the script to work properly.

## Contributing

You're welcome :sunglasses:

If you wish to use or contribute to the project, follow these steps:point_down::

- Fork the project
- Create a new file api_keys.js in src with:

```js
const api_key = 'YOUR_API_KEY';

export default api_key;
```

- Create a feature branch
  > git checkout -b feature/NewFeature
- Commit your changes
  > git commit -m 'Add NewFeature'
- Push the branch
  > git push origin feature/AmazingFeature
- Open a pull Request

_[How to use Git?](https://docs.github.com/fr/get-started/using-git/about-git)_

## Contact

[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/ga%C3%ABtan-tremois-a956a91a3)
