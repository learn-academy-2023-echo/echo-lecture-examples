require 'rspec'
require_relative 'book.rb'

describe 'Library' do

  library = Library.new
  it 'has to create a library object' do
    expect{library}.to_not raise_error
  end

  it 'has an array or books' do
    brave = Book.new
    orwell = Book.new
    library.add_books brave
    library.add_books orwell
    expect(library.book_collection).to be_a Array
  end

end

