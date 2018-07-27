/**
 * Permet d'ajouter un film à un élement du DOM
 * @param {objet film} element 
 * @param {élément du DOM} parent 
 */
function createMovie(element){
    const movie = document.createElement('div')
    const poster = document.createElement('img')
    poster.srcset = `images/${element.poster}-330.jpg 330w, images/${element.poster}-215.jpg 215w`
    poster.alt = element.title
    poster.addEventListener('click', contentModal.bind(element))
    movie.appendChild(poster)
    const title = document.createElement('h4')
    title.innerText = element.title
    movie.appendChild(title)
    main.appendChild(movie)
}
/**
 * insère le contenue titre, image et résumé pour la modale et la fonction onclick
 */
function contentModal(){
    titlePlaceHolder.innerText = this.title
    posterPlaceHolder.srcset = `images/${this.poster}-330.jpg 330w, images/${this.poster}-215.jpg 215w` 
    posterPlaceHolder.alt = this.title
    summary.innerText = this.summary
    buttonClose.onclick = function(){
        closeModal()
    }
    myModal.classList.toggle('hidden')
    document.addEventListener('keydown',escapeKeyListener)
}

