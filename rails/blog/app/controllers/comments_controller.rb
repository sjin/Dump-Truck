class CommentsController < ApplicationController
  
  def new
    @comment = Comment.new
    @post_id = params[:post]

    respond_to do |format|
      format.html # new.html.erb
      format.json { render :json => @comment }
    end
  end
  
  def create
    post = Post.find(params[:comment][:post_id])
    name = params[:comment][:name]
    content = params[:comment][:content]
    @comment = post.comments(true).create(:name => name, :content => content)
        
     respond_to do |format|
        if @comment.save
          format.html { redirect_to "/posts/#{post.id}" }
        else
          format.html { render :action => "new" }
          format.json { render :json => @comment.errors, :status => :unprocessable_entity }
        end
      end
  end
  
end