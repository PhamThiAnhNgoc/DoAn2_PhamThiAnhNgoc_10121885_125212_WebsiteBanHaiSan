const cart = document.querySelector(".cart__table--item");

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", start);
 } 
else {
    start();
}

function start() {
    addEvents();
  }
  
  
  function update() {
    addEvents();
    updateTotal();
    grandTotal();
    
  }
  
  function addEvents() {
    // Remove items from cart
    let cartRemove_btns = document.querySelectorAll(".item__title-delete");
    console.log(cartRemove_btns);
    cartRemove_btns.forEach((btn) => {
      btn.addEventListener("click", handle_removeCartItem);
    });
    // Change item quantity
  let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
  cartQuantity_inputs.forEach((input) => {
    input.addEventListener("change", handle_changeItemQuantity);
  });
}
  function handle_removeCartItem() {
    document.querySelector(".cart__table--item").remove();
    update();
  }
  function handle_changeItemQuantity() {
    if (isNaN(this.value) || this.value < 1) {
      this.value = 1;
    }
    this.value = Math.floor(this.value); // để giữ nó là số nguyên
  
    update();
  }

function updateTotal() {
    let cartBoxes = document.querySelectorAll(".cart__table--item");
    const totalElement = cart.querySelector(".price");
    let total = 0;
    cartBoxes.forEach((cartBox) => {
      let priceElement = cartBox.querySelector(".item__price");
      let price = parseFloat(priceElement.innerHTML);
      let quantity = cartBox.querySelector(".cart-quantity").value;
      total += price * quantity;
    });
  
    //Giữ 3 chữ số sau dấu thập phân
    total = total.toFixed(3);
    
    totalElement.innerHTML =total;
  }
