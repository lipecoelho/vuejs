<template>
	<div class="tasks-item" :class="stateClass">
		<span>{{task.name}}</span>
		<span class="close-task">&times;</span>
	</div>
</template>

<script>
export default {
	props: { 
		task: {type: Object, required: true}
	},
	computed: {
		stateClass() {
			return {
				pending: this.task.pending,
				done: !this.task.pending,
			}
		}
	}
}
</script>

<style>

</style>