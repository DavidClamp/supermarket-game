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
console.log(productArray);

// // productArray.sort(() => 0.5 - Math.random());


console.log(grid);

function fillBoard() {
    for (let i = 0; i < productArray.length; i++) {
        const product = document.createElement("img");
        product.setAttribute("src", productArray[i].img);
        
    product.setAttribute("data-id", i);
    //    product.setAttribute("value", value);
       product.style.width= "100px";
       product.style.height = "150px";        
     // product.addEventListener("click", pickProduct);
        squares[i].appendChild(product);
    }   
}
fillBoard()

// function pickProduct() {
//     const productId = this.getAttribute("data-id");
//     console.log(productArray[productId].name);
//     this.setAttribute("src", productArray[productId].img);
//    // this.style.border = "5px solid red";
// }
