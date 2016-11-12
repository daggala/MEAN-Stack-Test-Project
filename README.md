# MEAN-Stack-Test-Project

This is a single-page application on MEAN Stack that displays usecases with material design cards.

In addition, users should be able to add new usecases.

## Prerequisites
 
Node.js has to be installed : https://nodejs.org/en/ 

MongoDB has to be installed : https://www.mongodb.com/
The json file has to be dumped into the db:

`mongoimport --db usecases --collection cases --type json --file Usecasedata.json --jsonArray`

Then run the MongoDB through the command line
To run the project project in the command line, typing:

`node server`


##Annotations

### User friendliness

I would have liked to add some features to make the project more user friendly

* **Add usecases**: When the user adds a usercase and presses the button, the user should be notified that his usercase got added to the list and the input fields should be cleared. Redirection to the usercase list page is unnecessary in case the user wants to add more cases. 
* **Validation**: The input fields for adding new usecase should limit the letters to a certain number that would fit those usecases if the cards have a fixed size which they seemed to have according to the model. The database should then also valid certain number of letters to be inserted. It should also be required not to submit empty input fields. 
* **Listing usecases**:If there are milestones associated with the usecases, that should be shown in the UI to inform the user that he can click those usecases.
* **Milestones**: After clicking a usecase to see the milestones, the user should be able to close the timeline view to redisplay the usecase. That way the user can also scroll the timeline with mouse clicks instead of just zooming out and in.

### Platform decisions & other

* **Modularization**: controller.js could use some refactoring. The routes should be in a separate file, milestones in a separate one. It would also be neater to have the html files in a separate folder called ‘views’.
* **DOM manipulation**: I wanted to use ng-show and ng-hide for the timeline overlays but it seemed to be impossible (or time consuming within the timeframe I had) inside ng-repeat using ng-click to trigger it. That’s why I decided DOM manipulation from within the controller would be the most time efficient. Upon refactoring I would like to create a directive for that code in a separate file that would be called from inside the milestone controller. Inside the controller one can’t use jQuery but another reason for why I didn’t choose to use jQuery was that sometimes it’s not saving you so many lines: http://youmightnotneedjquery.com/ 
