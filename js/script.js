// Question 1

const cats = [
    {
        name: "Blob",
        age: 10,
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21,
    }
];



// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4 

heading.className = "subheading"; 

// Question 5

paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++ ) {
    paragraphs[i].style.color = "red";
}

// Question 6

resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p>`; 

resultsContainer.style.backgroundColor = "yellow";

// Question 7
/* 
function list() {
    for (let i = 0; i < list.lenght; i++) {
        console.log(list[i].name);
    }
}

list(); */

// Question 8

catContainer = document.querySelector(".cat-container");

function createCats(cats) {
    let html = ""; 
    let catAge = "Age unknown"
    for (let i = 0; i < cats.length; i++) {
        html += `<div>
        <h5>Name: ${cats[i].name}</h5>
        <p>Age: ${cats[i].age}</p>
        </div>`;
    }

    return html;
}

const newhtml = createCats(cats);
catContainer.innerHTML = newhtml;