

let total = 0;
function handleCLikBtn(target) {
    const selectItemContainer = document.querySelector('#selected-items')
    const itemName = (target.childNodes[5].innerText);
    const li = document.createElement('li');
    li.innerText = itemName;
    selectItemContainer.appendChild(li)

    const price = (target.childNodes[7].innerText.split(" ")[0]);
    total = parseInt(total) + parseInt(price);
    document.querySelector('#total_price').innerText = total.toFixed(2);

}

const couponBtn = document.querySelector('#coupon_btn').addEventListener('click', () => {
    const couponCode = document.querySelector('#coupon_code');
    const couponValue = couponCode.value;
    couponCode.value = '';

    if (couponValue !== 'SELL200') {
        alert(' Please Valid Your Coupon Code')
    } else {
        const discount = document.querySelector('#discount_price');
        const discountStr = discount.innerHTML;
        const discountNum = parseInt(discountStr)
        const discountAmount = (total * 20) / 100;
        discount.innerHTML = discountAmount.toFixed(2);

        const totalPrice = document.querySelector('#total');
        const totalPriceStr = totalPrice.innerHTML;
        const priceTotal = total - discountAmount
        totalPrice.innerHTML = priceTotal.toFixed(2)
    }
})

