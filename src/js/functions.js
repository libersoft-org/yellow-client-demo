document.addEventListener('DOMContentLoaded', () => {
 const leftPanel = document.querySelector('#page .panel.left');
 const rightPanel = document.querySelector('#page .panel.right');
 var resizer = document.querySelector('#page .resizer');
 var searchBar = document.querySelector('#searchbar');
 var userBar = document.querySelector('#userbar');
 var input_bar = document.querySelector('#inputbar');
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
   searchBar.style.width = (newLeftPanelWidth - 20) + 'px';
   userBar.style.width = pageWidth - newLeftPanelWidth + 'px';
   resizer.style.left = newLeftPanelWidth - (resizer.offsetWidth / 2) + 'px';
   var conversations_text = document.querySelectorAll('#conversations > a .text');
   input_bar.style.marginLeft = newLeftPanelWidth + 'px';
   conversations_text.forEach((text) => {
    text.style.width = (newLeftPanelWidth - 150) + 'px';
   });
  }
 });
 getConversations();
});

function menu() {
 var menu = document.querySelector('#menu');
 if (getComputedStyle(menu).display == 'none') menuShow();
 else menuHide();
}

function menuShow() {
//  document.querySelector('#menu').style.display = 'flex';
 document.querySelector('#menu').classList.toggle('show');
}

function menuHide() {
//  document.querySelector('#menu').style.display = 'none';
 document.querySelector('#menu').classList.toggle('show');
}

function copy(text) {
 navigator.clipboard.writeText(text);
}

async function addConversation(id, photo, name, message, time, unread, active) {
 var html = translate(await getFileContent('html/temp-conversation.html'), {
  '{ID}': id,
  '{PHOTO}': photo,
  '{NAME}': name,
  '{MESSAGE}': message,
  '{TIME}': time,
  '{UNREAD}': unread,
  '{ACTIVE}': active ? ' active' : '',
  '{READ-ICON}': '',
  '{READ-TEXT}': '✔',
 });
 document.querySelector('#conversations').innerHTML += html;
 document.querySelectorAll('#conversations .conversation .status .unread').forEach((item) => {
    if(item.innerHTML === '0') item.style.display = 'none';
 });
}

function translate(template, dictionary) {
 for (var key in dictionary) template = template.replaceAll(key, dictionary[key]);
 return template;
}

async function getFileContent(file) {
 var content = await fetch(file, { headers: { 'cache-control': 'no-cache' }});
 return content.text();
}

async function getConversations() {
 await addConversation('1', 'https://i.pravatar.cc/300?u=user1', 'Ultraultraultra Long Username - Company Ltd.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.', '12:59:59', 10, false);
 await addConversation('2', 'https://i.pravatar.cc/300?u=user2', 'Veryveryvery Long Username - Some Other Company Ltd.', 'Morem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.', '12:59:59', 0, true);
 await addConversation('3', 'https://i.pravatar.cc/300?u=user3', 'Short Name', 'Norem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.', '12:59:59', 888, false);
 await addConversation('4', 'https://i.pravatar.cc/300?u=user4', 'John Doe', 'Oorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.', '12:59:59', 5, false);
 await addConversation('5', 'https://i.pravatar.cc/300?u=user5', 'Jane Smith', 'Porem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.', '12:59:59', 5, false);
 await addConversation('6', 'https://i.pravatar.cc/300?u=user6', 'User Name', 'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.', '12:59:59', 888, false);
}

async function getConversation(id) {
 console.log(id);
}
