class Post < ActiveRecord::Base
  attr_accessible :content, :name, :title
  has_many :comments
  
  accepts_nested_attributes_for :comments
end
