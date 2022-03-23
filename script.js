const ratingBtn = document.querySelectorAll(".btn-rating")
const submitBtn = document.querySelector(".btn-submit")
const yourRating = document.querySelector(".your-rating")
const section1 = document.querySelector(".section1")
const section2 = document.querySelector(".section2")

ratingBtn.forEach( rating => {
    rating.addEventListener('click',() => {
        yourRating.textContent = ` ${rating.dataset.value}`
        rating.classList.add("bg-orange")
        let selectedBtn = rating
        colorStylingBtn(selectedBtn)
    })
})

submitBtn.addEventListener("click",() => {
    section1.classList.add("dsply-none")
    section2.classList.remove("dsply-none")
})

function colorStylingBtn(selectedBtn){
    ratingBtn.forEach(rating =>{
        if(rating !== selectedBtn){
            rating.classList.remove("bg-orange")
        }
    })
}