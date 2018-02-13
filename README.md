# Notes 

## 使用`refs`

```js
findDOMNode(this.refs.MyName.value)
```
同等於：
```js
this.refs.MyName.value
```

#### `this.refs`
在`<FormControl>`會回傳undefined，在一般的`<input>`沒這個困擾可以像前述照用
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
---

## using firebase(w/o authentication) uuid

* refs: [1](https://stackoverflow.com/questions/47125842/firebase-push-and-set)

`uuid`用來產生獨一無二的亂數
```js
// App.js
this.state = {
  id: uuid.v1(),
}
```
每個id都是獨一無二的亂碼路徑，所以直接`set({...})`
```js
firebase.database().ref('survey/' + this.state.id).set({
  name: this.state.name,
  answers: this.state.answers
})
```
