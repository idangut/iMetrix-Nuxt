<template>
<div class="landing">
    <div class="home">
        <div class="singlePost">
            <div class="singlePostWrapper">
                <img src="https://wallpaperaccess.com/full/504543.jpg" alt="" class="singlePostImg" />
                <h1 class="singlePostTitle">
                    Lorem ipsum dolor sit amet test
                    <div class="singlePostEdit">
                        <i class="singlePostIcon far fa-edit"></i>
                        <i class="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1> 
                <div class="singlePostInfo">
                    <span class="singlePostAuthor">Author: <b>iMetrix</b></span>
                    <span class="singlePostDate">1 Hour Ago</span>
                </div> 
                <p class="singlePostDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Nostrum expedita modi error accusamus eius cum autem cupiditate voluptatum, 
                    alias dolor dignissimos, aspernatur tempora totam reprehenderit soluta cumque 
                    commodi nemo tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Nostrum expedita modi error accusamus eius cum autem cupiditate voluptatum, 
                    alias dolor dignissimos, aspernatur tempora totam reprehenderit soluta cumque 
                    commodi nemo tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Nostrum expedita modi error accusamus eius cum autem cupiditate voluptatum, 
                    alias dolor dignissimos, aspernatur tempora totam reprehenderit soluta cumque 
                    commodi nemo tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Nostrum expedita modi error accusamus eius cum autem cupiditate voluptatum, 
                    alias dolor dignissimos, aspernatur tempora totam reprehenderit soluta cumque 
                    commodi nemo tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Nostrum expedita modi error accusamus eius cum autem cupiditate voluptatum, 
                    alias dolor dignissimos, aspernatur tempora totam reprehenderit soluta cumque 
                    commodi nemo tempore.</p>         
            </div>
            </div>
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