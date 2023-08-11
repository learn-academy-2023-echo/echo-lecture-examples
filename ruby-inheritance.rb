# Ruby Inheritance

# Custom class

class Hulu
  #attr_accessor creates  a getter and setter method for instance variables it gets passed
  attr_accessor :title, :actor, :watched
  # setter method: initialize
  def initialize(title, actor)
    @title = title
    @actor = actor
    # instace var with default value
    @watched = false
  end
  # getter method
  def show_info
    if @watched
      "you have watched #{@title} starring #{@actor}"
    else 
      "Why have you have not watched #{@title}"      
    end
  end
end

# other streaming stuff
# music streaming( Spotify, AppleMusic, Tidal, SoundCloud - like, playlists, stations, download)
# streaming internet (YouTube - like, comment, playlists, channel)
# streaming video ( like, genres, playlist)

#Inheritance - putting common behaviors in a shared class and creating a superclass
  # Parent class has attributes common to all children
  # Child classes in addition have attributes specific to the individual child class but not the other children

# Superclass - common behaviors of shared classes  ==> passes these to subclasses

class StreamingApp 
  attr_accessor :title, :run_time, :liked, :viewed

  def initialize(title, run_time)
    @title = title
    @run_time = run_time
    @liked = false
    @viewed = false
  end

  def show_data 
    if @liked
      "You liked the media #{@title} which is #{@run_time} long."
    else
      "You  haven't liked the media #{@title} which is #{@run_time} long."  
    end
  end
end

class Spotify < StreamingApp
  def initialize(title, run_time, artist)
    #when create new instance, need to let streaming app know that we're using their attributes
    super(title, run_time)
    # super passes whatever is in parameter back up to parent class - universal for OOP
    # spotify app has it's own stuff, which means it has take that additonal parameter => artist
    @artist = artist
  end
end

superfreak = Spotify.new("SuperFreak", "3 min", "Rick James")
p superfreak
#<Spotify:0x0000000104296d78 @title="SuperFreak", @run_time="3 min", @liked=false, @viewed=false, @artist="Rick James">

p superfreak.show_data
superfreak.liked = true
p superfreak.show_data

"You  haven't liked the media SuperFreak which is 3 min long."
"You liked the media SuperFreak which is 3 min long."