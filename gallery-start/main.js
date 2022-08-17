document.querySelector('html').style.backgroundColor = 'gray';

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
const imgArray = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg' , 'images/pic4.jpg', 'images/pic5.jpg'];

for(let i = 0; i < imgArray.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgArray[i]);
    thumbBar.appendChild(newImage);

    newImage.onclick = function(e) {
        displayedImage.src = e.target.src;
    }
};

/* Wiring up the Darken/Lighten button */
btn.onclick = () => {
    if(btn.className === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,100,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}

// ===== DO THE SAME AS THE ABOVE ONE.
// btn.onclick = function() {
//     const btnClass = btn.getAttribute('class');
//     if(btnClass === 'dark') {
//       btn.setAttribute('class','light');
//       btn.textContent = 'Lighten';
//       overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
//     } else {
//       btn.setAttribute('class','dark');
//       btn.textContent = 'Darken';
//       overlay.style.backgroundColor = 'rgba(0,0,0,0)';
//     }
// }
