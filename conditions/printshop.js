function prices(user_copy) {
    let price = 0;

    if (copies <= 10) {
        price = copies * 0.12;
    } else if (copies <= 30) {
        price = 10 * 0.12 + (copies - 10) * 0.11;
    } else {
        price = 10 * 0.12 + 20 * 0.11 + (copies - 30) * 0.10;
    }

    return price;
}

// Test the function
let copies = prompt (@)
console.log(`The price for ${copies} copies is €${calculatePrice(copies)}`);
