import React from "react"
import { useState } from "react"

import Show from "./components/Show"

import "./App.css"

const App = () => {
  const [showList, setShowList] = useState([
    { title: "The Office", liked: false },
    { title: "Friends", liked: false },
    { title: "Family Guy", liked: false },
    { title: "Cocomelon", liked: false },
    { title: "Scooby-Doo", liked: false },
    { title: "Prison Break", liked: false },
    { title: "Avatar", liked: false },
    { title: "Buffy, the Vampire Slayer", liked: false },
  ])

  const likeShow = (selectedShow) => {
    // access the list item by index using bracket notation
    // selectedShow is the index
    console.log("show data: ", showList[selectedShow])
    showList[selectedShow].liked = true
    // console.log("clicked")
    setShowList([...showList])
  }

  return (
    <>
      <h1>Netflix Clone</h1>
      <div className="cards">
        {showList.map((value, index) => {
          return <Show showObj={value} likeShow={likeShow} index={index} />
        })}
      </div>
      <h3>Favorites</h3>
      {/* filter list */}
      {showList
        .filter((show) => show.liked === true)
        // map over the new filtered list to access the individual objects (I called them items)
        .map((item) => {
          // use dot notation to display the titles :)
          return <h4>{item.title}</h4>
        })}
    </>
  )
}

export default App
