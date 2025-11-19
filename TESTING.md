# Testing

> [!NOTE]  
> Return back to the [README.md](README.md) file.


## Code Validation


### HTML


I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.


| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| assets | [index.html](https://github.com/DavidClamp/supermarket-game/blob/main/index.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://davidclamp.github.io/supermarket-game/index.html) | ![screenshot](documentation/testing/index-html-validator-test.png) | |
|assets | [404.html](https://github.com/DavidClamp/supermarket-game/blob/main/404.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://davidclamp.github.io/supermarket-game/404.html) |![screenshot](documentation/testing/index-html-validator-test.png) | |
|assets | [style.css](https://github.com/DavidClamp/supermarket-game/blob/main/assets/style.css) | [HTML Validator](https://validator.w3.org/nu/?doc=https://davidclamp.github.io/supermarket-game/assets/style.css) | ![screenshot](documentation/testing/style-css-validator-test.png) | |


### CSS


I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| assets | [style.css](https://github.com/DavidClamp/supermarket-game/blob/main/assets/css/style.css) | [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https://davidclamp.github.io/supermarket-game) | ![screenshot](documentation/testing/style-css-jigsaw-validator-test.png) |  |


### JavaScript


I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| assets | [script.js](https://github.com/DavidClamp/supermarket-game/blob/main/assets/js/script.js) |  | ![screenshot](documentation/testing/script-js-jshint-test.png) |Two warnings were raised regarding potentially confusing variable semantics. I’ve noted these, but upon review the intent of the code is unambiguous and the existing structure remains readable. |


## Responsiveness

I've tested my deployed project to check for responsiveness issues.

| Page | Mobile | Tablet | Laptop | Desktop | Notes |
| --- | --- | --- | --- | --- | ---|
| Game| ![screenshot](documentation/testing/mobile-screenshot.png) | ![screenshot](documentation/testing/tablet-screenshot.png) | ![screenshot](documentation/testing/laptop-screenshot.png) | ![screenshot](documentation/testing/tablet-screenshot.png) | Works as expected |
| Game with backup array| ![screenshot](documentation/testing/mobile-backup-array-screen.png) | ![screenshot](documentation/testing/tablet-backup-array-screen.png) | ![screenshot](documentation/testing/laptop-backup-array-screen.png) | ![screenshot](documentation/testing/desktop-backup-array-screen.png) | Works as expected |
| 404 | ![screenshot](documentation/testing/mobile-404-screenshot.png) | ![screenshot](documentation/testing/tablet-404-screenshot.png) | ![screenshot](documentation/testing/laptop-404-screenshot.png) | ![screenshot](documentation/testing/desktop-404-screenshot.png) | Works as expected |


## Browser Compatibility


I've tested my deployed project on multiple browsers to check for compatibility issues.

| Page | Chrome | Firefox | Edge | Notes |
| --- | --- | --- | --- | --- |

| Game | ![screenshot](documentation/testing/desktop-screenshot.png) | ![screenshot](documentation/firefox/firefox-screenshot.png) | ![screenshot](documentation/edgebrowser/edge-screenshot.png) | Works as expected |
| 404 | ![screenshot](documentation/testing/chrome-404-screenshot.png) | ![screenshot](documentation/firefox/firefox-404-screenshot.png) | ![screenshot](documentation/edgebrowser/edge-404-screenshot.png) | Works as expected |

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues. Some warnings are outside of my control, and mobile results tend to be lower than desktop.

| Page | Mobile | Desktop | Notes |
| --- | --- | --- |
| Game |o ![screenshot](documentation/lighthouse/lighthouse-mobile.png) | ![screenshot](documentation/lighthouse/lighthouse-404-desktop.png) |  Performance score report is lower than expected. Largeley due to using a fake API.
| 404 | ![screenshot](documentation/lighthouse/lighthouse-404-mobile.png) | ![screenshot](documentation/lighthouse/lighthouse-404-desktop.png) |

## Defensive Programming


Defensive programming was manually tested with the below user acceptance testing:

| Feature | Expectation | Test | Result | Screenshot |
| --- | --- | --- | --- | --- |
|Game Page | Feature is expected to use high-contrast colors and accessible fonts. | Checked contrast ratios using accessibility tools (e.g., Lighthouse, Wave). | Colours and fonts met accessibility standards. | ![screenshot](documentation/testing/game-grid.png) |
| Start Button | The Start button is easily identified and once pressed ("clicked")a 60-second countdown begins. | Click start button | Game commenced and countdown from 60 seconds began |![screenshot](documentation/testing/game-start-button.png) |
| Higher or Lower Buttons | These buttons let the user choose whether the displayed product price is higher or lower than the correct value. | Click high and low buttons| product squares display product price and users either correct or incorrect response| ![screenshot](documentation/testing/game-hl-buttons.png) |
| Header Section | Displays the Start button, timer, current score, and final score. | Check initial game page| Page is loaded corectly| ![screenshot](documentation/testing/game-final-score-header.png) |
| Score Tracker | Feature is expected to track the number of correct and incorrect equations. | Performed multiple calculations (correct and incorrect) and checked the score tracker. | Score tracker updated correctly for all tested scenarios. | ![screenshot](documentation/testing/game-running-total-header.png) |
| Final Score | Shows the total number of correct and incorrect answers the user has given.  | Play game and check final result| final results are correct | ![screenshot](documentation/testing/game-final-score-header.png) |
| Game squares | Squares contain a product image, product description, and game buttons. | Check squares content across all devices| Squares display correct information|![screenshot](documentation/testing/game-grid.png) |
 Square Colours | Square boundaries turn yellow for correct answers and red for incorrect answers. | Click game buttons and check the colour of boundary of the squres | Boundary of squares change to correct colour| ![screenshot](documentation/testing/game-boundaries.png) |
 |Game restart | Feature is allow user to start a new game after finishing.| Check that the 'return to game' button begins a new game afer current game has finished. Irrespective of the current game result outcome. | Game restarts correctly for all tested scenarios. |![screenshot](documentation/testing/game-final-score-button.png) |
| 404 Error Page | Feature is expected to display a 404 error page for non-existent pages. Then allow user to return to game page | Navigated to an invalid URL (e.g., `/test`) to test error handling. In addition to testing the return page button| A custom 404 error page was displayed as expected. Then game page was returned when return button clicked |![screenshot](documentation/testing/chrome-404-screenshot.png) |

 
## User Story Testing

| Target | Expectation | Outcome | Screenshot|
| --- | --- | --- | --- |
| As a user | I would like to see an image and a description of the products so that I can see learn about the products that are available. | Product images are shown in game squares.|![screenshot](documentation/testing/game-grid.png)|
| As a user | I would like the game to show me how to begin  so that I can start playing easily. | Click on Start button|![screenshot](documentation/testing/game-start-button.png)|
| As a user | I would like the game to show me the outcome instantly after selecting "higher" or "lower" so that I see my progress in real time without waiting. | See game header for score tracker|![screenshot](documentation/testing/game-running-total-header.png)|
| As a user | I would like the game to challenge my knowledge of product prices so that I can test how well I know product values. | Final game results are shown header|![screenshot](documentation/testing/game-final-score-header.png)|
| As a user | I would like to see a list of current products available for sale so that I can decide if I'm interested to buy any. | Grid of product images and descriptions shown to user. |![screenshot](documentation/testing/game-grid.png)|
| As a user | I would like the game to use high-contrast colors and accessible fonts so that I can easily read and interact with it. |Colours and fonts met contrast accessibility standards. See Wave report|![screenshot](documentation/testing/wave-report.png)|
| As a user | I would like the game to allow me to select any product in any order (not only sequentially) so that I can interact the game with more freedom. | Game squares can be selected at random and game works perfectly ||
| As a user | I would like the game to show me the final result so that I see how well I did and if I won anything. | Final results are shown in game header and 'return to game' button.|![screenshot](documentation/testing/game-final-score-header.png)|
| As a user | If I start the game again, I would like to see a different selection of products so that I can callenge myself with a new set of products. | The game fetches a different set of products from the API and loads randomly||
| As a user | I would like to see a friendly 404 error page if I visit a non-existant page so that it's obvious that I've not reached the correct site. |  A custom 404 error page is displayed. Then game page returns when 'return button' clicked|![screenshot](documentation/testing/game-final-score-button.png)|


## Automated and Manual Testing

There are two primary types of testing used to validate that a deployed website is fully functional: Behaviour-Driven Development (BDD) and Test-Driven Development (TDD). Each approach has its own advantages and disadvantages. However, it is widely recognised in practice that the most effective testing methodology combines elements of both, balancing comprehensive coverage with efficiency.

Due to time constraints, my focus has primarily been on manual testing. Nonetheless, I have explored the use of Jest for automated testing and can appreciate the advantages of such a paradigm, particularly in improving consistency, speed, and regression detection.

My BDD approach centered on testing the defined user stories to ensure that they delivered the expected outcomes. This involved manually verifying the functionality of the game buttons and cross-checking the calculated results for accuracy. The interactive buttons were tested to confirm that clicking them correctly revealed the intended results. Additionally, a key feature of the game—the display of a product description when hovering the mouse over a product—was thoroughly tested across all grid squares and over multiple game sessions to ensure consistent behavior.

I fully acknowledge and understand that, in a real-world scenario, an extensive set of additional tests would be more comprehensive.


## Bugs

### Known Issues

| Issue | Screenshot |
| --- | --- |
| When validating HTML with a semantic `<section>` element, the validator warns about lacking a header `h2-h6`. This is acceptable. | ![screenshot](documentation/testing/wave-heading-report.png) |


> There are no remaining bugs that I am aware of, though, even after thorough testing, I cannot rule out the possibility.