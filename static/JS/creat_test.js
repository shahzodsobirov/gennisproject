const link = document.querySelectorAll('.variant_menu a');
const box = document.querySelectorAll('.variant');
const active = document.querySelectorAll('.controll_active');
box[0].style.display = 'block'

function removeDiv() {
    box.forEach(item => {
        item.style.display = 'none'
    })
}

function addLink() {
    link.forEach((item, index) => {
        item.addEventListener('click', () => {
            console.log(index)
            removeLink();
            removeDiv()
            item.classList.add('active');
            box[index].style.display = 'flex'
        });
    });
}

addLink();

function removeLink() {
    link.forEach(item => {
        item.classList.remove('active');
    });
}

const block = document.querySelector('.block');


let question = document.querySelector(".question"), button = document.querySelector("button"),
    subject = document.querySelector(".subject"), inp = document.querySelectorAll(".inp2"),
    level = document.querySelector(".level"),
    lev = document.querySelector(".lev"),
    checkboxes = document.querySelectorAll(".checkbox"),
    sub = document.querySelector(".sub");

let question_list = [];

function question_info() {
    inp.forEach((item, index) => {
        item.addEventListener("input", () => {
            let subject_id = sub.value;
            let level_id = lev.value
            console.log(subject_id)
            let info = {
                "id": index + 1,
                "subject": subject_id, "level": level_id, "question": question.value, "variants": item.value
            }
            question_list.push(info)
        })
    })
}

question_info()

function check() {
    checkboxes.forEach((item, index) => {
        item.addEventListener("change", () => {
            if (item.checked) {
                question_list = question_list.map((text, i) => {
                    if (text.id === index + 1) {
                        return {...text, checked: true}
                    }
                    return text
                })
            }
            console.log(question_list)
        })
    })
}

check()
console.log(question_list)