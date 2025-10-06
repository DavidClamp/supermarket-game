// Create Products array
const productArray = [
    { name: "Product One", img: "assets/images/athletes.webp" },
    { name: "Product Two", img: "assets/images/girls.webp" },
    { name: "Product Three", img: "assets/images/man.webp" },
 { name: "Product Four", img: "assets/images/mud-run.webp" },
    { name: "Product Five", img: "assets/images/reasons-image.webp" },
    { name: "Product Six", img: "assets/images/runner1.webp" },
    { name: "Product Seven", img: "assets/images/runner2.webp" },
    { name: "Product Eight", img: "assets/images/runner3.webp" },
    { name: "Product Nine", img: "assets/images/runner4.webp" },
]
console.log(productArray);

// productArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid")
console.log(gridDisplay);

function createBoard() {
    for (let i = 0; i < productArray.length; i++) {
        const product = document.createElement("img");
        product.setAttribute("src", "assets/images/man.webp");
        product.setAttribute("data-id", i);
        product.style.width= "300px";
        product.style.height = "300px";        
     //   product.addEventListener("click", flipProduct);
        gridDisplay.appendChild(product);
    }   
}
createBoard()
