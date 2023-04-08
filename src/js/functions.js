document.addEventListener('DOMContentLoaded', () => {
 const leftPanel = document.querySelector('#page .panel.left');
 const rightPanel = document.querySelector('#page .panel.right');
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
   var conversations_text = document.querySelectorAll('#conversations > a .text');
   document.querySelector('#inputbar').style.marginLeft = newLeftPanelWidth + 'px';
   conversations_text.forEach((text) => { text.style.width = newLeftPanelWidth + 'px'; });
   text.style.width = newLeftPanelWidth + 'px';
 
   
  /*
   document.querySelector('#userbar').style.width = (pageRect.width - newLeftPanelWidth - 20) + 'px';
   document.querySelector('#inputbar').style.marginLeft = newLeftPanelWidth + 'px';
   document.querySelector('#searchbar').style.width = (newLeftPanelWidth - 20) + 'px';
   var selfName = document.querySelector('#userbar > .text > .name');
   var selfAddress = document.querySelector('#userbar > .text > .address');
   var pageRect = leftPanel.parentElement.getBoundingClientRect();
   var newLeftPanelWidth;
   if (e.type === 'mousemove') newLeftPanelWidth = e.clientX - pageRect.left > leftPanelMinWidth ? e.clientX - pageRect.left : leftPanelMinWidth;
   else if (e.type === 'resize') newLeftPanelWidth = 400;
   newLeftPanelWidth = newLeftPanelWidth < leftPanelMaxWidth ? newLeftPanelWidth : leftPanelMaxWidth;
   selfName.style.width = (pageRect.width - newLeftPanelWidth - 290) + 'px';
   selfAddress.style.width = (pageRect.width - newLeftPanelWidth - 290) + 'px';
   resizer.style.left = newLeftPanelWidth - (resizer.offsetWidth / 2) + 'px';
   var conversations_text = document.querySelectorAll('#conversations > a .conversation >.text');
   conversations_text.forEach((text) => { text.style.width = (newLeftPanelWidth - 180) + 'px'; });
   */
  };
 });
 getConversations();
 getChats();
 
 /* TODO: convert to CSS
 if (window.matchMedia('(max-width: 768px)').matches) {
  resizer.style.display = 'none';
  rightPanel.style.display = 'none';
  leftPanel.style.width = '100%';
  searchBar.style.width = '100%';
  searchBarInput.style.marginRight = '2rem';
  setTimeout(() => {
   var active = document.querySelectorAll('.active')[0];
   active.classList.remove('active');
  }, 1500);
 }
*/


});

async function getConversations() {
 await addConversation('1', 'https://i.pravatar.cc/300?u=user1', 'Ultraultraultra Long Username - Company Ltd.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.', '12:59:59', 10, false);
 await addConversation('2', 'https://i.pravatar.cc/300?u=user2', 'Veryveryvery Long Username - Some Other Company Ltd.', 'Morem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.', '12:59:59', 0, true);
 await addConversation('3', 'https://i.pravatar.cc/300?u=user3', 'Short Name', 'Norem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.', '12:59:59', 888, false);
 await addConversation('4', 'https://i.pravatar.cc/300?u=user4', 'John Doe', 'Oorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.', '12:59:59', 5, false);
 await addConversation('5', 'https://i.pravatar.cc/300?u=user5', 'Jane Smith', 'Porem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.', '12:59:59', 9, false);
 await addConversation('6', 'https://i.pravatar.cc/300?u=user6', 'Jane Smith', 'Porem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.', '12:59:59', 11, false);
 await addConversation('7', 'https://i.pravatar.cc/300?u=user7', 'User Name', 'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.', '12:59:59', 650, false);
 await addConversation('8', 'https://i.pravatar.cc/300?u=user8', 'Test User', 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.', '12:59:59', 92, false);
 await addConversation('9', 'https://i.pravatar.cc/300?u=user9', 'Some Name', 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.', '12:59:59', 83, false);
 await addConversation('10', 'https://i.pravatar.cc/300?u=user10', 'Nemp User', 'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.', '12:59:59', 74, false);
 await addConversation('11', 'https://i.pravatar.cc/300?u=user11', 'Name Here', 'Borem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.', '12:59:59', 101, false);
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
  '{READ-ICON}': 'recieved.svg',
  '{READ-TEXT}': '✔',
 });
 document.querySelector('#conversations').innerHTML += html;
 document.querySelectorAll('#conversations .conversation .status .unread').forEach((item) => {
  if (item.innerHTML === '0') item.style.display = 'none';
 });
}

async function getChats() {
 addChatDate('17 March 2023');
 await addChatMessage('https://i.pravatar.cc/300?u=user2', 'Hi, how are you?', '11:22:33', true, true);
 await addChatMessage('https://i.pravatar.cc/300?u=ownprofile', 'Hi, I\'m fine and you?', '11:23:00', false, true);
 addChatDate('18 March 2023');
 await addChatMessage('https://i.pravatar.cc/300?u=user2', 'I am sending you very very extremely long long longvery very extremely long long longvery very extremely long long longvery very extremely long long longvery very extremely long long long message.', '15:35:00', true, true);
 await addChatMessage('https://i.pravatar.cc/300?u=ownprofile', 'I am also sending you very very extremely long long longvery very extremely long long longvery very extremely long long longvery very extremely long long longvery very extremely long long long message.', '16:25:15', false, false);
 await addChatMessage('https://i.pravatar.cc/300?u=ownprofile', 'Cool!', '16:35:59', false, false);
}

async function getFileContent(file) {
 var content = await fetch(file, { headers: { 'cache-control': 'no-cache' }});
 return content.text();
}

function menu() {
 document.querySelector('#menu').classList.toggle('show');
}

function copy(text) {
 navigator.clipboard.writeText(text);
}

function translate(template, dictionary) {
 for (var key in dictionary) template = template.replaceAll(key, dictionary[key]);
 return template;
}

function addChatDate(date) {
 document.querySelector('#container').innerHTML += '<div class="date">' + date + '</div>';
}

async function addChatMessage(photo, message, time, sent, read) {
 const html = translate(await getFileContent('html/temp-message.html'), {
  '{SENT}': sent ? 'sent' : 'received',
  '{PHOTO}': photo,
  '{MESSAGE}': message,
  '{TIME}': time,
  '{READ}': read,
  '{ACTIVE}': active ? ' active' : '',
  '{SECURE_IMG}': secure ? 'secure_yes.svg' : 'secure_no.svg',
  '{READ-ICON}': read ? 'read_yes.svg' : 'read_no.svg',
  '{READ-TEXT}': read ? 'Read' : 'Unread'
 });
 document.querySelector('#chat .container').innerHTML += html;
 const chat = document.querySelector('#chat');
 chat.scrollTop(chat.scrollHeight);
}

/*
function showMobileChat(resizer, rightPanel, leftPanel, userBar, inputBar) {
 if (window.matchMedia('(max-width: 768px)').matches) {
  resizer.style.display = 'none';
  rightPanel.style.width = '100%';
  rightPanel.style.display = 'block';
  leftPanel.style.display = 'none';
  userBar.style.width = '100%';
  inputBar.style.width = '100%';
  inputBar.style.marginLeft = '0';
 } else console.log('building switch chats...');
}
*/

function toggleUserAccounts() {
 const accountsDiv = document.querySelector('#user-accounts');
 const userAccounts = [
  { id: 1, email: 'verylongname@verylongdomain.com', selected: true },
  { id: 2, email: 'otherlongname@otherlongdomain.com', selected: false },
  { id: 3, email: 'otherverylongname@otherverylongdomain.com', selected: false },
  { id: 4, email: 'longname@longdomain.com', selected: false }
 ];
 accountsDiv.innerHTML = ``;
 for (let i = 0; i < userAccounts.length; i++) {
  const account = userAccounts[i];
  accountsDiv.innerHTML += `
   <a onclick="">
    <div class='conversation ${account.selected ? 'active' : ''}'>
     <img class="photo-circle medium" src="https://i.pravatar.cc/300?u=ownprofile"/>
     <div class="text autogen"><div class="name nowrap">${account.email}</div></div>
    </div>
   </a>
  `;
 }
 accountsDiv.classList.toggle('hidden');
 accountsDiv.classList.toggle('visible');
 let button = document.querySelector("#toggleAccounts");
 if (accountsDiv.classList.contains('hidden')) button.src="img/icons/caret-down.svg";
 else if (accountsDiv.classList.contains('visible')) button.src="img/icons/caret-up.svg";
}
