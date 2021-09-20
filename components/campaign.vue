<template>
    <div>
      <b-modal
          dialog-class="modal-dialog-scrollable modal-dialog-centered"
          v-model="modal"
          title="Campaña"
          title-tag="h3"
          size="lg"
          ok-only>
            <b-form>
                <b-form-group label="Nombre">
                <b-form-input v-model="model.name"></b-form-input>
                </b-form-group>
                <b-form-group label="Logo (URL)">
                <b-form-input v-model="model.url"></b-form-input>
                </b-form-group>
                <span class="d-block">Vista previa del logo</span>
                <b-img height="100" alt="Logo" v-if="model.url" :src="model.url" />
                <p class="text-muted" v-else>Ingrese la url del logo</p>
                <h3 class="mt-4 mb-2 d-block">Tableros</h3>
                <b-form-group label="Nombre del tablero">
                    <b-form-input v-model="board.name"></b-form-input>
                </b-form-group>
                <b-form-group label="Tipo de tablero">
                    <b-form-select :plain="false" :options="types" v-model="board.type"></b-form-select>
                </b-form-group>
                <b-form-group label="Vista del tablero">
                    <b-form-input v-model="board.url"></b-form-input>
                    <b-form-text id="input-live-help" v-if="board.type == 1">workbook/sheet</b-form-text>
                    <b-form-text id="input-live-help" v-if="board.type == 2">www.imetrix.com.co/myboardname</b-form-text>
                </b-form-group>
                <b-form-group label="Icono del tablero">
                    <select class="selectpicker" data-width="fit" data-size="5" data-none-selected-text="Seleccione un icono">
                        <option v-for="icon in icons" :key="icon" :data-content="`<i class='tim-icons ${icon}'></i>`">{{ icon }}</option>
                    </select>
                </b-form-group>
                <b-button variant="primary" size="md" @click="add">Agregar</b-button>
                <draggable :list="boards" :options="draggableOpts">
                    <div class="board-drag" v-for="(board, b) in boards" :key="b">
                        <i class="tim-icons icon-bullet-list-67 board-handle"></i>
                        <h4 class="mb-0 mt-2">{{ board.name }}</h4>
                        <small class="d-block">Tipo de tablero: {{ board.type == 1 ? 'Tableau' : 'iMetrix' }}</small>
                        <small class="d-block">Vista: {{ board.url }}</small>
                        <small class="d-block">Icono: <i :class="'tim-icons '+board.icon"></i></small>
                        <div>
                            <b-button @click="removeBoard(b)" class="btn-icon" rel="tooltip" data-placement="left" title="Eliminar tablero" variant="danger" size="sm">
                                <i class="tim-icons icon-simple-remove"></i>
                            </b-button>
                        </div>
                    </div>
                </draggable>
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
import draggable from 'vuedraggable'

export default {
    data(){
        return {
            routeMeta:{
                client: true
            },
            modal: false,
            modelSchema: {
                name   : '',
                url    : '',
                links  : []
            },
            boardSchema: {
                name : '',
                type : '',
                url  : '',
                icon : ''
            },
            board  : {},
            boards : [],
            model  : {},
            loading: false,
            draggableOpts:{
                group: 'drag',
                preventOnFilter: true,
                filter   : '.ignore-draggable',
                draggable: '.board-drag',
                handle: '.board-drag',
                animation: 150
            },
            types: [
                {
                    text: 'Tableau',
                    value: 1
                },
                {
                    text: 'iMetrix',
                    value: 2
                }
            ],
        }
    },
    computed: {
        ...mapState(['icons'])
    },
    methods: {
        open(data = this.modelSchema){

            this.modal = true
            this.model = this._.cloneDeep(data)

            if(this.model.uuid != undefined){
                this.boards = this.model.boards
            }else{
                this.boards = []
            }

            this.board = this._.cloneDeep(this.boardSchema)

            this.$nextTick(() => {

                $('.selectpicker').selectpicker('val', '')
                $('.selectpicker').on('changed.bs.select', (e, clickedIndex, isSelected, previousValue) => {
                    this.board.icon = $('.selectpicker').selectpicker('val')
                })
            })
        },
        add(){

            if(!this.board.name.trim()){
                return this.showError('Inserte un nombre para el tablero')
            }

            if(!this.board.url.trim()){
                return this.showError('Inserte un vista para el tablero')
            }

            this.boards.push(this.board)
            this.board = this._.cloneDeep(this.boardSchema)
            $('.selectpicker').selectpicker('val', '')
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

            let post    = this._.cloneDeep(this.model)
            post.boards = JSON.stringify(this.boards)

            let uuid = ''

            if(this.model.uuid != undefined){
                uuid = this.model.uuid
            }

            this.$api(this, (xhr) => {
                xhr.post('/campaign/' + uuid, this.$qs.stringify(post)).then(async (r) => {
                    
                    await this.$setItem('campaign', '')

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
        removeBoard(i){
            this.boards.splice(i, 1)
        }
    },
    components: {
        draggable,
    }
}
</script>