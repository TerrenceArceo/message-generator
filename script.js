const messages = {
    message1: [
        "You look",
        "I think you're",
        "you're so",
    ],
    message2: [
        "beautiful",
        "nice",
        "kind",
        "compassionate",
        "wonderful",
        "gorgeous",
        "brave",
        "smart",
        "strong"
    ],
    message3:[
        "I envy you",
        "may I get your number?",
        "I'd love you take you on a date",
        "I appreciate it!",
        "Keep it up!"
    ]
}

const { message1, message2, message3 } = messages

const messagePicker = arr => {
    return arr[Math.floor(Math.random() * arr.length)]
}

console.log(`${messagePicker(message1)} ${messagePicker(message2)} ${messagePicker(message3)}`)