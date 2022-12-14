function swap_images(img1, img2){
	[img1.src, img2.src] = [img2.src, img1.src];
}

let root = document.getElementById('root'),
	swap_button = document.getElementById('swap-button'),
	img1 = document.createElement('img'),
	img2 = document.createElement('img');

img1.src = "./img/billy.jpg";
img2.src = "./img/above_the_skies.jpg";

img1.style.width = "450px";
img2.style.width = "450px";

root.appendChild(img1);
root.appendChild(img2);

swap_button.addEventListener('click', () => swap_images(img1, img2))
