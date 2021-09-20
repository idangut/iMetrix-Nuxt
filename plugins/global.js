import Vue from 'vue'
import Header from '~/components/header.vue'
import Sidebar from '~/components/sidebar.vue'
import Restore from '~/components/restore.vue'
import Confirm from '~/components/confirm.vue'
import Loader from '~/components/loader.vue'
import Datepicker from '~/components/datepicker.vue'
import User from '~/components/user.vue'
import Campaign from '~/components/campaign.vue'
import CurrentCampaign from '~/components/current-campaign.vue'
import Client from '~/components/client.vue'
import UserAdmin from '~/components/user-admin.vue'

import axios from 'axios'
import { api, http } from './api'
import qs from 'querystring'

Vue.component('headerComponent', Header)
Vue.component('sidebar', Sidebar)
Vue.component('restore', Restore)
Vue.component('userComponent', User)
Vue.component('userAdminComponent', UserAdmin)
Vue.component('campaignComponent', Campaign)
Vue.component('currentCampaign', CurrentCampaign)
Vue.component('confirm', Confirm)
Vue.component('loaderComponent', Loader)
Vue.component('v-datepicker', Datepicker)
Vue.component('clientComponent', Client)

import lodash from 'lodash'
import VueLodash from 'vue-lodash'
import VueGravatar from 'vue-gravatar'
import VueLocalForage from 'vue-localforage'

Vue.use(VueLodash, { lodash })
Vue.component('v-gravatar', VueGravatar)
Vue.use(VueLocalForage)

Vue.prototype.$axios = axios
Vue.prototype.$api = api
Vue.prototype.$qs = qs

import millify from 'millify'
Vue.filter('millify', (number, precision = 2) => {
    console.log(precision)
    return millify(number, {
        precision,
        lowerCase: true
    })
})

import gravatar from 'vue-gravatar'
Vue.component('v-gravatar', gravatar)

import VueMoment from 'vue-moment'
Vue.use(VueMoment)

if (process.browser) {

    const VueCarousel = require('vue-carousel')
    Vue.use(VueCarousel.default)
}

import VueMq from 'vue-mq'
Vue.use(VueMq, {
    breakpoints: {
        sm: 576,
        md: 768,
        lg: 992,
        xl: Infinity
    },
    defaultBreakpoint: 'sm'
})

export default ({ app }, inject) => {
    inject('http', http)
    inject('axios', axios)
}