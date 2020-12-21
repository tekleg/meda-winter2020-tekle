function checkTitleCommas(titleArray) {

    if (titleArray[3].charAt(0) === '"') {

        /*
        check the last character of the current array element.
        if character is not a " then move to next array element.
        if character is " then combine all elements since index 3, remove extra array elements
        */

        let doubleQFound = false;
        let currentElement = 3;

        // while (!doubleQFound) {
        //     let lastCharacterIndex = titleArray[currentArrayElement].length - 1;

        //     if (titleArray[currentArrayElement].charAt(lastCharacterIndex) === '"') {
        //         doubleQFound = true;
        //     } else {
        //         currentArrayElement += 1;
        //     }
        // }

        for (currentElement; !doubleQFound; currentElement++) {
            if (titleArray[currentElement + 1].charAt(titleArray[currentElement + 1].length - 1) === '"') {
                doubleQFound = true;
            } 
        }

        let cutOutArray = titleArray.splice(3, currentElement - 2);

        let combinedTitleString = cutOutArray.join(",");

        titleArray.splice(3, 0, combinedTitleString);


        // let lastCharacterIndex = titleArray[4].length - 1;

        // if (titleArray[4].charAt(lastCharacterIndex) === '"') {

        //     titleArray[3] = titleArray[3] + titleArray[4];

        //     titleArray.splice(4, 1);

        // } else if (titleArray[5].charAt(titleArray[5].length - 1) === '"'){

        //     titleArray[3] = titleArray[3] + titleArray[4] + titleArray[5];

        //     titleArray.splice(4, 2);

        // }

        return titleArray;

    } else {
        return titleArray;
    }

}

module.exports = {
    checkTitleCommas
};