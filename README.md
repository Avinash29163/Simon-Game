# Simon-Game
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

