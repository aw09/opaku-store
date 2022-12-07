<script>
// @ts-nocheck
    import IoIosClose from 'svelte-icons/io/IoIosClose.svelte'
    import { signOut } from "firebase/auth";
    import { app, auth } from '$firebase';
    import { user, navbar } from './state';
    import { base } from "$app/paths";
	import { onMount } from 'svelte';
    import { getAnalytics, setUserProperties, logEvent } from "firebase/analytics";

    
    let userData;

    user.subscribe(value => {
        userData = value;
    });

    const closeNavbar = () =>  {
        navbar.update(n => false);
    }

    const handleHref = path => {
        closeNavbar()
        window.location.href = base + '/' +path
    }

    const logout = () => {
        const analytics = getAnalytics(app)
        setUserProperties(analytics, { 
            email: ""
        });
        logEvent(analytics, 'logout')
        signOut(auth)
        closeNavbar()

        window.location.href = base ? base : "/";
    }
</script>
<nav class="absolute z-20 bg-green-400 w-1/4 h-[100vh] px-4 py-2 text-white">
    <div class="w-full text-right">
        <button on:click={closeNavbar} class="w-10 h-10"><IoIosClose/></button>
    </div>
    <ul class="px-2 flex flex-col gap-2 text-xl">
        <li class="cursor-pointer" on:click={() => handleHref(base)}>Home</li>
        {#if userData}
            <li class="cursor-pointer" on:click={logout}>Logout</li>
        {:else}
            <li class="cursor-pointer" on:click={() => handleHref('login')}>Login</li>
        {/if}
    </ul>
</nav>