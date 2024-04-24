// Array of circle data: { color }
var circlesData = [
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

// Function to create clickable circles within list items
function createClickableCircles() {
  console.log("ru");
  var list = document.getElementById("colorOptions");

  // Loop through the circle data
  circlesData.forEach(function (circle) {
    // Create a list item
    var listItem = document.createElement("li");

    // Create a circle element
    var circleElement = document.createElement("div");
    circleElement.className = "circle";
    circleElement.style.backgroundColor = circle.color;
    circleElement.id = circle.color;

    // Add click event listener to the circle
    circleElement.addEventListener("click", function (event) {
      var umbrella = document.getElementById("umbrella-img");
      var body = document.body;
      var selectColorDetails = findUmbrellaColorPath(event.target.id);
      umbrella.src = selectColorDetails.path;
      body.style.backgroundColor = selectColorDetails.backgroundColor;
    });

    // Append the circle element to the list item
    listItem.appendChild(circleElement);

    // Append the list item to the unordered list
    list.appendChild(listItem);
  });
}

// Call the createClickableCircles function to create circles programmatically
createClickableCircles();

function findUmbrellaColorPath(selectedColor) {
  return circlesData.find(function (obj) {
    return obj.color === selectedColor;
  });
}

// Get references to HTML elements
const fileInput = document.getElementById("file-upload");
// Add event listener for file input change
fileInput.addEventListener("change", function () {
  console.log("click");
  const file = this.files[0];
  console.log(file);
  if (file) {
    console.log("yes1");
    // Check if the uploaded file is a valid image
    if (file.type === "image/png" || file.type === "image/jpg") {
      console.log("yes");
      // Create a FileReader object
      const reader = new FileReader();
      // Set up the FileReader onload event
      reader.onload = function (e) {
        var uploadedImage = document.createElement("img");
        var umbrellaImage = document.getElementById("umbrella-img");
        console.log("top", umbrellaImage.getBoundingClientRect().top);
        // Set the src attribute of the image element to the uploaded image data
        uploadedImage.src = e.target.result;
        uploadedImage.style.height = "20px";
        uploadedImage.style.position = "absolute";
        uploadedImage.style.top = `65%`;

        uploadedImage.style.left = `${
          umbrellaImage.getBoundingClientRect().left + 160
        }px`;

        // uploadedImage.style.bottom = "20px";
        document.body.appendChild(uploadedImage);
        // Get the location of the image
        const imageRect = uploadedImage.getBoundingClientRect();
        console.log("Image Location (relative to viewport):");
        console.log("Top:", imageRect.top);
        console.log("Left:", imageRect.left);
        console.log("Bottom:", imageRect.bottom);
        console.log("Right:", imageRect.right);
      };
      // Read the uploaded file as a data URL
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file (PNG or JPG)");
      this.value = ""; // Clear the file input
      //   uploadedImage.src = ""; // Clear the image source
    }
  }
});
