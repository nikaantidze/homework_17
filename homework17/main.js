const arrrow = document.querySelectorAll('#arrow')
const text = document.querySelectorAll('.txt')
const pp = document.querySelectorAll('#p')
const lelaw = document.querySelectorAll('#gela')

for (let i = 0; i < lelaw.length; i++) {
    text[i].addEventListener("click", function() {
        text[i].classList.toggle("black");
        for (let j = 0; j < text.length; j++) {
            if (j !== i) {
                text[j].classList.remove("black");
            }
        }
        arrrow[i].classList.toggle("rotate");
        for (let j = 0; j < lelaw.length; j++) {
            if (j !== i) {
                arrrow[j].classList.remove("rotate");
            }
        }
        pp[i].classList.toggle("active");
        for (let j = 0; j < lelaw.length; j++) {
            if (j !== i) {
                pp[j].classList.remove("active");
            }
        }
    });
}