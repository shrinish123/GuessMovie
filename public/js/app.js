// console.log('client side is working');


const search = document.getElementById('input')
const searchForm = document.getElementById('search-form')


const title = document.getElementById('title');
const director =document.getElementById('director');
const rating =document.getElementById('rating');
const year = document.getElementById('year');
const img = document.getElementById('img');


searchForm.addEventListener('submit', (e)=>{

    e.preventDefault()

    const movie = search.value

    movieName = movie.replace(/\s/g,'%20');
    console.log(movieName);

    fetch('http://localhost:3000/movie?name='+ movieName).then((response)=>{
     
        response.json().then((data)=>{
            
             title.innerHTML = data.movieName;
             director.innerHTML = data.director
             rating.innerHTML= data.rating
             year.innerHTML= data.YearofRelease
             img.src= data.imgSrc
             console.log(data);
        })
    })

})




