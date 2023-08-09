import React from "react"

const Reverse = (props) => {
  // object destructuring the props - sets the key as a variable equal to the path to that key
  // given Obj{key:value}
  //  const {key} = Obj
  const { name } = props

  const nameReverse = (name) => {
    let reversedName = name.split("").reverse().join("").toLowerCase()
    return reversedName
  }

  return (
    <>
      <h1>{nameReverse(name)}</h1>
    </>
  )
}
export default Reverse
