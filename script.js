const imageList = [];
let index = 1;

// Skontroluj existenciu obrázkov postupne
function preloadImages(callback) {
  function tryNext() {
    const img = new Image();
    img.onload = () => {
      imageList.push(`${index}.jpg`);
      index++;
      tryNext();
    };
    img.onerror = () => {
      callback(); // ukonči, keď už obrázok neexistuje
    };
    img.src = `images/${index}.jpg`;
  }

  tryNext();
}

function startCarousel(interval = 5000) {
  let current = 0;

  function updateImage() {
    const img = document.getElementById('photo');
    img.src = `images/${imageList[current]}`;
    current = (current + 1) % imageList.length;
  }

  updateImage();
  setInterval(updateImage, interval);
}

window.onload = () => {
  preloadImages(() => {
    if (imageList.length > 0) {
      startCarousel(5000); // 5 sekúnd
    } else {
      console.error("No images found in /images/");
    }
  });
};