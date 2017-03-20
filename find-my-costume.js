var Nightmare = require('nightmare');
var nightmare = Nightmare({  show: true });

nightmare
  .goto('https://www.target.com')
  .type('#searchLabel', 'dog costumes')
  .click('#searchReset.btn.btn-primary.btn-search.is-active[data-search=\'submit\'][type=\'submit\']')
  .wait('.js-alreadyViewedAlt.js-orgImg.lazyloaded[data-src=\'//scene7.targetimg1.com/is/image/Target/16339486?wid=360&hei=360&qlt=80&fmt=pjpeg\'][alt=\'Triceratops Dog Costume\'][src=\'//scene7.targetimg1.com/is/image/Target/16339486?wid=360&hei=360&qlt=80&fmt=pjpeg\']')
  .click('a.js-redirect-to-pdp.js-altImageChange.product--image[href=\'/p/triceratops-dog-costume/-/A-16339486\'][data-tcin=\'16339486\']')
  .wait('a.js-showZoomImage[href=\'javascript:void(0);\'][data-idx=\'0\'][title=\'Triceratops Dog Costume - image 1 of 1, enlarged image, zoom in.\'][style=\'outline: none;\']')
  .evaluate( function () {
    var picture = document.querySelectorAll('img.single-image[itemprop=\'image\']')
    return picture[0].currentSrc

  })

  // .click('a.js-showZoomImage[href=\'javascript:void(0);\'][data-idx=\'0\'][title=\'Triceratops Dog Costume - image 1 of 1, enlarged image, zoom in.\'][style=\'outline: none;\']')

  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
