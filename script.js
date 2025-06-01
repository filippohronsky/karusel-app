let imageList = [];
let current = 0;
const interval = 5000; // 5 sekúnd

// Dynamicky skúša nájsť ďalšie obrázky
function findNextImage(index, callback) {
  const img = new Image();
  img.onload = () => callback(true);
  img.onerror = () => callback(false);
  img.src = `images/${index}.jpg`;
}

function extendImageList(callback) {
  let index = imageList.length + 1;

  function checkNext() {
    findNextImage(index, (exists) => {
      if (exists) {
        imageList.push(`${index}.jpg`);
        index++;
        checkNext(); // skús ďalší
      } else {
        callback(); // skonči, keď už ďalší nie je
      }
    });
  }

  checkNext();
}

function updateImage() {
  const img = document.getElementById('photo');
  img.src = `images/${imageList[current]}`;
  current = (current + 1) % imageList.length;

  // Ak sme sa vrátili na začiatok, skontroluj, či nepribudol nový obrázok
  if (current === 0) {
    extendImageList(() => {
      console.log("Checked for new images. Total:", imageList.length);
    });
  }
}

function preloadInitialImages(callback) {
  let index = 1;

  function tryNext() {
    const img = new Image();
    img.onload = () => {
      imageList.push(`${index}.jpg`);
      index++;
      tryNext();
    };
    img.onerror = () => callback();
    img.src = `images/${index}.jpg`;
  }

  tryNext();
}

window.onload = () => {
  preloadInitialImages(() => {
    if (imageList.length > 0) {
      updateImage();
      setInterval(updateImage, interval);
    } else {
      console.error("No images found in /images/");
    }
  });
};