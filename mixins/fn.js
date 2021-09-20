import { mapState } from 'vuex'
export default {
	data() {
		return {}
	},
	computed: {
		...mapState(['profile', 'client'])
	},
	methods: {

		async authProfile({ profile, routeMeta, routeName, route }) {

			this.$store.commit('PROFILE', profile)

			if (profile.profile == 0 || profile.profile == 3) {
	
				if (routeMeta.auth && !routeMeta.profile.includes(parseInt(profile.profile))) {
					return this.$router.push('/admin/clients')
				}

			} else {

				if (routeMeta.auth && !routeMeta.profile.includes(parseInt(profile.profile))) {
					return this.$router.push(this.baseurl + 'select-campaign')
				}

				// Validar campaña
				let campaign = await this.$getItem('campaign_' + this.client.uuid)
				
				if (profile.profile == 2 && routeMeta.name != 'select-campaign' && (campaign == null || campaign == 'undefined')) {
					return this.$router.push(this.baseulr + 'select-campaign')
				}

				campaign = profile.campaigns.find((c) => c.uuid == campaign)
				if(campaign){
					this.$store.commit('PROFILE', {
						...profile,
						campaign
					})
				}
			}
			
			this.$nextTick(() => {
				this.$store.commit('loader', false)
			})
		}
	}
}