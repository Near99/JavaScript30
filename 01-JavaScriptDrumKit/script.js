function playSound(e) {
  // keyCode is the ASCII code of alphabet letters on keyboards
  // Google ASCII for the whole table
  // Note: I found the keyCode here is not exactly associated with ASCII, don't know why.

  // Use e.keyCode to get desired corresponding elements.
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // Handle none corresponding keyCodes
  if (!audio) return;
  // Add playing class.
  key.classList.add('playing');
  // Set currentTime to 0 in order to rewind the audio every time the corresponding key is pressed.
  audio.currentTime = 0;
  // Use HTMLMediaElement play() method to begin playback of the media.
  audio.play();
}

// Remove transition after transform is done.
function removeTransition(e) {
  // I first wondered why bother to write this line of code because it works anyways
  // It seems like transform property defines the time the animation will take, and
  // you can't remove the class before transform is done.
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

// Add event listener to the whole window listening to keydown event
window.addEventListener('keydown', playSound);

// Although NodeList is not an Array, it is possible to iterate over it with forEach().
// Use Array.from here for better readability
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
