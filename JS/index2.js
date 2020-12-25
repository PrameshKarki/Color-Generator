const myColor=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const colorText=document.querySelector('.colorInfo');
const nextButton=document.getElementById('btn');
nextButton.addEventListener('click',()=>{
    let firstColor='#',secondColor='#';
    for(let i=0;i<6;i++){
        let firstRandomNumber=getRandomNumber(0,(myColor.length-1));
        let secondRandomNumber=getRandomNumber(0,(myColor.length-1));
        firstColor+=myColor[firstRandomNumber];
        secondColor+=myColor[secondRandomNumber];

    }
   let color=`linear-gradient(to right,${firstColor},${secondColor})`;
   document.body.style.backgroundImage=color;
   colorText.textContent=color;

})
function getRandomNumber(min,max){
    return Math.floor(min+(max-min+1)*Math.random());
}