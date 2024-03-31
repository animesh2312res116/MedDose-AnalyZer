const next = document.querySelector('.nex')
const prev = document.querySelector('.prev')


next.addEventListener('click', () => {
    const cont = document.querySelector('.card-container')
    cont.scrollBy(400, 0);
})

prev.addEventListener('click', () => {
    const cont = document.querySelector('.card-container')
    cont.scrollBy(-400, 0);
})

const about = ()=>{
    window.location.href = "./#about"
}

const services = ()=>{
    window.location.href = "./services.html"
}
