
function getData(){
    let title=document.getElementById("title").value;
    const url=`https://www.omdbapi.com/?t=${title}&apikey=896977e5`;


    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        append(res);
        console.log(res);
    })
    .catch(function(err){
        console.log(err);
    });

}
function append(data){
    let container=document.getElementById("container");
    if(data.Response=="True"){
        container.innerHTML=null;
    

    let title=document.createElement("p");
    title.innerText= `${data.Title}`;
    

    let poster=document.createElement("img");
    poster.src=`${data.Poster}`;

    let genre=document.createElement("p");
    genre.innerText=`Genre: ${data.Genre}`;

    let release_date=document.createElement("p");
    release_date.innerText=`Released Date: ${data.Released}`;

    let rating=document.createElement("p");
    rating.innerText=`imdb Rating: ${data.imdbRating}`;

    let plot=document.createElement("p")
    plot.innerText=`Plot: ${data.Plot}`

    container.append(title,poster,genre,release_date,rating,plot);
    }
    else{
        alert("Movie not found")
    }


}