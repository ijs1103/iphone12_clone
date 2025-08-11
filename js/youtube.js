let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const playerConfigs = [
    {
        id: 'player_1',
        videoId: 'soi0F-Ytzow',
        startSeconds: 107,
        loopDuration: 5,
    },
    {
        id: 'player_2',
        videoId: 'soi0F-Ytzow',
        startSeconds: 132,
        loopDuration: 5,
    }
];

const LOOP_LIMIT = 5;

window.onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
    playerConfigs.forEach(config => {
        const playerState = {
            player: null,
            playCount: 0
        };

        playerState.player = new YT.Player(config.id, {
            videoId: config.videoId,
            playerVars: {
                playlist: config.videoId,
                mute: 1,
                controls: 0,
            },
            events: {
                'onReady': () => {
                    playerState.player.seekTo(config.startSeconds);
                },
                'onStateChange': (event) => {
                    if (event.data !== YT.PlayerState.PLAYING) return;

                    playerState.playCount++;

                    if (playerState.playCount < LOOP_LIMIT) {
                        setTimeout(() => {
                            playerState.player.seekTo(config.startSeconds);
                        }, config.loopDuration * 1000);
                    } else {
                        playerState.player.stopVideo();
                        const playerWrapper = document.getElementById(config.id).closest('.player-wrapper');
                        const hiddenImage = playerWrapper.nextElementSibling.matches('.hidden-image') ? playerWrapper.nextElementSibling : playerWrapper.querySelector('.hidden-image');

                        if (playerWrapper) playerWrapper.classList.add('inactive');
                        if (hiddenImage) hiddenImage.classList.add('active');
                    }
                }
            }
        });
    });
};

