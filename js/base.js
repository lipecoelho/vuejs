new Vue({
    el:'#app',
    data: {
			titulo:'VueJs Intro!'
		},
		methods: {
			alterarTitulo(event) {
				this.titulo = event.target.value;
			},
			saudacao() {
				return this.titulo
			}
		}
}); 