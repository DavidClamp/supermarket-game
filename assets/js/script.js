const grid = document.querySelector(".grid");
const squares = document.querySelectorAll(".square");

const resultDisplay = document.querySelector("#result");

// Game variables
let productChosen = [];
let productChosenId = [];           

let totalCorrect = 0;
let totalWrong = 0; 
const totalSquares = squares.length;


// Create Products array
const productArray = [
  { name: "Product One", img: "assets/images/athletes.webp", value: 10 },
  { name: "Product Two", img: "assets/images/girls.webp", value: 20 },
  { name: "Product Three", img: "assets/images/man.webp", value: 30 },
  { name: "Product Four", img: "assets/images/mud-run.webp", value: 40 },
  { name: "Product Five", img: "assets/images/reasons-image.webp", value: 50 },
  { name: "Product Six", img: "assets/images/runner1.webp", value: 60 },
  { name: "Product Seven", img: "assets/images/runner2.webp", value: 70 },
  { name: "Product Eight", img: "assets/images/runner3.webp", value: 80 },
  { name: "Product Nine", img: "assets/images/runner4.webp", value: 90 },
];

//  productArray.sort(() => 0.5 - Math.random());

//console.log(grid);
// Fill the board with photos
function fillBoardPhotos() {
  for (let i = 0; i < productArray.length; i++) {
    const product = document.createElement("img");
    product.setAttribute("src", productArray[i].img);
    product.setAttribute("data-id", i);
    product.style.width = "100px";
    product.style.height = "100px";
    product.addEventListener("click", pickProductImage);
    squares[i].appendChild(product);

    // Adjusted value by 10% up or down randomly and place to each square
  
    const adjValue = document.createElement("h5");
    adjValue.innerText =
      " Is this price higher or lower than selling price?" +
      (productArray[i].value * (Math.random() < 0.5 ? 0.9 : 1.1)).toFixed(2);
    console.log(adjValue);
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
    higherButton.addEventListener("click", function() {
        if (adjValue.innerText.includes("higher") && adjValue.innerText.includes((productArray[i].value * 1.1).toFixed(2))) {
            alert("Correct! The actual price is " + productArray[i].value.toFixed(2));  
            totalCorrect += 1;
       //   resultDisplay.innerText = "Total Correct: " + totalCorrect + " / " + totalSquares;
        } else {
            alert("Incorrect. The actual price is " + productArray[i].value.toFixed(2));  
            totalWrong += 1;
       //  resultDisplay.innerText = "Total Correct: " + totalCorrect + " / " + totalSquares + " | Total Wrong: " + totalWrong+ " / " + totalSquares;
        }   
       //   resultDisplay.innerText = "Total Correct: " + totalCorrect + " / " + totalSquares;
          resultDisplay.innerText = "Total Correct: " + totalCorrect + " / " + totalSquares + " | Total Wrong: " + totalWrong+ " / " + totalSquares;
    });
    lowerButton.addEventListener("click", function() {
        if (adjValue.innerText.includes("lower") && adjValue.innerText.includes((productArray[i].value * 0.9).toFixed(2))) {
            alert("Correct! The actual price is " + productArray[i].value.toFixed(2));              
        } else {
            alert("Incorrect. The actual price is " + productArray[i].value.toFixed(2));  
        }           
    });

    //
    

    //is the adjusted value higher or lower than the actual value?

    //    let higherLower = adjValue > productArray[i].value ? "higher" : "lower";
    //    console.log(higherLower);

    //    //place adjusted value to each square
    //    const adjProductValue = document.createElement("h5");
    //    adjProductValue.innerText = " Your guess is " + higherLower + " than " + adjValue.toFixed(2);
    //     squares[i].appendChild(adjProductValue);

    //place product value to each square
    // const productValue = document.createElement("h5");
    // productValue.innerText =
    //   " Correct value = " + productArray[i].value.toFixed(2);
    // console.log(productValue);
    // squares[i].appendChild(productValue);
  }
}

fillBoardPhotos();

// Pick product via click
function pickProductImage() {
  const productId = this.getAttribute("data-id");
  this.style.border = "1px solid red";
}
// Function to add to each square a value that is either 10% higher or lower than the actual product value

// function placeValue() {
  // const value = this.getAttribute("data-id");
  //console.log(value);
  // Adjusted value by 10% up or down randomly
  // adjValue = productArray[1].value * (Math.random() < 0.5 ? 0.9 : 1.1);
  // console.log(adjValue);
// }


// // Pick square via click
// function pickSquare() {
//     const square = this.getAttribute("data-id");
//    this.style.border = "1px solid yellow";
//     this.style.width = "100px";
//     this.style.height= "150px";
// }
