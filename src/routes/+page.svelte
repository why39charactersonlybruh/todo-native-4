<script>
	import '../style.css';
	let todoItem = '';
	let todoList = [];

	function addToArray() {
		todoList.push(todoItem);
		todoList = todoList;
		console.log(todoList);
		todoItem = '';
	}

</script>

<h1>My Todo App!</h1>

<form on:submit|preventDefault={addToArray}>
	<input type="text" bind:value={todoItem}>
	<button type="submit">Add</button>
</form>

<ul>

</ul>


