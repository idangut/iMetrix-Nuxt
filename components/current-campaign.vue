<template>
    <div class="mb-4">
        <b class="primary--text">Campaña actual: {{ profile.hasOwnProperty('campaign') ? profile.campaign.name : 'Ninguna' }}</b>
        <br />
        <router-link v-if="!noChange" :to="baseurl + 'select-campaign'">Cambiar de campaña</router-link>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        props: {
            noChange: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                routeMeta:{
                    client: true
                }
            }
        },
        computed: {
            ...mapState(['profile', 'client']),
            baseurl(){
                return '/c/' + this.client.alias + '/'
            }
        }
    }
</script>