class Comment < ActiveRecord::Base
  attr_accessible :content, :name, :post_id
  belongs_to :post
end
