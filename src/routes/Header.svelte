<script>
// @ts-nocheck

  import IoIosMenu from 'svelte-icons/io/IoIosMenu.svelte'
  import FaShoppingCart from 'svelte-icons/fa/FaShoppingCart.svelte'
  import { navbar, user } from './state';
  import { base } from '$app/paths';
  
  let userData;
  user.subscribe(value => {
		userData = value;
	});

  const openNavbar = () =>  {
		navbar.update(n => true);
	}

  const href = path => {
    if(path === "") path = '/'
    navbar.update(n => false);
    window.location.href = path
  }

</script>

<div class="bg-green-400 py-2 px-4 flex gap-2 items-center text-white fixed top-0 left-0 right-0 z-10">
  <button on:click={openNavbar} class="w-10 h-10"><IoIosMenu /></button>
  <button on:click={ () => href(base) } class="font-bold">Opaku Store</button>
  <div class="grow"></div>
  {#if userData}
    <button on:click={ () => href('cart') } class="w-8 h-8"><FaShoppingCart/></button>
  {/if}
</div>
<div class="h-10"></div>

