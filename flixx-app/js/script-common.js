// Add '/flixx-app/' prefix to links with class "prefix-link"
document.addEventListener('DOMContentLoaded', function () {
  const prefix = '/javascript-base/flixx-app';
  const links = document.querySelectorAll('.prefix-link');

  links.forEach(function (link) {
    const currentHref = link.getAttribute('href');
    const newHref = prefix + currentHref;
    link.setAttribute('href', newHref);
  });


  const action = document.querySelectorAll('.search-form');

  action.forEach(function (act) {
    const currentHref = act.getAttribute('action');
    const newHref = prefix + currentHref;
    act.setAttribute('action', newHref);
  });
});
