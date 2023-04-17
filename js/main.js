const ratings = document.querySelectorAll("li");
let selectedRating;
const button = document.querySelector("button");

console.log(ratings);

function selectRating(e) {
    if (selectedRating !== undefined) {
        ratings[selectedRating - 1].classList.remove("active");
    }

    selectedRating = Number(e.target.innerText);
    e.target.classList.add("active");
    
}

ratings.forEach(function (elem) {
    elem.addEventListener('click', selectRating);
});

function submitRating() {
    if (selectedRating !== undefined) {
        document.getElementById('initial-view').classList.add('hidden');
        document.getElementById('final-view').classList.remove('hidden');
        document.getElementById('final-view').style.animation = 'fadeIn 0.6s ease-in forwards';
        document.getElementById('selected-rating').innerText = selectedRating;

    }
}


button.addEventListener('click', submitRating);