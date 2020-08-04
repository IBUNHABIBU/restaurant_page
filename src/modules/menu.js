const createMenu = () => {
  const row = document.createElement('div');
  row.className = 'row';
  row.innerHTML = `<div class=" c-l-4 c-m-4 c-s-12 c-12 ">
                    <h3><a href="#" class=" maroon fs-20">Breakfast</a></h3>
                    <img class="imagestyle"   src="https://scontent-xsp1-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/115956675_2684358875213617_6003907689016524595_n.jpg?_nc_ht=scontent-xsp1-2.cdninstagram.com&_nc_cat=101&_nc_ohc=vZGTvoAawH4AX9rkGpU&oh=84b726fb950a17c7ed8381bb228a8ba0&oe=5F48BAC0" style="width:90%;" alt="image">
                  </div>
                  <div class=" c-l-4 c-m-4 c-s-12 c-12 ">
                    <h3><a href="#" class=" maroon fs-20">Luch</a></h3>
                    <img class="imagestyle"  src="https://scontent-xsp1-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/116337328_295301585046368_8067738148308813203_n.jpg?_nc_ht=scontent-xsp1-2.cdninstagram.com&_nc_cat=108&_nc_ohc=CAj0aj5HMTcAX8zeWFp&oh=64acb5492d72817129c9635265f931cd&oe=5F484228" style="width:90%;" alt="image">
                  </div>
                  <div class=" c-l-4 c-m-4 c-s-12 c-12 ">
                    <h3><a href="#" class=" maroon fs-20">Dinner</a></h3>
                    <img class="imagestyle" src="https://scontent-xsp1-2.cdninstagram.com/v/t51.2885-15/e35/109696460_741304829979989_7568604957456882165_n.jpg?_nc_ht=scontent-xsp1-2.cdninstagram.com&_nc_cat=105&_nc_ohc=ZDdrcDwBq4wAX9ckQjH&oh=8e836ac9411e3b296911a3304ea2db44&oe=5F492C40" style="width:90%;" alt="image">
                  </div> `
                   const content = document.querySelector('main');
                   content.innerHTML = '';
   content.appendChild(row);
   row.style.marginTop = '2rem';
   const main = document.querySelector('.mainpage');
   main.className = 'ld-none';
   return content;
}
export default createMenu;