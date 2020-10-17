new Vue({
	el: '#app1',
	data: {
		titleOne: 'Title One'
	},
	methods: {
		alterar() {
			this.titleOne += '!!!'
		}
	}
});

new Vue({
	el: '#app2',
	data: {
		titleTwo: 'Title Two'
	},
	methods: {
		alterar() {
			this.titleTwo += '!!!'
		}
	}
});