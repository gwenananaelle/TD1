let main,
    myModal,
    titlePlaceHolder,
    posterPlaceHolder,
    summary,
    buttonClose
/**
 * initie les constantes d'emplacement dans le DOM et ferme la modale si elle n'est pas ouverte avec escape
 */
document.addEventListener('DOMContentLoaded', event => {
    main = document.getElementById('container'),
    myModal = document.getElementById('myModal'),
    titlePlaceHolder = document.getElementById('modalTitle'),
    posterPlaceHolder = document.getElementById('modalPoster'),
    summary = document.getElementById('modalSummary'),
    buttonClose = document.getElementById('buttonClose')
    populateList('data/list.json')
});
function closeModal() {
    document.removeEventListener('keydown',escapeKeyListener)
    myModal.classList.toggle('hidden')
}
const escapeKeyListener = ({keyCode}) => keyCode === 27 && closeModal()
