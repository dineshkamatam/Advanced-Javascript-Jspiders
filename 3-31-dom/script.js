// let text1 = document.getElementById("text1")
// let text2 = document.getElementById("text2")

// text1.addEventListener("keyup", e => {
//     text2.innerHTML = e.target.value;
// })

//speech recognition
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

let recognition = new SpeechRecognition();
let templet = document.getElementById("block");

let p = document.createElement("p");
templet.appendChild(p);
// console.log(recognition);
recognition.addEventListener("result",e => {
    // console.log(e);
   let transcript = e.results[0][0].transcript;
   p.innerHTML = transcript;
    document.body.style.background = transcript;
   if(e.results[0].isFinal){
       p = document.createElement("p")
       templet.appendChild(p)
   }
})

recognition.addEventListener("end",recognition.start);
recognition.start();