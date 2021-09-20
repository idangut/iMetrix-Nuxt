<template>
    <div>
      <b-modal
          dialog-class="modal-dialog-scrollable modal-dialog-centered"
          v-model="modal"
          title="Cliente"
          title-tag="h3"
          size="lg"
          ok-only>
            <b-form>
                <b-form-group label="Nombre">
                <b-form-input v-model="model.name"></b-form-input>
                </b-form-group>
                <b-form-group label="Alias">
                <b-form-input v-model="model.alias"></b-form-input>
                </b-form-group>
                <span class="d-block">URL de acceso al cliente</span>
                <p class="text-muted mb-2">www.imetrix.com.co/c/{{ model.alias }}</p>
                <b-form-group label="Logo">
                    <b-form-file
                        v-model="model.logo"
                        :state="Boolean(model.logo)"
                        placeholder="Elija una foto o arrastrela aqui..."
                        drop-placeholder="Arrastre una foto aqui..."
                        @input="inputFile"
                        browse-text="Explorar">
                    </b-form-file>
                </b-form-group>
                <span class="d-block">Vista previa del logo</span>
                <b-img height="100" alt="Logo" v-if="model.preview || model.preview_old" :src="model.preview || model.preview_old" />
                <p class="text-muted" v-else>Seleccione una foto</p>
            </b-form>
            <template v-slot:modal-footer="{ ok, cancel }">
                <b-button size="md" variant="grey" @click="cancel()">
                    Cancelar
                </b-button>
                <b-button variant="primary" size="md" :loading="loading" :disabled="loading" @click="save">Guardar</b-button>
            </template>
        </b-modal>
      </div>
</template>

<script>

import { mapState } from 'vuex'
import slug from 'limax'

export default {
    data(){
        return {
            modal: false,
            modelSchema: {
                name       : '',
                alias      : '',
                logo       : '',
                preview    : '',
                preview_old: ''
            },
            model  : {},
            loading: false
        }
    },
    watch:{
        model:{
            deep: true,
            handler(){
                this.model.alias = slug(this.model.alias)
            }
        }
    },
    methods: {
        open(data = this.modelSchema){

            this.modal = true
            this.model = this._.cloneDeep(data)
            this.model.preview_old = this.model.url
        },
        showError(msj){

            $.notify({
                icon: "tim-icons icon-alert-circle-exc",
                message: msj
            }, {
                type: 'danger'
            })
        },
        save(){

            this.$nuxt.$loading.start()
            this.loading = true

            let post = this._.cloneDeep(this.model)
            let uuid = ''

            if(this.model.uuid != undefined){
                uuid = this.model.uuid
            }

            let form = new FormData()
            for(let i in post){
                form.append(i, post[i])
            }

            this.$api(this, (xhr) => {
                xhr.post('/client/' + uuid, form).then(async (r) => {

                    this.$nuxt.$loading.finish()
                    this.loading = false

                    let data = r.data
                    if(!data.response){

                        $.notify({
                            icon: "tim-icons icon-alert-circle-exc",
                            message: data.message
                        }, {
                            type: 'danger'
                        })

                    }else{

                        $.notify({
                            icon: "tim-icons icon-alert-circle-exc",
                            message: data.message
                        }, {
                            type: 'primary'
                        })

                        this.modal = false
                        this.$emit('success')
                        this.$router.go()
                    }

                }).catch(() => {
                    this.$nuxt.$loading.finish()
                    this.loading = false
                })
            })
        },
        inputFile(){
            this.model.preview = ''
            if(this.model.logo){
                this.model.preview = URL.createObjectURL(this.model.logo)
            }
        }
    }
}
</script>