require 'rspec'
require_relative 'book.rb'

describe 'Book'  do

  my_book = Book.new
  it 'new book is instantiated' do
    expect{ my_book}.to_not raise_error
  end

  it 'has a title' do
    # my_book = Book.new
    my_book.title = 'Brave New World'
    expect(my_book.title).to be_a String
    expect(my_book.title).to eq 'Brave New World'
  end

  it 'has and author' do
    # my_book = Book.new
    expect(my_book.author).to eq 'anonymous'
    expect(my_book.author).to be_a String
    my_book.author = 'Aldous Huxley'
    expect(my_book.author).to eq 'Aldous Huxley'
  end

  it 'starts on page 1' do
    # my_book = Book.new
    expect(my_book.page).to eq 1
    expect(my_book.page).to be_a Integer
  end

  it 'changes the page number when read' do
    # my_book = Book.new
    #     expect { Counter.increment }.to change { Counter.count }.from(0).to(1)

    expect{ my_book.turn_page 5 }.to change { my_book.page }.from(1).to(6)
  end
end