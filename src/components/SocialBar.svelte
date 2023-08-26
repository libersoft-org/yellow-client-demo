<script>
	let draggedItem = null;

	function handleDragStart(event, index) {
		draggedItem = index;
		event.dataTransfer.effectAllowed = 'move';
	}

	function handleDragOver(event) {
		event.preventDefault();
		event.dataTransfer.dropEffect = 'move';
	}

	function handleDrop(event, index) {
		const icons = document.querySelector('.social-icons');
		const children = Array.from(icons.children);
		const draggedElement = children[draggedItem];
		const droppedOnElement = children[index];

		if (draggedItem < index) {
			icons.insertBefore(draggedElement, droppedOnElement.nextSibling);
		} else {
			icons.insertBefore(draggedElement, droppedOnElement);
		}
	}
</script>

<div class="social-icons">
	<img src="img/icons/icon_nemp_v4.svg" alt="Conversations" class="icon" draggable="true" on:dragstart={e => handleDragStart(e, 0)} on:dragover={handleDragOver} on:drop={e => handleDrop(e, 0)} />
	<img src="img/icons/icon_newsfeed.svg" alt="Newsfeed" class="icon" draggable="true" on:dragstart={e => handleDragStart(e, 1)} on:dragover={handleDragOver} on:drop={e => handleDrop(e, 1)} />
	<img src="img/icons/icon_play_out.svg" alt="Video calls" class="icon" draggable="true" on:dragstart={e => handleDragStart(e, 2)} on:dragover={handleDragOver} on:drop={e => handleDrop(e, 2)} />
	<img src="img/icons/icon_video_meeting.svg" alt="Video meetings" class="icon" draggable="true" on:dragstart={e => handleDragStart(e, 3)} on:dragover={handleDragOver} on:drop={e => handleDrop(e, 3)} />
</div>
