<template>
	<div id="contador">	
		<div>{{contador}}</div>
		<button @click="contador++">+</button>
		<button @click="contador--">-</button>
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