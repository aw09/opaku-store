<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="flex py-4">
    <img class="h-48 w-48" src={data.image} alt='{data.name}-image'>
    <div>
        <h1>{data.name}</h1>
        <p>Rp {data.price.toLocaleString()}</p>
    </div>
</div>