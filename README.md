# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Wynee Pintado

Time spent: **9** hours spent in total

Link to project: (https://glitch.com/edit/#!/pouncing-swamp-fluorine)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](http://g.recordit.co/mU3lHLzKUm.gif)
![](http://g.recordit.co/XjndePdcl6.gif)
![](http://g.recordit.co/JUtGzKxIHt.gif)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.guru99.com/difference-equality-strict-operator-javascript.html
https://www.sitepoint.com/arrow-functions-javascript/
https://www.w3schools.com/js/js_htmldom_html.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
    
    A challenge I encountered in creating this submission was using javascript to add the ticking timer additional feature, as this was my first time utilizing javascript. I caught on pretty quickly while building the basic game structure, noticing many similarities to java, such as the declaration of variables and use of if else statements. But, I faced trouble when it came to figuring out how to reset the current Time variable to timeLimit every round, and changing the time remaining I set in the HTML class, to reflect the changing time. To solve the first issue, I decided that the currentTime should reset to the time limit only if i was equal to progress, leading me to use ===, to compare the two. So, if (i=== progress), I told the console to recognize it as the final clue and then set currentTime to timelimit. To change the time remaining, I realized I needed a function that would allow me to replace the html I wrote with the actual, changing, time remaining. This led me to discover the syntax .innerHTML, which would allow me to replace my div id of countdown with the actual time remaining. The second part of this issue was that I also had to make sure I made the game class recognize if the pattern hadn’t been correctly played within the time frame given, and consider it a strike. At first I made 2 if statements, one for tracking mistakes, and another for tracking if the time limit was reached. However, I soon realized that they wouldn't work together like they should since one or the other would only happen if the certain condition was met. It was also very repetitive. So, instead of making two separate if statements, I decided to combine these two conditions into one if statement, recalling that making an or statement would help me get this result. When using the or statement, I made sure to not just make the condition be trackMistakes <=2 || currentTime <=0, but trackMistakes <=2 || trackMistakes<=2 && currentTime<=0 because I still want to make sure that going over the time limit counts as a strike, as long as there are no more than 2 strikes. Therefore, if 3 strikes are made, it would go directly to the else statement lose game().

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

    After noticing that the positioning of the buttons changed on the screen by shrinking the preview pane, I realized that playing the game on a smaller device wouldn’t look the same as it did on a larger device. So, one of the first questions I started thinking about was how do web developers adapt their code so that it can be viewed in a more accessible way on devices other than the typical laptop or desktop, such as a mobile device or an iPad? Is there a way to change the sizes of certain details or remove certain details to make a site look more appealing, without having to write up a separate set of html, css, and JavaScript code, to account for all of these changes? Also, what strategies do web developers use when designing sites? How do they go about structuring how to layout their projects or determine what API’s to use, so that it has all of the information they need, depending on the device they are aiming to build it for? Lastly, although a chrome browser may be compatible with the code produced, how do web developers make sure that their code is compatible with all older web browsers? 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

    If I had a few more hours to work on this project, I would love to experiment with adding additional features to improve the user experience. Since a key detail to improving user experience is to narrow down my target audience, I would make sure to identify a specific demographic. For example, if I decided to target a demographic of colorblind women, between the ages of 19-29, I would have to make sure the colors I use are accessible enough in my game. To choose the right colors, I would use a tool like ColorSafe, which provides accessible color palettes, and implement them into my style.css code, making sure to look into apps or products my target audience already uses so that I can get an idea of what colors work best. Since this game is about memory, I could implement several levels of the game, where the speed of the game would increase every time the user won a round. Every level, there would also be a different pattern to memorize and I could experiment with adding one more button every round, using different icons and symbols on the buttons instead of just having different colors, using a site like Font Awesome. At the end of the game, when they have lost, they would get a score as to how many rounds they completed, motivating them to continue. To ensure that my audience is satisfied with my game, I would also make sure to ask for their feedback at the end of the game.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://drive.google.com/file/d/1rx2meqsTHtunMKQZO5AI50gB-6htAaas/view?usp=sharing)


## License

    Copyright [WYNEE PINTADO]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
