# JsObserverDemo
See the article explaining this code and the observer pattern in general here: https://dev.to/erikwhiting88/observer-design-pattern-tutorial-in-javascript-fun-with-a-language-api-21o3

See this repository live at http://erikwhiting.com/newsOutlet/

# Observer Design Pattern
The observer design pattern allows several observers to subscribe to an observable. In the example put forth in this repository, we mimick a news outlet in which the user can write some news, then "transmit" it to the various news outlets reporting in different languages. The news outlets are observers of the news, so once there is "new" news, it is autmoatically pushed to all news outlets, who then take the data and translate it.
