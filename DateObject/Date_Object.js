//1...Create a JavaScript application that will take date 
//input from user and display how old they are.


//Answer to question 1


userBirthYear = prompt("Hello There, Enter Your Year Of Birth And I Tell You Your Age!");
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentAge = (currentYear - userBirthYear);
document.querySelector('.user_age').innerHTML += ' ' + currentAge +' '+ 'years old';










//Answer to question 2


presentDate = new Date();
endDate = new Date('may 28 2023 00:00:00');

let theDiff = (endDate - presentDate);


//this will get the difference in years
let years = Math.floor(theDiff / (1000 * 60 * 60 * 24 * 365));


//this will get the difference in months
let months = Math.floor(theDiff / (1000 * 60 * 60 * 24 * 30)); 


//this will get the difference in days
let days = Math.floor(theDiff / (1000 * 60 * 60 * 24)); 


//this will get the difference in hour
let hours = Math.floor((theDiff % (1000 * 60 * 60 * 24)) / 1000 * 60); 


//this will get the difference in minutes
let minutes = Math.floor(theDiff % (1000 * 60 * 60) / 1000 * 60); 


//this will get the difference in seconds
let seconds = Math.floor(theDiff % (1000 * 60) / 1000); 


if (endDate === presentDate) {
    document.querySelector('.officeterm').innerHTML = 
    "Buhari's office term ends today" + endDate;
} else {
    document.querySelector(".officeterm").innerHTML = '(2). '
    +"Buhari's office term ends in: " + ' ' + years + "Year(s)," + 
        ' ' + months + "months," + ' ' + days + "days," + " " + hours + " hours" +
        ' ' + minutes + "minutes" + ' ' + seconds + "seconds.";

}













//Answer to question 3

let countDownDate = new Date("sep 14, 2021 12:00:00").getTime();





 


// Update the count down
let count = setInterval(function() {




       // Get current date and time
       let now = new Date().getTime();






    // get the distance between now and the count down date
    let diff = countDownDate - now;



    //calculations for days, hours, minutes and seconds
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);



    // Output the result
    document.getElementById('paymentends').innerHTML = 
    days + "d - " + hours + "h - " +
        minutes + "m - " +' '+ + seconds + "s";



    // If the count down is over, display this error message.
    if (diff < 0) {
        clearInterval(count);
        document.getElementById('paymentends').innerHTML = 
        'Sorry, Payment time elapsed and you have been blocked from the system.';
    }
}, 1000);