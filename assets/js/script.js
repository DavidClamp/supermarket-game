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
const totalSquares = squares.length;

// Create Products array
const productArray = [{
    name: "Product One",
    img: "assets/images/athletes.webp",
    value: 10,
  },
  {
    name: "Product Two",
    img: "assets/images/girls.webp",
    value: 20,
  },
  {
    name: "Product Three",
    img: "assets/images/man.webp",
    value: 30,
  },
  {
    name: "Product Four",
    img: "assets/images/mud-run.webp",
    value: 40,
  },
  {
    name: "Product Five",
    img: "assets/images/reasons-image.webp",
    value: 50,
  },
  {
    name: "Product Six",
    img: "assets/images/runner1.webp",
    value: 60,
  },
  {
    name: "Product Seven",
    img: "assets/images/runner2.webp",
    value: 70,
  },
  {
    name: "Product Eight",
    img: "assets/images/runner3.webp",
    value: 80,
  },
  {
    name: "Product Nine",
    img: "assets/images/runner4.webp",
    value: 90,
  },
];
// Shuffle the products array

productArray.sort(() => 0.5 - Math.random());

// Fill the board squares

fillBoard();



// Set up timer variables

//   let currentTime = 60;
//  let timerId = null;



// Start button event listener
startButton.addEventListener("click", function () {
  // Set game variables 
  totalCorrect = 0;
  totalWrong = 0;

  resultDisplay.innerText = "";
  squares.forEach((square) => {
    square.style.pointerEvents = "auto";

    // Clear previous content reset square border style
    square.innerHTML = "";
    square.style.border = "1px solid black";
  });
  //set currentTime to 60 and start countdown

  currentTime = 60;
  timerId = setInterval(countdown, 1000);
  countdown(); // Start the countdown

  //fill the board squares again

  fillBoard();
});

// Reset button event listener  
resetButton.addEventListener("click", function () {
  // Reset game variables 
  totalCorrect = 0;
  totalWrong = 0;
  resultDisplay.innerText = "";
  squares.forEach((square) => {
    square.style.pointerEvents = "auto";

    //  Clear previous content reset square border style
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
  for (let i = 0; i < productArray.length; i++) {
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
        squares[i].style.pointerEvents = "none"; // disable further clicks on this square
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
        squares[i].style.pointerEvents = "none"; // disable further clicks on this square
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

     // Display final result when all squares have been played

      if (totalCorrect + totalWrong === totalSquares) {
        if (totalCorrect === totalSquares) {
          resultDisplay.innerText =
            "Perfect Score! You got all " + totalCorrect + " correct! out of " + totalSquares + " products.";
        } else {
          resultDisplay.innerText =
            "Game Over! You got " +
            totalCorrect +
            " correct and " +
            totalWrong +
            " wrong out of " + totalSquares + " products.";
        }
      }
     
    });
//end of fillboard function

    
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
            "Perfect Score! You got all " + totalCorrect + " correct! out of " + totalSquares + " products.";
        } else {
          resultDisplay.innerText =
            "Game Over! You got " +
            totalCorrect +
            " correct and " +
            totalWrong +
            " wrong out of " + totalSquares + " products.";
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

alert("You have completed the game before time is up!");
// Disable all buttons when game is completed
   squares.forEach((square) => {
      square.style.pointerEvents = "none";
    });
  }

//     resultDisplay.innerText =
//       "You have completed the game before time is up!"; 

//       // Display final result
//     if (totalCorrect === totalSquares) {
//       resultDisplay.innerText =
//         "Before !Perfect Score! You got all " + totalCorrect + " correct! out of " + totalSquares + " products." <br> You win a prize!";
//     } else {
//       resultDisplay.innerText =
//         "Before !Game Over! You got " + totalCorrect + " correct and " + totalWrong + " wrong out of " + totalSquares + " products.";
//     }   

//     return;
//   } 
  
  // Check if time has run out


if (currentTime <= 0) {
  // Stop the timer
    clearInterval(timerId);
  // Time's up Game over
   alert("Time's up! Game over.");
  
      // Disable all buttons when time is up
    squares.forEach((square) => {
      square.style.pointerEvents = "none";


    });
    // Display result when time is up
    resultDisplay.innerText =
      "Time's up! You got " + totalCorrect + " correct and " + totalWrong + " wrong out of " + totalSquares + " products.";



    // Display final result
    if (totalCorrect === totalSquares) {
      resultDisplay.innerText =
        "Perfect Score! You got all " + totalCorrect + " correct! out of " + totalSquares + " products."<br> "You win a prize!";
    } else {
      resultDisplay.innerText =
        "Game Over! You got " + totalCorrect + " correct and " + totalWrong + " wrong out of " + totalSquares + " products.";
    }

    return;
  }
  // Decrease time by 1 second  
    currentTime--;
  timeDisplay.innerHTML = currentTime;

 

// End of countdown function
}

