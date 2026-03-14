let voiceEnabled=false

function toggleVoice(){

voiceEnabled=!voiceEnabled

}


function speak(text){

if(!voiceEnabled) return

let speech=new SpeechSynthesisUtterance(text)

speech.lang="en-US"

speechSynthesis.speak(speech)

}


function sendMessage(){

let input=document.getElementById("userInput").value.trim()

if(input==="") return

let chat=document.getElementById("chatArea")

chat.innerHTML+=`<div class="user">${input}</div>`

let points=generateReply(input.toLowerCase())

let html=""

points.forEach(p=>{
html+=`<div class="botPoint">${p}</div>`
})

chat.innerHTML+=`<div class="bot">${html}</div>`

speak(points.join(". "))

document.getElementById("userInput").value=""

chat.scrollTop=chat.scrollHeight

}



function generateReply(text){

if(text.includes("stress")){

return[
"Stress is a natural emotional response.",
"Take slow deep breaths for a few minutes.",
"Break tasks into smaller steps.",
"Take short breaks to relax your mind.",
"Talking with someone you trust may help."
]

}

if(text.includes("anxiety") || text.includes("worried")){

return[
"It sounds like you may be experiencing anxiety.",
"Try grounding exercises focusing on breathing.",
"Remind yourself that anxious feelings are temporary.",
"Write down your thoughts to organize them.",
"If anxiety continues consider professional help."
]

}

if(text.includes("sad") || text.includes("depressed")){

return[
"I'm sorry that you are feeling sad.",
"Talking about emotions can reduce pressure.",
"Try engaging in activities you enjoy.",
"Spending time outdoors may improve mood.",
"If sadness persists seeking support can help."
]

}

if(text.includes("lonely")){

return[
"Feeling lonely is very common.",
"Consider contacting a friend or family member.",
"Join community or social activities.",
"Spend time doing hobbies you enjoy.",
"You deserve meaningful connections."
]

}

return[
"Thank you for sharing your feelings.",
"I am here to listen and support you.",
"Would you like to tell me more about what you are experiencing?",
"Sharing emotions is an important step toward wellbeing."
]

}


function startVoice(){

const recognition=new(window.SpeechRecognition||window.webkitSpeechRecognition)()

recognition.lang="en-US"

recognition.start()

recognition.onresult=function(event){

let speechText=event.results[0][0].transcript

document.getElementById("userInput").value=speechText

sendMessage()

}

}


function handleFileUpload(event){

let file=event.target.files[0]

if(file){

let chat=document.getElementById("chatArea")

chat.innerHTML+=`<div class="user">Uploaded file: ${file.name}</div>`

}

}
// Place this at the end of script.js

const emojis = ["🧠","❤️","🩺","💊","🧬","🏥","💙","🩹"];
const animatedBg = document.querySelector(".animatedBackground");

function createEmoji() {
    const span = document.createElement("span");
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    const duration = Math.random() * 5 + 5; // 5s to 10s
    span.style.animationDuration = duration + "s";
    animatedBg.appendChild(span);

    setTimeout(() => span.remove(), duration * 1000);
}

// Start creating new emojis after page load
setInterval(createEmoji, 100);