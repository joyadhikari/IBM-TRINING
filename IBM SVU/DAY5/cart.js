let cartData = JSON.parse(localStorage.getItem("cartData"))

function showData(data) {

    document.getElementById("products").innerHTML="";

    data.forEach((element,i) => {
        let productBox = document.createElement("div");
        productBox.className = "product-box";
    
        let heading = document.createElement("h3");
        heading.innerText = element.category;
    
        let img = document.createElement("img");
        img.src = element.image;
    
        let name = document.createElement("p");
        name.innerText = element.name;
    
        let price = document.createElement("p");
        price.innerText = element.price;
    
        let rating = document.createElement("p");
        rating.innerText = element.rating;
    
        let button = document.createElement("button");
        button.innerText = "Delete";
        button.addEventListener("click", () => {
          deleteFun(element, i);
        });
        productBox.append(heading, img, name, price, rating, button);
        document.getElementById("products").append(productBox);
    });
}

showData(cartData)

function deleteFun(element,i){
    // console.log(cart);

    let deleteCartData = JSON.parse(localStorage.getItem("Datacart"));
    deleteCartData.splice(index, 1);
    console.log(deleteCartData)
    localStorage.setItem("datacart", JSON.stringify(deleteCartData));
    showData(deleteCartData);

}