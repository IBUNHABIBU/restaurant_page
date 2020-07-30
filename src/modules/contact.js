const createContact = () => {
  const h2 = document.createElement('h2');
  h2.textContent = 'Have a question or want to learn more? Contact us!';
  let p = document.createElement('p');
  p.textContent = 'Email: sweetnofood@gmail.com';
  const content = document.getElementById('content');
  content.appendChild(h2);
  content.appendChild(p);
  content.appendChild(p);
  return content;
}
export default createContact;