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

平常只要ref(`選擇目的地`).set(`資料`)就可以推資料進去firebase儲存，但這次沒有authentication的登入登出系統，所以自建`id`
然後ref.push().set({})
```js
firebase.database().ref('survey/' + this.state.id).set({
  name: this.state.name,
  answers: this.state.answers
})
```
