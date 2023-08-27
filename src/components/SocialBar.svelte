<script>
    import {onMount} from "svelte";

    let draggedItem = null;

    function handleDragStart(event) {
        draggedItem = event.target.closest('.social-icon-container');
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', '');
        event.preventDefault();
    }

    function handleDragEnter(event) {
        const target = event.target.closest('.social-icon-container');
        if (target && draggedItem) {
            const rect = target.getBoundingClientRect();
            const halfWidth = rect.width / 2;
            if (event.clientX - rect.left < halfWidth) {
                target.parentNode.insertBefore(draggedItem, target);
            } else {
                if (target.nextSibling) {
                    target.parentNode.insertBefore(draggedItem, target.nextSibling);
                } else {
                    target.parentNode.appendChild(draggedItem);
                }
            }
        }
        event.preventDefault()
    }

    function handleDrop(event) {
        event.preventDefault();
        updateIndexes();
    }

    function handleDragEnd(event) {
        draggedItem = null;
        event.preventDefault()
    }

    function handleDragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }


    function updateIndexes() {
        const icons = document.querySelector('.social-icons-block');
        const children = Array.from(icons.children);
        children.forEach((child, index) => {
            child.setAttribute('data-index', index);
        });
    }

    let isExpanded = false;

    function toggleExpanded() {
        isExpanded = !isExpanded;
    }
    onMount(() => {
        const icons = document.querySelectorAll('.social-icon-container');
        icons.forEach(icon => {
            icon.addEventListener('touchstart', handleDragStart, false);
            icon.addEventListener('touchmove', handleDragEnter, false);
            icon.addEventListener('touchend', handleDragEnd, false);
        });

        return () => {
            // Odebrání posluchačů událostí při zničení komponenty
            icons.forEach(icon => {
                icon.removeEventListener('touchstart', handleDragStart);
                icon.removeEventListener('touchmove', handleDragEnter);
                icon.removeEventListener('touchend', handleDragEnd);
            });
        };
    });
</script>

<div class="social-icons" class:expanded={isExpanded}>
    <div class="social-icons-block">
        <!-- Conversations Icon -->
        <div class="social-icon-container" data-index="0" title="Conversations" draggable="true"
             on:dragstart={handleDragStart}
             on:dragover={handleDragOver}
             on:drop={handleDrop}
             on:dragenter={handleDragEnter}
             on:dragend={handleDragEnd}>
            <img src="img/icons/icon_nemp_v4.svg" alt="Conversations" class="icon" draggable="false"/>
            <div class="dot">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="6" fill="red"/>
                </svg>
            </div>
        </div>

        <!-- Forum Icon -->
        <div class="social-icon-container" data-index="1" title="Forum" draggable="true"
             on:dragstart={handleDragStart}
             on:dragover={handleDragOver}
             on:drop={handleDrop}
             on:dragenter={handleDragEnter}
             on:dragend={handleDragEnd}>
            <img src="img/icons/icon_help.svg" alt="Forum" class="icon" draggable="false"/>
        </div>

        <!-- Events Icon -->
        <div class="social-icon-container" data-index="2" title="Events" draggable="true"
             on:dragstart={handleDragStart}
             on:dragover={handleDragOver}
             on:drop={handleDrop}
             on:dragenter={handleDragEnter}
             on:dragend={handleDragEnd}>
            <img src="img/icons/icon_event.svg" alt="Events" class="icon" draggable="false"/>
        </div>

        <!-- Blogs Icon -->
        <div class="social-icon-container" data-index="3" title="Blogs" draggable="true"
             on:dragstart={handleDragStart}
             on:dragover={handleDragOver}
             on:drop={handleDrop}
             on:dragenter={handleDragEnter}
             on:dragend={handleDragEnd}>
            <img src="img/icons/icon_help.svg" alt="Blogs" class="icon" draggable="false"/>
        </div>

        <!-- File sharing Icon -->
        <div class="social-icon-container" data-index="4" title="File sharing" draggable="true"
             on:dragstart={handleDragStart}
             on:dragover={handleDragOver}
             on:drop={handleDrop}
             on:dragenter={handleDragEnter}
             on:dragend={handleDragEnd}>
            <img src="img/icons/icon_file_sharing.svg" alt="File sharing" class="icon" draggable="false"/>
        </div>

        <!-- E-shops Icon -->
        <div class="social-icon-container" data-index="5" title="E-shops" draggable="true"
             on:dragstart={handleDragStart}
             on:dragover={handleDragOver}
             on:drop={handleDrop}
             on:dragenter={handleDragEnter}
             on:dragend={handleDragEnd}>
            <img src="img/icons/icon_help.svg" alt="E-shops" class="icon" draggable="false"/>
        </div>

        <!-- Marketplace (with auctions) Icon -->
        <div class="social-icon-container" data-index="6" title="Marketplace (with auctions)" draggable="true"
             on:dragstart={handleDragStart}
             on:dragover={handleDragOver}
             on:drop={handleDrop}
             on:dragenter={handleDragEnter}
             on:dragend={handleDragEnd}>
            <img src="img/icons/icon_help.svg" alt="Marketplace" class="icon" draggable="false"/>
        </div>

        <!-- Maps Icon -->
        <div class="social-icon-container" data-index="7" title="Maps" draggable="true"
             on:dragstart={handleDragStart}
             on:dragover={handleDragOver}
             on:drop={handleDrop}
             on:dragenter={handleDragEnter}
             on:dragend={handleDragEnd}>
            <img src="img/icons/icon_map_pin.svg" alt="Maps" class="icon" draggable="false"/>
        </div>

        <!-- Calendar Icon -->
        <div class="social-icon-container" data-index="8" title="Calendar" draggable="true"
             on:dragstart={handleDragStart}
             on:dragover={handleDragOver}
             on:drop={handleDrop}
             on:dragenter={handleDragEnter}
             on:dragend={handleDragEnd}>
            <img src="img/icons/icon_calendar.svg" alt="Calendar" class="icon" draggable="false"/>
        </div>

        <!-- Tasks Icon -->
        <div class="social-icon-container" data-index="9" title="Tasks" draggable="true"
             on:dragstart={handleDragStart}
             on:dragover={handleDragOver}
             on:drop={handleDrop}
             on:dragenter={handleDragEnter}
             on:dragend={handleDragEnd}>
            <img src="img/icons/icon_task.svg" alt="Tasks" class="icon" draggable="false"/>
        </div>

        <!-- Donations Icon -->
        <div class="social-icon-container" data-index="10" title="Donations" draggable="true"
             on:dragstart={handleDragStart}
             on:dragover={handleDragOver}
             on:drop={handleDrop}
             on:dragenter={handleDragEnter}
             on:dragend={handleDragEnd}>
            <img src="img/icons/icon_donations.svg" alt="Donations" class="icon" draggable="false"/>
        </div>

        <!-- Surveys Icon -->
        <div class="social-icon-container" data-index="11" title="Surveys" draggable="true"
             on:dragstart={handleDragStart}
             on:dragover={handleDragOver}
             on:drop={handleDrop}
             on:dragenter={handleDragEnter}
             on:dragend={handleDragEnd}>
            <img src="img/icons/icon_help.svg" alt="Surveys" class="icon" draggable="false"/>
        </div>


        <!-- Payments Icon -->
        <div class="social-icon-container" data-index="12" title="Payments" draggable="true"
             on:dragstart={handleDragStart}
             on:dragover={handleDragOver}
             on:drop={handleDrop}
             on:dragenter={handleDragEnter}
             on:dragend={handleDragEnd}>
            <img src="img/icons/icon_help.svg" alt="Payments" class="icon" draggable="false"/>
        </div>

        <!-- Media feed Icon -->
        <div class="social-icon-container" data-index="13" title="Media feed" draggable="true"
             on:dragstart={handleDragStart}
             on:dragover={handleDragOver}
             on:drop={handleDrop}
             on:dragenter={handleDragEnter}
             on:dragend={handleDragEnd}>
            <img src="img/icons/icon_help.svg" alt="Media feed" class="icon" draggable="false"/>
        </div>

        <!-- Games Icon -->
        <div class="social-icon-container" data-index="14" title="Games" draggable="true"
             on:dragstart={handleDragStart}
             on:dragover={handleDragOver}
             on:drop={handleDrop}
             on:dragenter={handleDragEnter}
             on:dragend={handleDragEnd}>
            <img src="img/icons/icon_help.svg" alt="Games" class="icon" draggable="false"/>
        </div>

        <!-- Dating Icon -->
        <div class="social-icon-container" data-index="15" title="Dating" draggable="true"
             on:dragstart={handleDragStart}
             on:dragover={handleDragOver}
             on:drop={handleDrop}
             on:dragenter={handleDragEnter}
             on:dragend={handleDragEnd}>
            <img src="img/icons/icon_help.svg" alt="Dating" class="icon" draggable="false"/>
        </div>
    </div>
    <div class="social-arrow" class:expanded={isExpanded} on:click={toggleExpanded}></div>
</div>

<style>
    .dot {
        position: relative;
        top: 0;
        right: 50%;
        width: 24px;
        height: 24px;
        z-index: 11;
    }
</style>
