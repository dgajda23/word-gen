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

The program will use this word_length value and send a response through an express post method. To access this response the application must use
.then as per the standards for using fetch. Here is an example:
.then(response => response.json())
        .then(data => {
          data.responseString # This is the string that my microservice sent.
        }

The use of my microservice is clearly demonstrated in the example files that I have provided within the repository.
<img width="685" alt="Screenshot 2023-02-13 at 20 58 35" src="https://user-images.githubusercontent.com/112957599/218561956-91de9cdb-7788-47d5-a3ff-cc7aea0e0663.png">
