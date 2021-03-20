
const keys=document.querySelectorAll('.piano-key')
const btnContainer = document.querySelector(".btn-container")
const switcher=document.querySelectorAll(".btn")

//keydown

window.addEventListener("keydown",(e)=>{
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.piano-key[data-key="${e.keyCode}"]`);
    if(!audio) return
    if(e.repeat) return
    audio.currentTime=0;
    audio.play()
    key.classList.add("piano-key-active")
    }) 
window.addEventListener("keyup",(e)=>{
    const key=document.querySelector(`.piano-key[data-key="${e.keyCode}"]`);
    if(key==null)return
    key.classList.remove("piano-key-active")
})
/*function removeTransition(e){
    if(e.propertyName !=="transform" )return;
    this.classList.remove("piano-key-active")
}
*/
//provodka

function startBlik(e){
    const audio=document.querySelector(`audio[data-key="${e.srcElement.dataset.key}"]`);
    const key=document.querySelector(`.piano-key[data-key="${e.srcElement.dataset.key}"]`);
    
    if(!audio) return
audio.currentTime=0;
audio.play()
key.classList.add("piano-key-active")
}
function stopBlik(e){
   
    const key=document.querySelector(`.piano-key[data-key="${e.srcElement.dataset.key}"]`);
   
key.classList.remove("piano-key-active")

}


function startBlikOver(){
    keys.forEach((key)=>{
        
        key.addEventListener('mouseover',startBlik)
        key.addEventListener('mouseout',stopBlik)
    })
    
}
function stopBlikOver(){
    keys.forEach((key)=>{
        key.removeEventListener('mouseover',startBlik)
        key.removeEventListener('mouseout',stopBlik)
        
    })
    
}
keys.forEach(key=>key.addEventListener('mousedown',startBlikOver))
keys.forEach(key=>key.addEventListener('mouseup',stopBlikOver))


//click

document.querySelector('.piano').addEventListener("mousedown", (e)=>{
    
    const audio=document.querySelector(`audio[data-key="${e.srcElement.dataset.key}"]`);
    const key=document.querySelector(`.piano-key[data-key="${e.srcElement.dataset.key}"]`);
    
    if(!audio) return
audio.currentTime=0;
audio.play()
key.classList.add("piano-key-active")
})
document.querySelector('.piano').addEventListener("mouseup", (e)=>{
    const key=document.querySelector(`.piano-key[data-key="${e.srcElement.dataset.key}"]`);
    key.classList.remove("piano-key-active")
})
//full

function toggleScreen(e){
    if(document.fullscreenElement===null){
        document.documentElement.requestFullscreen();
    }
    else{
        if(document.fullscreenEnabled)
        document.exitFullscreen()
    }
}

//switcer

btnContainer.addEventListener('click', (e)=>{

if (e.target.classList.contains("btn"))
{
    switcher.forEach((e)=>{
if(e.classList.contains("btn-active")){
    e.classList.remove("btn-active")
}
    })
    e.target.classList.add("btn-active")
    if(e.target.classList.contains("btn-letters")){
        keys.forEach((keys)=>{
keys.classList.remove("notes")
keys.classList.add("letter")
        })
    }
    if(e.target.classList.contains("btn-notes")){
        keys.forEach((keys)=>{
keys.classList.remove("letter")
keys.classList.add("notes")
        })
    }
}
})
//keys.forEach(key=>key.addEventListener('transitionend',removeTransition))
//window.addEventListener("keydown", playsound)
document.querySelector('.openfullscreen').addEventListener('click',toggleScreen);
