<script>
	import Message from './Message.svelte';
	import { onMount } from 'svelte';
	import { sendMessageStore } from '../stores/mainstore.js';

	onMount(() => {
		const unsubscribe = sendMessageStore.subscribe((value) => {
			if (value) {
				sendMessage();
				sendMessageStore.set(false);
			}
		});

		return unsubscribe; // Odhlásit se při zničení komponenty
	});

	export let visible = true;

	const mockupMessages = [
		{
			photo: 'https://i.pravatar.cc/300?u=user2',
			message: 'Hi, how are you?',
			time: '11:22:33',
			sent: true,
			read: true,
			secure: false
		},
		{
			photo: 'https://i.pravatar.cc/300?u=ownprofile',
			message: "Hi, I'm fine and you?",
			time: '11:23:00',
			sent: false,
			read: true,
			secure: false
		},
		{
			photo: 'https://i.pravatar.cc/300?u=user2',
			message:
				'I am sending you very very extremely long long longvery very extremely long long longvery very extremely long long longvery very extremely long long longvery very extremely long long long message.',
			time: '15:35:00',
			sent: true,
			read: true,
			secure: false
		},
		{
			photo: 'https://i.pravatar.cc/300?u=ownprofile',
			message:
				'I am also sending you very very extremely long long longvery very extremely long long longvery very extremely long long longvery very extremely long long longvery very extremely long long long message.',
			time: '16:25:15',
			sent: false,
			read: false,
			secure: false
		},
		{
			photo: 'https://i.pravatar.cc/300?u=ownprofile',
			message: 'Cool!',
			time: '16:35:59',
			sent: false,
			read: false,
			secure: false
		},
		{
			photo: 'https://i.pravatar.cc/300?u=user2',
			message: "Hey, what's up?",
			time: new Date().toLocaleTimeString(),
			sent: true,
			read: false,
			secure: false
		}
	];

	let messages = [];

	function addMessage() {
		// Přidání nové zprávy do seznamu
		messages.push({
			photo: 'https://i.pravatar.cc/300?u=profile',
			message: 'Nová zpráva',
			time: new Date().toLocaleTimeString(),
			sent: false,
			read: false,
			secure: false
		});
	}

	function deleteMessage(index) {
		// Odstranění zprávy ze seznamu podle indexu
		messages.splice(index, 1);
	}

	function searchMessage(query) {
		// Prohledávání zpráv podle dotazu
		return messages.filter((msg) => msg.message.includes(query));
	}

	function sendMessage() {
		const input = document.getElementById('message-text-input');
		const now = new Date();
		const hours = now.getHours().toString().padStart(2, '0');
		const minutes = now.getMinutes().toString().padStart(2, '0');
		const seconds = now.getSeconds().toString().padStart(2, '0');
		const formattedTime = `${hours}:${minutes}:${seconds}`;

		if (input.innerText) {
			addChatMessage(
				'https://i.pravatar.cc/300?u=ownprofile',
				input.innerText,
				formattedTime,
				false,
				false,
				false
			);
			input.innerText = '';
		}
	}

	onMount(() => {
		messages = mockupMessages;
	});

	function computeDate(index) {
		const startDate = new Date(2023, 1, 1); // 1. února 2023
		const weeksToAdd = Math.floor(index / 3) * 3; // Přidáme 3 týdny za každé tři zprávy
		startDate.setDate(startDate.getDate() + weeksToAdd * 7);
		return `${startDate.getDate()} ${startDate.toLocaleString('en', {
			month: 'long'
		})} ${startDate.getFullYear()}`;
	}
</script>

<!--<button on:click={addMessage}>Přidat zprávu</button>-->

<div class="messages-box" class:invisible={!visible}>
	<div class="messages">
		{#each messages as msg, index}
			{#if index % 3 === 0}
				<div class="messages__info">
					<div class="messages__info__date">{computeDate(index)}</div>
				</div>
			{/if}
			<Message {...msg} />
			<!--<button on:click={() => deleteMessage(index)}>Odstranit</button> -->
		{/each}
	</div>
</div>
