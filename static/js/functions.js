document.addEventListener('DOMContentLoaded', () => {
	getConversations();
	getChats();
});

document.addEventListener('keydown', function (event) {
	if (event.key === 'Enter') {
		sendMessage();
	}
});

async function getConversations() {
	await addConversation(
		'1',
		'https://i.pravatar.cc/300?u=user1',
		'Ultraultraultra Long Username - Company Ltd.',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
		'12:59:59',
		10,
		false
	);
	await addConversation(
		'2',
		'https://i.pravatar.cc/300?u=user2',
		'Veryveryvery Long Username - Some Other Company Ltd.',
		'Morem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
		'12:59:59',
		0,
		true
	);
	await addConversation(
		'3',
		'https://i.pravatar.cc/300?u=user3',
		'Short Name',
		'Norem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
		'12:59:59',
		888,
		false
	);
	await addConversation(
		'4',
		'https://i.pravatar.cc/300?u=user4',
		'John Doe',
		'Oorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
		'12:59:59',
		5,
		false
	);
	await addConversation(
		'5',
		'https://i.pravatar.cc/300?u=user5',
		'Jane Smith',
		'Porem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
		'12:59:59',
		9,
		false
	);
	await addConversation(
		'6',
		'https://i.pravatar.cc/300?u=user6',
		'Jane Smith',
		'Porem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
		'12:59:59',
		11,
		false
	);
	await addConversation(
		'7',
		'https://i.pravatar.cc/300?u=user7',
		'User Name',
		'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
		'12:59:59',
		650,
		false
	);
	await addConversation(
		'8',
		'https://i.pravatar.cc/300?u=user8',
		'Test User',
		'Worem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
		'12:59:59',
		92,
		false
	);
	await addConversation(
		'9',
		'https://i.pravatar.cc/300?u=user9',
		'Some Name',
		'Torem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
		'12:59:59',
		83,
		false
	);
	await addConversation(
		'10',
		'https://i.pravatar.cc/300?u=user10',
		'Nemp User',
		'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
		'12:59:59',
		74,
		false
	);
	await addConversation(
		'11',
		'https://i.pravatar.cc/300?u=user11',
		'Name Here',
		'Borem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
		'12:59:59',
		101,
		false
	);
}

function sendMessage() {
	const input = document.getElementById('#message-text-input');
	const now = new Date();
	const hours = now.getHours().toString().padStart(2, '0');
	const minutes = now.getMinutes().toString().padStart(2, '0');
	const seconds = now.getSeconds().toString().padStart(2, '0');
	const formattedTime = `${hours}:${minutes}:${seconds}`;

	if (input.value) {
		addChatMessage(
			'https://i.pravatar.cc/300?u=ownprofile',
			input.value,
			formattedTime,
			false,
			false
		);
		input.value = '';
	}
}

async function addConversation(id, photo, name, message, time, unread, active) {
	var html = translate(await getFileContent('html/temp-conversation.html'), {
		'{ID}': id,
		'{PHOTO}': photo,
		'{NAME}': name,
		'{MESSAGE}': message,
		'{TIME}': time,
		'{UNREAD}': unread,
		'{ACTIVE}': active ? ' conversation--active' : '',
		'{EMAIL}': `${name.slice(0, 6).replaceAll(' ', '.').toLowerCase()}@nemp.io`
	});
	document.querySelector('.conversations-panel').innerHTML += html;
	document.querySelectorAll('#conversations .conversation .status .unread').forEach((item) => {
		if (item.innerHTML === '0') item.style.display = 'none';
	});
}

async function getChats() {
	const now = new Date();
	const day = now.getDate();
	const month = now.toLocaleString('en', { month: 'short' });
	const hours = now.getHours().toString().padStart(2, '0');
	const minutes = now.getMinutes().toString().padStart(2, '0');
	const seconds = now.getSeconds().toString().padStart(2, '0');

	const formattedDate = `${day}. ${month} ${now.getFullYear()}`;
	const formattedTime = `${hours}:${minutes}:${seconds}`;

	addChatDate('17 March 2023');
	await addChatMessage(
		'https://i.pravatar.cc/300?u=user2',
		'Hi, how are you?',
		'11:22:33',
		true,
		true
	);
	await addChatMessage(
		'https://i.pravatar.cc/300?u=ownprofile',
		"Hi, I'm fine and you?",
		'11:23:00',
		false,
		true
	);
	addChatDate('18 March 2023');
	await addChatMessage(
		'https://i.pravatar.cc/300?u=user2',
		'I am sending you very very extremely long long longvery very extremely long long longvery very extremely long long longvery very extremely long long longvery very extremely long long long message.',
		'15:35:00',
		true,
		true
	);
	await addChatMessage(
		'https://i.pravatar.cc/300?u=ownprofile',
		'I am also sending you very very extremely long long longvery very extremely long long longvery very extremely long long longvery very extremely long long longvery very extremely long long long message.',
		'16:25:15',
		false,
		false
	);
	await addChatMessage('https://i.pravatar.cc/300?u=ownprofile', 'Cool!', '16:35:59', false, false);
	addChatDate(formattedDate);
	await addChatMessage(
		'https://i.pravatar.cc/300?u=user2',
		"Hey, what's up?",
		formattedTime,
		true,
		false
	);
}

async function getFileContent(file) {
	var content = await fetch(file, { headers: { 'cache-control': 'no-cache' } });
	return content.text();
}

function translate(template, dictionary) {
	for (var key in dictionary) template = template.replaceAll(key, dictionary[key]);
	return template;
}

function addChatDate(date) {
	document.querySelector('.conversation-detail .messages').innerHTML += `
  <div class="messages__info">
    <div class="messages__info__date">${date}</div>
  </div>
  `;
}

async function addChatMessage(photo, message, time, sent, read, active, secure) {
	const html = translate(await getFileContent('html/temp-message.html'), {
		'{SENT}': sent ? 'sent' : 'recieved',
		'{PHOTO}': photo,
		'{MESSAGE}': message,
		'{TIME}': time,
		'{READ}': read,
		'{ACTIVE}': active ? ' active' : '',
		'{SECURE}': secure ? 'secure' : 'non-secure',
		'{READ-ICON}': read ? 'read_yes.svg' : 'read_no.svg',
		'{READ-TEXT}': read ? 'Read' : 'Unread'
	});
	document.querySelector('.conversation-detail .messages').innerHTML += html;
	const chat = document.querySelector('.conversation-detail .messages-box');
	chat.scroll({ top: chat.scrollHeight });
}
