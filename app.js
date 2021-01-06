const primaryItems = [1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011];

function secondaryItemsFactory(n) {
    let generatedNumber = [];
    if(n > 0) {
        for (let i = 0; i < n; i++) {
            generatedNumber.push(i);
        }
    }
    return generatedNumber;
}

const mixItems = (primaryItems, secondaryItemsFactory, offset, period) => {
    let countPrimaryItems = primaryItems.length;
    let countGeneratedNumber = 0;
    let countRestPrimaryItems = countPrimaryItems - offset;

    if(period > 1) {
        countGeneratedNumber = Math.ceil(countRestPrimaryItems/(period-1));
    } else {
        return primaryItems;
    }

    if(offset <= countPrimaryItems && countRestPrimaryItems >= period) {
        let secondaryItems = secondaryItemsFactory(countGeneratedNumber);
        let index = 0;
        for (let i = 0; i < countPrimaryItems + index; i++) {
            if(offset + (period * index) === i) {
                primaryItems.splice(i, 0, secondaryItems[index]);
                index++;
            }
        }
        return primaryItems;
    } else if(offset <= countPrimaryItems){
        primaryItems.splice(offset, 0, 0);
        return primaryItems;
    } else {
        return primaryItems;
    }
}

console.log(mixItems(primaryItems, secondaryItemsFactory,6,3));
