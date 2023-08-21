require 'rails_helper'

RSpec.describe Animal, type: :model do
  it 'is valid with valid attributes' do
    cat = Animal.create(name:'Kevin', age:9, phone_number: '555-1212')
    expect(cat).to be_valid
  end

  it 'is not valid without a name' do
    # create instance missing name
    cat = Animal.create(age:9)
    #expect rails to throw an error and error will be in the array (not empty)
    expect(cat.errors[:name]).to_not be_empty
  end

  it 'is not valid without an age' do
    cat = Animal.create(name:'Stevie')
    expect(cat.errors[:age]).to_not be_empty
  end

  it 'is not valid if name is outside of 2-20 characters' do
    cat = Animal.create(name:'P', age:1)
    expect(cat.errors[:name]).to_not be_empty

    long_cat = Animal.create(name:'Kevin the One-Armed WonderCat!', age:9)
    expect(long_cat.errors[:name]).to_not be_empty
  end

  it 'is not valid without a phone number' do
    cat = Animal.create(name:'Kevin', age:9)
    expect(cat.errors[:phone_number]).to_not be_empty
  end

  
it 'is not valid with a duplicate phone number' do
  cat = Animal.create(name:'Kevin', age:9, phone_number: '555-1212')
  dupe = Animal.create(name:'Kevin', age:9, phone_number: '555-1212')
  expect(dupe.errors[:phone_number]).to_not be_empty
end

end
