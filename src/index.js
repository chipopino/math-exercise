const BTNS = {
    main: "main",
    hint: "hint",
    solution: "solution",
    explain: "explain",
}

let selected = BTNS.main;

function setBtn(btn) {
    const elmOld = document.getElementById("btn-" + selected);
    const elmNew = document.getElementById("btn-" + btn);
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
    const children = document.getElementById('main-body').children;
    Array.from(children).forEach(elm => {
        elm.innerHTML = `<h2>${elm.id}</h2>${content[elm.id]}`;
        if(selected !== elm.id) {
            elm.style.display = 'none';
        } else {
            elm.style.display = '';
        };
    });
}

