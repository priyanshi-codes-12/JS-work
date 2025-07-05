const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote")
const author = document.getElementById("author")

async function getQoute(url) {
    const request = await fetch(url);
    var data = await response.json();
    // console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getQoute(api_url);