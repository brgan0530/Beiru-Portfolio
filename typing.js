const words = [" an Electrical Engineer", "an Electronics Engineer","a Product Designer", "a Problem Solver", "a Learner"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
let delaychar = 5; //affects how long the text holds before changing

function type() {
  currentWord = words[i] + " ".repeat(delaychar);;
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      setTimeout(() => {}, 100); 
      isDeleting = true;
    }
  }
  setTimeout(type, 300); //change number to change animation time 
}

type();
