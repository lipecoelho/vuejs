new Vue({
	el: '#desafio',
	data: {
		classeEfeito: 'destaque',
		aplicarCSS: true,
		classes: 'c1 c2',
		aplicarC1: false,
		aplicarC2: true,
		classeCSS: 'c1',
		inputClass: '',
		class2: '',
		cor: 'green',
		estilos5: {
			width: '100px',
			height: '100px',
			border: '1px solid red' 
		},
		progresso: 0,
		progressoHeight: '100%'
	},
	computed: {
		aplicarC1() {
			return {
				c1: this.aplicarC1,
			}
		},
		estilo1() {
			return {
				backgroundColor: this.cor,
				width: this.largura + 'px'
			}
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{
				this.classeEfeito = this.classeEfeito == 'destaque' ? 'encolher' : 'destaque'
			}, 3000);
		},
		iniciarProgresso() {
			let valor = 0;
			const temporizador = setInterval(()=>{
					valor += 1;
					this.progresso = `${valor + 1}%`
					if(valor == 100){clearInterval(temporizador)}
			}, 0);
		},
		setPerigo(event){
			if(event.target.value == "true") {
				this.aplicarC2 = true
			}else if(event.target.value == "false"){
				this.aplicarC2 = false
			}
		}
	}
})
