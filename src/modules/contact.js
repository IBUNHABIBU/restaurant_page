const createContact = (e) => {
  e.preventDefault();
  const h2 = document.createElement('h2');
  h2.textContent = 'Have a question or want to learn more? Contact us!';
  let p = document.createElement('p');
  p.textContent = 'Email: sweetnofood@gmail.com';
  p.className = 'fs-20';
  h2.className = 'fs-20';
  p.classList.add('mgl');
  p.classList.add('mgt');
  h2.classList.add('mgl');
  h2.classList.add('mgt');
  const content = document.querySelector('main');
  content.innerHTML = ''
  const div = document.createElement('div');
  div.classList.add('cont');
  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(p);
  content.appendChild(div);
  return content;
}
export default createContact;