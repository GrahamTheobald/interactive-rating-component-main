const submit = document.querySelector(".submitButton")
const ratingState = document.querySelector(".ratingState")
const thankyouState = document.querySelector(".thankyouState")

const ratings = document.querySelector(".ratings")
const result = document.querySelector('.result')

let rating

ratings.addEventListener('click', e => {
    if(!e.target.matches('.ratingNumber')) return
    
    rating = e.target.textContent

})


submit.addEventListener('click', e => {
    if(!rating) return
    ratingState.classList.toggle('hidden')
    thankyouState.classList.toggle('hidden')

    result.textContent = rating

})