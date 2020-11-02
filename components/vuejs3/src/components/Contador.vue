<template>
	<div id="contador">	
		<div>{{contador}}</div>
		<button @click="contador++">+</button>
		<button depressed color="error" @click="contador--">-</button>
	</div>
</template>
<script>
export default {
	data() {
		return {
			contador: 0
		}
	}
}
</script>

<style scoped>
button {background: blue}
</style>