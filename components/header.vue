<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-absolute navbar-transparent" v-if="title.length">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <div class="navbar-minimize d-inline">
              <button class="minimize-sidebar btn btn-link btn-just-icon" rel="tooltip" data-original-title="Sidebar toggle" data-placement="right">
                <i class="tim-icons icon-align-center visible-on-sidebar-regular"></i>
                <i class="tim-icons icon-bullet-list-67 visible-on-sidebar-mini"></i>
              </button>
            </div>
            <div class="navbar-toggle d-inline">
              <button type="button" class="navbar-toggler">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <img style="max-height: 40px;" src="~assets/imgl/7-logotipo-iMetrix-footer.png" />
            <img v-if="Object.keys(clientd).length" class="ml-3" style="max-height: 40px;" :src="clientd.url">
            <b-navbar-brand href="javascript:void(0)">{{ title }}</b-navbar-brand>
            <button style="position:absolute;right:10px;" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-bar navbar-kebab"></span>
              <span class="navbar-toggler-bar navbar-kebab"></span>
              <span class="navbar-toggler-bar navbar-kebab"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="navigation">
            <ul class="navbar-nav ml-auto">
              <li class="dropdown nav-item">
                <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                  <div class="photo">
                    <img v-if="clientd.url" :src="clientd.url" />
                    <img v-else src="~assets/img/default-avatar.png" />
                  </div>
                  <b class="caret d-none d-lg-block d-xl-block"></b>
                  <p class="d-lg-none">
                    Cerrar sesión
                  </p>
                </a>
                <ul class="dropdown-menu dropdown-navbar">
                  <li class="nav-link">
                    <router-link :to="(Object.keys(clientd).length ? '/c/' + clientd.alias : '/admin') + '/profile'" class="nav-item dropdown-item">Perfil</router-link>
                  </li>
                  <li class="nav-link">
                    <b-link @click="logout" class="primary-text nav-item dropdown-item">Cerrar sesión</b-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default{
      props: {
        title: {
          type: String,
          default: ''
        },
        client: {
          type: Boolean,
          default: false
        }
      },
      data(){
        return {
          routeMeta: {
            admin: false,
            client: false
          },
          transparentDemo    : false,
          fixedTop           : false,
          transparent        : false,
          navbar_initialized : false,
          sidebar_mini_active: false,
          navbar_menu_visible: 0,
        }
      },
      computed:{
        ...mapState({clientd: 'client'})
      },
      mounted(){

        if(Object.keys(this.clientd).length){
          this.routeMeta.client = true
        }

        this.sidebar()
      },
      methods: {
        debounce(func, wait, immediate){

          let timeout
          return function() {

            let context = this, args = arguments
            clearTimeout(timeout)
            timeout = setTimeout(function() {
              timeout = null;
              if (!immediate) func.apply(context, args)
            }, wait)

            if (immediate && !timeout) func.apply(context, args)
          }
        },
        // Cerrar sesión
        logout(){
          
          this.$nuxt.$loading.start()
          this.$api(this, (xhr) => {
              xhr.delete('/login').then((r) => {

                  let data = r.data
                  if(data.response){

                      this.$nuxt.$loading.finish()
                      let post = {
                          token : data.data,
                          key   : '_s_token'
                      }

                      let isclient = Object.keys(this.clientd).length
                      if(isclient){
                        post = {
                          token  : data.data,
                          key    : '_c_token',
                          client : this.clientd.uuid
                        }
                      }

                      this.$axios.post('/_d_token', this.$qs.stringify(post)).then(async (r) => {

                          await this.$setItem('campaign_' + this.clientd.uuid, '')
                          if(r.data.response){
                              return this.$router.push({ path : '/login' })
                          }
                      })
                  }
                  
              }).catch(() => {
                  this.$nuxt.$loading.finish()
                  this.$root.$emit('networkError')
              })
          })
        },

        sidebar(){

          let $html = $('html')
          let $navbar_minimize_fixed = $('.navbar-minimize-fixed')
          let $collapse = $('.collapse')
          let $navbar = $('.navbar')
          let $full_screen_map = $('.full-screen-map')
          let $navbar_color = $('.navbar[color-on-scroll]')
          let $this = this

          if($html.hasClass('nav-open')){
            $('.navbar-toggle').trigger('click')
          }
          
          let seq = 0, delays = 80, durations = 500
          let seq2 = 0, delays2 = 80, durations2 = 500

          let isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

          if(isWindows){

            if ($('.main-panel').length != 0) {
              let ps = new PerfectScrollbar('.main-panel', {
                wheelSpeed        : 2,
                wheelPropagation  : true,
                minScrollbarLength: 20,
                suppressScrollX: true
              })
            }

            if ($('.sidebar .sidebar-wrapper').length != 0) {
              let ps1 = new PerfectScrollbar('.sidebar .sidebar-wrapper')
              $('.table-responsive').each(function() {
                let ps2 = new PerfectScrollbar($(this)[0])
              })
            }

            $html.addClass('perfect-scrollbar-on')
          } else {
            $html.addClass('perfect-scrollbar-off')
          }

          $(document).ready(function() {

            let scroll_start = 0
            let startchange = $('.row')
            let offset = startchange.offset()
            let scrollElement = navigator.platform.indexOf('Win') > -1 ? $(".ps") : $(window)
            scrollElement.scroll(function() {

              scroll_start = $(this).scrollTop()

              if (scroll_start > 50) {
                $navbar_minimize_fixed.css('opacity', '1')
              } else {
                $navbar_minimize_fixed.css('opacity', '0')
              }
            })

            // hide the siblings opened collapse
            $collapse.on('show.bs.collapse', function() {
              $(this).parent().siblings().children('.collapse').each(function() {
                $(this).collapse('hide')
              })
            })

            $this.initMinimizeSidebar()

            let scroll_distance = $navbar_color.attr('color-on-scroll') || 500

            // Check if we have the class "navbar-color-on-scroll" then add the function to remove the class "navbar-transparent" so it will transform to a plain color.
            if ($navbar_color.length != 0) {
              $this.checkScrollForTransparentNavbar()
              $(window).on('scroll', $this.checkScrollForTransparentNavbar)
            }

            if ($full_screen_map.length == 0 && $('.bd-docs').length == 0) {

              // On click navbar-collapse the menu will be white not transparent
              $('.navbar-toggler').click(function() {
                $collapse.on('show.bs.collapse', function() {
                  $(this).closest('.navbar').removeClass('navbar-transparent').addClass('bg-active')
                }).on('hide.bs.collapse', function() {
                  $(this).closest('.navbar').addClass('navbar-transparent').removeClass('bg-active')
                });
                $navbar.css('transition', '')
              })
            }

            $navbar.css({
              'top': '0',
              'transition': 'all .3s linear'
            })
          })

          $(document).on('click', '.navbar-toggle', function() {
            
            let $toggle = $(this);

            if ($this.navbar_menu_visible == 1) {

              $html.removeClass('nav-open')
              $this.navbar_menu_visible = 0
              setTimeout(function() {
                $toggle.removeClass('toggled')
                $('.bodyClick').remove()
              }, 100)

            } else {

              setTimeout(function() {
                $toggle.addClass('toggled');
              }, 100)

              let div = '<div class="bodyClick"></div>'
              $(div).appendTo('body').click(function() {
                $html.removeClass('nav-open')
                $this.navbar_menu_visible = 0
                setTimeout(function() {
                  $toggle.removeClass('toggled')
                  $('.bodyClick').remove()
                }, 100)
              })

              $html.addClass('nav-open')
              $this.navbar_menu_visible = 1
            }
          })

          $(window).resize(function() {

            // reset the seq for charts drawing animations
            seq = seq2 = 0

            if ($full_screen_map.length == 0 && $('.bd-docs').length == 0) {
              let isExpanded = $navbar.find('[data-toggle="collapse"]').attr("aria-expanded")
              if ($navbar.hasClass('bg-active') && $(window).width() > 991) {
                $navbar.removeClass('bg-active').addClass('navbar-transparent')
              } else if ($navbar.hasClass('navbar-transparent') && $(window).width() < 991 && isExpanded != "false") {
                $navbar.addClass('bg-active').removeClass('navbar-transparent')
              }
            }
          })
        },
        initMinimizeSidebar(){
          
          let $this = this
          let $body = $('body')

          if ($('.sidebar-mini').length != 0) {
            $this.sidebar_mini_active = true
          }

          $('.minimize-sidebar').click(function() {

            if ($this.sidebar_mini_active == true) {
              $body.removeClass('sidebar-mini')
              $this.sidebar_mini_active = false
            } else {
              $body.addClass('sidebar-mini')
              $this.sidebar_mini_active = true
            }

            // we simulate the window Resize so the charts will get updated in realtime.
            let simulateWindowResize = setInterval(function() {
              window.dispatchEvent(new Event('resize'))
            }, 180)

            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function() {
              clearInterval(simulateWindowResize)
            }, 1000)
          })
        },
        checkScrollForTransparentNavbar(){
          this.debounce(function() {
            if ($(document).scrollTop() > scroll_distance) {
              if (transparent) {
                transparent = false
                $('.navbar[color-on-scroll]').removeClass('navbar-transparent')
              }
            } else {
              if (!transparent) {
                transparent = true
                $('.navbar[color-on-scroll]').addClass('navbar-transparent')
              }
            }
          }, 17)
        }
      }
    }
</script>