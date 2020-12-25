const myColor=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const colorText=document.querySelector('.colorInfo');
const nextButton=document.getElementById('btn');
nextButton.addEventListener('click',()=>{
    let color='#';
    for(let i=0;i<6;i++){
        let randomNumber=getRandomNumber(0,(myColor.length-1));
        color+=myColor[randomNumber];
    }
    document.body.style.backgroundColor=color;
    colorText.textContent=color;


})
function getRandomNumber(min,max){
    return Math.floor(min+(max-min+1)*Math.random());
}