function showImage(src, event, className) {
    const img = document.getElementById('hoverImage');
    img.src = src;
    img.className = `hover-image ${className}`;
    img.style.display = 'block';
    const gfImage = document.querySelector('.gf');
    const gfRect = gfImage.getBoundingClientRect();
    img.style.top = `41%`;
    img.style.left = `54%`;
    img.style.width = '26%';
    img.style.height = '41%';
}

function hideImage() {
    const img = document.getElementById('hoverImage');
    img.style.display = 'none';
    img.className = 'hover-image';
}

function showVideo(src, event, className) {
    const video = document.getElementById('hoverVideo');
    video.src = src;
    video.className = `hover-video ${className}`;
    video.style.display = 'block';
    const gfImage = document.querySelector('.gf');
    const gfRect = gfImage.getBoundingClientRect();
    video.style.top = `34%`;
    video.style.left = `54%`;
    video.style.width = '27%';
    video.style.height = '55%';
    video.style.zIndex = 5; // Ensure it is behind .gf
    video.play();
}

function hideVideo() {
    const video = document.getElementById('hoverVideo');
    video.style.display = 'none';
    video.pause();
    video.src = '';
}

function playVideoWithSound(src) {
    const video = document.getElementById('hoverVideo');
    if (video.src.includes(src) && !video.paused) {
        video.pause();
        video.style.display = 'none';
    } else {
        video.src = src;
        video.muted = false;
        video.style.display = 'block';
        video.play();
    }
}
