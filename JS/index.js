const myColor = ['red', 'pink', 'blue', 'brown', 'tomato', 'black', 'maroon', 'lime', 'limegreen', 'khaki', 'darkred', 'violet', 'whitesmoke',
    'indigo', 'cyan', 'yellow', 'yellowgreen', 'teal', 'hotpink', 'coral', 'tan', 'snow', 'skyblue', 'greygold', 'aqua', 'royalblue',
    'rosybrown', 'orchid', 'fuchsia', 'peru', 'navy', 'olive', 'dodgerblue'];
const colorText = document.querySelector('.colorInfo');
const nextButton = document.getElementById('btn');
nextButton.addEventListener('click', () => {
    let randomNumber = getRandomNumber(0, (myColor.length - 1));
    let color = myColor[randomNumber];
    document.body.style.backgroundColor = color;
    colorText.textContent = color;
})
function getRandomNumber(min, max) {
    return Math.floor(min + (max - min + 1) * Math.random());
}