document.addEventListener('DOMContentLoaded', function () {
    // Get the button and image elements
    var showImageButton = document.getElementById('showImageButton');
    var displayedImage = document.getElementById('displayedImage');

    // Add a click event listener to the button
    showImageButton.addEventListener('click', function () {
        // Change the source of the image
        displayedImage.src = 'img/astolfo1.jpg'; // Replace with the actual path to your image

        // Display the image
        displayedImage.style.display = 'block';
    });
});
