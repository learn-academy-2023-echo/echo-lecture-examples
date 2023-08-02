import React from "react"

const Player = (props) => {
  // console.log(props.triggerNextEpisode)
  return (
    <>
      <h3>Current episode: {props.title}</h3>

      <button onClick={props.triggerNextEpisode}>Play Next Episode!!!</button>
    </>
  )
}

export default Player
