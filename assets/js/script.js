/* jshint esversion: 11 */

const squares = document.querySelectorAll(".square");

const resultDisplay = document.getElementById("result");

const timeDisplay = document.getElementById("time-left");

// Get start button
const startButton = document.getElementById("start");

// Get  result element and Score variables

const resultDiv = document.createElement("div");

// put results into a dialog

const resultDialog = document.createElement("dialog");
const resultButton = document.createElement("button");

let totalCorrect = 0;
let totalWrong = 0;
let totalSquares = squares.length;

// Timer variables
let currentTime = 60;
let timerId = null;

// Create Products array

// Each product has an image, name, and value

let productArray = [{
    img: "assets/images/minion.jpg",
    name: "Minion",

    value: 15
  },
  {
    img: "assets/images/policecar.png",
    name: "Police Car",

    value: 25
  },
  {
    img: "assets/images/minivw.jpg",
    name: "Miniture Beetle",

    value: 15
  },
  {
    img: "assets/images/robot.jpg",
    name: "Robot",

    value: 50
  },
  {
    img: "assets/images/teddy.jpg",
    name: "Teddy Bear",

    value: 60
  },
  {
    img: "assets/images/toyhammer.png",
    name: "Toy Hammer",
    value: 10
  },
  {
    img: "assets/images/truck.jpg",
    name: "Toy Truck",

    value: 30
  },
  {
    img: "assets/images/rockinghorse.jpg",
    name: "Rocking Horse",

    value: 150
  },
  {
    img: "assets/images/starwars.jpg",
    name: "R-2 D-2",

    value: 50
  }
];

// Fake Store API
const productAPI = [];

//if error in fetch then use back-up array
fetch("https://fakestoreapi.com/products").then((res) => {
    if (res.ok) {
      return res.json(); // res ok
    }
    // otherwise error to catch
    throw new Error("Something went wrong, so using back-up array");
  })
  .then((data) => {
    data.forEach((item) => {
      productAPI.push({

        img: item.image,
        name: item.title,
        value: item.price

      });
    });

    // Use productAPI array
    if (productAPI && productAPI.length > 0) {
      productArray = productAPI;
    }

    //shuffle the productArray

    productArray.sort(() => 0.5 - Math.random());

    // slice out products

    productArray = productArray.slice(0, 9)
    //fill the board with products from API

    arrayBoard();

  })
  .catch((error) => {
    console.log(error.message);

    //else use and shuffle product back up array

    productArray.sort(() => 0.5 - Math.random());
    //fill the board with products from API

    arrayBoard();

  });

// Start button event listener
startButton.addEventListener("click", function () {

  // Set game variables to initial values
  totalCorrect = 0;
  totalWrong = 0;

  // Stop the timer
  clearInterval(timerId);
  // Timer variables
  currentTime = 60;
  timerId = null;

  // clear result elements

  resultDiv.innerText = "";
  resultDiv.className = "";
  resultDisplay.innerText = "";

  timerId = setInterval(countdown, 1000);

  countdown();

  //fill the board squares wih content

  fillBoard();

});

// Fill the board squares function
function fillBoard() {
  for (let i = 0; i < totalSquares; i++) {

    //clear previous content and reset square border style
    squares[i].style.border = "1px solid black";
    squares[i].innerHTML = "";

    //set pointer events to auto to enable clicks
    squares[i].style.pointerEvents = "auto";

    const product = document.createElement("img");
    product.setAttribute("src", productArray[i].img);

    product.setAttribute("data-id", i);

    product.classList.add("img-fluid");

    squares[i].appendChild(product);

    //  show product name and description

    product.title = productArray[i].name;

    const productName = document.createElement("h6");
    productName.innerText = productArray[i].name;
    squares[i].appendChild(productName);

    // Adjusted value by 10% up or down randomly and place to each square

    const adjValue = document.createElement("h5");
    adjValue.innerText =
      (productArray[i].value * (Math.random() < 0.5 ? 0.9 : 1.1)).toFixed(2) +
      " Is this price higher or lower than selling price?";

    squares[i].appendChild(adjValue);

    // choose one of two buttons to indicate if value is higher or lower

    const higherButton = document.createElement("button");
    higherButton.innerText = "Higher";
    higherButton.classList.add("btn", "btn-primary", "m-2");
    squares[i].appendChild(higherButton);

    const lowerButton = document.createElement("button");
    lowerButton.innerText = "Lower";
    lowerButton.classList.add("btn", "btn-success", "m-2");
    squares[i].appendChild(lowerButton);

    // indicate if they are correct or not

    // higher button event listener
    higherButton.addEventListener("click", function () {
      if (
        adjValue.innerText.includes("higher") &&
        adjValue.innerText.includes((productArray[i].value * 1.1).toFixed(2))
      ) {
        //place product value below the image after guess
        const actualValue = document.createElement("h5");
        actualValue.innerText =
          "Correct! The actual price is " + productArray[i].value.toFixed(2);
        squares[i].appendChild(actualValue);
        totalCorrect += 1;
        // disable further clicks on this square
        squares[i].style.pointerEvents = "none";
        // highlight square border to indicate correct guess
        squares[i].style.border = "10px solid yellow";
      } else {

        //highlight square border to indicate wrong guess
        squares[i].style.border = "2px solid red";

        //place product value below the image after wrong guess
        const actualValue = document.createElement("h5");
        actualValue.innerText =
          "Incorrect. The actual price is " + productArray[i].value.toFixed(2);
        squares[i].appendChild(actualValue);
        totalWrong += 1;
        // disable further clicks on this square
        squares[i].style.pointerEvents = "none";
        // highlight square border to indicate wrong guess
        squares[i].style.border = "10px solid red";
      }
      //display result after each guess
      resultDisplay.innerText =
        "Total Correct: " +
        totalCorrect +
        " / " +
        totalSquares +
        " | Total Wrong: " +
        totalWrong +
        " / " +
        totalSquares;
    });

    //lower button event listener
    lowerButton.addEventListener("click", function () {
      if (
        adjValue.innerText.includes("lower") &&
        adjValue.innerText.includes((productArray[i].value * 0.9).toFixed(2))
      ) {

        //place product value below the image after guess
        const actualValue = document.createElement("h5");
        actualValue.innerText =
          "Correct! The actual price is " + productArray[i].value.toFixed(2);
        squares[i].appendChild(actualValue);
        totalCorrect += 1;
        // disable further clicks on this square
        squares[i].style.pointerEvents = "none";

        //highlight square border to indicate correct guess
        squares[i].style.border = "10px solid yellow";
      } else {

        totalWrong += 1;
        //place product value below the image after wrong guess
        const actualValue = document.createElement("h5");
        actualValue.innerText =
          "Incorrect. The actual price is " + productArray[i].value.toFixed(2);
        squares[i].appendChild(actualValue);
        // disable further clicks on this square
        squares[i].style.pointerEvents = "none";
        //highlight square border to indicate wrong guess
        squares[i].style.border = "10px solid red";
      }
      //display result after each guess
      resultDisplay.innerText =
        "Total Correct: " +
        totalCorrect +
        " / " +
        totalSquares +
        " | Total Wrong: " +
        totalWrong +
        " / " +
        totalSquares;

    });
  }
  //  End of fillBoard function
}

function countdown() {
  // Check if total time is greater than 0 and less than the time allowed//
  //  and if all squares have been played //

  if (currentTime > 0 && totalCorrect + totalWrong === totalSquares) {
    // Stop the timer
    clearInterval(timerId);

    // Disable all buttons when game is completed
    squares.forEach((square) => {
      square.style.pointerEvents = "none";
    });

    // Display final result
    if (totalCorrect === totalSquares) {

      //Results dialog 

      resultDialog.classList.add("dialog");
      // Restuls text
      resultDialog.innerText = "Perfect Score! You got all " + totalCorrect + " correct!";
      //button text

      resultButton.innerText = "Return to game";

      // put button inside dialog

      resultDialog.appendChild(resultButton);

      // show dialog
      document.body.appendChild(resultDialog);
      resultDialog.showModal()

      // close dialog and return to game
      resultButton.addEventListener("click", () => {
        resultDialog.close()
      })

      resultDisplay.innerText =
        "Perfect Score! You got all " + totalCorrect + " correct!";
    } else {

      //Results dialog 

      resultDialog.classList.add("dialog");
      // Restuls text
      resultDialog.innerText = "You got " +
        totalCorrect +
        " correct and " +
        totalWrong +
        " wrong out of " +
        totalSquares +
        " products.";
      //button text

      resultButton.innerText = "Return to game";

      // put button inside dialog

      resultDialog.appendChild(resultButton);

      // show dialog
      document.body.appendChild(resultDialog);
      resultDialog.showModal()

      // close dialog and return to game
      resultButton.addEventListener("click", () => {
        resultDialog.close()
      })

      resultDisplay.innerText = "End of game,you got " +
        totalCorrect +
        " correct and " +
        totalWrong +
        " wrong out of " +
        totalSquares +
        " products.";
    }

    return;
  }

  if (totalCorrect + totalWrong === totalSquares) {
    if (totalCorrect === totalSquares) {
      //Results dialog 

      resultDialog.classList.add("dialog");
      // Restuls text
      resultDialog.innerText = "Perfect Score! You got all " + totalCorrect + " correct!";
      //button text

      resultButton.innerText = "Return to game";

      // put button inside dialog

      resultDialog.appendChild(resultButton);

      // show dialog
      document.body.appendChild(resultDialog);
      resultDialog.showModal()

      // close dialog and return to game
      resultButton.addEventListener("click", () => {
        resultDialog.close()
      })

      resultDisplay.innerText = "Perfect Score! You got all " + totalCorrect + " correct!";

    } else {

      //Results dialog 

      resultDialog.classList.add("dialog");
      // Restuls text
      resultDialog.innerText = "Game Over! You got " + totalCorrect +
        " correct and " +
        totalWrong +
        " wrong out of " +
        totalSquares +
        " products.";
      //button text

      resultButton.innerText = "Return to game";

      // put button inside dialog

      resultDialog.appendChild(resultButton);

      // show dialog
      document.body.appendChild(resultDialog);
      resultDialog.showModal()

      // close dialog and return to game
      resultButton.addEventListener("click", () => {
        resultDialog.close()
      })
      resultDisplay.innerText = "Game Over! You got " + totalCorrect +
        " correct and " +
        totalWrong +
        " wrong out of " +
        totalSquares +
        " products.";

    }
  }

  if (currentTime <= 0) {
    // Stop the timer
    clearInterval(timerId);
    // Time's up Game over
    // Disable all buttons when time is up
    squares.forEach((square) => {
      square.style.pointerEvents = "none";
    });
    //Results dialog 

    resultDialog.classList.add("dialog");
    // Restuls text
    resultDialog.innerText = "Time's up! You got " +
      totalCorrect +
      " correct and " +
      totalWrong +
      " wrong out of " +
      totalSquares +
      " products.";
    //button text

    resultButton.innerText = "Return to game";

    // put button inside dialog

    resultDialog.appendChild(resultButton);

    // show dialog
    document.body.appendChild(resultDialog);
    resultDialog.showModal()

    // close dialog and return to game
    resultButton.addEventListener("click", () => {
      resultDialog.close()
    })

    resultDisplay.innerText =
      "Time's up! You got " +
      totalCorrect +
      " correct and " +
      totalWrong +
      " wrong out of " +
      totalSquares +
      " products.";
    return;
  }
  // Decrease time by 1 second
  currentTime--;
  timeDisplay.innerHTML = currentTime;

  // End of countdown function
}

function arrayBoard() {
  for (let i = 0; i < totalSquares; i++) {

    //clear previous content and reset square border style
    squares[i].style.border = "1px solid black";
    squares[i].innerHTML = "";

    const product = document.createElement("img");
    product.setAttribute("src", productArray[i].img);

    product.setAttribute("data-id", i);

    product.classList.add("img-fluid");

    squares[i].appendChild(product);

    //  show product name and description

    product.title = productArray[i].name;

    const productName = document.createElement("h6");
    productName.innerText = productArray[i].name;
    squares[i].appendChild(productName);

    // show game question

    const adjValue = document.createElement("h5");
    adjValue.innerText = " Guess 10 % higher or lower?";
    squares[i].appendChild(adjValue);

  }
  // End of initial fill grid function
}