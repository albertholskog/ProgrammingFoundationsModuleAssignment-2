// Question 1

const pets = [
  { type: "cat", age: 5.5 },
  { type: "dog", age: 3.8 },
  { type: "parrot", age: 4.0 },
];

for (let i = 0; i < pets.length; i++) {
  const age = pets[i].age;
  if (age <= 4) {
    console.log(pets[i].type);
  }
}

//Question 2

function argument(value) {
  if (typeof value === "boolean") {
    console.log(value);
  } else if (typeof value !== true) {
    console.log("Please pass a boolean value in");
  }
}
argument(true);

//Question 3

const heading = document.querySelector("h2");
const editbutten = document.querySelector("button");

function UpdatedHeader() {
  heading.innerHTML = "Updated subheading";
  heading.style.color = "blue";
}
editbutten.onclick = UpdatedHeader;
