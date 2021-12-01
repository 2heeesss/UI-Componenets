const fetchTabsData = () =>
  new Promise(resolve => {
    setTimeout(
      () =>
        resolve([
          {
            title: 'HTML',
            content: `HTML(HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage along with the basic layout of the webpage. Other technologies besides HTML are generally used to describe a web page's appearance/presentation(CSS) or functionality/ behavior(JavaScript).`,
          },
          {
            title: 'CSS',
            content: `Cascading Style Sheets(CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.`,
          },
          {
            title: 'JavaScript',
            content: `JavaScript(JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.`,
          },
        ]),
      1000
    );
  });

let currentTabId = 0;
let currentData;

function render() {
  const $tabs = document.querySelector('.tabs');
  const $nav = document.createElement('nav');
  $tabs.appendChild($nav);
  $tabs.style.setProperty('--tabs-length', currentData.length);

  currentData.forEach((info, id) => {
    const $tab = document.createElement('div');
    $tab.textContent = info.title;
    $tab.dataset.index = id;

    $tab.classList.add('tab');
    if (currentTabId === id) $tab.classList.add('active');
    $nav.appendChild($tab);

    const $tabContent = document.createElement('div');
    $tabContent.classList.add('tab-content');
    if (currentTabId === id) $tabContent.classList.add('active');

    $tabContent.textContent = info.content;

    $tabs.appendChild($tabContent);
  });

  const $glider = document.createElement('span');
  $glider.classList.add('glider');
  $nav.appendChild($glider);

  $tabs.addEventListener('click', e => {
    if (!e.target.classList.contains('tab')) return;
    currentTabId = +e.target.dataset.index;

    const $tabContents = document.querySelectorAll('.tab-content');
    const $navTabs = document.querySelectorAll('.tab');

    $tabContents.forEach(($tabContent, index) => {
      if (index === currentTabId) $tabContent.classList.add('active');
      else $tabContent.classList.remove('active');
    });

    $navTabs.forEach(($navTab, index) => {
      if (index === currentTabId) $navTab.classList.add('active');
      else $navTab.classList.remove('active');
    });

    const $glider = document.querySelector('.glider');
    $glider.style.setProperty('left', `${currentTabId * +getComputedStyle($tabs).getPropertyValue('--tab-width')}px`);
  });
}

fetchTabsData().then(infos => {
  currentData = infos;
  document.querySelector('.spinner').remove();
  render();
});
