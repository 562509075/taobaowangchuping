;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-sousuo01" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M864.370836 884.784308c-5.227267 0-10.423834-2.216481-14.064911-6.52153L644.666984 635.206066c-6.185122-7.308453-5.735872-18.137079 1.033583-24.90625 22.970095-22.980387 41.300325-49.607838 54.484132-79.145571 15.116914-33.882692 22.785892-70.032006 22.785892-107.447151 0-145.538701-118.40866-263.942391-263.95347-263.942391S195.063652 278.168394 195.063652 423.707095c0 145.536654 118.40866 263.940344 263.95347 263.940344 36.87741 0 72.541128-7.450692 106.006692-22.146393 9.322711-4.080945 20.173282 0.146333 24.259515 9.455349 4.090327 9.311063-0.144292 20.172435-9.452676 24.260543-38.158643 16.756639-78.807095 25.252127-120.813531 25.252127-165.84908 0-300.776642-134.921899-300.776642-300.761971 0-165.842119 134.927562-300.764018 300.776642-300.764018s300.776642 134.921899 300.776642 300.764018c0 42.617633-8.742472 83.817987-25.985905 122.452913-12.716137 28.497031-29.631075 54.609759-50.393806 77.830623l195.004297 230.489488c6.566831 7.762801 5.60079 19.377326-2.162337 25.948999C872.795046 883.350656 868.573731 884.784308 864.370836 884.784308z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
