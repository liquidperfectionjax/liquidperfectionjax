var i = 0;
var images = [];
var slideTime = 3000; // 3 seconds

images[0] = 'assets/images/work/Liquidperfection0000.jpg';
images[1] = 'assets/images/work/Liquidperfection001.jpg';
images[2] = 'assets/images/work/Liquidperfection002.jpg';
images[3] = 'assets/images/work/Liquidperfection003.jpg';
images[4] = 'assets/images/work/Liquidperfection004.jpg';
images[5] = 'assets/images/work/Liquidperfection005.jpg';
images[6] = 'assets/images/work/Liquidperfection006.jpg';
images[7] = 'assets/images/work/Liquidperfection007.jpg';
images[8] = 'assets/images/work/Liquidperfection008.jpg';
images[9] = 'assets/images/work/Liquidperfection009.jpg';
images[10] = 'assets/images/work/Liquidperfection010.jpg';
images[11] = 'assets/images/work/Liquidperfection011.jpg';
images[12] = 'assets/images/work/Liquidperfection012.jpg';
images[13] = 'assets/images/work/Liquidperfection013.jpg';
images[14] = 'assets/images/work/Liquidperfection014.jpg';
images[15] = 'assets/images/work/Liquidperfection015.jpg';
images[16] = 'assets/images/work/Liquidperfection016.jpg';
images[17] = 'assets/images/work/Liquidperfection017.jpg';
images[18] = 'assets/images/work/Liquidperfection018.jpg';
images[19] = 'assets/images/work/Liquidperfection019.jpg';
images[20] = 'assets/images/work/Liquidperfection000.jpg';

function changePicture() {
    document.getElementById("banner").style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;
