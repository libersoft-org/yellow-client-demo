<script>
    import { accountsIsOpen } from '../stores/mainstore.js';


    let isOpen = false;

    function toggleAccountsBar() {
        isOpen = !isOpen;
        accountsIsOpen.set(isOpen);

    }
</script>

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
			<div class="account__name">verylongname@verylongdomain.com</div>
			<div class="account__arrow" />
		</div>
	</div>
	<div class="accounts-bar__other-accounts {isOpen ? '' : 'invisible'}">
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
            <div class="account">
            	<div class="account__photo">
            		<img
            			class="photo-circle photo-circle--small"
            			src="https://i.pravatar.cc/300?u=user3"
            			alt="Nobody"
            		/>
            	</div>
            	<div class="account__name">noname@verylongdomain.com</div>
            </div>
		</div>
		<div class="blurer" />
	</div>
</div>
