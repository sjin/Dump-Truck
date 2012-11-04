Backbone allows you to organize your javascript according to the MVC model.
You can also use backbone in conjunction with Rails to save stuff to the DB, display stuff, etc.

Models
  - var Dog = Backbone.Model.extend
  - define the URL in rails you can find this model (/dogs/1) 
Collections
  - tell it what the model it holds is (model: Dog)
Router
  - tell the app what going to certain URLs should do
  - follow the RESTFUL conventions
  - e.g. "search/:query": "search" //search/<query> goes to the search function, which would be defined below
  - these methods can do things like fetch model data from the DB, get data from Rails controller actions, and make new Backbone Views
Views
  -say what the base element is for this view (el: for app view or tagName: if it is a single model)
  -a view for a model should have a render function
    - set the html for its own element e.g. $(this.el).html("some text here or whatever")
    - and then return this - says how to draw itself
  - a view for the app should bind some event listeners
    - should also define a function that happens to collection events (bind something to happen when collection.add happens)
  - when the model view and the app view work together
    - the app view will say something like $('ul', this.el).append(itemView.render().el);
    - which means, append to this thing the thing that itemView.render returns
  
To interact with Rails:
  - Backbone.history.start();
  - tell Rails to leave off the JSON root in initializers
  - a rails controller action can return a JSON object containing a Dog or all the Dogs, etc. This can get read by $.getJSON and then used by the javascript
  - backbone can use model.save and model.fetch to save something to the DB and fetch something. The model knows where it lives with the URL param