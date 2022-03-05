const timeField = document.getElementById('timer')

//time reamining in 1/10th of a seconds (tr = 10 means 1 second)
let timeRemaining = 1800
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
    if(!playing)
        playing = true
    else
        return

    console.log('Starting timer...')

    interval = setInterval(() => {
        if(timeRemaining == 0){
            console.log('Time is up.')
            pause()
            return
        }

        timeRemaining -= 1
        refresh()
    }, 100)
}

const pause = () => {
    console.log('Stopping timer')
    clearInterval(interval)
    playing = false
    refresh()
}