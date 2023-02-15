const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4",
 "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
 "=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
let arr=[]
const passwordEl=document.getElementById("password-el")
const wordEl=document.getElementById("word-el")
const button=document.getElementById("btn")
const copy1=document.getElementById("copy1")
const copy2=document.getElementById("copy2")
const len=document.getElementById("slider")

// console.log(copy2)

function generate(){
    // document.getElementById("btn").onclick=null
    let password=" "
    for(k=1;k<=len.value;k++){
    let i=Math.floor(Math.random()*characters.length)
    password +=characters[i]; 
    }  
    return password
    // passwordEl.textContent+=characters[i]
    // let j=Math.floor(Math.random()*characters.length)
    // wordEl.textContent+=characters[j]

    // passwordEl=" "
}

let password1="7950@bhiS"
let password2="7964@bhiSoni"

function outpassword(){
    let password1= generate();
    let password2=generate();
    passwordEl.innerHTML=`${password1} <i class="fa-solid fa-copy"></i>`
    wordEl.innerHTML=`${password2} <i class="fa-solid fa-copy"></i>`
}

button.addEventListener("click",outpassword)

function  copyToClipboard(value){
     navigator.clipboard.writeText(value)
}

copy1.onclick= function(){
    //  copyToClipboard(password1)
    //  window.alert("copied")
    console.log("button clicked")
}

copy2.onclick=function(){
    //  copyToClipboard(password2)
    console.log("button clicked")
}