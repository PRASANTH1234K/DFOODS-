
let n = 0;
function slide() {
  const images = document.getElementsByClassName("img");
  const imag1 =document.getElementsByClassName("img1");
  const imag2 =document.getElementsByClassName("img2");
  const imag3 =document.getElementsByClassName("img3");
  const imag4 =document.getElementsByClassName("img4");
  const imag5 =document.getElementsByClassName("img5");
  const imag6 =document.getElementsByClassName("img6");
  const imag7 =document.getElementsByClassName("img7");

  for (let i = 0; i < images.length; i++) {
    images[i].style = "display:none";
    imag1[i].style = "display:none";
    imag2[i].style = "display:none";
    imag3[i].style = "display:none";
    imag4[i].style = "display:none";
    imag5[i].style = "display:none";
    imag6[i].style = "display:none";
    imag7[i].style = "display:none";
  }
  n++;
  if (n > images.length) {
    n = 1;
  }
  images[n - 1].style = "display:block";
  imag1[n - 1].style = "display:block";
  imag2[n - 1].style = "display:block";
  imag3[n - 1].style = "display:block";
  imag4[n - 1].style = "display:block";
  imag5[n - 1].style = "display:block";
  imag6[n - 1].style = "display:block";
  imag7[n - 1].style = "display:block";
  setTimeout(slide, 3000);
}
slide();
