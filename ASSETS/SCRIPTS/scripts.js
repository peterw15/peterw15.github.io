let rotate = 0;
let rotateAmount = 90

function logoClick () {
    const logo = document.getElementById('headerLogo')
    rotate = (rotate + rotateAmount) % 360;
    logo.style.transform = 'rotate(' + rotate + 'deg)';
}