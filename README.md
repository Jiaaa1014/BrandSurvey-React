### Notes 

#### DOM value

```js
findDOMNode(this.refs.MyName.value)
```
equal to
```js
this.refs.MyName.value
```

#### `this.refs` doesnt work at `<FormControl>`
```html
<FormControl
  inputRef={(ref) => { this.input = ref }}
/>
```
```js
handleNameSubmit(event) {
    event.preventDefault()
    this.setState({ name: this.input.value })
  }
```

#### using firebase(w/o authentication) uuid

`uuid` is used to generate unique id.

part of `firebase` 
```js
firebase.database().ref('survey/' + this.state.id).set({
  name: this.state.name,
  answers: this.state.answers
})
```