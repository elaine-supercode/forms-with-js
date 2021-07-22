console.log("test");

// Wiederholung
// document.write("hallo welt");

// document.getElementById("headline").innerHTML += " + meine headline";
// document.getElementById("headline").innerHTML += " + Forms with JS";

// document.body.innerHTML += "<p>test</p>";

// Forms with JS

console.log(document.getElementById("first-name"));

// input value

function showFirstName() {
  console.log("yes");
  console.log(document.getElementById("first-name").value);
}

function showLastName() {
  console.log("lastname");
}

let points = document.getElementById("points");
console.log(points);
console.log(document.getElementById("points"));

function showPoints() {
  //   console.log("points");
  //   console.log(points.value);
  console.log(document.getElementById("points").value);
}

let stimmung = document.getElementById("moods");
console.log(moods);

function showMoods() {
  console.log("debugging test");
  console.log(document.getElementById("moods").value); // ausgeschriebene Variante
  console.log(stimmung.value); // verkützte Variante mit Variabeln
}

function sayHi() {
  console.log("hi");
  alert("hi");
}

function myButton() {
  console.log("button");
}

function showFormValues() {
  //   console.log("form values");

  // Declaration with variable
  //   let firstname = document.getElementById("firstname");
  //   console.log(firstname.value);

  console.log(document.getElementById("firstname").value);
  console.log(document.getElementById("laststname").value);
  console.log(document.getElementById("email").value);
  console.log(document.getElementById("gender").value);
}

// style with JS
document.getElementById("change-text");
console.log(document.getElementById("change-text"));

// change text color
document.getElementById("change-text").style.color = "gold";

// change fonts size
// document.getElementById("change-text").style.fontSize = 50 + "px";
document.getElementById("change-text").style.fontSize = "50px";

// change font family
document.getElementById("change-text").style.fontFamily = "monospace";

// text-align, text-decoration, border, display
document.getElementById("change-text").style.textAlign = "right";
document.getElementById("change-text").style.textDecoration = "underline";
document.getElementById("change-text").style.border = "5px solid green";

function hideButtons() {
  //   console.log("hide");
  document.getElementById("change-text").style.display = "none";
}

// dark mode & light mode
// add classList

function darkMode() {
  console.log("darkmode");
  //   document.getElementById("change-mode").style.color = "#fff";
  //   document.getElementById("change-mode").style.backgroundColor = "#000";
  document.getElementById("change-mode").classList.add("dark-mode");
  console.log(document.getElementById("change-mode"));
}

function lightMode() {
  console.log("lightmode");
  //   document.getElementById("change-mode").style.color = "#000";
  //   document.getElementById("change-mode").style.backgroundColor = "#fff";
  document.getElementById("change-mode").classList.remove("dark-mode");
  console.log(document.getElementById("change-mode"));
}

function caculate() {
  //   console.log(document.getElementById("alter1").value);
  //   console.log(document.getElementById("alter2").value);
  //   console.log("calc");

  //   console.log(
  //     document.getElementById("alter1").value -
  //       document.getElementById("alter2").value
  //   );

  //   document.getElementById("result").innerHTML =
  //     document.getElementById("alter1").value -
  //     document.getElementById("alter2").value;

  let person1 = document.getElementById("alter1");
  let person2 = document.getElementById("alter2");
  let result = document.getElementById("result");

  result.innerHTML = person1.value - person2.value;
}
