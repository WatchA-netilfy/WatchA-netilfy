const videoUpload = document.getElementById('videoUpload');
const videoPlayer = document.getElementById('videoPlayer');

videoUpload.addEventListener('change', function() {
    const file = this.files[0];
    if (file && file.type === "video/mp4") {
        const fileURL = URL.createObjectURL(file);
        videoPlayer.src = fileURL;
        videoPlayer.load();
        videoPlayer.play();
    } else {
        alert("Please upload a valid .mp4 file.");
    }
});
