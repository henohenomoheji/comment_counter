(function(){
    "user strict";

    var comment = document.getElementById("comment");
    var label = document.getElementById("label");
    
    var LIMIT = 20;
    var Warning = 10;

    label.innerHTML = LIMIT;
    
    comment.addEventListener("keyup",function(){
        var remaining = LIMIT - this.value.length;
        label.innerHTML = remaining;
        label.className = remaining < Warning ? "warning":'';

    });
})();