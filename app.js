console.log("Let's get this party started!");

const gifDiv = document.querySelector('#gifs');
async function getGif(searchTerm){
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
    console.log(res)
    const newGif = document.createElement('img');
    newGif.src = res.data.data[0].images.original.url;
    gifDiv.append(newGif);
}

const form = document.querySelector('#searchform');
const input = document.querySelector('#search');
form.addEventListener('submit',function(e){
    e.preventDefault();
    getGif(input.value);
    input.value = '';
})

const remove = document.querySelector('#removeBtn');
remove.addEventListener('click',function(){
    while (gifDiv.lastElementChild){
        gifDiv.removeChild(gifDiv.lastElementChild)
    }
})