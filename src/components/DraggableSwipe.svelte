<script>
    import {onMount} from 'svelte';
    export let target; // cílový prvek, na který se má simulovat kliknutí
    let startX;
    let currentX;
    let isDragging = false;
    let mydiv;

    function handleStart(event) {
        startX = event.touches ? event.touches[0].pageX : event.pageX;
        isDragging = true;
        event.stopPropagation();
    }

    function handleMove(event) {
        if (!isDragging) return;
        currentX = event.touches ? event.touches[0].pageX : event.pageX;
        const distanceX = currentX - startX;

        // Posun zprava doleva
        if (distanceX < 0) {
            //event.currentTarget.parentElement.style.transform = `translateX(${distanceX}px)`;
        }
        event.stopPropagation();
    }

    function handleEnd(event) {
        isDragging = false;
        const distanceX = currentX - startX;

        // Pokud je posun větší než např. 100px, simulujeme kliknutí na cílový prvek
        if (distanceX < - parseFloat(getComputedStyle(mydiv.parentElement).width)/2) {
            const targetElement = document.querySelector(target);
            if (targetElement) {
               // console.log("Simutated click on:"+targetElement.id);
                targetElement.click();
            }
        } else {
            event.currentTarget.parentElement.style.transform = '';
        }
        event.stopPropagation();
    }

    function handleClick(event) {
        event.stopPropagation();
    }

    // Přidání posluchačů událostí pro rodičovský element
    onMount(() => {
        const parentElement = mydiv.parentElement;
        parentElement.addEventListener('mousedown', handleStart);
        parentElement.addEventListener('mousemove', handleMove);
        parentElement.addEventListener('mouseup', handleEnd);
        parentElement.addEventListener('touchstart', handleStart);
        parentElement.addEventListener('touchmove', handleMove);
        parentElement.addEventListener('touchend', handleEnd);
    });
</script>

<div bind:this={mydiv}>
    <slot></slot>
</div>
