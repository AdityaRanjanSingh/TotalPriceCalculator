'use-strict';
class co {

    constructor(priceList) {
        this.priceList = priceList;
        this.vouchers = 0;
        this.tShirts = 0;
        this.total = 0;
    }
    scan(item) {
        if (item === "VOUCHER") {
            let product = this.priceList.find((a) => {
                return a.Code === item
            })
            if (this.vouchers === 2) {
                this.total += 0;
            } else {
                this.total += parseFloat(product.Price);
            }
            this.vouchers++;
        } else if (item === "TSHIRT") {
            let product = this.priceList.find((a) => {
                return a.Code === item
            })
            if (this.tShirts > 2) {
                this.total += parseFloat(product.Price) - 1;
            } else if (this.tShirts === 2) {
                this.total -= 2;
                this.total += parseFloat(product.Price) - 1;
            } else {
                this.total += parseFloat(product.Price);
            }
            this.tShirts++;
        } else {
            let product = this.priceList.find((a) => {
                return a.Code === item
            })
            this.total += parseFloat(product.Price);
        }
    }
}

module.exports.co = co;