import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

player.on('play', onPlay);
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
