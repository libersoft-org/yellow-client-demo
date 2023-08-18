<script>
  import { accountsIsOpen} from '../stores/mainstore.js';

  let blurred;
  accountsIsOpen.subscribe(value => blurred = value);
</script>

<div class="conversations-panel { !blurred ? '' : 'blurred' }">
	<!-- ... konverzace ... -->
</div>
