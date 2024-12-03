// For a given ARRAY WITH PRICES OF 5 ITEMS = [250, 645, 300, 900, 50] all items have an offer of 10% off on thme, Change the array  to  store final price applying offer.

let items = [250, 645, 300, 900, 50];
let idx = 0;
for(let val of items){
    console.log(`Value of index ${idx}=${val}`);
    let offer = val/10;
    items[idx] = items[idx]-offer;
    console.log(`value after offer= ${items[idx]}`);
    idx++;
}

// second method
for(let i=0; i<items.length; i++){
    let offer = items[i]/10;
    items[i] -= offer;
}
console.log(items);
