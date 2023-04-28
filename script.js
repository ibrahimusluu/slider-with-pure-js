let models = [
  {
    name: "Bmw 418d",
    image: "images/dhiva-krishna-X16zXcbxU4U-unsplash.jpg",
    link: "",
  },
  {
    name: "Bmw 418d",
    image: "images/fernando-marques-dzZV4PpQ-NI-unsplash.jpg",
    link: "",
  },
  {
    name: "Bmw 418d",
    image: "images/jakob-rosen-rC1Llibcis0-unsplash.jpg",
    link: "",
  },
  {
    name: "Bmw 418d",
    image: "images/josh-berquist-_4sWbzH5fp8-unsplash.jpg",
    link: "",
  },
  {
    name: "Bmw 418d",
    image: "images/roberto-nickson-zu95jkyrGtw-unsplash.jpg",
    link: "",
  },
];

let index = 0;
let slideCount = models.length;
let interval;

let settings = {
  duration: "1000",
  random: false,
};

init(settings);

document
  .querySelector(".fa-circle-arrow-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
    console.log(index);
  });

document
  .querySelector(".fa-circle-arrow-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index);
  });

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});

function init(settings) {
  let prev;
  interval = setInterval(function () {
    if (settings.random) {
      // random index
      do {
        index = Math.floor(Math.random() * slideCount);
      } while (index == prev);
      prev = index;
    } else {
      // increment index
      if (slideCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      console.log(index);
      index++;
    }
    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  index = i;

  if (i < 0) {
    index = slideCount - 1;
  }
  if (i >= slideCount) {
    index = 0;
  }
  document.querySelector(".card-title").textContent = models[index];

  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);

  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
