/*
Write a function which can convert the time input given in 12 hours format to 24 hours format
The check for 'AM' and 'PM' can be verified using endsWith String method
An extra 0 would be needed if the hours have single digit
*/

const time = '11:8PM';

function convertTo24HrsFormat(time) {
    const arr = time.split(':');
    let  hour = parseInt(arr[0]);
    let minute = arr[1].substring(0, arr[1].length -2);
    const AMPM = arr[1].substring(2);

    if(AMPM === 'AM'){
        hour = (hour === 12) ? 0 : hour
    } else{
        hour = hour === 12 ? 12 : (12 + hour)
    }

    return hour.toString().padStart(2, 0) + ':' + minute.padStart(2, 0)
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)
