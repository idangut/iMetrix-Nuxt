import fn from './fn'
import { mapState } from 'vuex'

export default {
    middleware: ['client'],
    mixins: [fn],
    data() {
        return {
            clientAlias: null
        }
    },
    head() {
        let title = this.client.hasOwnProperty('name') ? this.client.name + ' - iMetrix' : 'iMetrix - speech analytics'
        return {
            title
        }
    },
    computed: {
        ...mapState(['profile', 'client']),
        baseurl() {
            return '/c/' + this.client.alias + '/'
        }
    },
    async beforeCreate() {

        //Redirección al inicio
		if (this.$route.name == 'index') {
			this.$store.commit('loader', false)
			return
        }
        
        this.$store.commit('loader', true)
        this.$store.commit('PROFILE', {})
        
        this.$nextTick(() => {
                
            let routeMeta = this.routeMeta
            let routeName = this.$route.name
            let route = this.$route
            
            this.$api(this, (xhr) => {
                xhr.post('/profile').then((r) => {
    
                    let data = r.data
                    
                    // sin sesión
                    if (!data.response) {
    
                        this.$store.commit('loader', false)
                        if (!routeMeta.auth) return
                        
                        return this.$router.push({ path: '/login' })
                    }
                    else {
    
                        // datos del usuario
                        let profile = data.data
                        this.authProfile({ profile, routeMeta, routeName, route })
                    }
    
                }).catch(() => {})
            }).catch(() => {})
        })
    }
}