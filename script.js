const videoElement = document.getElementById('video');
const openTabsButton = document.getElementById('open-tabs-button');
const startButton = document.getElementById('button');

async function selectMediaStream() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject = mediaStream;
		videoElement.onloadedmetadata = () => {
			videoElement.play();
		};
	} catch (error) {
		console.log(error);
	}
}

startButton.addEventListener('click', async () => {
	startButton.disabled = true;
	await videoElement.requestPictureInPicture();
	startButton.disabled = false;
});

openTabsButton.addEventListener('click', selectMediaStream);
