<script>
// @ts-nocheck
    import IoIosClose from 'svelte-icons/io/IoIosClose.svelte'
    import { signOut } from "firebase/auth";
    import { auth } from '../firebase';
    import { user, navbar } from './state';
    
    let userData;
    user.subscribe(value => {
        userData = value;
    });

    const closeNavbar = () =>  {
        navbar.update(n => false);
    }

    const handleHref = path => {
        closeNavbar()
        window.location.href = path
    }

    const logout = () => {
        signOut(auth)
        closeNavbar()
        window.location.href = '/'
    }
</script>
<nav class="absolute z-20 bg-green-400 w-1/4 h-[100vh] px-4 py-2 text-white">
    <div class="w-full text-right">
        <button on:click={closeNavbar} class="w-10 h-10"><IoIosClose/></button>
    </div>
    <ul class="px-2">
        <li on:click={() => handleHref('/')}>Home</li>
        {#if userData}
            <li on:click={logout}>Logout</li>
        {:else}
            <li on:click={() => handleHref('/login')}>Login</li>
        {/if}
    </ul>
</nav>