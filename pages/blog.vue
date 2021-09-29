<template>
    <div class="landing">
        <div class="navbar-shadow">
            <nav class="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent" style="top: 0px;">
                <div class="navbar-wrapper">
                    <router-link to="/" class="navbar-brand">
                    <img class="logo" src="~assets/imgi/iMetrix_logoweb_positivo.png" />
                    </router-link>
                </div>
                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navigation" aria-expanded="false" aria-label="Navegación">
                    <span class="navbar-toggler-bar navbar-kebab"></span>
                    <span class="navbar-toggler-bar navbar-kebab"></span>
                    <span class="navbar-toggler-bar navbar-kebab"></span>
                </button>
                <div class="navbar-collapse collapse" id="navigation">
                    <ul class="navbar-nav ml-auto">
                  
               
                     <router-link tag="li" to="/singlePost" class="nav-item">
                        <a class="nav-link">Single Post</a>
                    </router-link>
                  
                    <li class="nav-item social-icons">
                        <i class="fab fa-linkedin-in" @click="openLk()"></i>
                        <i class="fab fa-youtube" @click="openYt()"></i>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="header">
            <div class="headerTitles">
                <span class="headerTitleSm">iMETRIX</span>
                <span class="headerTitleLg">Blog</span>
            </div>
            <img class="headerImg" src="~assets/imgi/2-banner-principal.jpg"/>
        </div>
        <div class="home">
            <div class="posts">
                <div class="post">
                    <img class="postImg" src="https://www.connectcounsellingsociety.ca/wp-content/uploads/2015/08/4.jpg" alt="" />
                    <div class="postInfo">
                            <div class="postCats">
                                <span class="postCat">Music</span>
                                <span class="postCat">Life</span>
                            </div>
                                    <span class="postTitle" @click="verPost()">Titulo</span>
                          
                                <span class="postDate">1 Hour Ago</span>
                    </div>
                                <p class="postDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero enim, unde quod maxime ducimus quis voluptatum, dicta nobis, quo animi veniam rerum molestiae eum. Eveniet illum numquam suscipit repellendus laborum?</p>
                </div>
                  <div class="post">
                    <img class="postImg" src="https://www.connectcounsellingsociety.ca/wp-content/uploads/2015/08/4.jpg" alt="" />
                    <div class="postInfo">
                            <div class="postCats">
                                <span class="postCat">Music</span>
                                <span class="postCat">Life</span>
                            </div>
                                <span class="postTitle">Lorem ipsum dolor sit amet</span> 
                                <span class="postDate">1 Hour Ago</span>
                    </div>
                                <p class="postDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero enim, unde quod maxime ducimus quis voluptatum, dicta nobis, quo animi veniam rerum molestiae eum. Eveniet illum numquam suscipit repellendus laborum?</p>
                </div>
                  <div class="post">
                    <img class="postImg" src="https://www.connectcounsellingsociety.ca/wp-content/uploads/2015/08/4.jpg" alt="" />
                    <div class="postInfo">
                            <div class="postCats">
                                <span class="postCat">Music</span>
                                <span class="postCat">Life</span>
                            </div>
                                <span class="postTitle">Lorem ipsum dolor sit amet</span> 
                                <span class="postDate">1 Hour Ago</span>
                    </div>
                                <p class="postDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero enim, unde quod maxime ducimus quis voluptatum, dicta nobis, quo animi veniam rerum molestiae eum. Eveniet illum numquam suscipit repellendus laborum?</p>
                </div>
                  <div class="post">
                    <img class="postImg" src="https://www.connectcounsellingsociety.ca/wp-content/uploads/2015/08/4.jpg" alt="" />
                    <div class="postInfo">
                            <div class="postCats">
                                <span class="postCat">Music</span>
                                <span class="postCat">Life</span>
                            </div>
                                <span class="postTitle">Lorem ipsum dolor sit amet</span> 
                                <span class="postDate">1 Hour Ago</span>
                    </div>
                                <p class="postDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero enim, unde quod maxime ducimus quis voluptatum, dicta nobis, quo animi veniam rerum molestiae eum. Eveniet illum numquam suscipit repellendus laborum?</p>
                </div>
                  <div class="post">
                    <img class="postImg" src="https://www.connectcounsellingsociety.ca/wp-content/uploads/2015/08/4.jpg" alt="" />
                    <div class="postInfo">
                            <div class="postCats">
                                <span class="postCat">Music</span>
                                <span class="postCat">Life</span>
                            </div>
                                <span class="postTitle">Lorem ipsum dolor sit amet</span> 
                                <span class="postDate">1 Hour Ago</span>
                    </div>
                            <p class="postDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero enim, unde quod maxime ducimus quis voluptatum, dicta nobis, quo animi veniam rerum molestiae eum. Eveniet illum numquam suscipit repellendus laborum?</p>
                </div>
                <div class="post">
                    <img class="postImg" src="https://www.connectcounsellingsociety.ca/wp-content/uploads/2015/08/4.jpg" alt="" />
                    <div class="postInfo">
                            <div class="postCats">
                                <span class="postCat">Music</span>
                                <span class="postCat">Life</span>
                            </div>
                                <span class="postTitle">Lorem ipsum dolor sit amet</span> 
                                <span class="postDate">1 Hour Ago</span>
                    </div>
                            <p class="postDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero enim, unde quod maxime ducimus quis voluptatum, dicta nobis, quo animi veniam rerum molestiae eum. Eveniet illum numquam suscipit repellendus laborum?</p>
                </div>
            </div>
            <!--Side Bar -->
            <div class="sidebar2">
            <div class="sidebarItem2">
                <span class="sidebarTitle2">ABOUT ME</span>
                <img src="~assets/imgi/3-solucion-voice.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ut sapiente voluptatum, deleniti suscipit, est nesciunt iste enim perferendis voluptas error?</p>
            </div>
            <div class="sidebarItem2">
                <span class="sidebarTitle2">CATEGORIES</span>
                <ul class="sidebarList2">
                    <li class="sidebarListItem2">Life</li>
                    <li class="sidebarListItem2">Music</li>
                    <li class="sidebarListItem2">Style</li>
                    <li class="sidebarListItem2">Sport</li>
                    <li class="sidebarListItem2">Tech</li>
                    <li class="sidebarListItem2">Cinema</li>
                </ul>
            </div>
            <div class="sidebarItem2">
                <span class="sidebarTitle2">FOLLOW US</span>
                <div class="sidebarSocial2">
                    <i class="sidebarIcon2 fab fa-facebook-square"></i>
                    <i class="sidebarIcon2 fab fa-linkedin"></i>
                    <i class="sidebarIcon2 fab fa-youtube"></i>
                </div>
            </div>
        </div>
        </div>
        <div class="content">
        <footer class="footer">
                    <div class="home-section mx-auto">
                        <div class="px-4 row align-items-end justify-content-between">
                            <div class="col-12 col-lg-4 social-block text-left pt-5">
                                <img class="logo-footer" src="~assets/imgl/7-logotipo-iMetrix-footer.png">
                                <h3 class="mt-5 mb-0">REDES SOCIALES</h3>
                                <p class="mt-4 mb-3">Encuéntrenos en las<br /> siguientes plataformas</p>
                                <div class="social-icons-footer d-flex align-items-center mt-4">
                                    <i class="fab fa-linkedin-in" @click="openLk()"></i>
                                    <i class="fab fa-youtube" @click="openYt()"></i>
                                </div>
                            </div>
                            <div class="col-12 col-lg-8 mt-2 row align-items-stretch">
                                <div class="col-12 col-sm-4 mt-4 text-left">
                                    <h4 class="mb-0">Partner</h4>
                                    <img class="mt-1 ibm-logo" src="~assets/imgi/7-partner-footer.png">
                                </div>
                                <div class="col-12 col-sm-4 mt-4 text-left">
                                    <h4 class="mb-0">Miembros</h4>
                                    <img class="mt-1 ibm-logo" src="~assets/imgi/MiembroANDI.png">
                                    <small class="d-block"></small>
                                </div>
                                <div class="col-12 col-sm-4 mt-4 text-left address-block">
                                    <b>iMetrix SAS</b>
                                    <span>Cra 7 #73-55 piso 8</span>
                                    <span>Bogota, Colombia</span>
                                    <span style="cursor:pointer;" @click="openWp()">WA +57 316 5776309</span>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="copyright text-center">
                            <span>Copyright © 2020 <b>iMetrix SAS</b></span>
                        </div>
                    </div>
                </footer>
            </div>
    </div>
</template>
<script>
import auth from '~/mixins/auth'

export default {
    methods:{
        verPost(){
            window.open('https://www.google.com/','_self')
        },
         openLk(){
            window.open('https://www.linkedin.com/company/imetrix-sas/?viewAsMember=true', '_blank')
        },

        openYt(){
            window.open('https://www.youtube.com/channel/UCU5NvxslVh531rcSzy2VIZg', '_blank')
        }
    },
     mixins: [auth]
}
</script>


