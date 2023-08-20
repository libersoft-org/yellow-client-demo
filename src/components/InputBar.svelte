<script>
	import ToggleSwitch from './ToggleSwitch.svelte';
	import { conversationSelected } from '../stores/mainstore.js';
	import { sendMessageStore } from '../stores/mainstore.js';
	import { onMount } from 'svelte';

	function callSendMessage() {
		sendMessageStore.set(true);
	}

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
			editableDiv.style.height = lineHeight + 'px';
		} else {
			editableDiv.style.height = 'auto';
			editableDiv.style.height = editableDiv.scrollHeight + 'px';
		}
	}

	function handleKeydown(event) {
		if (
			(!checked1 && event.key === 'Enter' && !event.shiftKey && !event.ctrlKey) ||
			(checked1 && event.key === 'Enter' && (event.shiftKey || event.ctrlKey))
		) {
			event.preventDefault();
			callSendMessage();
		} else if (event.key === 'Enter' && event.ctrlKey) {
			event.preventDefault();
			const selection = window.getSelection();
			const range = selection.getRangeAt(0);
			range.deleteContents();
			const br1 = document.createElement('br');
			range.insertNode(br1);
			const br2 = document.createElement('br');
			range.insertNode(br2);
			range.setStartAfter(br2);
			range.setEndAfter(br2);
			selection.removeAllRanges();
			selection.addRange(range);
		}
	}
	function simulateShiftEnter(element) {
		const shiftEnterEvent = new KeyboardEvent('keydown', {
			key: 'Enter',
			shiftKey: true,
			bubbles: true,
			cancelable: true
		});
		element.dispatchEvent(shiftEnterEvent);
	}
	onMount(() => {
		//editableDiv.addEventListener('input', adjustDivHeight);
		//adjustDivHeight();
	});
</script>

<div class="input-bar" class:invisible={!isConversationSelected}>
	<img class="icon" src="img/icons/icon_attachment.svg" alt="Attachment" />
	<ToggleSwitch bind:checked={checked1} on:checked={handleChange1} />
	<div
		on:keypress={handleKeydown}
		bind:this={editableDiv}
		id="message-text-input"
		class="text"
		contenteditable="true"
		placeholder="Type a message ..."
		data-placeholder="Type a message ..."
	/>
	<img class="icon" src="img/icons/icon_video_message.svg" alt="Voice message" />
	<img class="icon" src="img/icons/icon_voice_message.svg" alt="Voice message" />
	<img class="icon" src="img/icons/icon_emoji_filled.svg" alt="Emoji" />
	<img on:click={callSendMessage} class="icon" src="img/icons/send.svg" alt="Send" />
</div>
