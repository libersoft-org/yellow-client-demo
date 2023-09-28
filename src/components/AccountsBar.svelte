<script>
	import ToggleComponent from './ToggleComponent.svelte';
	import { accountsIsOpen } from '../stores/mainstore.js';
	import { onMount } from 'svelte';

	let isOpen = false;

	function toggleAccountsBar() {
		isOpen = !isOpen;
		accountsIsOpen.set(isOpen);
	}
	const id = '#active-account';
	onMount(() => {
		const closeHandler = (event) => {
			if (event.detail === id) {
				// Zavřete tuto komponentu
				document.querySelector(`${id}`).click();
			}
		};
		document.addEventListener('closeToggleComponent', closeHandler);
		return () => {
			document.removeEventListener('closeToggleComponent', closeHandler);
		};
	});
	import AddAccountModal from './AddAccountModal.svelte'; // Cesta k vaší komponentě

	let showAddAccountModal = false;

	function openAddAccount() {
		showAddAccountModal = true;
		document.querySelector('.accounts-bar__other-accounts').click();
	}
	function closeAddAccountModalForm() {
		showAddAccountModal = false;
	}
</script>

<ToggleComponent
	{id}
	bind:isOpen
	toggleElementSelector="#active-account"
	targetSelector={['.accounts-bar__other-accounts']}
	toggleClass="accounts-visible"
	closeOnEsc={false}
	closeOnClickOutside={true}
	modal={false}
>
	<div class="accounts-bar" on:click={toggleAccountsBar} on:keypress={toggleAccountsBar}>
		<div id="active-account" class="accounts-bar__active-account {!isOpen ? '' : 'menu-opened'}">
			<div class="account account--active">
				<div class="account__photo">
					<img
						class="photo-circle photo-circle--small"
						src="https://i.pravatar.cc/300?u=ownprofile"
						alt="Profile"
					/>
				</div>
				<div class="account__name active-account-name">verylongname@verylongdomain.com</div>
				<div class="account__arrow" />
			</div>
		</div>
		<div class="accounts-bar__other-accounts {isOpen ? 'accounts-visible' : ''}">
			<!-- Ostatní účty zde... -->
			<div class="accounts">
				<div class="account">
					<div class="account__photo">
						<img
							class="photo-circle photo-circle--small"
							src="https://i.pravatar.cc/300?u=user7"
							alt="Jane Doe"
						/>
					</div>
					<div class="account__name">janedoe@verylongdomain.com</div>
				</div>
				<div class="account">
					<div class="account__photo">
						<img
							class="photo-circle photo-circle--small"
							src="https://i.pravatar.cc/300?u=user6"
							alt="John Doe"
						/>
					</div>
					<div class="account__name">johndoe@verylongdomain.com</div>
				</div>
				<div class="account">
					<div class="account__photo">
						<img
							class="photo-circle photo-circle--small"
							src="https://i.pravatar.cc/300?u=user5"
							alt="Work Life"
						/>
					</div>
					<div class="account__name">worklife@verylongdomain.com</div>
				</div>
				<div class="account">
					<div class="account__photo">
						<img
							class="photo-circle photo-circle--small"
							src="https://i.pravatar.cc/300?u=user5"
							alt="Work Life"
						/>
					</div>
					<div class="account__name">life@longdomain.com</div>
				</div>
				<div class="account">
					<div class="account__photo">
						<img
							class="photo-circle photo-circle--small"
							src="https://i.pravatar.cc/300?u=user7"
							alt="Life"
						/>
					</div>
					<div class="account__name">onlyfans@verylongdomain.com</div>
				</div>
				<div class="account" on:click={openAddAccount}>
					<div class="account__photo">
						<img class="plus-icon" src="./img/icons_new/add_noback_FILLED.svg" alt="Nobody" />
					</div>
					<div class="account__name"><b>add new account</b></div>
				</div>
			</div>
			<div class="blurer" />
		</div>
	</div>
</ToggleComponent>
{#if showAddAccountModal}
	<AddAccountModal on:closeModalForm={closeAddAccountModalForm}/>
{/if}