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

	let editableDiv; // Reference to the contenteditable div

	function adjustDivHeight() {
		const lineHeight = parseFloat(getComputedStyle(editableDiv).lineHeight);
		const numOfLines = editableDiv.innerText.split('\n').length;

		if (numOfLines <= 1 && editableDiv.innerText.length > 0) {
			editableDiv.style.height = lineHeight + "px";
		} else {
			editableDiv.style.height = "auto";
			editableDiv.style.height = editableDiv.scrollHeight + "px";
		}
	}

	function handleKeydown(event) {
		if (
			(!checked1 && event.key === 'Enter' && !event.shiftKey && !event.ctrlKey) ||
			(checked1 && event.key === 'Enter' && (event.shiftKey || event.ctrlKey))
		) {
			event.preventDefault();
			window.sendMessage();
		}
	}

	onMount(() => {
		//editableDiv.addEventListener('input', adjustDivHeight);
		//adjustDivHeight();
	});
</script>

<div class="input-bar" class:invisible={!isConversationSelected}>
	<img class="icon" src="img/icons/attachment.svg" alt="Attachment" />
	<ToggleSwitch bind:checked={checked1} on:checked={handleChange1} />
	<div
		on:keypress={handleKeydown}
		bind:this={editableDiv}
		id="message-text-input"
		class="text"
		contenteditable="true"
		placeholder="Type a message ..."
	></div>
	<img class="icon" src="img/icons/video_message.svg" alt="Voice message" />
	<img class="icon" src="img/icons/voice_message.svg" alt="Voice message" />
	<img class="icon" src="img/icons/emoji.svg" alt="Emoji" />
	<img onClick="sendMessage()" class="icon" src="img/icons/send.svg" alt="Send" />
</div>
