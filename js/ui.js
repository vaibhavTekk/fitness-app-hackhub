let array = [];

const showButton = () =>{
    const button = document.getElementById("done-button");
    button.classList.remove("hidden");
    console.log("showing button");
}

const submit = () => {
    const dateobject = new Date();
    var date = dateobject.toDateString();
    array.push(date);
    localStorage.setItem('array',JSON.stringify(array));
    displayScore();
};

const displayScore = () => {
    document.getElementById("popup").classList.remove("hidden");
};

window.onload = function() {
    const dateobject = new Date()
    var day = parseInt(dateobject.getDate().toString().slice(-1));
    document.getElementById("exercise-image").src = data[day].location;
    document.getElementById("instruction").innerHTML = data[day].exercise;
    document.getElementById("description").innerHTML = data[day].description;
    document.getElementById('timer').innerText = data[day].duration;
    document.getElementById('today').innerText = `${dateobject.getDate()} / ${dateobject.getMonth() + 1} / ${dateobject.getFullYear()}`
    
}

if (localStorage.getItem('array')){
    array = JSON.parse(localStorage.getItem('array'));
    const todayDate = new Date();
    console.log(array);
    if (array[-1] == todayDate.toDateString()) {
        console.log();
    } else {
        console.log("Already done for today");
        displayScore();
    }
} else {
    const newarray = ["first item"]
    localStorage.setItem('array' , JSON.stringify(newarray))
    array = JSON.parse(localStorage.getItem('array'));   
}    



