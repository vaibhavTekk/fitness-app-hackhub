const timeField = document.getElementById('timer')

const playsound = function(id){
    let volume = 0.8;
    link = `./sounds/${id}.wav`;
    const audio = document.createElement('audio');
    audio.src = link;
    audio.volume = volume;
    audio.play();
};

//time reamining in 1/10th of a seconds (tr = 10 means 1 second)
let dateobject = new Date()
var day = parseInt(dateobject.getDate().toString().slice(-1));
let timeRemaining = (parseInt(data[day].duration.substring(0,2))*60 + parseInt(data[day].duration.substring(3,5)))*10;
let interval;
let playing = false

const refresh = () => {
    const minutes = parseInt(timeRemaining / 600)
    const seconds = timeRemaining % 600 / 10

    const timerText = `${minutes.toString().padStart(2, '0')}:${parseInt(seconds).toString().padStart(2, '0')}`
    const playingText = playing? '▶' : '⏸'

    timeField.innerText = timerText
    document.title = `Fitness App ${playingText} (${timerText})`
    
}

const play = () =>{
    playsound('click')
    if(!playing)
        playing = true
    else
        return

    console.log('Starting timer...')

    interval = setInterval(() => {
        if(timeRemaining == 0){
            console.log('Time is up.')
            showButton()
            pause()
            return
        }

        timeRemaining -= 1
        
        refresh()
    }, 100)

    soundinterval = setInterval(() => {
        playsound('tick');
    }, 1000);
}

const pause = () => {
    console.log('Stopping timer')
    clearInterval(interval)
    clearInterval(soundinterval)
    playsound('win')
    playing = false
    refresh()
}