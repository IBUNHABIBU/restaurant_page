function createheader() {
	const header = document.createElement('header');

	return header;
}

function createNav() {
	// const nav = document.createElement('nav');
    // const ul = document.createElement('ul');
    // nav.appendChild(ul);
    // const li = document.createElement('li');
    // ul.appendChild(li);
    // const a = document.createElement('a');
    // a.setAttribute('href','#');
    // li.appendChild(a);
    // a.innerHTML = "Home";
    // a.className = 'fs-20';
    // return nav;
    
    const content = document.getElementById('content');
        const h1 = document.createElement('h1');
        h1.innerHTML = "Waoo";
        content.appendChild(h1);
        h1.className = 'fs-20';
}


function loadMainPage() {
	const content = document.getElementById('content');
	const header = createheader();
	content.appendChild(header);
	const nav = createNav();
	content.appendChild(nav);
}
export default loadMainPage;
// function createHeader(){
//     const content = document.getElementById('content');
//     const h1 = document.createElement('h1');
//     h1.innerHTML = "Waoo";
//     content.appendChild(h1);
// }
// export default createHeader;