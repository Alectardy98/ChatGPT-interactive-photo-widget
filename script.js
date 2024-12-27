document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image-container img");
  const photoWidget = document.getElementById("photo-widget");
  let currentIndex = 0;
  let interval;

  const showImage = (index) => {
    images.forEach((img) => img.classList.remove("active"));
    images[index].classList.add("active");
  };

  const startTransition = () => {
    currentIndex = 1; // Start with the second image (index 1)
    showImage(currentIndex);

    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }, 2000); // Change image every 2 seconds
  };

  const stopTransition = () => {
    clearInterval(interval);
    currentIndex = 0; // Reset to the first image
    showImage(currentIndex); // Show the first image when cursor leaves
  };

  // Initialize the first image
  showImage(currentIndex);

  // Start transitions when the cursor is over the widget
  photoWidget.addEventListener("mouseenter", startTransition);

  // Stop transitions and reset to the first image when the cursor leaves the widget
  photoWidget.addEventListener("mouseleave", stopTransition);
});
