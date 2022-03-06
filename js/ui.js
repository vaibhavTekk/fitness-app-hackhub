let array = [];



const showButton = () =>{
    const button = document.getElementById("done-button");
    button.classList.remove("hidden");
    console.log("showing button");
}

const submit = () => {
    const dateobject = new Date();
    var date = dateobject.toDateString();
    if(JSON.parse(localStorage.getItem('array')).slice(-1).pop() == date){
        displayScore();
    }
    else {
        array.push(date);
        localStorage.setItem('array',JSON.stringify(array));
        displayScore();
    }

};

const displayScore = () => {
    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("days").innerText = `${array.length} Day(s)`;
};

const hideScore = () => {
    document.getElementById("popup").classList.add("hidden");
};

window.onload = function() {
    const dateobject = new Date()
    var day = parseInt(dateobject.getDate().toString().slice(-1));
    document.getElementById("exercise-image").src = data[day].location;
    document.getElementById("instruction").innerHTML = data[day].exercise;
    document.getElementById("description").innerHTML = data[day].description;
    document.getElementById('timer').innerText = data[day].duration;
    document.getElementById('today').innerText = `${dateobject.getDate()} / ${dateobject.getMonth() + 1} / ${dateobject.getFullYear()}`
    refresh();
}

if (localStorage.getItem('array')){
    array = JSON.parse(localStorage.getItem('array'));
    const todayDate = new Date();
    console.log(array);
    if (array.slice(-1).pop() != todayDate.toDateString()) {
        console.log();
    } else {
        console.log("Already done for today");
        timeRemaining = 0;
        refresh();
        showButton();
        displayScore();
    }
} else {
    const newarray = [];
    localStorage.setItem('array' , JSON.stringify(newarray))
    array = JSON.parse(localStorage.getItem('array'));   
}    





