
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
        container.innerHTML="";
    

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


    if(`${data.imdbRating}`>=8.5){
        let recommended=document.createElement("img")
        recommended.setAttribute("class","recommended")
        recommended.src="https://cdn3.vectorstock.com/i/1000x1000/38/37/red-round-tag-banner-recommended-vector-31573837.jpg"
        container.append(title,poster,recommended,genre,release_date,rating,plot)

     }else{
    container.append(title,poster,genre,release_date,rating,plot);
    }
}
    else{
        
        container.innerHTML="";
        
        let poster=document.createElement("img")
        poster.src="https://mcdn.wallpapersafari.com/medium/34/82/YRzXPk.jpeg"

        let error=document.createElement("p")
        error.innerText=`404 Error Movie not found`


        container.append(poster,error)
    }


}