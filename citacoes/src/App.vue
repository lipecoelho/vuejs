<template>
	<div id="app">

		<div class="w-100 text-center">
			<button class="btn btn-primary" @click="componenteColor = 'componenteColorAzul'">AZUL</button>
			<button class="btn btn-danger" @click="componenteColor = 'componenteColorRed'">RED</button>
			<button class="btn btn-success" @click="componenteColor = 'componenteColorGreen'">Green</button>
			<div>
				<keep-alive>
					<component :is="componenteColor">
						O componente é o: {{componenteColor}}
					</component>
				</keep-alive>	
			</div>
		</div>

		
		<br />
		<button @click="componente = 'Citacoes'">
			Citações
		</button>
		<button @click="componente = 'Sobre'">
			Sobre
		</button>
		
		<keep-alive>
			<component :is="componente" />
		</keep-alive>	
		<!-- <Citacoes />
		<Sobre /> -->
	</div>
</template>

<script>
import Citacoes from './components/Citacoes'
import Sobre from './components/Sobre'
import componenteColorAzul from './components/componenteColorAzul'
import componenteColorRed from './components/componenteColorRed'
import componenteColorGreen from './components/componenteColorGreen'

export default {
	components: { Citacoes, Sobre, componenteColorAzul, componenteColorRed, componenteColorGreen },
	data() {
		return {
			componente: 'Citacoes',
			componenteColor: 'componenteColorAzul'
		}
	}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
				padding: 5px 15px 10px;
				border: none;
        margin: 10px 5px;
        border-radius: 5px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(0, 0, 0, .5);
    }
</style>