<script>
	import ToggleSwitch from './ToggleSwitch.svelte';
	import { conversationSelected } from '../stores/mainstore.js';
	import { onMount } from 'svelte';

	let isConversationSelected = false;

	conversationSelected.subscribe((value) => {
		isConversationSelected = value;
	});

	let checked1 = false;

	function handleChange1(event) {
		checked1 = event.detail.checked;
	}

	let textarea; // Reference to the textarea element

	function adjustTextareaHeight(textarea) {
		const lineHeight = parseFloat(window.getComputedStyle(textarea).lineHeight);

		const numOfLines = textarea.value === '' ? 1 : textarea.value.split('\n').length;

		if (numOfLines === 1) {
			textarea.rows = 1;
		} else {
			textarea.rows = numOfLines;
		}

		textarea.style.height = lineHeight * textarea.rows + 'px';
	}

	function handleKeydown(event) {
		let heightInpx = getComputedStyle(textarea).height;
		let lineInpx = getComputedStyle(textarea).lineHeight;

		if (
			(!checked1 && event.key === 'Enter' && !event.shiftKey && !event.ctrlKey) ||
			(checked1 && event.key === 'Enter' && (event.shiftKey || event.ctrlKey))
		) {
			event.preventDefault();
			window.sendMessage();
		}
	}

	onMount(() => {
		textarea.addEventListener('input', function () {
			adjustTextareaHeight(this);
		});

		adjustTextareaHeight(textarea);
	});
</script>

<div class="input-bar" class:invisible={!isConversationSelected}>
	<img class="icon" src="img/icons/attachment.svg" alt="Attachment" />
	<ToggleSwitch bind:checked={checked1} on:checked={handleChange1} />
	<textarea
		on:keypress={handleKeydown}
		bind:this={textarea}
		id="message-text-input"
		class="text"
		placeholder="Type a message ..."
	/>
	<img class="icon" src="img/icons/video_message.svg" alt="Voice message" />
	<img class="icon" src="img/icons/voice_message.svg" alt="Voice message" />
	<img class="icon" src="img/icons/emoji.svg" alt="Emoji" />
	<img onClick="sendMessage()" class="icon" src="img/icons/send.svg" alt="Send" />
</div>
