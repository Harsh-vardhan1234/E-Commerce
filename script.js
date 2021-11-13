var removeButton = document.getElementsByClassName("removebtn")


for(var i=0; i<removeButton.length; i++){
    var singleButton = removeButton[i]
    singleButton.addEventListener("click",(e)=>{
        var clickedbtn = e.target;
        clickedbtn.parentElement.parentElement.remove()
        updateprice()
    })
}

var inputQuant = document.getElementsByClassName("cart-quantity")
for(var i=0; i<inputQuant.length;i++){
    var singleButton = inputQuant[i];
    singleButton.addEventListener("change",(e)=>{
            updateprice()
    })
}

function updateprice(){
    var cartprice = document.getElementsByClassName("cart-price");
    var cartquantity = document.getElementsByClassName("cart-quantity");
    var totalPrice = 0;

    for(var i=0; i<cartprice.length; i++){
        var priceCode = cartprice[i];
        var quantity = cartquantity[i].value
        var price = priceCode.innerHTML.replace("₹","")
        
         
        totalPrice = totalPrice + price*quantity;
        

    }
    var total = document.querySelector(".total");
    total.innerHTML = "Total : ₹"+totalPrice
}
updateprice()

var addToCartbtn = document.getElementsByClassName("add")

 for(var i=0; i<addToCartbtn.length; i++){
     var singleButton = addToCartbtn[i];
     singleButton.addEventListener("click",(e)=>{
         var clickedbtn = e.target;
         var productCode = clickedbtn.parentElement.parentElement;
       var productname = productCode.getElementsByClassName("productnam")[0].innerHTML
       console.log(productname)
       var productprice = productCode.getElementsByClassName("p")[0].innerHTML.replace( "Price: ₹" ,"").replace("," , "")
       console.log(productprice)
       addToCart(productname,productprice)
     })
    
 }

 function addToCart(name , price){
     var newRow = document.createElement('tr');
     var completeTable = document.querySelector("table");
     var cproducts = completeTable.getElementsByClassName("n");
    for(var i = 0; i<cproducts.length; i++){
        var prodname = cproducts[i].innerHTML;
        if(
            prodname == name
        ){
            alert("Product is already in the cart .!!")
            return;
        }
    }
     var newProductDate = ` <td class="n">${name}</td>
  <td class="cart-price">₹${price}</td>
        <td><input class="cart-quantity" type="number" value="1" min="1"></td>
        <td><button id="h10"class="removebtn">Remove</button></td>`

        newRow.innerHTML = newProductDate;
        completeTable.append(newRow);
        updateprice()

        var removeButton = document.getElementsByClassName("removebtn")


        for(var i=0; i<removeButton.length; i++){
            var singleButton = removeButton[i]
            singleButton.addEventListener("click",(e)=>{
                var clickedbtn = e.target;
                clickedbtn.parentElement.parentElement.remove()
                updateprice()
            })
        }
        var inputQuant = document.getElementsByClassName("cart-quantity")
for(var i=0; i<inputQuant.length;i++){
    var singleButton = inputQuant[i];
    singleButton.addEventListener("change",(e)=>{
            updateprice()
    })
}

 }