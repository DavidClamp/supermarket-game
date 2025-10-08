  const grid = document.querySelector('.grid');
  const squares = document.querySelectorAll('.square');
         
const resultDisplay = document.querySelector('#result');

// Create Products array
const productArray = [
    { name: "Product One", img: "assets/images/athletes.webp", value: 10 },
    { name: "Product Two", img: "assets/images/girls.webp",value: 20 },
    { name: "Product Three", img: "assets/images/man.webp", value: 30 },
 { name: "Product Four", img: "assets/images/mud-run.webp", value: 40 },
    { name: "Product Five", img: "assets/images/reasons-image.webp", value: 50 },
    { name: "Product Six", img: "assets/images/runner1.webp"    , value: 60 },
    { name: "Product Seven", img: "assets/images/runner2.webp" , value: 70 },
    { name: "Product Eight", img: "assets/images/runner3.webp", value: 80 },
    { name: "Product Nine", img: "assets/images/runner4.webp", value: 90 },
]


//  productArray.sort(() => 0.5 - Math.random());


//console.log(grid);
// Fill the board with photos
function fillBoardPhotos() {
    for (let i = 0; i < productArray.length; i++) {
        const product = document.createElement("img");
        product.setAttribute("src", productArray[i].img);
        console.log(productArray[i].value);
       product.setAttribute("data-id", i);
       product.style.width= "100px";
       product.style.height = "100px";        
       product.addEventListener("click", pickProductImage);
        squares[i].appendChild(product);

//add product value to each square
       const productValue = document.createElement("div");
     //  productValue.classList.add("product-value");
     productValue.innerText = " is the selling price = " + productArray[i].value + "?";
   //    productValue.innerText =  productArray[i].value;
       squares[i].appendChild(productValue);

    }   
}
       









fillBoardPhotos()

// Pick product via click
function pickProductImage() {
    const productId = this.getAttribute("data-id");
   this.style.border = "1px solid red";
}
// Pick square via click
function pickSquare() {
    const square = this.getAttribute("data-id");
   this.style.border = "1px solid yellow";
    this.style.width = "100px";
    this.style.height= "150px";
}
    



// fill board with question and responses
// function fillBoardValue() {
//     for (let j = 0; j < productArray.length; j++) {
//         const productValue = document.querySelector(".square");
//         productValue.innerText = "setAttribute("productArray[j].value")
//         squares[j].appendChild(productValue);
//     }   
// }
// fillBoardValue()

createElement("div");
productValue.classList.add("product-value");
productValue.innerText = productArray[j].value;
squares[j].appendChild(productValue);   


