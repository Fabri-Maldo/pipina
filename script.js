var followCursor = (function() {
    var s = document.createElement('div');
    s.style.position = 'fixed';
    s.style.margin = '0';
    s.style.padding = '0';
    s.style.width = '400px'
    s.style.height = '400px'
    s.style.opacity = '0.6'
    s.style.zIndex = '-8'
    s.style.background = 'radial-gradient(#cb0014 0%, #cb001415 50%, #cb001400 55%)'
  
    return {
      init: function() {
        document.body.appendChild(s);
      },
  
      run: function(e) {
        var e = e;
        s.style.left = (e.clientX - 200) + 'px';
        s.style.top = (e.clientY - 200) + 'px';
      }
    };
  }());
  
  window.onload = function() {
    followCursor.init();
    document.body.onmousemove = followCursor.run;
  }

  