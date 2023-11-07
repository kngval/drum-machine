const drumPads = document.querySelectorAll('.drum-pad');
const display = document.querySelector('#display');

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const drumPad = document.querySelector(`.drum-pad[data-key="${e.keyCode}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    drumPad.classList.add('active');

    const soundName = drumPad.getAttribute('id');
    display.textContent = soundName;
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;

    this.classList.remove('active');
}

drumPads.forEach((drumPad) => {
    drumPad.addEventListener('click', () => {
        const keyCode = drumPad.getAttribute('data-key');
        const audio = document.querySelector(`audio[data-key="${keyCode}`);
        if (audio) {
            audio.currentTime = 0;
            audio.play();
            drumPad.classList.add('active');
            const soundName = drumPad.getAttribute('id');
            display.textContent = soundName;
        }
    });
});

window.addEventListener('keydown', playSound);

drumPads.forEach((drumPad) => {
    drumPad.addEventListener('transitionend', removeTransition);
});
