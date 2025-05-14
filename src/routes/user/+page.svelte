<script>
    function showAlert(){
        alert("Hi there!")
    }
</script>

<div>
    <h1 class="font-bold text-amber-600">Hello!</h1>
    <button id="button1" onclick={showAlert} class="w-32 p-2  text-white rounded ">
        click me
    </button>
</div>

<style>
#button1{
    background-color: blue;
}
</style>