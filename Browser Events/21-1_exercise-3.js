// elem.innerHTML is used to populate a div with html. Create a website with a div tag containing a random joke given n array of jokes. Use Math.random and fetch jokes from the internet (use any website to create an array). Your website show a random joke on every reload. Min length of your jokes array should be 10

let myJokes = [
    {
        "category": "Pun",
        "type": "single",
        "joke": "Two fish in a tank. One turns to the other and says, \"Do you know how to drive this thing?\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 185,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "UDP is better in the COVID era since it avoids unnecessary handshakes.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 259,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "The generation of random numbers is too important to be left to chance.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 39,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "I hate double standards. Burn a body at a crematorium, you're \"being a respectful friend.\" Do it at home and you're \"destroying evidence.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "safe": false,
        "id": 274,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 37,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "Two reasons I don't give money to homeless people.\n1) They are going to spend it all on drugs and alcohol\n2) I am going to spend it all on drugs and alcohol.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 72,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "Hey girl are you a school? Because I want to shoot some kids up inside of you.",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "safe": false,
        "id": 269,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "The glass is neither half-full nor half-empty, the glass is twice as big as it needs to be.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 23,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "single",
        "joke": "I was reading a great book about an immortal dog the other day. It was impossible to put down.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 236,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "In Soviet Russia, gay sex gets you arrested. In America, getting arrested gets you gay sex.",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "safe": false,
        "id": 289,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Two C strings walk into a bar.\nThe bartender asks \"What can I get ya?\"\nThe first string says \"I'll have a gin and tonic.\"\nThe second string thinks for a minute, then says \"I'll take a tequila sunriseJF()#$JF(#)$(@J#()$@#())!*FNIN!OBN134ufh1ui34hf9813f8h8384h981h3984h5F!##@\"\nThe first string apologizes, \"You'll have to excuse my friend, he's not null-terminated.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 28,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "\"We messed up the keming again guys.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 20,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Four engineers get into a car. The car won't start.\nThe Mechanical engineer says \"It's a broken starter\".\nThe Electrical engineer says \"Dead battery\".\nThe Chemical engineer says \"Impurities in the gasoline\".\nThe IT engineer says \"Hey guys, I have an idea: How about we all get out of the car and get back in\".",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 132,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "A guy walks into a bar and asks for 1.4 root beers.\nThe bartender says \"I'll have to charge you extra, that's a root beer float\".\nThe guy says \"In that case, better make it a double.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 2,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 27,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "I'd tell you a joke about NAT but I would have to translate.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 319,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "\"Knock, knock.\"\n\"Who's there?\"\n\n[very long pause]\n\n\"Java.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 36,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Two SQL tables sit at the bar. A query approaches and asks \"Can I join you?\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 221,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Documentation is like sex:\nWhen it's good, it's very good.\nWhen it's bad, it's better than nothing...",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": false,
        "id": 305,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "A man is smoking a cigarette and blowing smoke rings into the air. His girlfriend becomes irritated with the smoke and says \"Can't you see the warning on the cigarette pack? Smoking is hazardous to your health!\" to which the man replies, \"I am a programmer.  We don't worry about warnings; we only worry about errors.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 38,
        "safe": true,
        "lang": "en"
    }
];

// document.getElementById("jokes").innerHTML=myJokes.length;

const playJokes=()=>{
    let index = Math.floor(Math.random()*myJokes.length);
    document.getElementById("jokes").innerHTML=myJokes[index].joke;
}
