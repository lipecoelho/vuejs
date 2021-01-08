<template>
	<div class="task-grid">
		<template v-if="tasks.length">
			<Task v-for="task in tasks" :key="task.name" :task="task"></Task>
		</template>
		<p v-else class="no-tasks">
			Nenhuma Tarefa estabelecida!
		</p>
	</div>
</template>

<script>
import Task from "./Task";

export default {
	components: {Task},
	props: {
		tasks: {type: Array, required: true}
	}
}
</script>

<style>
.no-tasks {text-align: center;}
.task-grid {
	margin: 0 auto;
	width: 400px;
}
.tasks-item {
	padding: 10px 10px 10px 20px;
	background: lightcoral;
	border-radius: 5px;
	/* display: inline-block; */
	margin-bottom: 5px;
	line-height: normal;
}

.tasks-item.done {
	background: lightseagreen;
	text-decoration: line-through;
}

.tasks-item:hover .close-task {
	display: inline-block;
}

.close-task {
	float: right;
	display: none;
	cursor: pointer;
	padding: 0px 5px 2px  5px;
	background: saddlebrown;
	border-radius: 5px;
}

.close-task:hover {
	background: red;
}
</style>