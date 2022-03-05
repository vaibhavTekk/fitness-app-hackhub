window.onload = function() {
    const dateobject = new Date()
    var day = parseInt(dateobject.getDate().toString().slice(-1));
    document.getElementById("exercise-image").src = data[day].location;
    document.getElementById("instruction").innerHTML = data[day].exercise;
    document.getElementById("description").innerHTML = data[day].description;
}