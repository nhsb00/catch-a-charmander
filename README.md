## Background and Overview 
   - Artillery game is a single (maybe two) player strategy video game involving tank(something else) trying to destroy an object. Player can move a tank and control the angle and power to hit an object by calculating the trajectories of rockets and other related calculations.
   
## Functionality and MVPs 
   - Use canvas for game.
   - Create instruction and rules for the game.
   - With this artillery game, user can do:
   
        - start and restart the game.
        
        - move thank left and right.
        
        - control angle and power to shoot missile.
        
        - if user hits the target, user get score.
        
        - if user did not hit the target, user will see number of attempts (maybe include maximum attemps).
        
## Wireframes && File Structure
   - This app will have a single screen with a game board, title, rules, and will include links to Github. Player can move the tank using left and right arrow buttons. Player also can control angle with the up and down arrow keys. Power is based on how long player hold space bar. Power guage will stop when it hits maximum gauge. It will fire when you release the `space bar`. Power gauge show up above tank. There will be a music on/off button to enjoy game better. 
   
   
     ![alt text](https://github.com/nhsb00/Artillery/blob/master/dist/images/wire.png)
   
   * dist
   * src > 
        * index.js
        * styles
        * scripts >  
        
              tank.js
              missile.js
              ui.js
   * index.html
                
## Architecture and Technology 
    - This project will be implemented with `JavaScript`, `Canvas`, `HTML` and `CSS`
## Implementation Timeline 
    - Day 1: Study canvas and create game board and other objects by using canvas.
    
    - Day 2: Give tank mobility and cannon for projectile

    - Day 3: Create ability to fire missile and get scores.

    - Day 4: Styling webpage dropdown for rule and instruction.

    - Day 5: Final touch such as fixing bugs and styling better.

    - Bonus: add Music on it.

