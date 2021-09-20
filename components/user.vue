<template>
    <div>
      <b-modal
          dialog-class="modal-dialog-scrollable modal-dialog-centered"
          v-model="modal"
          title="Usuario"
          title-tag="h3"
          ok-only>
            <b-form>
                <b-form-group label="Perfil">
                <b-form-select :plain="false" :options="profiles" v-model="model.profile"></b-form-select>
                </b-form-group>
                <b-form-group label="Nombres">
                <b-form-input v-model="model.names"></b-form-input>
                </b-form-group>
                <b-form-group label="Correo electrónico">
                <b-form-input v-model="model.email"></b-form-input>
                </b-form-group>
                <b-form-group v-if="model.profile == 2 && campaigns.length" label="Campaña">
                <b-form-select multiple :plain="false" value-field="uuid" text-field="name" :options="campaigns" v-model="model.campaign"></b-form-select>
                </b-form-group>
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

export default {
    data(){
        return {
            routeMeta:{
                client: true,
            },
            modal: false,
            modelSchema: {
                names    : '',
                email    : '',
                profile  : '',
                campaign : []
            },
            model: {},
            loading: false,
            profiles: [
                {
                    text: 'Administrador',
                    value: 1
                },
                {
                    text: 'Agente',
                    value: 2
                }
            ],
            campaigns: []
        }
    },
    methods: {
        async open(data = this.modelSchema){

            this.modal = true
            this.model = Object.assign({}, data)

            if(this.model.uuid != undefined){
                this.model.names = this.model.info.names
            }

            await this.fetchCampaign()
        },
        fetchCampaign(){

            return new Promise((resolve) => {

                this.$nuxt.$loading.start()
                this.$api(this, (xhr) => {
                    xhr.get('/campaign', {
                        params: {
                            nolimit : 1,
                            status  : 1
                        }
                    }).then((r) => {

                        this.$nuxt.$loading.finish()
                        let data = r.data
                        this.campaigns = data.response ? data.data : []
                        resolve()

                    }).catch(() => {
                        this.$nuxt.$loading.finish()
                        resolve()
                    })
                })
            })
        },
        save(){

            this.$nuxt.$loading.start()
            this.loading = true

            let post = this._.cloneDeep(this.model)
            post.campaign = JSON.stringify(post.campaign)
            let uuid = ''

            if(this.model.uuid != undefined){
                uuid = this.model.uuid
            }

            this.$api(this, (xhr) => {
                xhr.post('/user/' + uuid, this.$qs.stringify(post)).then((r) => {
                    
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
                    }

                }).catch(() => {
                    this.$nuxt.$loading.finish()
                    this.loading = false
                })
            })
        }
    }
}
</script>