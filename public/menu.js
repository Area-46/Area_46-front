const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPosts = document.querySelectorAll('.all');

for (let i = 0; i < categoryTitle.length; i++) {
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item) {
    changeActivePosition(item);
    for (let i = 0; i < allCategoryPosts.length; i++) {
        if (allCategoryPosts[i].classList.contains(item.attributes.id.value)) {
            allCategoryPosts[i].style.display = "block";
        } else {
            allCategoryPosts[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem) {
    for (let i = 0; i < categoryTitle.length; i++) {
        categoryTitle[i].classList.remove('active');
    }
    activeItem.classList.add('active');
};

const contentAll = document.querySelectorAll(".all");
const btnsearch = document.getElementById("search");

// btnsearch.addEventListener('click', (e) => {
//     const searchtext = document.getElementById("search-input").value;
//     contentAll.forEach(e => {
//         console.log(e.childNodes[3].childNodes[1].textContent.includes(searchtext))
//         if (!e.childNodes[3].childNodes[1].textContent.toUpperCase().includes(searchtext.toUpperCase())) 
//             e.style.display = "none"
//     });
// }) 

const onblur = (e) => {
    contentAll.forEach(e => {
        e.style.display = "block"
    });
}

const onkeyup = (e) => {
    inputSearch.addEventListener("blur", onblur)
    contentAll.forEach(e => {
        e.style.display = "block"
    });
    // console.log(e.target.value)
    if (e.target.value === "") {
        contentAll.forEach(e => {
            e.style.display = "block"
        });
    } else {
        const searchtext = document.getElementById("search-input").value;
        contentAll.forEach(element => {
            // console.log(element.childNodes[3].childNodes[1].textContent.includes(searchtext))
            if (!element.childNodes[3].childNodes[1].textContent.toUpperCase().includes(searchtext.toUpperCase()))
                element.style.display = "none"
        });
    }
}

const inputSearch = document.getElementById("search-input");
inputSearch.addEventListener("keyup", onkeyup)
inputSearch.addEventListener("blur", onblur)

btnsearch.addEventListener('mouseenter', (e) => {
    inputSearch.removeEventListener("blur", onblur)
})

for (let i=1;i<=20;i++) {
    const btnorders = document.getElementById(`orders${i}`) 
    btnorders.addEventListener('click', () => {
        // console.log(btnorders.classList[2])
        const food = document.querySelector(`.${btnorders.classList[2]}`)
        // console.log(food.childNodes[1].childNodes[1].getAttribute('src'))
        const xhttp = new XMLHttpRequest();
        xhttp.open('POST', "http://localhost:3000/users/create")
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
        xhttp.send(JSON.stringify({
            "id": 1,
            "tableNumber": "3",
            "orders": [
                        {"foodName": food.childNodes[3].childNodes[1].textContent.toString(), "price": food.childNodes[3].childNodes[3].textContent.toString(), "url": food.childNodes[1].childNodes[1].getAttribute('src').toString(), "count": "1"}, 
                    ]
        }))
    }) 
}

