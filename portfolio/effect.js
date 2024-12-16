function hamburg() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.classList.toggle("active");
}

function cancel() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.classList.remove("active");
}


//Typewriter effect 

const texts = [
  "Data Scientist",
  "Data Analyst",
  "Machine Learning Engineer",
  "Frontend Developer",
  "Backend Developer",
  "MERN Stack Developer"
]
let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typeWriter(){
  if(characterIndex<texts[textIndex].length){
    textElements.innerHTML += texts[textIndex].charAt(characterIndex);
    characterIndex++;
    setTimeout(typeWriter,speed);
  }
  else{
    setTimeout(eraseText,1000)
  }
}

function eraseText(){
  if(textElements.innerHTML.length>0){
    textElements.innerHTML = textElements.innerHTML.slice(0,-1);
    setTimeout(eraseText,50)
  }
  else{
    textIndex = (textIndex + 1) % texts.length;
    characterIndex = 0;
    setTimeout(typeWriter,500);
  }
}
window.onload = typeWriter;


document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});

function toggleSkills(skillId) {
  const skillList = document.getElementById(skillId);
  const toggleIcon = skillList.previousElementSibling.querySelector('.toggle-icon');
  
  // Toggle visibility of skill list
  skillList.classList.toggle('hidden');
  
  // Rotate the toggle icon
  toggleIcon.classList.toggle('open');
}



  

  // JavaScript to handle modal functionality
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".research-image");
  const modal = document.querySelector(".modal");
  const modalImg = document.querySelector(".modal img");
  const closeBtn = document.querySelector(".modal .close");

  images.forEach(image => {
      image.addEventListener("click", () => {
          modal.style.display = "flex"; // Show the modal
          modalImg.src = image.src; // Set the clicked image as modal content
      });
  });

  closeBtn.addEventListener("click", () => {
      modal.style.display = "none"; // Hide the modal
  });

  modal.addEventListener("click", (e) => {
      if (e.target !== modalImg) {
          modal.style.display = "none"; // Close modal on background click
      }
  });
});
