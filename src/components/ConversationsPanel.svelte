<script>
	import { accountsIsOpen, conversationSelected } from '../stores/mainstore.js';
	import ConversationItem from './ConversationItem.svelte';

	let blurred;
	let activeConversationId = null;

	accountsIsOpen.subscribe((value) => (blurred = value));

	function selectConversation(id) {
		conversationSelected.set(true);
		activeConversationId = id;
	}

	// Sample data for dynamically loaded conversations
	let conversations = [
		{
			id: '1',
			imageUrl: 'https://i.pravatar.cc/300?u=user1',
			name: 'Ultraultraultra Long Username - Company Ltd.',
			lastMessage:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 10,
			isRead: false
		},
		{
			id: '2',
			imageUrl: 'https://i.pravatar.cc/300?u=user2',
			name: 'Veryveryvery Long Username - Some Other Company Ltd.',
			lastMessage:
				'Morem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 0,
			isRead: true
		},
		{
			id: '3',
			imageUrl: 'https://i.pravatar.cc/300?u=user3',
			name: 'Short Name',
			lastMessage:
				'Norem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 888,
			isRead: false
		},
		{
			id: '4',
			imageUrl: 'https://i.pravatar.cc/300?u=user4',
			name: 'John Doe',
			lastMessage:
				'Oorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 5,
			isRead: false
		},
		{
			id: '5',
			imageUrl: 'https://i.pravatar.cc/300?u=user5',
			name: 'Jane Smith',
			lastMessage:
				'Porem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 9,
			isRead: false
		},
		{
			id: '6',
			imageUrl: 'https://i.pravatar.cc/300?u=user6',
			name: 'Jane Smith',
			lastMessage:
				'Porem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 11,
			isRead: false
		},
		{
			id: '7',
			imageUrl: 'https://i.pravatar.cc/300?u=user7',
			name: 'User Name',
			lastMessage:
				'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 650,
			isRead: false
		},
		{
			id: '8',
			imageUrl: 'https://i.pravatar.cc/300?u=user8',
			name: 'Test User',
			lastMessage:
				'Worem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 92,
			isRead: false
		},
		{
			id: '9',
			imageUrl: 'https://i.pravatar.cc/300?u=user9',
			name: 'Some Name',
			lastMessage:
				'Torem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 83,
			isRead: false
		},
		{
			id: '10',
			imageUrl: 'https://i.pravatar.cc/300?u=user10',
			name: 'Nemp User',
			lastMessage:
				'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 74,
			isRead: false
		},
		{
			id: '11',
			imageUrl: 'https://i.pravatar.cc/300?u=user11',
			name: 'Name Here',
			lastMessage:
				'Borem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl sit amet nunc.',
			time: '12:59:59',
			unreadMessages: 101,
			isRead: false
		}
	];
</script>

<div class="conversations-panel {!blurred ? '' : 'blurred'}">
	{#each conversations as conversation}
		<ConversationItem
			{conversation}
			isActive={activeConversationId === conversation.id}
			onSelect={() => {
				selectConversation(conversation.id);
				document.querySelector(`#message-text-input`).focus();
			}}
		/>
	{/each}
</div>
