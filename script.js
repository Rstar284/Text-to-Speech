const Filesaver = require('file-saver')
const playButton = document.getElementById('play')
const pauseButton = document.getElementById('pause')
const stopButton = document.getElementById('stop')
const textInput = document.getElementById('text')
const speedInput = document.getElementById('Speed')

playButton.addEventListener('click', () => {
    playText(textInput.value)
})

pauseButton.addEventListener('click', pauseText)
stopButton.addEventListener('click', stopText)

function playText(text) {
    if (speechSynthesis.paused && speechSynthesis.speaking) {
        return speechSynthesis.resume
    }
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = speedInput.value || 1
    utterance.addEventListener('end', () => {
        textInput.disabled = false
    })
    
    textInput.disabled =  true
    speechSynthesis.speak(utterance)
}

function pauseText() {
    if (speechSynthesis.speaking) speechSynthesis.pause()
}

function stopText() {
    speechSynthesis.resume()
    speechSynthesis.cancel()
}

function saveText() {
    var blob = new Blob([textinput.value], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "Rstar Text to Speech Output.txt");
}
