'use-strict';
function calculatePrices(products) {
    let totalAmount = 0;
    let prices = getPrices(); // getting prices from JSON
    let basketItems = filterItemsSeparetly(products, prices); // filtering items to return product and quantity
    //Calculating prices
    prices.forEach((product) => {

        let price = parseFloat(product.Price);
        if (product.Code === "VOUCHER") {
            totalAmount += getVoucherPriceAfterOffer(basketItems.VOUCHER, price)
        } else if (product.Code === "TSHIRT") {
            totalAmount += getTshirtPriceAfterOffer(basketItems.TSHIRT, price);
        } else {
            totalAmount += basketItems[product.Code] * price; // for others multiple price by quantity
        }
    });
    console.log(totalAmount)
    return totalAmount;
}
// Separte function to calculate offer prices if offer changes later
function getVoucherPriceAfterOffer(noOfItems, price) {
    return price * (Math.floor(noOfItems / 3) * 2 + (noOfItems % 3));
}
// Separte function to calculate offer prices if offer changes later
function getTshirtPriceAfterOffer(noOfItems, price) {
    return noOfItems >= 3 ? (price - 1) * noOfItems : price * noOfItems;
}
// filtering items to return product and quantity
function filterItemsSeparetly(selectedProducts, prices) {
    let basketItems = {};
    prices.forEach((product) => {
        let quantity = selectedProducts.filter((selProd) => {
            return selProd === product.Code;
        });
        basketItems[product.Code] = quantity.length;
    })
    return basketItems;
}
// function to return prices
function getPrices() {
    return [{
        Code: "VOUCHER",
        Name: "NoviCap Voucher",
        Price: "5.00"
    }, {
        Code: "TSHIRT",
        Name: "NoviCap T-Shirt",
        Price: "20.00"
    }, {
        Code: "MUG",
        Name: "NoviCap Coffee Mug",
        Price: "7.50"
    }]
}
export { calculatePrices }