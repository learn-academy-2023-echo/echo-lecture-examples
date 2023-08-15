#  Arrange, Act, Assert

class Book

attr_accessor :title, :author, :page
  # set default value of author to be anonymous
  def initialize(author='anonymous')
    @title = title
    @author = author
    @page = 1
  end

  def turn_page pages_read
    @page += pages_read
  end
end

class Library
  attr_accessor :book_collection
  def initialize 
    @book_collection = []
  end

  def add_books book
    @book_collection << book
  end

end