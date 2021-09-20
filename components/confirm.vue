<template>
    <div>
      <b-modal
          modal-class="modal-black"
          dialog-class="modal-dialog-scrollable modal-dialog-centered"
          v-model="modal"
          :title="title"
          title-tag="h3"
          ok-only>
            <b-card-text>
                {{ message }}
            </b-card-text>
            <template v-slot:modal-footer="{ ok, cancel }">
                <b-button size="md" variant="grey" @click="cancel()">
                    Cancelar
                </b-button>
                <b-button variant="primary" size="md" @click="confirm">Aceptar</b-button>
            </template>
        </b-modal>
      </div>
</template>

<script>

export default {
    props: {
        title: String,
        message: String,
        admin: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            routeMeta:{
                admin: false
            },
            modal: false,
            confirmData: {}
        }
    },
    created(){
        this.routeMeta.admin = this.admin
    },
    methods: {
        open(data){
            this.modal = true
            this.confirmData = data
        },
        confirm(){
            this.$emit('confirmed', this.confirmData)
            this.modal = false
        }
    }
}
</script>