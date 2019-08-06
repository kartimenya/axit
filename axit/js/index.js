//create tabs
let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav-item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

      //catch tab click
      tabNav.forEach(item => {
        item.addEventListener('click',selectTab )
      })

      //select active tab
      function selectTab() {
        tabNav.forEach(item =>{
          item.classList.remove('tab-active');
        })
        this.classList.add('tab-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
      }
      //display active tab-content
      function selectTabContent(tabName) {
        tabContent.forEach(item =>{
          item.classList.contains(tabName) ?
          item.classList.add('tab-active') :
          item.classList.remove('tab-active');
        })
      }
}

tab();


let menu = function () {
  let menuIcon = document.getElementsByClassName('menu__icon')[0],
      menu = document.getElementsByClassName('menu')[0],
      menuItems = document.querySelectorAll('.menu li');

//click burger
  menuIcon.onclick = function () {
    menu.classList.toggle('active-menu');
  }
  //hide the menu by clicking on an item
  menuItems.forEach(item =>{
    item.onclick = function () {
      menu.classList.remove('active-menu');
    }
  })
}
menu();
