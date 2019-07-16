$.fn.fakePsuedo = function () {

    var w = this.innerWidth(),
        h = this.innerHeight();
    console.log(w + ':' + h);

    this
        .wrap('<div class="psuedo-container" style="width:' + w + 'px;' + ' height:' + h + 'px;"/>')
        .after('<div class="psuedo-after" />')
        .before('<div class="psuedo-before" />');
}

$('.fakePsuedo').fakePsuedo();