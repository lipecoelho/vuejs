<template>
    <div class="citacao">
        <!-- {{texto}} //passando por propriedade-->
        <slot name="autor"></slot>
        <slot></slot>
        <slot name="fonte"></slot>
    </div>
</template>

<script>
export default {
    // props: ['texto'] //passando por propriedade
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
        margin-bottom: 1rem;
    }
    
</style>
