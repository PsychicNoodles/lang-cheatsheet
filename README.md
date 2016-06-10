# lang-cheatsheet

A simple SPA with a few useful cheatsheets/tools for various languages, focusing on Korean and Japanese. Application code uses [Material UI](http://material-ui.com). Test code uses [Cucumber](http://cucumber.io) in Ruby, because I like Ruby better than Node. Server is located at http://localhost:3000.

The output code is purely HTML/CSS/Javascript, so you can throw it somewhere like GitHub pages and have it served without any real backend.

Note: Unicode characters, such as Korean and Japanese characters, is problematic on Windows. This link *might* help you, but it didn't really help me: https://github.com/cucumber/cucumber/wiki/Troubleshooting

Application code:
```
npm install # install node modules
npm start # serve it locally
npm build # just build it
```

Test code:
```
gem install bundler # if you've never programmed in Ruby before
bundle install # install gems
bundle exec cucumber # run cucumber tests
```

## Current Features

(nothing yet)

## Upcoming Features

* Korean consonant types, in table form (ie. plosive vs fricative, plosive-plain vs plosive-aspirate)
* Korean consonant and vowel pronunciation, in table form
* Korean consonant pronunciation, in IME input form
* Korean syllable-blocks, in IME input form
* Korean conjugation, in IME input form
* Japanese consonant and vowel pronunciation
* Japanese conjugation, in IME input form
* About pages
