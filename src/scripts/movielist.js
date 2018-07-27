/* 
fetch('data/list.json')
.then(response => response.json())
.then(data => data.forEach (element => createMovie(element)))
.catch(err => console.log(err));
*/

/**
 * @param {*} url créée la liste de films à partir du fichier json
 */
async function populateList(url) {
    try {
        const response = await fetch(url)
        const movies = await response.json()
        movies.forEach (element => createMovie(element))
    } catch (error) {
        console.log(error)
    }
}
