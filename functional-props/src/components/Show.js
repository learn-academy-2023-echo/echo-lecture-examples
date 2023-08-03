import React from "react"

const Show = (props) => {
  console.log("props:", props)
  // reference props, then use dot notation to reach nested objects
  return (
    <div className="card">
      <h4>{props.showObj.title} </h4>
      {/* conditional rendering  */}
      {props.showObj.liked && <h4>💙</h4>}
      {/* add anonymous function to stop IIFE(immediately invoked function execution) */}
      <button
        onClick={() => {
          props.likeShow(props.index)
        }}
      >
        Like!
      </button>
    </div>
  )
}

export default Show
