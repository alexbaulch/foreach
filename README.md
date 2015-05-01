#forEach
A small CommonJS helper to provide a IE8 compatible version of JavaScripts own forEach function

##Installation
```npm install @alexbaulch/foreach```

##Usage
```javascript
var listItems = list.querySelectorAll('.list-item');

forEach(listItems, function(item, i) {
    console.log(item);
    console.log(i);
});
```