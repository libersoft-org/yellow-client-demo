<script>
    import { onMount } from 'svelte';

    let lottie;
    export let animationData = null;
    let container;

    onMount(() => {
        if (typeof window !== 'undefined') {
            import('lottie-web').then(module => {
                lottie = module.default;
                if (animationData && container) {
                    lottie.loadAnimation({
                        container: container, // odkaz na DOM element
                        renderer: 'svg', // 'svg', 'canvas', 'html'
                        loop: true, // smyčka animace
                        autoplay: true, // automatické přehrávání
                        animationData: animationData // předaná animační data
                    });
                }
            });
        }
    });
</script>

<div class="lottie" bind:this={container} />

<style>
    /* Zde můžete přidat vlastní styly pro kontejner, pokud je to potřeba */
</style>
