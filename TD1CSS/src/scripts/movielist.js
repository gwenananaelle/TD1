fetch('data/list.json').then(response => response.json())
.then(data => data.forEach (element => createMovie(element)))
.catch(err => console.log(err));

