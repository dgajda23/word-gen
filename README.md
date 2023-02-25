Word Generator
This program is an express post method that takes in a word length and returns a random word from a list of words.

To request data: The application must use the fetch method with the method: "POST" and a body of the desired word length. Here is an example:
await fetch("/word", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ word: word_length})
    })
(This is also included in the example.js file)

To receive data: The program will use this word_length value and send a response through an express post method. To access this response the application must use
.then as per the standards for using fetch. Here is an example:
.then(response => response.json())
        .then(data => {
          data.responseString # This is the string that my microservice sent.
        }

The use of my microservice is clearly demonstrated in the example files that I have provided within the repository.

<img width="677" alt="Screenshot 2023-02-24 at 08 35 10" src="https://user-images.githubusercontent.com/112957599/221362589-2fb0e328-c1d2-419c-a6f6-a02115fe6cd3.png">
