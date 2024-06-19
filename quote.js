const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const auth = document.getElementById("author");
var cop;

async function getquote(url)
{
    const response = await fetch(url);
    var data=await response.json();
    quote.innerHTML = data.content;
    auth.innerHTML = data.author;
    cop = data.content;
}

function copyquote()
{
     const textarea = document.createElement("textarea");
     textarea.value = cop;
     document.body.appendChild(textarea);
     textarea.select();
     document.execCommand("copy");
     document.body.removeChild(textarea);
 
}

