<script>	
	import { onMount } from 'svelte';
    // onMount(() => {
    //     alert('Helklo world')
    // });
    async function sendMessage() {
        window.electronAPI.sendPing("Hi main!");
        let result = await window.electronAPI.getData("Hi main!");
        alert(result);
        alert('ping sent');
    }
</script>
<h1 class="text-red-300 font-bold bg-cyan-400">Hello</h1>
<button onclick={async () => {await sendMessage();}}>Test</button>
<p>Visit <a class="text-blue-400" href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
