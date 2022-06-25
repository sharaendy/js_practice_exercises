//! решение 1
function solution() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const { target } = event;
      // console.log(event);
      console.log(target);
      const nav = button.closest('.nav');
      const activeButton = nav.querySelector('.active');
      activeButton.classList.remove('active');
      button.classList.add('active');

      const currentButtonId = button.dataset.bsTarget;

      // const tabContentPanel = document.querySelector('.tab-content');
      // const tabContentPanel = nav.nextElementSibling;
      const tabContentPanel = target.closest('.row').lastElementChild;
      const currentActivePanel = tabContentPanel.querySelector(currentButtonId);
      const previousActivePanel = tabContentPanel.querySelector('.active');
      previousActivePanel.classList.remove('active');
      currentActivePanel.classList.add('active');
    });
  });
}

solution();


//! решение 2
  // BEGIN
  const handle = (e, container) => {
    const targetTab = e.target;
    if (targetTab.classList.contains('active')) {
      return;
    }

    const targetTabContentId = targetTab.dataset.bsTarget;
    const targetTabContent = document.querySelector(targetTabContentId);

    const activeTab = container.querySelector('.active');
    const activeTabContentId = activeTab.dataset.bsTarget;
    const activeTabContent = document.querySelector(activeTabContentId);

    targetTab.classList.add('active');
    targetTabContent.classList.add('active');

    activeTab.classList.remove('active');
    activeTabContent.classList.remove('active');
  };

  const navs = document.querySelectorAll('.nav');
  navs.forEach((nav) => {
    const tabs = nav.querySelectorAll('[data-bs-toggle]');
    tabs.forEach((tab) => {
      tab.addEventListener('click', (event) => handle(event, nav));
    });
  });
  // END