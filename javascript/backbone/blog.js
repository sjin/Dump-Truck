(function($){
	
  var Post = Backbone.Model.extend({
    defaults: {
      title: "default title",
      text: "default text"
    }
  });
  
  var Posts = Backbone.Collection.extend({
    model: Post
  });
  
  var PostView = Backbone.View.extend({
    tagName: 'div',
    initialize: function(){
      _.bindAll(this, 'render');
    },
    render: function() {
      var date = new Date();
      $(this.el).html("<p><b>"+ this.model.get('title') + " Posted at " + date.getHours() + ":" + date.getMinutes() + "</b></p>" + "<p>"+ this.model.get('text') + "</p>");
      return this;
    }
  });
  
  var ListView = Backbone.View.extend({    
    el: $('body'),
    events: {
      'click button#post': 'addPost'
    },
    
    initialize: function() {
      _.bindAll(this, 'render', 'addPost', 'appendPost');
      
      this.collection = new Posts();
      this.collection.bind('add', this.appendPost);
      
      this.render();
    },
    
    render: function() {
      var self = this;
      $(this.el).append("<div id='posts'></div>");
      _(this.collection.models).each(function(post){
        self.appendPost(post);
      }, this);
    },
    
    addPost: function(){
      var post = new Post();
      post.set({
        title: $('#input-title').val(),
        text: $('#input-post').val()
      });
      this.collection.add(post);
    },
    
    appendPost: function(post) {      
      var postView = new PostView({
        model: post
      });
      $('div#posts', this.el).append(postView.render().el)
    }
  });

  var listView = new ListView();      
})(jQuery);