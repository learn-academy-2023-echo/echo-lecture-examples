# RAILS ASSOCIATIONS
---
## Core Concepts
- Relationships between tables
- has_many belongs_to
- Every table has a primate key - id:numbers
- Foreign key - reference to another table's primary key

## Setup
- ``$ rails new associations -d postgresql -T``
- ``$ rails db:create``

## Databases
- `` $ rails g model Cohort name:string year:string``
- ``$ rails g model Student me:string cohort_id:integer``

## Model Classes
**app/models/cohort.rb**

```ruby
class Cohort < ApplicationRecord 
  has_many :students 
end
```

**app/models/student.rb** 

```ruby
class Student < ApplicationRecord 
  belongs_to :cohort 
end
```
## Adding content in Rails Console

- ```bash
  Cohort.create(name:"Bravo", year:"2023")
  ```

- ```bash 
  bravo = Cohort.find(1) bravo.students.create(name:"Doug")
  ```
  
- ```bash 
  bravo.students.create(name:"Doug")
  ```