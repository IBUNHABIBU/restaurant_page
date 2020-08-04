const createHeader = () => {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const logo = document.createElement('div');
  logo.className = 'logo';
  header.appendChild(logo);
  logo.innerHTML = `<img src="../src/images/logo.PNG" alt="logo" width="60" height="40">`;
  header.appendChild(nav);
  const ul = document.createElement('ul');
  nav.appendChild(ul);
  ul.innerHTML =  `<li><a href="" class="fs-20">Home</a></li>
  <li><a href="#" class="fs-20" id="myMenu" >Menu</a></li>
  <li><a href="#" class="fs-20" id="contact">Contact Us</a></li>`;
  return header;
}
const createFooter = () => {
  const footer = document.createElement('footer');
  footer.innerHTML = `<div class="foot">
                        <div class="row jc-center">
                          <div class="c-l-12 fs-20">
                              ©2020 Delicious Restaurant. All rights reserved.
                          </div>
                        </div>
                      </div>`;
                      return footer;
}
const createHomepage = () => {
  const main = document.createElement('main');
  const sect = document.createElement('section');
  const article = document.createElement('article');
  main.appendChild(sect);
  sect.appendChild(article);
  const mainPage = document.createElement('div');
  mainPage.className = 'mainpage';
  article.appendChild(mainPage);
  const h2 = document.createElement('h2');
  h2.className = 'family-Arial  white main-para';
  h2.textContent = 'Tiresome and hungry just give us a call and wait for a while we’ll be there at your door.';
  mainPage.appendChild(h2);
  return main;
}
const loadMainPage = () => {
  const content = document.getElementById('content');
	const header = createHeader();
  content.appendChild(header);
  const main = createHomepage();
  content.appendChild(main);
  const footer = createFooter();
  content.appendChild(footer);
}
export default loadMainPage;
