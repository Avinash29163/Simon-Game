# Simon-Game
https://simon-game-avi.netlify.app/
This is an application of the classic memory game simon. The implementation of the game is as follows:
1. **HTML Structure:**
   - Your HTML file sets up the basic structure of the game's user interface.
   - Buttons for each color (green, red, yellow, blue) are defined with unique IDs and classes.
   - The `<h1>` element displays the game's status and level information.
2. **Variables:**
   - `colorSequence`: An array to store the sequence of colors that the player needs to follow.
   - `clickEnabled`: A boolean flag to control whether the player can click buttons.
   - `level`: Tracks the current level of the game.
   - `currentElement`: Index of the button in the `colorSequence` array that the player needs to click next.
   - `gameOver`: A flag indicating if the game is over.
3. **`gameStart()` Function:**
   - Increments the game level.
   - Sets up the next color in the sequence based on a random number.
   - Updates the UI to show the current level.
   - Animates the button and plays the sound associated with the color.
   - Disables clicking while the sequence is being displayed
4. **`addSound()` Function:**
   - Creates an `Audio` object to play a sound based on the provided button color.
5. **Keydown Event Listener:**
   - Listens for a key press on the `body` element.
   - If `clickEnabled` is true, the game starts when any key is pressed.
   - If `gameOver` is true, the game is reset to its initial state when a key is pressed.
6. **Button Click Event Listeners:**
   - For each color button (green, red, yellow, blue), a click event listener is set up.
   - If the clicked button is the expected color, a sound plays, an animation is shown, and the game progresses.
   - If the clicked button is incorrect, a "wrong" sound plays, the game enters a game over state, and the UI updates accordingly.
7. **`animateButtons()` Function:**
   - Adds a visual animation to a clicked button by applying a "pressed" class.
   - Removes the "pressed" class after a short delay to revert the animation.
8. **CSS Styles:**
   - The `styles.css` file contains styles that control the visual appearance of the game interface and animations.
   - The "pressed" class likely defines a temporary visual effect defined in CSS to indicate a button press.
9. **Google Fonts:**
   - The Google Fonts stylesheet is linked to provide the "Press Start 2P" font for a retro gaming feel.
10. **jQuery:**
    - The game heavily relies on the jQuery library for event handling, DOM manipulation, and animations.

11. **Debugging and Testing:**
    - Console log statements and browser developer tools can help diagnose issues and monitor variable states.







