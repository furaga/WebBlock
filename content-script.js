(function(){
    function hide(){
        var elements = document.querySelectorAll("html");
        if (!elements) return false;
        elements[0].style.display = "none";
        alert("this url is blocked by extension")
    }
    hide();
})();