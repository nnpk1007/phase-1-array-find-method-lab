const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
// function receive 1 argument, an Array of JavaScript Objects
const superbowlWin = (array) => {
    // use find() to test each Object to see if the result is "W"
    const elementObj = array.find(element => element.result === "W");
    // return the year when the win occurred
    if (elementObj) {
        return elementObj["year"];
    }
}


