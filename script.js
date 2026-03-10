function addToCart(){
localStorage.setItem("cart","Aura Phototherapy Device");
window.location.href="checkout.html";
}

window.onload = function(){
let item = localStorage.getItem("cart");
if(item){
document.getElementById("cartItem").innerText = item;
}
}

function completePurchase(event){
event.preventDefault();
alert("Thank you! Your order has been placed.");
localStorage.clear();
}
