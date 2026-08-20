const fs = require('fs');
const path = require('path');

const publicVideosDir = path.join(__dirname, 'public', 'videos');

if (!fs.existsSync(publicVideosDir)) {
    fs.mkdirSync(publicVideosDir, { recursive: true });
}

try {
    fs.copyFileSync(
        path.join(__dirname, 'click button.mp4'),
        path.join(publicVideosDir, 'clickbutton.mp4')
    );
    console.log('clickbutton.mp4 copied successfully');
} catch (err) {
    console.error('Failed to copy clickbutton.mp4:', err.message);
}

try {
    fs.copyFileSync(
        path.join(__dirname, 'mainbackground video.mp4'),
        path.join(publicVideosDir, 'mainbackgroundvideo.mp4')
    );
    console.log('mainbackgroundvideo.mp4 copied successfully');
} catch (err) {
    console.error('Failed to copy mainbackgroundvideo.mp4:', err.message);
}
