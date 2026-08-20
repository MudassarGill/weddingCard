import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');
const publicVideosDir = path.join(publicDir, 'videos');
const publicPhotosDir = path.join(publicDir, 'photos');

// Ensure directories exist
[publicDir, publicVideosDir, publicPhotosDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// Copy videos
const videos = [
    { src: 'click button.mp4', dest: 'videos/clickbutton.mp4' },
    { src: 'mainbackground video.mp4', dest: 'videos/mainbackgroundvideo.mp4' }
];

videos.forEach(video => {
    const srcPath = path.join(__dirname, video.src);
    const destPath = path.join(publicDir, video.dest);

    if (fs.existsSync(srcPath)) {
        try {
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied ${video.src} to ${video.dest}`);
        } catch (err) {
            console.error(`Failed to copy ${video.src}:`, err.message);
        }
    } else {
        console.warn(`Source video not found: ${srcPath}`);
    }
});

// Copy photos
const photosDir = path.join(__dirname, 'photos');
if (fs.existsSync(photosDir)) {
    try {
        const files = fs.readdirSync(photosDir);
        files.forEach(file => {
            if (/\.(jpe?g|png|webp)$/i.test(file)) {
                const srcPath = path.join(photosDir, file);
                const destPath = path.join(publicPhotosDir, file);
                fs.copyFileSync(srcPath, destPath);
                console.log(`Copied photo: ${file}`);
            }
        });
    } catch (err) {
        console.error('Failed to copy photos:', err.message);
    }
} else {
    console.warn('Source photos directory not found.');
}
console.log('Asset copy process completed!');
