<template>
	<div class="contadores">
		<Contador v-for="c in 5" :key="c" />
	</div>
</template>

<script>
import Contador from './Contador.vue'

export default {
	components: {"Contador": Contador}
}
</script>

<style>

</style>