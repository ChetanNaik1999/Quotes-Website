
// quotes code
window.onload = function() {
    startQuotes();
  };
let paras=document.getElementById('paras');
let authors=document.getElementById('authors');
async function startQuotes()
{
    const api="https://type.fit/api/quotes";

    const  apiData= await fetch(api);
    const realData=await apiData.json();
      getQuotes(realData);
}

function getQuotes(realData)
{
  let numberQuotes=Math.floor(Math.random()*100);
   paras.innerHTML=realData[numberQuotes].text;
   authors.innerHTML="Author Name: "+realData[numberQuotes].author;
}

// end

