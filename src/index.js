var BTNS = {
    main: "main",
    hint: "hint",
    solution: "solution",
    explain: "explain",
}

var selected = BTNS.main;

function setBtn(btn) {
    var elmOld = document.getElementById("btn-" + selected);
    var elmNew = document.getElementById("btn-" + btn);
    elmOld.style.backgroundColor = 'transparent';
    elmNew.style.backgroundColor = 'var(--green)';
    elmOld.style.boxShadow = '';
    elmNew.style.boxShadow = 'inset 0px 0px 6px rgba(0, 0, 0, 0.15)';
    selected = btn;
    setVisibility();
}

function onload() {
    setVisibility();
};



// helper

function setVisibility() {
    var children = document.getElementById('content').children;
    Array.from(children).forEach(function(elm) {
        elm.innerHTML = "<h2>"+elm.id+"</h2>"+content[elm.id];
        if(selected !== elm.id) {
            elm.style.display = 'none';
        } else {
            elm.style.display = '';
        };
    });
    adjustTopOfContent();
}

function adjustTopOfContent() {
    var elmContent = document.getElementById('content');
    var elm = document.getElementById(selected);
    
    if(elm.offsetTop < 0) {
        elmContent.style.alignItems = 'flex-start';
    } else {
        elmContent.style.alignItems = 'center';
    };
}
