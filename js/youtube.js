let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
const playerEls = document.querySelectorAll('.player-wrapper');
const hiddenImageEls = document.querySelectorAll('.hidden-image');
const start1 = 45;
const start2 = 70;
const duration = 4;
const LIMIT = 5; 
const VIDEO_ID = '9GA4gqLeeIQ';
let player1, player2;
let play_count = 0;

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

const onPlayerReady_1 = async (event) => {
	player1.seekTo(start1);
};
const onPlayerReady_2 = (event) => {
	player2.seekTo(start2);
};
const onPlayerStateChange_1 = (state) => {
	if (state.data == YT.PlayerState.PLAYING) {
		play_count ++;
		if (play_count < LIMIT) {
			setTimeout(() => player1.seekTo(start1), duration * 1000);
		} else {
			stopVideo(player1);
			iframeHide();
		}
	}
};
const onPlayerStateChange_2 = (state) => {
	if (state.data == YT.PlayerState.PLAYING) {
		if (play_count < LIMIT) {
			setTimeout(() => player2.seekTo(start2), duration * 1000);			
		} else {
			stopVideo(player2);
		}
	}
};
const stopVideo = (player) => player.stopVideo();
const iframeHide = () => {
	playerEls[0].classList.add('inactive');
	playerEls[1].classList.add('inactive');
	hiddenImageEls[0].classList.add('active');
	hiddenImageEls[1].classList.add('active');
}



