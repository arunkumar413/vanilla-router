window.onload = myFunction;

function myFunction() {
  console.log('loaded');
  document.querySelectorAll('a').forEach(function (item) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      router(item.href);
    });
  });

  var About = `<div> <h2> About Page </h2> </div> `;

  let Home = `<div>
<h2> Home Page </h2>
</div> `;

  let Contact = `<div>
<h2> Contact Page </h2>
</div> `;
  let Products = `<div>
<h2> Products Page </h2>
</div> `;

  function getComponent(pathname) {
    var routes = [
      { path: '/about', component: About },
      { path: '/home', component: Home },
      { path: '/contact', component: Contact },
      { path: '/products', component: Products },
    ];

    let item = routes.filter(function (item, index) {
      return item.path === pathname;
    });
    return item[0].component;
  }

  function router(link) {
    let url = new URL(link);
    console.log(url.pathname);
    let component = getComponent(url.pathname);
    document.querySelector('main').innerHTML = component;
  }

  /////////////////////////////////
}
