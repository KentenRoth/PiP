const videoElement = document.getElementById('video');
const openTabsButton = document.getElementById('open-tabs-button');
const startButton = document.getElementById('start-button');

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
	button.disabled = true;
	await videoElement.requestPictureInPicture();
	button.disabled = false;
});

openTabsButton.addEventListener('click', selectMediaStream);
