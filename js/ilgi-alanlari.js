const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '10ab5ca894mshb4cc20989ceaefcp12ac70jsn7ba7e63adb74',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=breaking', options)
    .then(response => response.json())
    .then(data => {
        const list = data.d;

        list.map((item) => {
            const name = item.l;
            const poster = item.i.imageUrl;
            const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
            console.log(movie);
            document.querySelector('.movies').innerHTML += movie;
        })
    })
    .catch(err => console.error(err));