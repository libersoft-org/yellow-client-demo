document.addEventListener('DOMContentLoaded', () => {
  const leftPanel = document.querySelector('#page .panel-left');
  const rightPanel = document.querySelector('#page .panel-right');
  var resizer = document.querySelector('#page .resizer');
  //var searchBar = document.querySelector('#searchbar');
  //var searchBarInput = document.querySelector('#searchbar > .text');
  var dragging = false;
 
  resizer.addEventListener('mousedown', () => {
   dragging = true;
   leftPanel.style.userSelect = 'none';
   rightPanel.style.userSelect = 'none';
  });
  document.addEventListener('mouseup', () => {
   dragging = false;
   leftPanel.style.removeProperty('user-select');
   rightPanel.style.removeProperty('user-select');
  });
  document.addEventListener('mousemove', (e) => {
   if (dragging) {
    var pageWidth = leftPanel.parentElement.clientWidth;
    var leftPanelMinWidth = 250;
    var leftPanelMaxWidth = pageWidth - 500;
    var newLeftPanelWidth = e.clientX > leftPanelMinWidth ? e.clientX : leftPanelMinWidth;
    newLeftPanelWidth = newLeftPanelWidth < leftPanelMaxWidth ? newLeftPanelWidth : leftPanelMaxWidth;
    leftPanel.style.width = newLeftPanelWidth + 'px';
    rightPanel.style.width = pageWidth - newLeftPanelWidth + 'px';
    resizer.style.left = newLeftPanelWidth - (resizer.offsetWidth / 2) + 'px';
 
    //document.querySelector('.input-bar').style.marginLeft = newLeftPanelWidth + 'px';
    document.querySelector('.search-bar').style.width = (newLeftPanelWidth) + 'px';
   };
  });
 });

function copy(text) {
  navigator.clipboard.writeText(text);
}

function menu() {
  document.querySelector('#menu').classList.toggle('show');
}

function toggleUserAccounts() {
  const otherUserAccounts = document.querySelector('.accounts-bar__other-accounts');
  otherUserAccounts.classList.toggle('active');
}