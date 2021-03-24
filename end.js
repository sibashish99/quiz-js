const username= document.getElementById('username');
const savScoreBtn=document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore= localStorage.getItem('mostRecentScore');

finalScore.innerText=mostRecentScore;


username.addEventListener('keyup',()=>{
    //console.log(username.value);
    savScoreBtn.disabled =!username.nodeValue;
});

saveHighScore = (e) =>{
    console.log("Clicked to save");
    e.preventDefault();
}