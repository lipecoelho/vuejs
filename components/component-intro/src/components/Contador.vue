<template>
	<div id="contador">	
		<div>{{contador}}</div>
		<v-btn depressed color="primary" @click="contador++">+</v-btn>
		<v-btn depressed color="error" @click="contador--">-</v-btn>
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