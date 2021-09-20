<template>
    <div>
        <div class="my-5 h-100 d-flex align-items-center justify-content-center">
            <div class="text-center">
                <b-img class="p-2" height="150" src="~assets/imgi/iMetrix_logoweb_positivo.png" />
                <h4 v-if="error.statusCode  == 404">La página no ha sido encontrada</h4>
                <h4 v-else>Ha ocurrido un error</h4>
                <b-button variant="primary" to="/">Ir al inicio</b-button>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapState } from 'vuex'
    export default {
        props: ['error'],
        head(){
            return {
                title: 'iMetrix'
            }
        },
        computed:{
            ...mapState(['client'])
        },
        mounted(){
            this.$store.commit('loader', false)
        }
    }
</script>