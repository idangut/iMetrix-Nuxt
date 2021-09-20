<template>
    <div class="form-group">
        <label class="label-control">{{ label }}</label>
        <input type="text" :id="id" class="form-control datetimepicker" :value="model" />
    </div>
</template>

<script>
export default {
    props: {
        value: String,
        label: {
            type: String,
            default: 'Seleccione una fecha'
        }
    },
    data(){
        return {
            model: ''
        }
    },
    watch: {
        value(){
            this.model = this.value
        }
    },
    computed:{
        id(){
            return 'date-' + this._uid
        }
    },
    mounted(){
        $('#'+this.id).datetimepicker({
            icons: {
                time: "tim-icons icon-watch-time",
                date: "tim-icons icon-calendar-60",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'tim-icons icon-minimal-left',
                next: 'tim-icons icon-minimal-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            },
            locale: 'es',
            format: 'YYYY-MM-DD'
        })

        $('#'+this.id).on('dp.change', ({date, oldDate}) => {
            this.$emit('input', date.format('YYYY-MM-DD'))
        })
    }
}
</script>