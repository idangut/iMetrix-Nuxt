<template>
    <div>
        <div class="navbar-minimize-fixed">
        <button class="minimize-sidebar btn btn-link btn-just-icon">
          <i class="tim-icons icon-align-center visible-on-sidebar-regular text-muted"></i>
          <i class="tim-icons icon-bullet-list-67 visible-on-sidebar-mini text-muted"></i>
        </button>
      </div>
      <div class="sidebar">
        <div class="sidebar-wrapper">
          <ul class="nav">
            <template v-if="profile.hasOwnProperty('campaign')">
              <template v-for="(board, i) in profile.campaign.boards">
                <li :key="'board'+i">
                  <b-link :to="baseurl + 'board/' + board.uuid">
                    <i :class="'tim-icons '+board.icon"></i>
                    <p>{{ board.name }}</p>
                  </b-link>
                </li>
              </template>
            </template>
            <template v-for="(link, i) in links">
              <li v-if="link.profile.includes(parseInt(profile.profile))" :key="'link'+i">
                <b-link :to="link.path">
                  <i :class="'tim-icons icon-'+link.icon"></i>
                  <p>{{ link.title }}</p>
                </b-link>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed:{
      ...mapState(['profile', 'client']),
      baseurl() {
          return '/c/' + this.client.alias + '/'
      },
      links(){

        return [
            {
              icon   : 'single-02',
              path   : this.baseurl + 'profile',
              title  : 'Perfil',
              profile: [1, 2, 4]
            },
            {
              icon   : 'single-02',
              path   : '/admin/profile',
              title  : 'Perfil',
              profile: [0, 3]
            },
            {
              icon   : 'single-02',
              path   : this.baseurl + 'users',
              title  : 'Usuarios',
              profile: [1, 4]
            },
            {
              icon   : 'single-02',
              path   : '/admin/users',
              title  : 'Usuarios',
              profile: [0, 3]
            },
            {
              icon  : 'badge',
              path  : '/admin/clients',
              title :'Clientes',
              profile: [0, 3]
            },
            {
              icon  : 'tag',
              path  : this.baseurl + 'campaign',
              title :'Campañas',
              profile: [1, 4]
            }
          ]
      }
    }
}
</script>