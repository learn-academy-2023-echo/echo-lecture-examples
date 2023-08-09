# React input and events

## structure:

<input />
  - default type is text

<input type="text" />

- also takes the onChange event

<input type="text" onChange={handleChange} />

- It is a convention for the method attached to the onChange attributes to be called handleChange (doesn't have to be)
- onChange automatically passes an argument of event to the method
- It is common practice for event to be shortened to e
