import React, { useState } from "react"
import Episode from "./components/Episode"
import Player from "./components/Player"
import "./App.css"

const App = () => {
  const episodes = [
    "Write Boring Code",
    "ChatGPT and AI: Initial Reactions",
    "Vue.js and it's Community",
    "A New Era of Framework Agnostic Components",
    "Developing With Content Should Be Easy",
    "Software Design Patterns for Human Relationships"
  ]
  const [currentEpisode, setCurrentEpisode] = useState(episodes[0])
  console.log(currentEpisode)

  const triggerNextEpisode = () => {
    let nextEpisode = episodes.indexOf(currentEpisode) + 1
    setCurrentEpisode(episodes[nextEpisode])
    // console.log(nextEpisode)
  }

  return (
    <>
      <h3>Compressed.fm Clone</h3>

      <Player title={currentEpisode} triggerNextEpisode={triggerNextEpisode} />

      <div className="cards">
        {episodes.map((banana, index) => {
          return <Episode title={banana} key={index} />
        })}
      </div>
    </>
  )
}

export default App
