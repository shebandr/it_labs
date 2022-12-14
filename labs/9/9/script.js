var N = document.getElementsByClassName("card").length
console.log(N)

var shop = []
for (var i = 0; i < N; i++) {
    shop[i] = 0;
}
var cards = []
// for(var i=0; i<N;i++){
//     shop[i]=0
//     cards[i]=document.getElementById("c"+i)
// //    cards[i].addEventListener('click', () => shopping(i))
//     console.log(i)
// }
var ocb = document.getElementById("open_cart")
ocb.addEventListener('click', () => opening_cart())
var ccl = document.getElementById("clear_cart")
ccl.addEventListener('click', () => clear_cart())
var cb = document.getElementById("cart_back")
cb.addEventListener('click', () => closing_cart())
function shopping(q) {
    console.log(q)
    shop[q]++
    last = q

}
function closing_cart() {
    var cart = document.getElementById("cart")
    var cart_back = document.getElementById("cart_back")
    cart.style.display = "none"
    cart_back.style.display = "none"
    var inner_strings = document.getElementById("inner_strings")
    inner_strings.remove()

}

function opening_cart() {
    var cart = document.getElementById("cart")
    var cart_back = document.getElementById("cart_back")
    cart.style.display = "block"
    cart_back.style.display = "block"
    var inner_strings = document.createElement("div")
    inner_strings.id = "inner_strings"
    cart.append(inner_strings)
    var c = 0;
    for (var i = 0; i < 12; i++) {
        if (shop[i] != 0) {
            c++
            var element = document.createElement("div")
            element.className = "string_shop"
            element.innerText = i + " предмета " + shop[i] + " штук"
            inner_strings.append(element)
        }
    }
    if (c != 0) {
        var buy_button = document.createElement("button")
        buy_button.id = "buy_button"
        buy_button.innerHTML = "оплатить"
        inner_strings.append(buy_button)
    } else {
        var error = document.createElement("div")
        error.id = "error"
        error.innerHTML="корзина пуста, выберите что-либо в списке товаров"
        inner_strings.append(error)
    }
}

function clear_cart() {
    for (var q = 0; q < N; q++) {
        shop[q] = 0
    }
}

