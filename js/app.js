let currentScripture

function start() {
    let audio = new Audio('../media/ambient-piano.mp3');
    audio.volume = 0.5;
    audio.loop = true;
    audio.play();

    let loadingDiv = document.getElementById('loading');
    loadingDiv.style.display = 'none';

    let body = document.getElementsByTagName('BODY')[0].classList.add('colors');

    let mainContainer = document.getElementById('mainContainer');
    mainContainer.style.display = 'block';

    let randomNumber = (Math.random()) * 10;
    randomNumber = Math.floor(randomNumber);
    let scriptureToDisplay = scriptureList.list[randomNumber].scripture;
    let verseToDisplay = scriptureList.list[randomNumber].verse;

    let scriptureDiv = document.getElementById('scripture');
    let verseDiv = document.getElementById('verse');
    scriptureDiv.innerText = scriptureToDisplay;
    verseDiv.innerText = verseToDisplay;

    document.getElementById('refresh').style.display = 'flex';
    document.getElementById('downloadMusic').style.display = 'block';
}

function refresh() {
    let randomNumber = (Math.random()) * 10;
    randomNumber = Math.floor(randomNumber);
    let scriptureToDisplay = scriptureList.list[randomNumber].scripture;
    let verseToDisplay = scriptureList.list[randomNumber].verse;

    let scriptureDiv = document.getElementById('scripture');
    let verseDiv = document.getElementById('verse');
    scriptureDiv.innerText = scriptureToDisplay;
    verseDiv.innerText = verseToDisplay;
}