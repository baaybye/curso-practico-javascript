/* Descuentos _______________________________________________________________ */
function calculatePriceWithDiscount(originalPrice, discountPercentage) {
    const payingPercentage = 100 - discountPercentage;
    const finalPrice = originalPrice * payingPercentage/100;
    
    /* console.log({
        originalPrice,
        discountPercentage,
        payingPercentage,
        finalPrice
    }) */

    return finalPrice;
}

function buttonPriceDiscount(couponMoney, couponDiscount) {
    const priceInput = document.getElementById("inputPrice");
    const priceValue = Number(priceInput.value);

    const discountInput = document.getElementById("inputDiscount");
    const discountValue = Number(discountInput.value);
    
    discount = discountValue + couponDiscount;

    const priceDiscount = calculatePriceWithDiscount(priceValue - couponMoney, discountValue + couponDiscount);
    let priceDiscountRounded = priceDiscount.toFixed(2);

    const savedMoney = priceValue - priceDiscount;


    if (priceValue <= 0) {
        document.getElementById("showResult1").innerText = "No se ha seleccionado ni un artículo, vuelva a intentarlo";
        document.getElementById("showResult2").innerText = "";

    } else if (discount > 80){
        document.getElementById("showResult1").innerText = "Los descuentos no pueden sobrepasar el 80%";
        document.getElementById("showResult2").innerText = `Actualmente el descuento es del ${discountValue + couponDiscount}%`;

    } else {
        if (priceDiscountRounded < 0){
            priceDiscountRounded = 0;
            document.getElementById("showResult1").innerText = `El total a pagar con el descuento aplicado del ${discountValue + couponDiscount}% es de $${priceDiscountRounded.toFixed(2)}`;
            document.getElementById("showResult2").innerText = `Usted ahorro $${priceValue.toFixed(2)} y sobraron $${(couponMoney - priceValue).toFixed(2)}`;
            
        } else {
            document.getElementById("showResult1").innerText = `El total a pagar con el descuento aplicado del ${discountValue + couponDiscount}% es de $${priceDiscount.toFixed(2)}`;
            document.getElementById("showResult2").innerText = `Usted ahorro $${savedMoney.toFixed(2)}`;
        }
    }
}

/* Cupones _______________________________________________________________ */

const couponsNames = ["anniversaryCoupon", "firstCoupon", "summerCoupon", "money300Coupon"];
const addedDiscount = [50, 25, 0, 0];
const addedMoney = [0, 0, 500, 300];

const coupons = [];

function coupon(couponsNames, addedDiscount, addedMoney) {
    this.couponsNames = couponsNames;
    this.addedDiscount = addedDiscount;
    this.addedMoney = addedMoney;
}

for (i = 0; i < couponsNames.length; i++){
    coupons.push(new coupon(couponsNames[i], addedDiscount[i], addedMoney[i], ));
}


/* function applyCoupons() {
    let applyCoupon;
    const couponSelect = document.getElementsByName("coupons");

    for (let i = 0; i < couponSelect.length; i++) {
        if (couponSelect[i].checked) {
            const couponSelected = coupons.find(function(name){
                return name.couponsNames === couponSelect[i].value;
            });
            
            applyCoupon = couponSelected;
            break;
        }
    }

    if (applyCoupon === undefined) {
        document.getElementById("showResult1").innerText = "No se ha seleccionado ni un cupón, vuelva a intentarlo.";
        document.getElementById("showResult2").innerText = "";

    } else {
        const money = applyCoupon.addedMoney;
        const discount = applyCoupon.addedDiscount;

        buttonPriceDiscount(money, discount)
    }
} */


function applyCoupons() {
    let applyCoupon;

    const couponInput = document.getElementById("inputCoupon");
    const couponValue = couponInput.value;

    for(couponName of coupons) {
        const couponSelected = coupons.find(function(couponName){
            return couponName.couponsNames === couponValue;
        });
        applyCoupon = couponSelected;
    }

    money = applyCoupon.addedMoney;
    discount = applyCoupon.addedDiscount;

    buttonPriceDiscount(money, discount);
}