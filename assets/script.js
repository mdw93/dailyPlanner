//set the header to today's date and time
const myDateTime = document.getElementById('today')
let now = dayjs();
let currentDate = now.format("dddd, MMMM D YYYY");
myDateTime.innerText = currentDate

/*
this was an idea if i wanted to make a clock (keeping incase I want to mess with that in the future)
const myAmPm = now.format('A')
let mySeconds = dayjs().get('second')
let myMinutes= dayjs().get('minute')
let myHours = dayjs().get('hour')
let currentTime = `${myHours}:${myMinutes}`
myDateTime.innerText = currentDate + " " + currentTime + " " + myAmPm
*/

//find the current hour for use in our loop below updatePlanner (this is military time)
let currentHour = dayjs().get('hour');

//below line is used for test
//let currentHour = 20

//reduce military time by 6 so we can use it in to match our array myTimeCHeck
//we created an if so nothing is done unless it will be at array 0 (that is below)
let whatHour = currentHour - 6

//pull all of our planner elements so they can be updated as the day progresses
const mySix = document.getElementById('six')
const mySeven = document.getElementById('seven')
const myEigth = document.getElementById('eight')
const myNine = document.getElementById('nine')
const myTen = document.getElementById('ten')
const myEleven = document.getElementById('eleven')
const myTwelve = document.getElementById('twelve')
const myThirteen = document.getElementById('thirteen')
const myFourteen = document.getElementById('fourteen')
const myFifteen = document.getElementById('fifteen')
const mySixteen = document.getElementById('sixteen')
const mySeventeen = document.getElementById('seventeen')
const myEighteen = document.getElementById('eighteen')

//array of our html variables to be used in the below loop
myTimeCheck = [ 
    mySix,
    mySeven,
    myEigth,
    myNine,
    myTen,
    myEleven,
    myTwelve,
    myThirteen,
    myFourteen,
    myFifteen,
    mySixteen,
    mySeventeen,
    myEighteen,
]

//function that will check if the military time is at a value that matters IE at least 6am
//Updates the elements if they are in the past
//Updates the current timeslot to be white
function updatePlanner() {
    if (currentHour > 18) {
        for (let index = 0; index < myTimeCheck.length; index++) {
            myTimeCheck[index].style.backgroundColor = 'grey';
            currentHour = dayjs().get('hour')
        }}  else if (currentHour > 5 && currentHour < 19) {
        for (let j = 0; j < whatHour; j++) {
            myTimeCheck[j].style.backgroundColor = 'grey';
            currentHour = dayjs().get('hour')
            myTimeCheck[whatHour].style.backgroundColor = 'white';
}}}

/*
function myTest() {
  for (let j = 0; j < currentHour - 6; j++) {
    const check = myTimeCheck[j].style.backgroundColor = 'grey';
    currentHour = dayjs().get('hour')
    myTimeCheck[whatHour].style.backgroundColor = 'white';
}
}*/

updatePlanner()

setInterval(function(){ 
    updatePlanner()
    }, 1000);

//create variables for each button
const bOne = document.getElementById('blank');

const bTwo = document.getElementById('bTwo');

const bThree = document.getElementById('bthree');

const bFour = document.getElementById('bfour');

const bFive = document.getElementById('bfive');

const bSix = document.getElementById('bsix');

const bSeven = document.getElementById('bseven');

const bEight = document.getElementById('beight');

const bNine = document.getElementById('bnine');

const bTen = document.getElementById('bten');

const bEleven = document.getElementById('beleven');

const bTwelve = document.getElementById('btwelve');

const bThirteen = document.getElementById('bthirteen');

/* saving these so I 
bOne
bTwo
bThree
bFour
bFive
bSix
bSeven
bEight
bNine
bTen
bEleven
bTwelve
bThirteen
*/

//set the divs to match what was saved in locat storage
mySix.innerText = localStorage.getItem('1')
mySeven.innerText = localStorage.getItem('2')
myEigth.innerText = localStorage.getItem('3')
myNine.innerText = localStorage.getItem('4')
myTen.innerText = localStorage.getItem('5')
myEleven.innerText = localStorage.getItem('6')
myTwelve.innerText = localStorage.getItem('7')
myThirteen.innerText = localStorage.getItem('8')
myFourteen.innerText = localStorage.getItem('9')
myFifteen.innerText = localStorage.getItem('10')
mySixteen.innerText = localStorage.getItem('11')
mySeventeen.innerText = localStorage.getItem('12')
myEighteen.innerText = localStorage.getItem('13')


//give buttons the ability to save to local storage 
bOne.onclick = function () {
    localStorage.setItem('1', mySix.value)
    return
  }

bTwo.onclick = function () {
    localStorage.setItem('2', mySeven.value)
    return
  }

bThree.onclick = function () {
    localStorage.setItem('3', myEigth.value)
    return
  }

bFour.onclick = function () {
    localStorage.setItem('4', myNine.value)
    return
  }

bFive.onclick = function () {
    localStorage.setItem('5', myTen.value)
    return
  }

bSix.onclick = function () {
    localStorage.setItem('6', myEleven.value)
    return
  }

bSeven.onclick = function () {
    localStorage.setItem('7', myTwelve.value)
    return
  }

bEight.onclick = function () {
    localStorage.setItem('8', myThirteen.value)
    return
  }

bNine.onclick = function () {
    localStorage.setItem('9', myFourteen.value)
    return
  }

bTen.onclick = function () {
    localStorage.setItem('10', myFifteen.value)
    return
  }

bEleven.onclick = function () {
    localStorage.setItem('11', mySixteen.value)
    return
  }

bTwelve.onclick = function () {
    localStorage.setItem('12', mySeventeen.value)
    return
  }

bThirteen.onclick = function () {
    localStorage.setItem('13', myEighteen.value)
    return
  }