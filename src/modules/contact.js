const createContact = () => {
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
  const content = document.getElementById('content');
  content.appendChild(h2);
  content.appendChild(p);
  content.appendChild(p);
  const main = document.querySelector('.mainpage');
   main.className = 'ld-none'; 
  return content;
}
export default createContact;