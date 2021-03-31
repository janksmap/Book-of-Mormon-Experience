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
    console.log(randomNumber);
    let scriptureToDisplay = scriptureList.list[randomNumber].scripture;
    let verseToDisplay = scriptureList.list[randomNumber].verse;

    console.log(scriptureToDisplay);
    console.log(verseToDisplay);
    let scriptureDiv = document.getElementById('scripture');
    let verseDiv = document.getElementById('verse');
    scriptureDiv.innerText = scriptureToDisplay;
    verseDiv.innerText = verseToDisplay;

    document.getElementById('downloadMusic').style.display = 'block';
}