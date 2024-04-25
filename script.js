// Add new colors, file path of umbrella image and background color below
var umbrellaColorsSupported = [
  {
    color: "blue",
    path: "./assets/Blue umbrella.png",
    backgroundColor: "#e4eaf7",
  },
  {
    color: "pink",
    path: "./assets/Pink umbrella.png",
    backgroundColor: "#f5d3e1",
  },
  {
    color: "yellow",
    path: "./assets/Yellow umbrella.png",
    backgroundColor: "#f5ecd3",
  },
];

// Function to create clickable color circles within list items
function createClickableCircles() {
  var colorOptionsContainer = document.getElementById("color-options");
  // Create circles for each color
  umbrellaColorsSupported.forEach(function (colorDetails) {
    var colorOption = createColorOption(colorDetails);
    // Append the list item to the unordered list
    colorOptionsContainer.appendChild(colorOption);
  });
}

function createColorOption(colorDetails) {
  var listItem = document.createElement("li");
  var circleElement = document.createElement("div");
  circleElement.className = "circle";
  circleElement.style.backgroundColor = colorDetails.color;
  circleElement.id = colorDetails.color;

  // Add click event listener to the circle
  circleElement.addEventListener("click", function (event) {
    handleColorSelect(event);
  });

  // Append the circle element to the list item
  listItem.appendChild(circleElement);
  return listItem;
}

function handleColorSelect(event) {
  var umbrellaImage = document.getElementById("umbrella-img");
  var body = document.body;
  var selectedColorDetails = getDetailsBasedOnColor(event.target.id);
  umbrellaImage.src = selectedColorDetails.path;
  body.style.baackgroundColor = selectedColorDetails.backgroundColor;
}

function getDetailsBasedOnColor(selectedColor) {
  return umbrellaColorsSupported.find(function (obj) {
    return obj.color === selectedColor;
  });
}
const maxAllowedSize = 5 * 1024 * 1024;

const fileInput = document.getElementById("file-upload");
// Add event listener for file input change
fileInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    // Check if the uploaded file is a valid image
    if (file.type === "image/png" || file.type === "image/jpg") {
      if (file.size <= maxAllowedSize) {
        // Create a FileReader object
        const reader = new FileReader();
        // Set up the FileReader onload event
        reader.onload = function (e) {
          var uploadedImage = document.createElement("img");

          // Set the src attribute of the image element to the uploaded image data
          uploadedImage.src = e.target.result;
          uploadedImage.style.height = "3%";
          uploadedImage.style.width = "5%";
          uploadedImage.style.position = "absolute";
          uploadedImage.style.bottom = `28%`;
          uploadedImage.style.left = `28.5%`;
          document.body.appendChild(uploadedImage);
        };
        // Read the uploaded file as a data URL
        reader.readAsDataURL(file);
      } else alert("Choose max 5MB file");
    } else alert("Choose .png or .jpg file");
  }
});

// Call the createClickableCircles function to create colored circles programmatically
createClickableCircles();
