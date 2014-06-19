var Gifffer = function() {
    var images, d = document;
    images = d && d.querySelectorAll ? d.querySelectorAll('[data-gifffer]') : [];
    var process = function(el) {
        var url, container, c, w, h, play, trngl, gif, playing = false;
        url = el.getAttribute('data-gifffer');
        el.style.display = 'block';
        c = document.createElement('canvas');
        el.onload = function() {
            if(!!(c.getContext && c.getContext('2d'))) {
                w = el.width;
                h = el.height;
                // creating play button
                play = d.createElement('DIV');
                play.setAttribute('style', 'width:60px;height:60px;border-radius:30px;background:rgba(0, 0, 0, 0.3);position:absolute;left:' + ((w/2)-15
                ) + 'px;top:' + ((h/2)-15) + 'px;');
                trngl = d.createElement('DIV');
                trngl.setAttribute('style', 'width:0;height: 0;border-top:14px solid transparent;border-bottom:14px solid transparent;border-left:14px solid rgba(0, 0, 0, 0.5);position:absolute;left:26px;top:16px;')
                play.appendChild(trngl);
                // creating the container
                container = d.createElement('DIV');
                container.setAttribute('style', 'position:relative;cursor:pointer;width:' + w + 'px;height:' + h + 'px;');
                container.addEventListener('click', function() {
                    if(!playing) {
                        playing = true;
                        gif = d.createElement('IMG');
                        gif.setAttribute('style', 'width:' + w + 'px;height:' + h + 'px;');
                        gif.src = url;
                        container.removeChild(play);
                        container.removeChild(c);
                        container.appendChild(gif);
                    } else {
                        playing = false;
                        container.appendChild(play);
                        container.removeChild(gif);
                        container.appendChild(c);
                        gif = null;
                    }
                });
                // canvas
                c.width = w;
                c.height = h;
                c.getContext('2d').drawImage(el, 0, 0, w, h);
                // dom placement
                container.appendChild(c);
                container.appendChild(play);
                el.parentNode.replaceChild(container, el);
            }
        }
        el.src = url;
    }
    for(var i=0; i<images.length; i++) process(images[i]);
}