<script>
	import Message from './Message.svelte';
	import { onMount, tick } from 'svelte';
	import { activeConversationIdStore, sendMessageStore } from '../stores/mainstore.js';
	import { scrollToBottomStore } from '../stores/mainstore.js';
	import animationData from '../content/animated.json';

	export let visible = true;
	import { afterUpdate } from 'svelte';
	import Modal from './Modal.svelte';
	import {set} from "ol/transform.js"; // Cesta k Modal.svelte
	let isOpen = false;
	let currentImage = '';
	let modal;
	let isPaused = true; // Initial state set to paused
	let time, duration;

	let uniqueId = 0; // A counter to generate unique IDs

	function generateUniqueId(prefix = '') {
		uniqueId++;
		return `${prefix}${uniqueId}`;
	}

	function handleImageClick(event) {
		currentImage = event.target.src;
		isOpen = true;
	}

	function handleVideoStateChange(event) {
		const videoElement = event.target;
		if (videoElement.paused) {
			videoElement.play();
		} else {
			videoElement.pause();
		}
	}

	function closeModal() {
		isOpen = false;
	}

	function addImageClickListeners() {
		const images = document.querySelectorAll('.image-container img.handled');
		images.forEach((img) => {
			img.removeEventListener('click', handleImageClick); // Odebrání stávajícího posluchače, pokud existuje
			img.addEventListener('click', handleImageClick);
		});
	}

	afterUpdate(() => {
		addImageClickListeners();
		refreshMessages();
		tick;
		setTimeout(()=>{scrollToBottom()},10);
	});

	let actualMessages = [];

	function refreshMessages() {
		if (parseInt($activeConversationIdStore) === 1) {
			actualMessages = [...groupMessages];
		} else if (parseInt($activeConversationIdStore) === 2) {
			actualMessages = [...newsgroupMessages];
		} else {
			actualMessages = [...messages];
		}
	}

	let messages = [];
	let groupMessages = [];
	let newsgroupMessages = [];

	let messageBox;
	let multipartImageA = `
        <div class="multipart-message">
            <div class="element">"Hey, what's up? <b>Nothing new?</b></div>
			<div class="element">
				<div class="image-container">
					<a href="./content/obrazek.jpeg" target="_blank">
						<img id="{id}" src="./content/obrazek.jpeg" alt="Example Image" style="cursor: pointer;"/>
					</a>
				</div>
			</div>
			<div class="element">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</div>
            <div class="element">
            <button>Send</button>
            <button>Download</button>
            </div>
        </div>
    `;
	let multipartImageH = `
        <div class="multipart-message">
            <div class="element">"Hey, what's up? <b>Nothing new?</b></div>
			<div class="element">
				<div class="image-container">
					<img class="handled" src="./content/obrazek2.jpeg" alt="Example Image" style="cursor: pointer;"/>
				</div>
			</div>
			<div class="element link"><b><a href="https://example.com/link">Click here</a></b></div>
            <div class="element">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</div>
            <div class="element">
            <button>Reply</button>
            <button>Like</button>
            </div>
        </div>
    `;
	let multipartUpload = `
		<div class="multipart-message">
			<div class="element container">
				<div class="element text-div">
					<b>Uploading:</b> bigfile.zip
				</div>
				<div class="progressbar">
 					<div class="fill"></div>
				</div>
				<div class="element video-time-info">
					<span>26.4 GB / 32.2 GB</span>
					<span>75%</span>
				</div>
		    </div>
        </div>
`;
	let multipartContact = `
		<div class="multipart-message">
			<div class="element container">
                <div class="element"><b>Contact</b></div>
                <div class="element contact">
                    <div class="conversation__user-photo">
                        <img class="photo-circle photo-circle--medium" src="https://i.pravatar.cc/300?u=user5" alt="https://i.pravatar.cc/300?u=user5"/>
                    </div>
                    <div class="conversation__info">
                        <div class="conversation__info__user__name"><b>Jane Smith</b></div>
                        <div class="conversation__info__user__email" style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">seznam@radsianineznam.cz</div>
                    </div>
        	    </div>
            </div>
        </div>
	`;
	let multipartGif = `
        <div class="multipart-message">
       		<div class="element container">
    			<div class="element">
	    			<div class="image-container">
					    <img src="./content/travolta.gif" alt="Pulp Fiction" style="cursor: default;"/>
				    </div>
			    </div>
            </div>
        </div>
    `;
	let newsgroupMesssage1 = `
        <div class="multipart-message">
            <div class="element"><b>Important announcement about new version.</b></div>
            <div class="element">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
            </div>
			<div class="element">
				<div class="image-container">
						<img id="{id}" src="./content/obrazek.jpeg" alt="Example Image" />
				</div>
			</div>
			<div class="element">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</div>
			<div class="element horizontal-line"/></div>
			<div class="element comment">
                <div class="icon-comment">
                    <img src="./img/icons_new/comment_noback.svg" alt="Comment Icon">
                </div>
                <div class="comment-text">
                    <b>Comments</b>
                </div>
                <div class="icon-send">
                    <img src="./img/icons/icon_caret_right.svg" alt="Send Icon">
                </div>
            </div>
        </div>
    `;
	let newsgroupMesssage2 = `
        <div class="multipart-message">
            <div class="element"><b>Important announcement about new version.</b></div>
            <div class="element">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
            </div>
			<div class="element">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</div>
			<div class="element horizontal-line"/></div>
			<div class="element comment">
                <div class="icon-comment">
                    <img src="./img/icons_new/comment_noback.svg" alt="Comment Icon">
                </div>
                <div class="comment-text">
                    <b>Comments</b>
                </div>
                <div class="icon-send">
                    <img src="./img/icons/icon_caret_right.svg" alt="Send Icon">
                </div>
            </div>
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
		for (let i = 0; i < groupMockup.length; i++) {
			const currentMessage = groupMockup[i];
			const previousMessage = groupMessages[groupMessages.length - 1];

			if (previousMessage && previousMessage.sent === currentMessage.sent) {
				previousMessage.hideAvatar = true;
				previousMessage.reduceMargin = true;
				previousMessage.hideAfter = true;
			}

			groupMessages = [...groupMessages, currentMessage];
		}
		for (let i = 0; i < newsgroupMockup.length; i++) {
			const currentMessage = newsgroupMockup[i];
			currentMessage.hideAvatar = true;
			//currentMessage.reduceMargin = true;
			currentMessage.hideAfter = true;

			newsgroupMessages = [...newsgroupMessages, currentMessage];
		}
		scrollToBottom(messageBox);
		return unsubscribe;
	});

	const scrollToBottom = async (node) => {
		console.log("scroll");
		try {
			if (!node) node = messageBox;
			node.scroll({top: node.scrollHeight, behavior: 'smooth'});
		} catch (e) {
			console.log('scroll is not exist');
		}
	};

	const newsgroupMockup = [
		{
			photo: 'https://i.pravatar.cc/300?u=ownprofile',
			messagetype: 'news',
			message: newsgroupMesssage1,
			time: new Date().toLocaleTimeString(),
			sent: true,
			read: false,
			secure: false
		},
		{
			photo: 'https://i.pravatar.cc/300?u=ownprofile',
			messagetype: 'news',
			message: newsgroupMesssage2,
			time: new Date().toLocaleTimeString(),
			sent: true,
			read: false,
			secure: false
		}
	];
	const groupMockup = [
		{
			photo: 'https://i.pravatar.cc/300?u=user4',
			message: "Hey, what's up? <b>Nothing new?</b>",
			time: new Date().toLocaleTimeString(),
			sent: true,
			read: false,
			secure: false
		},
		{
			photo: 'https://i.pravatar.cc/300?u=user2',
			message: 'Check my new video',
			time: new Date().toLocaleTimeString(),
			sent: true,
			read: false,
			secure: false,
			messagetype: 'videomessage',
			url: './content/yellow2.mp4',
			preview: './content/poster2.jpeg'
		},
		{
			photo: 'https://i.pravatar.cc/300?u=ownprofile',
			message: 'Audio message',
			time: new Date().toLocaleTimeString(),
			sent: false,
			read: false,
			secure: false,
			messagetype: 'audio',
			url: '../content/voice3.mp3'
		},
		{
			photo: 'https://i.pravatar.cc/300?u=ownprofile',
			message: '..map location',
			time: new Date().toLocaleTimeString(),
			sent: false,
			read: false,
			secure: false,
			messagetype: 'map'
		},
		{
			photo: 'https://i.pravatar.cc/300?u=user6',
			messagetype: 'lottie',
			message: animationData,
			time: '11:22:33',
			sent: true,
			read: true,
			secure: false
		}
	];
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
			photo: 'https://i.pravatar.cc/300?u=ownprofile',
			messagetype: 'multipart',
			message: multipartImageA,
			time: new Date().toLocaleTimeString(),
			sent: false,
			read: false,
			secure: false
		},
		{
			photo: 'https://i.pravatar.cc/300?u=ownprofile',
			messagetype: 'multipart',
			message: multipartImageH,
			time: new Date().toLocaleTimeString(),
			sent: false,
			read: false,
			secure: false
		},
		{
			photo: 'https://i.pravatar.cc/300?u=user2',
			messagetype: 'multipart',
			message: multipartContact,
			time: new Date().toLocaleTimeString(),
			sent: true,
			read: false,
			secure: false
		},
		{
			photo: 'https://i.pravatar.cc/300?u=user2',
			messagetype: 'multipart',
			message: multipartGif,
			time: new Date().toLocaleTimeString(),
			sent: false,
			read: false,
			secure: false
		},
		{
			photo: 'https://i.pravatar.cc/300?u=user2',
			messagetype: 'multipart',
			message: multipartUpload,
			time: new Date().toLocaleTimeString(),
			sent: true,
			read: false,
			secure: false
		},
		{
			photo: 'https://i.pravatar.cc/300?u=user2',
			messagetype: 'audio',
			message: 'Audio message',
			time: new Date().toLocaleTimeString(),
			sent: false,
			read: false,
			secure: false,
			url: '../content/voice3.mp3'
		},
		{
			photo: 'https://i.pravatar.cc/300?u=user2',
			messagetype: 'video',
			message: 'Check my new video',
			time: new Date().toLocaleTimeString(),
			sent: true,
			read: false,
			secure: false,
			url: './content/video.mp4',
			preview: './content/poster.png'
		},
		{
			photo: 'https://i.pravatar.cc/300?u=ownprofile',
			message: "cool!",
			time: '11:23:00',
			sent: false,
			read: true,
			secure: false
		},
		{
			photo: 'https://i.pravatar.cc/300?u=user2',
			message: "I know!",
			time: new Date().toLocaleTimeString(),
			sent: true,
			read: false,
			secure: false
		},
		{
			photo: 'https://i.pravatar.cc/300?u=user2',
			message: "Look what we can do here!",
			time: new Date().toLocaleTimeString(),
			sent: true,
			read: false,
			secure: false
		},
		{
			photo: 'https://i.pravatar.cc/300?u=user2',
			messagetype: 'piskvorky',
			message: 'Check my new video',
			time: new Date().toLocaleTimeString(),
			sent: true,
			read: false,
			secure: false,
			url: './content/video.mp4',
			preview: './content/poster.png'
		},
		{
			photo: 'https://i.pravatar.cc/300?u=ownprofile',
			message: "cool, what else is there!?",
			time: new Date().toLocaleTimeString(),
			sent: false,
			read: true,
			secure: false
		},
		{
			photo: 'https://i.pravatar.cc/300?u=user2',
			messagetype: 'view3d',
			time: new Date().toLocaleTimeString(),
			sent: true,
			read: false,
			secure: false,
		},
		{
			photo: 'https://i.pravatar.cc/300?u=user2',
			messagetype: 'paint',
			time: new Date().toLocaleTimeString(),
			sent: true,
			read: false,
			secure: false,
			url: './content/video.mp4',
			preview: './content/poster.png'
		},
		{
			photo: 'https://i.pravatar.cc/300?u=ownprofile',
			message: "nice!",
			time: '11:23:00',
			sent: false,
			read: true,
			secure: false
		},
		{
			photo: 'https://i.pravatar.cc/300?u=user2',
			message: "Look at this wonderful panoramic photo",
			time: '11:22:33',
			sent: true,
			read: true,
			secure: false
		},
		{
			photo: 'https://i.pravatar.cc/300?u=user2',
			messagetype: 'pano',
			time: new Date().toLocaleTimeString(),
			sent: true,
			read: false,
			secure: false,
		},
		{
			photo: 'https://i.pravatar.cc/300?u=user2',
			message: "We can play piano together in real time!",
			time: '11:22:33',
			sent: true,
			read: true,
			secure: false
		},
		{
			photo: 'https://i.pravatar.cc/300?u=user2',
			messagetype: 'piano',
			time: new Date().toLocaleTimeString(),
			sent: true,
			read: false,
			secure: false,
		},
		{
			photo: 'https://i.pravatar.cc/300?u=user2',
			message: "Let's see the weather forecast in Prague for the next week",
			time: '11:22:33',
			sent: true,
			read: true,
			secure: false
		},
		{
			photo: 'https://i.pravatar.cc/300?u=user2',
			messagetype: 'weather',
			time: new Date().toLocaleTimeString(),
			sent: true,
			read: false,
			secure: false,
		},
		{
			photo: 'https://i.pravatar.cc/300?u=ownprofile',
			message: "very cool!",
			time: '11:23:00',
			sent: false,
			read: true,
			secure: false
		},
		{
			photo: 'https://i.pravatar.cc/300?u=user2',
			messagetype: 'payment',
			time: new Date().toLocaleTimeString(),
			sent: true,
			read: false,
			secure: false,
		},
		{
			photo: 'https://i.pravatar.cc/300?u=ownprofile',
			message: "thanks!",
			time: '11:23:00',
			sent: false,
			read: true,
			secure: false
		},
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
			photo: 'https://i.pravatar.cc/300?u=ownprofile',
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
		if (input.innerHTML) {
			const newMessage = {
				photo: 'https://i.pravatar.cc/300?u=ownprofile',
				message: input.innerHTML,
				time: formattedTime,
				sent: false,
				read: false,
				secure: false
			};
			actualMessages = [...actualMessages, newMessage];
			if (parseInt($activeConversationIdStore) != 1) messages = [...messages, newMessage];
			else groupMessages = [...groupMessages, newMessage];
			await tick();
			scrollToBottom(messageBox);
			input.innerHTML = '';
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


<div bind:this={messageBox} class="messages-box" class:invisible={!visible}>
	<div class="messages">
		{#each actualMessages as msg, index}
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
				uniqueId={generateUniqueId('msg-')}
			/>
		{/each}
	</div>
	{#if isOpen}
		<Modal title="Image Preview" overlay="true" bind:this={modal} on:close={closeModal}>
			<img src={currentImage} alt="Modal Image" style="max-width: 100%; height: 100%; width:100%" />
		</Modal>
	{/if}
</div>
