<script>
	import { accountsIsOpen, conversationSelected } from '../stores/mainstore.js';
	import ConversationItem from './ConversationItem.svelte';
	import { scrollToBottomStore } from '../stores/mainstore.js';
	import { get } from 'svelte/store';
	import { tick } from 'svelte';
	import { activeConversationIdStore } from '../stores/mainstore.js';
	import MultiTick from './MultiTick.svelte';

	let activeConversationId = null;
	activeConversationIdStore.subscribe((value) => (activeConversationId = value));
	let blurred;

	let groups = ['Work', 'Family', 'Friend', 'Others', 'Blocked'];
	accountsIsOpen.subscribe((value) => (blurred = value));

	async function selectConversation(id) {
		activeConversationIdStore.set(id);
		conversationSelected.set(id !== null);
		activeConversationId = id;
		tick;
		const scrollToBottom = get(scrollToBottomStore);
		if (scrollToBottom) {
			tick;
			scrollToBottom();
		}
	}

	// Sample data for dynamically loaded conversations
	let lmes = `<b>John Smith:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.`;
	let conversations = [
		{
			id: '1',
			imageUrl: '../img/icons/icon_nemp_v4_filled.svg',
			name: 'Yellow - development group',
			lastMessage: lmes,
			time: '12:59:59',
			unreadMessages: 10,
			isRead: false,
			email: ' '
		},
		{
			id: '2',
			imageUrl: '../img/icons/icon_nemp_v5.svg',
			name: 'Yellow - announcements newsgroup',
			lastMessage:
				'<b>Another news about new version..</b> Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 5,
			isRead: true,
			email: ''
		},
		{
			id: '3',
			imageUrl: 'https://i.pravatar.cc/300?u=user3',
			name: 'Short Name',
			lastMessage:
				'Norem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 88,
			isRead: false,
			email: 'testuser@undefinedlongdomain.com'
		},
		{
			id: '4',
			imageUrl: 'https://i.pravatar.cc/300?u=user4',
			name: 'John Doe',
			lastMessage:
				'Oorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 5,
			isRead: false,
			email: 'nobody.anybody@domain.com'
		},
		{
			id: '5',
			imageUrl: 'https://i.pravatar.cc/300?u=user5',
			name: 'Jane Smith',
			lastMessage:
				'Porem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 9,
			isRead: false,
			email: 'seznam@radsianineznam.cz'
		},
		{
			id: '6',
			imageUrl: 'https://i.pravatar.cc/300?u=user6',
			name: 'Jane Smith',
			lastMessage:
				'Porem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 11,
			isRead: false,
			email: 'undefined.name@on.undefined.domain'
		},
		{
			id: '7',
			imageUrl: 'https://i.pravatar.cc/300?u=user7',
			name: 'User Name',
			lastMessage:
				'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 650,
			isRead: false,
			email: 'nobody@domain.com'
		},
		{
			id: '8',
			imageUrl: 'https://i.pravatar.cc/300?u=user8',
			name: 'Test User',
			lastMessage:
				'Worem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 92,
			isRead: false,
			email: 'info@yellownet.io'
		},
		{
			id: '9',
			imageUrl: 'https://i.pravatar.cc/300?u=user9',
			name: 'Some Name',
			lastMessage:
				'Torem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 83,
			isRead: false,
			email: 'nobody@domain.com'
		},
		{
			id: '10',
			imageUrl: 'https://i.pravatar.cc/300?u=user10',
			name: 'Nemp User',
			lastMessage:
				'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 74,
			isRead: false,
			email: 'nobo@domain.com'
		},
		{
			id: '11',
			imageUrl: 'https://i.pravatar.cc/300?u=user11',
			name: 'Name Here',
			lastMessage:
				'Borem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 101,
			isRead: false,
			email: 'hobo@domain.com'
		},
		{
			id: '12',
			imageUrl: 'https://i.pravatar.cc/300?u=user1',
			name: 'Ultraultraultra Long Username - Company Ltd.',
			lastMessage:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 10,
			isRead: false,
			email: 'nobody@domain.com'
		},
		{
			id: '13',
			imageUrl: 'https://i.pravatar.cc/300?u=user2',
			name: 'Veryveryvery Long Username - Some Other Company Ltd.',
			lastMessage:
				'Morem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 0,
			isRead: true,
			email: 'nobodywithlong.long@domain.com'
		},
		{
			id: '14',
			imageUrl: 'https://i.pravatar.cc/300?u=user3',
			name: 'Short Name',
			lastMessage:
				'Norem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 888,
			isRead: false,
			email: 'testuser@undefinedlongdomain.com'
		},
		{
			id: '15',
			imageUrl: 'https://i.pravatar.cc/300?u=user4',
			name: 'John Doe',
			lastMessage:
				'Oorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 5,
			isRead: false,
			email: 'nobody.anybody@domain.com'
		},
		{
			id: '16',
			imageUrl: 'https://i.pravatar.cc/300?u=user5',
			name: 'Jane Smith',
			lastMessage:
				'Porem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 9,
			isRead: false,
			email: 'seznam@radsianineznam.cz'
		},
		{
			id: '17',
			imageUrl: 'https://i.pravatar.cc/300?u=user6',
			name: 'Jane Smith',
			lastMessage:
				'Porem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 11,
			isRead: false,
			email: 'undefined.name@on.undefined.domain'
		},
		{
			id: '18',
			imageUrl: 'https://i.pravatar.cc/300?u=user7',
			name: 'User Name',
			lastMessage:
				'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 650,
			isRead: false,
			email: 'nobody@domain.com'
		},
		{
			id: '19',
			imageUrl: 'https://i.pravatar.cc/300?u=user8',
			name: 'Test User',
			lastMessage:
				'Worem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 92,
			isRead: false,
			email: 'info@yellownet.io'
		},
		{
			id: '20',
			imageUrl: 'https://i.pravatar.cc/300?u=user9',
			name: 'Some Name',
			lastMessage:
				'Torem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 83,
			isRead: false,
			email: 'nobody@domain.com'
		},
		{
			id: '21',
			imageUrl: 'https://i.pravatar.cc/300?u=user10',
			name: 'Nemp User',
			lastMessage:
				'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 74,
			isRead: false,
			email: 'nobo@domain.com'
		},
		{
			id: '22',
			imageUrl: 'https://i.pravatar.cc/300?u=user11',
			name: 'Name Here',
			lastMessage:
				'Borem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 101,
			isRead: false,
			email: 'hobo@domain.com'
		}
	];

	function toggleConversations(event) {
		let nextElement = event.currentTarget.nextElementSibling;
		const arrowElement = event.currentTarget.querySelector('.group-arrow');

		// Přepnout třídy pro šipku
		if (arrowElement.classList.contains('g-opened')) {
			arrowElement.classList.remove('g-opened');
		} else {
			arrowElement.classList.add('g-opened');
		}

		while (nextElement && !nextElement.classList.contains('group-conversation')) {
			nextElement.style.display = nextElement.style.display === 'none' ? '' : 'none';
			nextElement = nextElement.nextElementSibling;
		}
	}
</script>

<div class="conversations-panel no-select {!blurred ? '' : 'blurred'}">
	{#each conversations as conversation, index}
		{#if index % 5 === 0}
			<div class="group-conversation" on:click={toggleConversations}>
				<div class="group-icon" />
				<div class="group-name">{groups[index / 5]}</div>
				<div class="conversation__status__icons ingroup">
					<div class="conversation__status__icons__unread-messages">
						{conversation.unreadMessages}
					</div>
				</div>
				<div class="group-arrow" />
			</div>
		{/if}
		<ConversationItem
			{conversation}
			isActive={activeConversationId === conversation.id}
			onSelect={() => {
				document.querySelector(`.panel-right`).classList.add('active-panel');
				document.querySelector(`.panel-left`).classList.remove('active-panel');
				selectConversation(conversation.id);
				setTimeout(() => {
					document.querySelector(`#message-text-input`).focus();
				}, 5);
			}}
		/>
	{/each}
</div>
