let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
const start_1 = 45;
const start_2 = 70;
const duration = 4;
const VIDEO_ID = '9GA4gqLeeIQ';
let player1, player2;

window.onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
	player1 = new YT.Player('player_1', {
		videoId: VIDEO_ID, // 유튜브 영상 ID
		playerVars: {
			playlist: VIDEO_ID, // 반복 재생할 유튜브 영상 ID 목록
			mute: 1,
			controls: 0,
		},
		events: {
			'onReady': onPlayerReady_1,
			'onStateChange': onPlayerStateChange_1
		}
	});
	player2 = new YT.Player('player_2', {
		videoId: VIDEO_ID, 
		playerVars: {
			playlist: VIDEO_ID, 
			mute: 1,
			controls: 0,
		},
		events: {
			'onReady': onPlayerReady_2,
			'onStateChange': onPlayerStateChange_2
		}
	});
}

const onPlayerReady_1 = (event) => {
	player1.seekTo(start_1);
};
const onPlayerReady_2 = (event) => {
	player2.seekTo(start_2);
};

const onPlayerStateChange_1 = (state) => {
	if (state.data == YT.PlayerState.PLAYING) {
		setTimeout(() => player1.seekTo(start_1), duration * 1000);
	}
};
const onPlayerStateChange_2 = (state) => {
	if (state.data == YT.PlayerState.PLAYING) {
		setTimeout(() => player2.seekTo(start_2), duration * 1000);
	}
};



