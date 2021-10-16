// check if there is local storage color option *****
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {

  document.documentElement.style.setProperty('--main-color', mainColors);

  // remove active class form all color list item
  document.querySelectorAll(".colors-list li").forEach(element => {

    element.classList.remove("active");

      // add active class on element 
    if (element.dataset.color === mainColors) {

      // add active class
      element.classList.add("active");
    }

  });
}
// random background option ***********
let backgroundOption = true;

// variable to control the interval
let backgroundInterval;

// check if there is local storage Random background item 
let backgroundLocal = localStorage.getItem("background_option");

// check if is empty 
if (backgroundLocal !== null) {

  if (backgroundLocal === 'true') {

    backgroundOption = true;
  } else {
    backgroundOption = false;
  }
  // remove active class from all spans 
  document.querySelectorAll(".random-background span").forEach(element => {

    element.classList.remove("active");
    
  });

  if (backgroundLocal === 'true') {

    document.querySelector(".random-background .yes").classList.add("active");
  } else {
    document.querySelector(".random-background .no").classList.add("active");

  }
}

// toggle spin class on icon *********************
document.querySelector(".toggle-icon .fa-cog").onclick = function() {

  // toglle class fa-spin
  this.classList.toggle("fa-spin");
  
  // add class open to setting box
  document.querySelector(".setting-box").classList.toggle("open");

};

// switch colors **********************
const colorsLi = document.querySelectorAll(".colors-list li");

  colorsLi.forEach(li => {
    // click on every list-item
    li.addEventListener("click", (e) => {
      // set color on root 
      document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
      // set color on local storage 
      localStorage.setItem('color_option', e.target.dataset.color);

      handeActive(e);
    });

  });

// Random background ***********
const randombackground = document.querySelectorAll(".random-background span");

  randombackground.forEach(span => {
    // click on every span-item
    span.addEventListener("click", (e) => {

      // remove active class form all spans
      handeActive(e);

      if (e.target.dataset.background === 'yes') {

        backgroundOption = true;

        randomizeImages();

        localStorage.setItem("background_option", true);

      } else {
        backgroundOption = false;

        clearInterval(backgroundInterval);

        localStorage.setItem("background_option", false);
      }
    });
  });
// select landing pag element (random background) *****
let landingPage = document.querySelector(".landing-pag");

// selet array of images 
let imagesArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// function to randomize images *****
function randomizeImages() {

  if (backgroundOption === true) {

    backgroundInterval = setInterval(() => {

      // change background image url 
      let randomNumber = Math.floor(Math.random()* imagesArray.length);
      // get random number 
      landingPage.style.backgroundImage = 'url("../images/landingpage/' + imagesArray[randomNumber] + '")';
    
    }, 3000);
  }
}
randomizeImages();

// select skills selector ***************************
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    // skill offsetHeight 
    let SkillsOffsetTop = ourSkills.offsetTop;

    //outer height
    let skillsOuterHeight = ourSkills.offsetHeight;

    //window height
    let windowHeight = this.innerHeight;

    // window scroll Top
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > SkillsOffsetTop + skillsOuterHeight - windowHeight) {
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach((skill) => {

            skill.style.width = skill.dataset.progress;

        });
    }
};

// create popup with the gallery ***************************
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {

  img.addEventListener('click', (e) => {

    // create overlay element 
    let overlay = document.createElement("div");
    // add class to overlay 
    overlay.className = "popup-overlay";

    // append overlay to the body
    document.body.appendChild(overlay);

    // create popup 
    let popupBox =document.createElement("div");
    // add class name 
    popupBox.className = 'popup-box';

    if (img.alt !== null) {

      // create heading
      let heading = document.createElement("h3");

      // create text to heading 
      let imgText = document.createTextNode(img.alt);

      // append the text to the heading 
      heading.appendChild(imgText);

      // append the heading to the popup box 
      popupBox.appendChild(heading);
    }

    // create the image 
    let popupImage = document.createElement("img");
    // set the image source 
    popupImage.src = img.src;

    // add image to popup box 
    popupBox.appendChild(popupImage);

    // append popup box to the body 
    document.body.appendChild(popupBox);

    let closeButton = document.createElement("span");

    // create the closed button text 
    let colsedButtonText = document.createTextNode("X");

    // append text tp close button 
    closeButton.appendChild(colsedButtonText);

    // add class to close button 
    closeButton.className = 'close-button';

    // add close-button to popup box 
    popupBox.appendChild(closeButton);

  });
});

// closed the popup 
document.addEventListener("click", function (e) {

  if (e.target.className == 'close-button') {

    e.target.parentNode.remove();

    document.querySelector(".popup-overlay").remove();
  }
});

// the control of tooltip *****************
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// the control of links ****
const allLinks = document.querySelectorAll(".nav-items a");


function scrollTo(elements) {

  elements.forEach(ele => {

      ele.addEventListener("click", (e) => {
  
        e.preventDefault();
  
        document.querySelector(e.target.dataset.section).scrollIntoView({
  
          behavior: 'smooth'
  
        });
      });
    });
}
scrollTo(allBullets);
scrollTo(allLinks);

// handle active class *************
function handeActive (ev) {

   // remove active class form all spans
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {

    element.classList.remove("active");

  });
  // add active calss 
  ev.target.classList.add("active");
}
// Bullets control *********************
let bulletSpan = document.querySelectorAll(".bullet-option span");
let bulletContainer = document.querySelector(".nav-bullets");
// let bulletLocalStorage = localStorage.getItem("bullet_option");

// if (bulletLocalStorage !== null) {

//   bulletSpan.forEach(span => {

//     span.classList.remove("active");

//   });
  
//   if (bulletLocalStorage === 'block') {

//     bulletContainer.style.display = 'block';
    
//     document.querySelector(".bullet_option .yes").classList.add("active");
//   } else {

//     bulletContainer.style.display = 'none';

//     document.querySelector(".bullet_option .no").classList.add("active");

//   }

// }

bulletSpan.forEach(span => {
  
  span.addEventListener("click",(e) => {

    if (span.dataset.display === 'show') {

      bulletContainer.style.display = 'block';

      localStorage.setItem("bullet_option", 'block');

    } else {

      bulletContainer.style.display = 'none';
      
      localStorage.setItem("bullet_option", 'none');
    }

    handeActive(e);
    
  });
});

// reset option 
document.querySelector(".reset-option").onclick = function() {

  localStorage.removeItem("bullet_option");
  localStorage.removeItem("background_option");
  localStorage.removeItem("color_option");

  window.location.reload();

};
// Toggle menu 
let buttonToggle = document.querySelector(".toggle-menue");
let links = document.querySelector(".nav-items");

buttonToggle.onclick = function (e) {

  e.stopPropagation();

  this.classList.toggle("menu-active");

  links.classList.toggle("open");

};
// click outside and close the toggle button 
document.addEventListener("click", (e) => {

  if (e.target !== buttonToggle && e.target !== links) {

    // check if menue is open 
    if(links.classList.contains("open")) {

      buttonToggle.classList.toggle("menu-active");

      links.classList.toggle("open");
    }
  }
});
// stop propagation 
links.onclick = function (e) {
  e.stopPropagation();
}