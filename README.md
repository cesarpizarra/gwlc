# 𝚐𝚠𝚕𝚌 Global World Language Codes

Provides data about languages spoken around the world, including their codes and names.

## Installation

    $ npm install --save gwlc

or you can use yarn

    $ yarn add gwlc

To use `gwlc`, simply require it in your Node.js project:

```js
const gwlc = require('gwlc');
```

Use the methods `all`, `find`, or `filter` to get the language you need.

```js
// Get all languages
gwlc.all();

// Find a specific language by name or code
gwlc.find('English'); // Finds by name
gwlc.find('en'); // Finds by code

// Filter languages by a search term (case-insensitive)
gwlc.filter('span'); // Matches languages like 'Spanish'
gwlc.filter('en'); // Matches languages with 'en' in their name or code
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

- [Langauges](https://gist.github.com/jrnk/8eb57b065ea0b098d571)
