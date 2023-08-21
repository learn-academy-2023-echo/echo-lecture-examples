class Animal < ApplicationRecord
  # the data must exist or be present to be created
  validates :name, :age, :phone_number, presence: true
  # length of name must be between 2-20 characters
  validates :name, length: { in: 2..20 } 
  validates :phone_number, uniqueness: true
end
