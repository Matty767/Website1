function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  const backgroundImages = [
    'images/hw222.jpg',
    'images/pexelsJumpOnbike3.jpg',
    'images/pexelsWalking3.jpg',
    'images/apexelsNew5.jpg',
    'images/bikeTrackPexels1.jpg',
    'images/bikeFix2pexels.jpg'
  ];
  
  let currentImageIndex = 0;
  const articleSection = document.querySelector('.article');
  
  // Function to change the background image with smooth transition
  function changeBackground() {
    articleSection.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length; // Cycle through images
  }
  
  // Set initial background image and start the slideshow
  changeBackground();
  setInterval(changeBackground, 4000); // Change image every 4 seconds (4000 milliseconds)
  
