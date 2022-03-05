window.onload = function() {
    const dateobject = new Date()
    var day = dateobject.getDate();
    document.getElementById("exercise-image").src = data[day].location;
    document.getElementById("instruction").innerHTML = data[day].exercise;
    document.getElementById("description").innerHTML = data[day].description;
}