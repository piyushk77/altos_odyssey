const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/altos-odyssey.jpg") {
    myImage.setAttribute("src", "images/altos-odyssey2.jpg");
  } else {
    myImage.setAttribute("src", "images/altos-odyssey.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter some text ");
  if (!myName) {
    setUserName();
  } 
  else if (myName==="." ){
    myHeading.textContent = 'Alto\'s Odyssey';
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `This is cool, ${myName}`;
  }
}


if (localStorage.getItem("name")) {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `This is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};

