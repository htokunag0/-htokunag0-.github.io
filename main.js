let myHeading = document.querySelector("h1");

myHeading.textContent = "Mozilla はかっこいいよ";

let myVariable = "Bob";
myVariable = "Bob";

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");

function setUserName() {
  const myName = prompt("haruka。");

  localStorage.setItem("name", myName);

  myHeading.textContent = "Mozilla はかっこいいよ";
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  myHeading.textContent = "Mozilla はかっこいいよ";
}

myButton.onclick = () => {
  setUserName();
};
