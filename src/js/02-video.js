import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
  throttle(function (currentTime) {
    const seconds = currentTime.seconds;
    localStorage.setItem('seconds', JSON.stringify(seconds));
  }, 1000)
);
