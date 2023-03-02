const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1 =""
let password2 = ""
let butnEl = document.getElementById("butn-el")
let pass1El = document.getElementById("pass1-el")
let pass2El = document.getElementById("pass2-el")

butnEl.addEventListener("click", function(){
password1 = ""
password2 = ""

  for(let i=0 ; i<15; i++){
      let randIndex1 = (Math.floor(Math.random()*characters.length))
       password1 += characters[randIndex1]
       let randIndex2 = (Math.floor(Math.random()*characters.length))
       password2 += characters[randIndex2]
    }  
    
pass1El.textContent = password1
pass2El.textContent = password2 
    
 })
    

