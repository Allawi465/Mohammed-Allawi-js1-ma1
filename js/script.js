// Question 1

const cats = [
    {
        name: "Blob",
        age: 10,
        complain: function() {
            console.log("Meow!");
        }
    },
    {
        name: "Harold",
        complain: function() {
            console.log("Meow!");
        }
    },
    {
        name: "Blurt",
        age: 21,
        complain: function() {
            console.log("Meow!");
        }
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