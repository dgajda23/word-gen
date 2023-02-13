const beginButton = document.getElementById("begin-button")
beginButton.addEventListener("click", function () {
    let chosenWord = fetchWord('4')
        .then(word => {
            console.log("from server:", word)
        })
})


async function fetchWord(word_length){
    let chosenWord;
    await fetch("/word", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ word: word_length})
    })
        .then(response => response.json())
        .then(data => {
            console.log("received from server: ", data.responseString)
            chosenWord = data.responseString
        })
    return chosenWord.toLowerCase()
}