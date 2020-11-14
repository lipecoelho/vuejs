<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>
            Nome do usuário: {{invert()}}
        </p>
        <button @click="restartName">Reiniciar nome</button> 
        <button @click="reiniciarFn">Reiniciar nome (callback)</button>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String, 
            default: "Anônimo"
            //required: true,
            // default: function() {
            //     return Array(10).fill(0).join(',') //"Pedro"
            // }
        },
        reiniciarFn: Function
    },
    methods: {
        invert() {
            return this.nome.split('').reverse().join('');
        },
        restartName() {
            const oldName = this.nome
            this.nome = "Pedro";
            this.$emit('nameRestarted', {
                newName: this.nome,
                oldName
            })
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
