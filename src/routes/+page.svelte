<script>
	import '../style.css';
	import { writable } from 'svelte/store';
	let todoItem = '';
	let storedList;
	let todoList = writable([]);

	if (typeof window != 'undefined' && typeof localStorage !== 'undefined') {
		storedList = localStorage.getItem('storedList');
		if(storedList) {
			$todoList = (JSON.parse(storedList));
		}
	}

	function updateList() {
		return storedList = localStorage.setItem('storedList', JSON.stringify
		($todoList));
	}
	
	
	$: isDone = $todoList.filter(item => item.done);
	function addToArray() {
		if (todoItem == '') {
			return;
		}
		$todoList = [...$todoList, {
			text: todoItem,
			done: false
		}];
		$todoList = $todoList;
		console.log($todoList);
		todoItem = '';
		updateList();
	}
	function removeThis(index) {
		$todoList.splice(index, 1);
		$todoList = $todoList;
		updateList();
	}

</script>

<h1>To Do:</h1>

<form on:submit|preventDefault={addToArray}>
	<input type="text" bind:value={todoItem}>
	<button type="submit" class="glow-on-hover">Add</button>
</form>

<ul>
	{#each $todoList as item, index}
		<li>
			<input type="checkbox" bind:checked={item.done}>
			<span class:done={item.done} >{item.text}</span>
			<span on:click={() => removeThis (index)} 
			class="remove" role="button" tabindex="0">&times;</span>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
	}
	li {
		font-size:  1.3rem;
	}
	.done {
		color: red;
		text-decoration: line-through;
	}
	.remove {
		color: red;
		cursor: pointer;

	}
</style>