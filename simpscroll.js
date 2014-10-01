/* ======================================================================
--  SIMPSCROLL -  A very simple javascript scroll system.
--  Copyright 2014 Murillo Brandão(Askdoof)
--  Licensed under the MIT
--  https://github.com/Askdoof/SimpScroll
--
--  Murillo Brandão - https://github.com/Askdoof/
====================================================================== */

// Some vars to start
var _simpscrolling = false, _simpscrolls = [];
var _simp_mousewheelevt = (/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel";

// Resize the thumb on screen resizes
window.onresize = function(){ simpResizer(); }

// Main Scroll function
function simpScroll(content, scrollcontent){
    
    var parent = document.querySelector(content),
        scroll = document.querySelector(scrollcontent),
        scroller = scroll.querySelector('#scroller');
    
    // Recording a new target
    var id = _simpscrolls.length;
    _simpscrolls[id] = {s: scroll, p: parent, sc: scroller};
    scroller.setAttribute('data-id', id);
    
    
    // Set the thumb height
    scroller.style.height = (parent.offsetHeight / parent.scrollHeight) * scroll.offsetHeight + 'px';
    parent.style.overflowY = 'hidden';
    
    
    //Mousewheel action
    var whellf = function(e){ var d = e.detail?e.detail*(-40):e.wheelDelta; parent.scrollTop-=(Math.floor(d/100)*100); }
    if(parent.attachEvent){
        parent.attachEvent("on" + _simp_mousewheelevt, whellf);
        scroll.attachEvent("on" + _simp_mousewheelevt, whellf);
    }
    else if (parent.addEventListener){
        parent.addEventListener(_simp_mousewheelevt, whellf, false);
        scroll.addEventListener(_simp_mousewheelevt, whellf, false);
    }
        
    // Update thumb position on mousewheel acts
    parent.onscroll = function(e){
        scroller.style.top = (parent.scrollTop / parent.scrollHeight * scroll.offsetHeight) + 'px';
    }
    
    
    // Clicking on thumb | Start the thumb action
    scroller.onmousedown = function(e){ 
        _simpscrolling = parseInt(this.getAttribute('data-id'));
        starting_y = e.clientY;
        starting_pos = parent.scrollTop;
        scroll.setAttribute('data-active','true');
        e.preventDefault();
    }
    // Moving the thumb
    document.onmousemove = function(e){
        if(_simpscrolling!==false){
            _simpscrolls[_simpscrolling].p.scrollTop = (starting_pos + ((e.clientY - starting_y) / _simpscrolls[_simpscrolling].s.offsetHeight * _simpscrolls[_simpscrolling].p.scrollHeight) );
        }
    }
    // Stopping the thumb action
    document.onmouseup = function(){
        _simpscrolls[_simpscrolling].s.setAttribute('data-active','');
        _simpscrolling = false;
    }
    
    // Some bug correction
    setTimeout(function(){ scroller.style.height = (parent.offsetHeight / parent.scrollHeight) * scroll.offsetHeight + 'px'; }, 100);
}

function simpResizer(){ 
    var a = _simpscrolls;
    for(var i=0; i<a.length; i++){
        a[i].sc.style.height = (a[i].p.offsetHeight / a[i].p.scrollHeight) * a[i].s.offsetHeight+'px';
        a[i].sc.style.top = (a[i].p.scrollTop / a[i].p.scrollHeight * a[i].s.offsetHeight) + 'px';
    }
}
