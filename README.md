gifffer
=======

1K JavaScript library that prevents the autoplaying of the animated Gifs.

## Usage

Include `gifffer.min.js` in your page.

```js
<script type="text/javascript" src="gifffer.min.js"></script>
```

Instead of setting `src` attribute on your image use `data-gifffer`.

```html
<img data-gifffer="image.gif" />
```

At the end, call `Gifffer();` whenever you want. For example:

```js
window.onload = function() {
    Gifffer();
}
```

## Demo

[http://work.krasimirtsonev.com/git/gifffer/example/](http://work.krasimirtsonev.com/git/gifffer/example/)
