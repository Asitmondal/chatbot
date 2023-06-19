//var require = require("express");

var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var cahtcontainer = document.getElementById('cahtcontainer');

var user = {message:""};

var arrayofPossibleMessage=[
    {message:"hi", response:"hello"},
    {message:"how are you?", response:"I'm good"},
    {message:"What is you name?",response:"I'm a cahtbot!"},
    { message: "what's your name?", response: "I'm a cahtbot!" },
    { message: "how old are you?", response: "i'm ageless" },
    { message: "do you have kids?", response: "No I don't!" },
    { message: "do you have a car?", response: "I travel through space" },
    { message: "do you sleep early?", response: "No I don't!" },
    { message: "can you dance?", response: "yes,tango." },
    { message: "what's your fav food?", response: "Nothing" },
    { message: "do you have a job?", response: "yes" },
    { message: "where do you live?", response: "In the web"}
]

function sendMessage(userMessage){

    var messageElement = document.createElement('div');
    messageElement.style.textAlign = "right";
    messageElement.style.margin = "10px";

    messageElement.innerHTML ="<span> You: </span>"+"<span>"+userMessage+"</span>";
    cahtcontainer.appendChild(messageElement);
}


function cahtbotResponse(userMessage){

    var chatbotmessage = "";

    if(userMessage.length > 5 || userMessage == "hi"){
        var result = arrayofPossibleMessage.filter(val => val.message.includes(userMessage.toLowerCase()));
        if(result.length > 0){
            var response = result[0].response;
            chatbotmessage = response;
        } else {
            chatbotmessage = "please send another message";
        }
    } else{
        chatbotmessage = "please send a different message";
    }


    var messageElement = document.createElement('div');

    messageElement.innerHTML = "<span>Chatbot: </span>" + "<span>" + chatbotmessage+"</span >";

    setTimeout(()=>{
        messageElement.animate([{ easing: "ease-in", opacity: 0.01 }, { opacity: 0.02}],{duration:500})
        cahtcontainer.appendChild(messageElement);
        cahtcontainer.scrollTop = cahtcontainer.scrollHeight;
    },600);

}



sendBtn.addEventListener('click', function(e){
    var userMessage = textbox.value;
    if(userMessage == ""){
        alert('Please type in a message');
    } else{
        let userMessageText = userMessage.trim();
        user.message = userMessageText;
        textbox.value = "";
        sendMessage(userMessageText);

        cahtbotResponse(userMessageText);
    }
});