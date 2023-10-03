function showPage(evt, content) {
  // Get the button content items and button items
  var buttonContentItems = document.querySelectorAll(".button-content-item");
  var buttonItems = document.querySelectorAll(".button-item");
  var bContent = document.getElementById("twob");

  // Hide all button content items
  for (let i = 0; i < buttonContentItems.length; i++) {
    buttonContentItems[i].style.display = "none";
  }

  bContent.style.display = "none";

  // Remove the "active" class from all button items
  for (let i = 0; i < buttonItems.length; i++) {
    buttonItems[i].classList.remove("active");
  }

  // Add the "active" class to the clicked button
  evt.currentTarget.classList.add("active");

  // Display the corresponding content
  document.getElementById(content).style.display = "block";

  // Reset button styles (you may want to adjust these styles)
  for (let i = 0; i < buttonItems.length; i++) {
    buttonItems[i].style.borderRadius = "50%";
    buttonItems[i].style.border = "1px solid rgb(227, 252, 252)";
    buttonItems[i].style.width = "20px";
    buttonItems[i].style.height = "20px";
    buttonItems[i].style.marginTop = "17px";
    buttonItems[i].style.fontSize = "8px";
  }
}

// Initially show the first page
showPage(
  { currentTarget: document.querySelector(".button-item") },
  "button-1-content"
);

var bContent = document.getElementById("twob");
var bButton = document.getElementById("twowaytwo");
var aButton = document.getElementById("twowayone");
var aContent = document.getElementById("button-2-content");
var slider = document.getElementById("slide");

function toggleOneb() {
  if (aButton.checked) {
    aContent.style.display = "none";
    bContent.style.display = "block";
  } else if (!aButton.checked) {
    aContent.style.display = "block";
    bContent.style.display = "none";
  }
  aButton.checked = false;
}

function toggleOnea() {
  if (!bButton.checked) {
    aContent.style.display = "block";
    bContent.style.display = "none";
  } else if (bButton.checked) {
    aContent.style.display = "none";
    bContent.style.display = "block";
  }
  bButton.checked = true;
}

aButton.addEventListener("change", toggleOneb);
bButton.addEventListener("change", toggleOnea);
