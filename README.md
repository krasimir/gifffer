# Gifffer

---

> 1K JavaScript library that prevents the autoplaying of the animated Gifs.

## Usage

Include `gifffer.min.js` in your page.

```html
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

## How it works

It replaces your `<img>` tag with newly generated `<div>` that contains only the first frame (roughly) of your animated Gif. It creates a *play* button on top of it and when the element is clicked it returns the original image.

## Compatibility

Chrome, FF, Safari, Opera, IE9+

## Side effects

Your `<img>` tag becomes a block element.

## Inspiration

[http://stackoverflow.com/a/4276742/642670](http://stackoverflow.com/a/4276742/642670)