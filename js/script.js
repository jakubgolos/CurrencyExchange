console.log("Hejka")

let formElement = document.querySelector(".js-form")
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let sumElement = document.querySelector(".js-sum");

let EUR = 4.4738;
let USD = 3.9117;
let GBP = 4.9309;
let CHF = 4.1677;
let JPY = 3.6590;

formElement.addEventListener("submit", (event) => {
      event.preventDefault();

      let amount = amountElement.value;
      let currency = currencyElement.value;
      let _sum;

      switch (currency) {

            case "EUR":
                  _sum = +amount / EUR;
                  break;

            case "USD":
                  _sum = +amount / USD;
                  break;

            case "GBP":
                  _sum = +amount / GBP;

            case "CHF":
                  _sum = +amount / CHF;

            case "JPY":
                  _sum = +amount / JPY;

      }

      sumElement.innerText = `Cebulion w obcej walucie wynosi: ${_sum.toFixed(2)} ${currency}`;
});