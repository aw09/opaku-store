<script>
// @ts-nocheck

	import { snackbar, resetSnackbar } from '$state';
    
    let snacbarState;
    let snackbarMessage;

    snackbar.subscribe(value => {
        snacbarState = value.state;
        snackbarMessage = value.message
    })

    $: if(snacbarState) {
        setTimeout(resetSnackbar, 1000)
    }
</script>

<section id="snacbkar" class="absolute bottom-24 left-0 right-0 max-w-3xl mx-auto w-full p-4 bg-white rounded-lg shadow-2xl border-2 ">
    <p class="text-xl">{snackbarMessage}</p>
</section>