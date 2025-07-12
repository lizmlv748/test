//スライドショーの設定
const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg"
  ];
  let current = 0;
  const slide = document.getElementById("slide");
  
  setInterval(() => {
    current = (current + 1) % images.length;
    slide.src = images[current];
  }, 3000); // 3秒ごとに切り替え

  //タイトルの設定
  document.addEventListener("DOMContentLoaded", function(){
    const title = document.getElementById("hometitle")
    title.addEventListener("animationend", function(e){
      if (e.animationName == "typing"){
        title.style.animation = "none"
      }
    });
  });

  //思い出ページ遷移ボタン
  document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".album-button");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // 1回だけ出現させる
        }
      });
    }, {
      threshold: 0.1
    });
  
    observer.observe(button);
  });
  


  