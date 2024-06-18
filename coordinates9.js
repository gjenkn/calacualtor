function positionFakeButton(realId, fakeId) {
    var realButton = document.getElementById(realId);
    var fakeButton = document.getElementById(fakeId);

    var realButtonTop = realButton.offsetTop;
    var realButtonLeft = realButton.offsetLeft;

    fakeButton.style.position = 'absolute';

    if (fakeId === 'moo') {
        fakeButton.style.top = (realButtonTop * 1.015) + 'px'; 
        fakeButton.style.left = (realButtonLeft * 1.019) + 'px'; // Adjust as needed
    } else {
        fakeButton.style.top = realButtonTop + 'px';
        fakeButton.style.left = realButtonLeft + 'px';
    }
}

function continuousPositioning() {
    positionFakeButton('real9', 'fake9');
    positionFakeButton('real00', 'fake00');
    positionFakeButton('real00', 'moo');
}

document.addEventListener('DOMContentLoaded', function() {
    continuousPositioning(); 
});

// Re-positioning on window resize
window.addEventListener('resize', function() {
    positionFakeButton('real9', 'fake9'); 
    positionFakeButton('real00', 'fake00'); 
    positionFakeButton('real00', 'moo'); 
});