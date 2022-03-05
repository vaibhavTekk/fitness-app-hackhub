let array = [];

window.onload = function() {
    const dateobject = new Date()
    var day = parseInt(dateobject.getDate().toString().slice(-1));
    document.getElementById("exercise-image").src = data[day].location;
    document.getElementById("instruction").innerHTML = data[day].exercise;
    document.getElementById("description").innerHTML = data[day].description;
    document.getElementById('timer').innerText = data[day].duration;

    if (localStorage.getItem('array')){
        array = JSON.parse(localStorage.getItem('array'));
        const todayDate = new Date();
        console.log(array);
        if (array[-1] == todayDate.toDateString()) {
            console.log("Already done for today");
            displayScore();
        }
    } else {
        const newarray = []
        localStorage.setItem('array' , JSON.stringify(newarray))
        array = JSON.parse(localStorage.getItem('array'));   
    }    

}

const showButton = () =>{
    const button = document.getElementById("done-button");
    button.classList.remove("hidden");
    console.log("showing button");
}

const submit = () => {
    const dateobject = new Date();
    var date = dateobject.toDateString();
    array += date;
    localStorage.setItem('array',JSON.stringify(array));
    displayScore();
};

const displayScore = () => {
    document.getElementById("popup").classList.remove("hidden");
};