

<script>
  
  import { onMount } from 'svelte';
  
  export let countdown = 5 * 60;
  
  onMount(() => {
    const interval = setInterval(() => {
      countdown--;
      if (countdown === 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  });
  
  $: countdown_string = Math.floor(countdown / 60) + ':' + (countdown % 60 < 10 ? '0' : '') + (countdown % 60); 
  
</script>



<style>
</style>


<div>
<b>countdown</b>
  time remaining: {countdown_string}!
  
</div>