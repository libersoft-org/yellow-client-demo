<script>
	import Message from './Message.svelte';
	import { onMount, tick } from 'svelte';
	import { sendMessageStore } from '../stores/mainstore.js';
	import { scrollToBottomStore } from '../stores/mainstore.js';
	export let visible = true;

	let messages = [];
	let messageBox;
	let multipartMes = "test";
	let mess =`
        <div class="message-content">
            Hey, what's up? <b>Nothing new?</b>
            <img src="https://example.com/path/to/image.jpg" alt="Example Image">
            <a href="https://example.com/link">Click here</a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
            <button>Button 1</button>
            <button>Button 2</button>
        </div>
    `;
	onMount(() => {
		const unsubscribe = sendMessageStore.subscribe((value) => {
			if (value) {
				sendMessage();
				sendMessageStore.set(false);
			}
		});
		scrollToBottomStore.set(scrollToBottom);
		// Inicializace z mockupMessages
		for (let i = 0; i < mockupMessages.length; i++) {
			const currentMessage = mockupMessages[i];
			const previousMessage = messages[messages.length - 1];

			if (previousMessage && previousMessage.sent === currentMessage.sent) {
				previousMessage.hideAvatar = true;
				previousMessage.reduceMargin = true;
				previousMessage.hideAfter = true;
			}

			messages = [...messages, currentMessage];
		}
		scrollToBottom(messageBox);
		return unsubscribe;
	});

	const scrollToBottom = async (node) => {
		if (!node) node = messageBox;
		node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
	};
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
		},
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
		},
		{
			photo: 'https://i.pravatar.cc/300?u=user2',
			message: "Hey, what's up? <b>Nothing new?</b>",
			time: new Date().toLocaleTimeString(),
			sent: true,
			read: false,
			secure: false
		},
		{
			photo: 'https://i.pravatar.cc/300?u=user2',
			message: multipartMes,
			time: new Date().toLocaleTimeString(),
			sent: true,
			read: false,
			secure: false
		}
	];

	function adjustLastMessage() {
		const lastMessage = messages[messages.length - 1];
		if (lastMessage && lastMessage.sent === false) {
			lastMessage.hideAvatar = true;
			lastMessage.reduceMargin = true;
			lastMessage.hideAfter = true;
		}
	}

	async function addMessage() {
		adjustLastMessage();
		const newMessage = {
			photo: 'https://i.pravatar.cc/300?u=profile',
			message: 'Nová zpráva',
			time: new Date().toLocaleTimeString(),
			sent: false,
			read: false,
			secure: false
		};
		messages = [...messages, newMessage];
		await tick();
		scrollToBottom(messageBox);
	}

	async function sendMessage() {
		const input = document.getElementById('message-text-input');
		const formattedTime = new Date().toLocaleTimeString();

		adjustLastMessage();
		if (input.innerText) {
			const newMessage = {
				photo: 'https://i.pravatar.cc/300?u=ownprofile',
				message: input.innerText,
				time: formattedTime,
				sent: false,
				read: false,
				secure: false
			};
			messages = [...messages, newMessage];
			await tick();
			scrollToBottom(messageBox);
			input.innerText = '';
		}
	}

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

<div bind:this={messageBox} class="messages-box" class:invisible={!visible}>
	<div class="messages">
		{#each messages as msg, index}
			{#if index % 5 === 0}
				<div class="messages__info">
					<div class="messages__info__date">{computeDate(index)}</div>
				</div>
			{/if}
			<Message
				{...msg}
				hideAvatar={msg.hideAvatar}
				reduceMargin={msg.reduceMargin}
				hideAfter={msg.hideAfter}
			/>
			<!--<button on:click={() => deleteMessage(index)}>Odstranit</button> -->
		{/each}
	</div>
</div>
