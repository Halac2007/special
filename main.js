document.addEventListener("DOMContentLoaded", () => {
  let lastScrollTop = 0;
  let startScrollTop = 0;

  // Xác định vị trí bắt đầu của phần tử khi trang được tải
  function setStartScrollTop() {
    const image = document.getElementById("background-image-sticky");
    if (image) {
      const rect = image.getBoundingClientRect();
      startScrollTop = window.scrollY + rect.top;
    }
  }

  // Cập nhật opacity của overlay khi cuộn trang
  function updateOverlayOpacity(scrollTop) {
    const overlay = document.querySelector(".overlay");
    if (!overlay) return;

    const opacity = scrollTop > lastScrollTop ? 1 : Math.max(0, (scrollTop - startScrollTop) / (document.documentElement.scrollHeight - window.innerHeight));
    overlay.style.opacity = opacity;

    lastScrollTop = scrollTop;
  }

  // Cập nhật hình ảnh và caption khi cuộn trang
  function updateImageAndCaption(scrollTop) {
    const image = document.getElementById("background-image-sticky");
    const caption = document.getElementById("image-caption");

    if (!image || !caption) return;

    const adjustedScrollTop = scrollTop - startScrollTop;

    if (adjustedScrollTop >= 700) {
      image.src = "https://image.plo.vn/w2000/Uploaded/2024/bpcbzqvp/2024_08_02/du-lich-ben-vung-1-7235.jpg.webp";
      caption.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.";
    } else if (adjustedScrollTop >= 500) {
      image.src = "https://image.plo.vn/w2000/Uploaded/2024/fcivpwib/2024_07_30/h2-2518.jpg.webp";
      caption.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Sed non risus.";
    } else if (adjustedScrollTop >= 200) {
      image.src = "https://image.plo.vn/w2000/Uploaded/2024/bpcbzqvp/2024_08_02/du-lich-ben-vung-3-758.jpg.webp";
      caption.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.";
    } else {
      image.src = "https://image.plo.vn/w2000/Uploaded/2024/fcivpwib/2024_07_30/cong-vien-du-lich-yang-bay-6221.jpg.webp";
      caption.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.Sed non risus.";
    }
  }

  // Cập nhật vị trí của phần tử khi trang được tải và khi kích thước cửa sổ thay đổi
  function adjustStickyPosition() {
    const contentLeft = document.getElementById("right-content");
    if (contentLeft) {
      contentLeft.style.top = `calc(50% - ${contentLeft.clientHeight / 2}px)`;
    }
  }

  // Lắng nghe sự kiện cuộn và thực hiện các cập nhật
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || window.pageYOffset;
    requestAnimationFrame(() => {
      updateOverlayOpacity(scrollTop);
      updateImageAndCaption(scrollTop);
    });
  });

  window.addEventListener("load", () => {
    setStartScrollTop();
    adjustStickyPosition();
  });

  window.addEventListener("resize", adjustStickyPosition);
});
/*-----------------sldier-----------*/
document.addEventListener("scroll", function () {
  const postElement = document.querySelector(".post");
  const postPosition = postElement.getBoundingClientRect().top + window.scrollY;
  const scrollPosition = window.scrollY;

  // Array of background images
  const backgrounds = [
    "https://photo.znews.vn/w1920/Uploaded/rotntb/2024_05_07/LensDienBienPhu70nam_P1_znews_1_.JPG",
    "https://photo.znews.vn/w1920/Uploaded/rotntb/2024_05_07/LensDienBienPhu70nam_P1_znews_3_.JPG",
    "https://photo.znews.vn/w1920/Uploaded/rotntb/2024_05_07/LensDienBienPhu70nam_P1_znews_8_.JPG",
    // Add more images as needed
  ];

  // Check if scroll position has reached the post section
  if (scrollPosition >= postPosition) {
    // Calculate the index based on scroll position relative to .post
    const relativeScrollPosition = scrollPosition - postPosition;
    const index = Math.min(
      Math.floor((relativeScrollPosition / (document.body.scrollHeight - postPosition - window.innerHeight)) * backgrounds.length),
      backgrounds.length - 1
    );
    console.log(index);

    // Change the background image
    postElement.style.backgroundImage = `url(${backgrounds[index]})`;
  }
});

/*-----------------*/
let backToTopBtn = document.querySelector(".backtotop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.onclick = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};

/*---------------------*/
const slider = document.querySelector(".btn-slider");
function activate(e) {
  const items = document.querySelectorAll(".item");
  e.target.matches(".icon__next") && slider.append(items[0]);
  e.target.matches(".icon__previous") && slider.prepend(items[items.length - 1]);
}
document.addEventListener("click", activate, false);
