# React Functional Props

## Steps to pass props downstream

1. Store items in state using useState()
2. Create Show component
3. Pass state as props to Show component

## Conditional Rendering

display a message ONLY when a condition has been met

- when liked = true, let heart display

use && as a toggle between JSX element shown/ignored.

**Show.js**

```javascript
const Show = (props) => {
  console.log("props: ", props)

  return (
    <>
      <h4>{props.showObject.title}</h4>
      {props.showObj.liked && <h4>💙</h4>}
      <button>Like!</button>
    </>
  )
}
```

## Passing props Upstream

1. Create function that takes in argument
   - passed down to Show via props
   - called when button is clicked
2. Pass function in Show component call. Also pass index so we can identify which show has been clicked
3. Add onClick method to button that will trigger the function
4. pass index to the function in the onClick
5. Now App.js has access to the index - we can update the value of the liked property

**App.js**

```javascript
   const likeShow = (selectedShow) => {
    console.log("show: ", showList[selectedShow])
    showList[selectedShow].liked = true
```

Use the spread operator to show the updated state.
The spread operator will copy all or part of an existing array into another array. (can also be used with updating objects)

**App.js**

```javascript
   const likeShow = (selectedShow) => {
    console.log("show: ", showList[selectedShow])
    showList[selectedShow].liked = true
    setShowList([...showList])
```

## Add list of your favorites

**App.js**

```javascript
;<h4>Favorites: </h4>
{
  showList
    .filter((show) => show.liked === true)
    .map((s) => {
      return <h3>{s.title}</h3>
    })
}
```

## To hide the button when show is liked

**Show.js**

```javascript
<button
  onClick={() => {
    likes(index)
  }}
  // can identify each button by adding the index to the class
  className={`button-${index}`}
>
  Like!
</button>
```

Then in our likeShow function we can set the visibility property to "hidden. Remember that `selectedShow` is the index.
**App.js**

```javascript
   const likeShow = (selectedShow) => {
    console.log("show: ", showList[selectedShow])
    showList[selectedShow].liked = true
    let button = document.querySelector({`button-${selectedShow}`})
    button.display.visibility = "hidden"
    setShowList([...showList])
```
