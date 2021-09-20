<template>
    <div>
      <b-modal
          v-model="modal"
          dialog-class="modal-dialog-scrollable modal-dialog-centered"
          title="Recuperar contraseña"
          title-tag="h3"
          ok-only>
            
            <b-form v-if="!clients.length">
                <b-card-text>
                  <p class="mb-4">Ingresa tu correo electrónico para recuperar tu contraseña</p>
                  <b-form-group label="Correo electrónico">
                    <b-form-input v-model="model.email"></b-form-input>
                  </b-form-group>
                </b-card-text>
            </b-form>

            <template v-else>
              <div class="mx-4 my-4 text-center" v-if="loadingRestore">
                <b-spinner variant="primary" />
              </div>
              <template v-else>
                <h5 class="mt-4">Seleccione una cuenta</h5>
                <b-list-group>
                  <b-list-group-item @click="restoreAccount(client)" v-for="(client, i) in clients" :key="i">
                    <!--<b-avatar class="mr-2" v-if="client.admin ? false : client.client.url">
                      <img :src="client.client.url" />
                    </b-avatar>-->
                    <b-link v-if="client.admin">Administrador</b-link>
                    <b-link v-else>{{ client.client.name }}</b-link>
                  </b-list-group-item>
                </b-list-group>
              </template>
            </template>

            <template v-slot:modal-footer="{ ok, cancel }">
                <b-button size="md" variant="grey" @click="cancel()">
                    Cancelar
                </b-button>
                <b-button v-if="!clients.length" variant="primary" size="md" :loading="loading" :disabled="loading" @click="restore">Recuperar</b-button>
            </template>

        </b-modal>
      </div>
</template>

<script>
  export default {
    props: {
      id: String,
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
        modelSchema: {
          email: ''
        },
        model: {},
        modal: false,
        loading: false,
        loadingRestore: false,
        clients: []
      }
    },
    created(){
      this.model = Object.assign({}, this.modelSchema)
      this.routeMeta.admin = this.admin
    },
    methods: {
      open(){
        this.clients = []
        this.loadingRestore = false
        this.modal = true
        this.model = Object.assign({}, this.modelSchema)
      },
      restore(){

        let post = this._.cloneDeep(this.model)
        this.loading = true
        this.$nuxt.$loading.start()
        
        this.$api(this, (xhr) => {
            xhr.post('/restore', this.$qs.stringify(post)).then((r) => {

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

                  if(data.hasOwnProperty('multiple') && data.multiple){
                    this.clients = data.data
                    return
                  }

                  $.notify({
                    icon: "tim-icons icon-alert-circle-exc",
                    message: data.message
                  }, {
                    type: 'primary'
                  })

                  this.modal = false
                }

            }).catch(() => {
                this.loading = false
                this.$nuxt.$loading.finish()
            })
        })
      },
      restoreAccount(client){

        let post = this._.cloneDeep(this.model)
        post.client = client.admin ? '' : client.client.uuid
        post.userid = client.uuid

        this.loadingRestore = true
        this.$nuxt.$loading.start()
        
        this.$api(this, (xhr) => {
            xhr.post('/restore/account', this.$qs.stringify(post)).then((r) => {

                this.$nuxt.$loading.finish()
                this.loadingRestore = false

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
                }

            }).catch(() => {
                this.loadingRestore = false
                this.$nuxt.$loading.finish()
            })
        })
      }
    }
  }
</script>