
const { co } = require('../CalculateTotalPrice')
let prices = [{
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

describe("Test all the positive scenarios", function () {
    it("tests the first test case of example", function () {
        let priceCal = new co(prices)
        priceCal.scan("VOUCHER")
        priceCal.scan("TSHIRT")
        priceCal.scan("MUG")
        expect(priceCal.total).toBe(32.50);
    });

    it("tests the second test case of example", function () {
        let priceCal = new co(prices)
        priceCal.scan("TSHIRT")
        priceCal.scan("TSHIRT")
        priceCal.scan("TSHIRT")
        priceCal.scan("TSHIRT")
        priceCal.scan("VOUCHER")
        expect(priceCal.total).toBe(81.00);
    });
    it("tests the third test case of example", function () {
        let priceCal = new co(prices)
        priceCal.scan("VOUCHER")
        priceCal.scan("TSHIRT")
        priceCal.scan("MUG")
        expect(priceCal.total).toBe(32.50);
    });
});
describe("Test all the negetive scenarios", function () {
    it("tests the first test case of example", function () {
        let priceCal = new co(prices)
        priceCal.scan("VOUCHER")
        priceCal.scan("TSHIRT")
        priceCal.scan("VOUCHER")
        expect(priceCal.total).not.toBe(25.00);
    });
})