const grid = document.querySelector(".grid");
const squares = document.querySelectorAll(".square");

const resultDisplay = document.querySelector("#result");

const timeDisplay = document.querySelector("#time-left");

// Get start and reset buttons
const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");

// Game variables
let productChosen = [];
let productChosenId = [];

let totalCorrect = 0;
let totalWrong = 0;
let totalSquares = squares.length;

// Create Products array

// Each product has an image, name, and value

// Values are arbitrary for demonstration purposes

// In a real game, these would be the actual selling prices
// of the products
// Product images are placeholders and should be replaced with actual product images
// in a real game
// Product names are also placeholders
// and should be replaced with actual product names in a real game
// Product values are arbitrary and should be replaced with actual selling prices
// in a real game
// Example product array
// Shuffle the products array before filling the board
// to ensure random placement each game
// Product array

var productArray = [
  {
    img: "assets/images/athletes.webp",
    name: "Product One",

    value: 10,
  },
  {
    img: "assets/images/girls.webp",
    name: "Product Two",

    value: 20,
  },
  {
    img: "assets/images/man.webp",
    name: "Product Three",

    value: 30,
  },
  {
    img: "assets/images/mud-run.webp",
    name: "Product Four",

    value: 40,
  },
  {
    img: "assets/images/reasons-image.webp",
    name: "Product Five",

    value: 50,
  },
  {
    img: "assets/images/runner1.webp",
    name: "Product Six",
    value: 60,
  },
  {
    img: "assets/images/runner2.webp",
    name: "Product Seven",

    value: 70,
  },
  {
    img: "assets/images/runner3.webp",
    name: "Product Eight",

    value: 80,
  },
  {
    img: "assets/images/runner4.webp",
    name: "Product Nine",

    value: 90,
  },
];

//use API to get product data in real game
// For demonstration, using static data

//API integration can be added later

//Try API like Fake Store API or others for product data
const productAPI =[]
// fetch("https://fakestoreapi.com/products?limit=9")
//   .then((res) => res.json())
//   .then(data =>  productAPI.push(...data.map((item) => ({  
//     img: item.image,
//      name: item.title,
//      value: item.price,
//      }))));

 //try to log productAPI after fetch
fetch("https://fakestoreapi.com/products?limit=9")
  .then((res) => res.json())
  .then((data) => { 
    data.forEach((item) => {
      productAPI.push({...{ 
                img: item.image,  
        name: item.title,
        value: item.price,
      }});
    });

    // Now you can use productAPI here or call fillBoard() if needed
    //if (productAPI.length === totalSquares) { 
      
    
 productArray = productAPI;
 //shuffle the productArray

 productArray.sort(() => 0.5 - Math.random());
 //fill the board with products from API

  fillBoard();
  });
 
// Start button event listener
startButton.addEventListener("click", function () {
  
  // Set game variables to initial values
  totalCorrect = 0;
  totalWrong = 0;

  resultDisplay.innerText = "";

  squares.forEach(function (square) {
    square.style.pointerEvents = "auto";
    // Clear previous content reset square border style
    square.innerHTML = "";
    square.style.border = "1px solid black";
  });
  //set currentTime back to 60 and restart countdown
  currentTime = 60;
  timerId = setInterval(countdown, 1000);

  countdown();

  //fill the board squares again

  fillBoard();
});

// Reset button event listener
resetButton.addEventListener("click", function () {
  // Reset game variables to initial values
  totalCorrect = 0;
  totalWrong = 0;
  resultDisplay.innerText = "";
//pointer events to auto to enable clicks again



  squares.forEach(function (square) {
    square.style.pointerEvents = "auto";
    // Clear previous content reset square border style
    square.innerHTML = "";
    square.style.border = "1px solid black";
  });
  //set currentTime back to 60 and restart countdown
  currentTime = 60;
  timerId = setInterval(countdown, 1000);
  countdown(); // Start the countdown

  //fill the board squares again

  fillBoard();
});

// Fill the board squares function
function fillBoard() {
  for (let i = 0; i < totalSquares; i++) {
    
    const product = document.createElement("img");
    product.setAttribute("src", productArray[i].img);
    
    product.setAttribute("data-id", i);
    product.style.width = "100px";
    product.style.height = "100px";
    // product.addEventListener("click", pickProductImage);
    squares[i].appendChild(product);
   

    //hover effect to show product name


    product.title = productArray[i].name;
    product.addEventListener("mouseover", function () {
      const productName = document.createElement("h4");
      productName.innerText = productArray[i].name;
      squares[i].appendChild(productName);
    });

    //hover out to remove product name
    product.addEventListener("mouseout", function () {
      const productName = squares[i].querySelector("h4");
      if (productName) {
        squares[i].removeChild(productName);
      }
    });

    // Adjusted value by 10% up or down randomly and place to each square

    const adjValue = document.createElement("h5");
    adjValue.innerText =
      (productArray[i].value * (Math.random() < 0.5 ? 0.9 : 1.1)).toFixed(2) +
      " Is this price higher or lower than selling price?";

    squares[i].appendChild(adjValue);

    // choose one of two buttons to indicate if value is higher or lower than actual value

    const higherButton = document.createElement("button");
    higherButton.innerText = "Higher";
    higherButton.style.margin = "5px";
    squares[i].appendChild(higherButton);

    const lowerButton = document.createElement("button");
    lowerButton.innerText = "Lower";
    lowerButton.style.margin = "5px";
    squares[i].appendChild(lowerButton);

    // if user clicks on higher or lower button, indicate if they are correct or not
    // disable event listener to buttons after one click



    
    //higher button event listener
     higherButton.addEventListener("click", function () {
      if (
        adjValue.innerText.includes("higher") &&
        adjValue.innerText.includes((productArray[i].value * 1.1).toFixed(2))
      ) {
        alert(
          "Correct! The actual price is " + productArray[i].value.toFixed(2)
        );

        //place product value below the image after guess
        const actualValue = document.createElement("h4");
        actualValue.innerText =
          "Correct! The actual price is " + productArray[i].value.toFixed(2);
        squares[i].appendChild(actualValue);
        totalCorrect += 1;
        // disable further clicks on this square
        squares[i].style.pointerEvents = "none";
        // highlight square border to indicate correct guess
        squares[i].style.border = "2px solid green";
      } else {
        alert(
          "Incorrect. The actual price is " + productArray[i].value.toFixed(2)
        );
        //highlight square border to indicate wrong guess
        squares[i].style.border = "2px solid red";

        //place product value below the image after guess
        const actualValue = document.createElement("h4");
        actualValue.innerText =
          "Incorrect. The actual price is " + productArray[i].value.toFixed(2);
        squares[i].appendChild(actualValue);
        totalWrong += 1;
        // disable further clicks on this square
        squares[i].style.pointerEvents = "none";
        // highlight square border to indicate wrong guess
        squares[i].style.border = "2px solid red";
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
        alert(
          "Correct! The actual price is " + productArray[i].value.toFixed(2)
        );

        //place product value below the image after guess
        const actualValue = document.createElement("h4");
        actualValue.innerText =
          "Correct! The actual price is " + productArray[i].value.toFixed(2);
        squares[i].appendChild(actualValue);
        totalCorrect += 1;
        // disable further clicks on this square
        squares[i].style.pointerEvents = "none";

        //highlight square border to indicate correct guess
        squares[i].style.border = "2px solid green";
      } else {
        alert(
          "Incorrect. The actual price is " + productArray[i].value.toFixed(2)
        );
        totalWrong += 1;
        //place product value below the image after guess
        const actualValue = document.createElement("h4");
        actualValue.innerText =
          "Incorrect. The actual price is " + productArray[i].value.toFixed(2);
        squares[i].appendChild(actualValue);
        // disable further clicks on this square
        squares[i].style.pointerEvents = "none";
        //highlight square border to indicate wrong guess
        squares[i].style.border = "2px solid red";
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

      // Display final result when all squares have been played

             if (totalCorrect + totalWrong === totalSquares) {
           if (totalCorrect === totalSquares) {
            
          resultDisplay.innerText =
            "Perfect Score! You got all " + totalCorrect + " correct!";
            } else {
          resultDisplay.innerText =
            "Game Over! You got " +
            totalCorrect +
            " correct and " +
            totalWrong +
            " wrong out of " +
            totalSquares +
            " products.";
           }
            }
    });
  }
 
}

// Pick product via click
function pickProductImage() {
  const productId = this.getAttribute("data-id");
  this.style.border = "1px solid red";
}

// // Pick square via click
function pickSquare() {
  const square = this.getAttribute("data-id");
  this.style.border = "1px solid yellow";
  this.style.width = "100px";
  this.style.height = "150px";
}

function countdown() {
  // Check if total time is greater than 0 and less than 60 seconds and if all squares have been played

  if (currentTime > 0 && totalCorrect + totalWrong === totalSquares) {
    // Stop the timer
    clearInterval(timerId);

    //alert("You have completed the game before time is up!");
    // Disable all buttons when game is completed
    squares.forEach((square) => {
      square.style.pointerEvents = "none";
    });

    // Display final result
    if (totalCorrect === totalSquares) {
      resultDisplay.innerText =
        "Perfect Score! You got all " + totalCorrect + " correct!";
    } else {
      resultDisplay.innerText =
        "End game,You got " +
        totalCorrect +
        " correct and " +
        totalWrong +
        " wrong out of " +
        totalSquares +
        " products.";
    }

    return;
  }

  if (currentTime <= 0) {
    // Stop the timer
    clearInterval(timerId);
    // Time's up Game over
    // Disable all buttons when time is up
    squares.forEach((square) => {
      square.style.pointerEvents = "none";
    });
    // Display result when time is up
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