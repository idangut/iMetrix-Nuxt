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
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">iMetrix</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#feature">Soluciones</a>
                    </li>
                     <router-link tag="li" to="/blog" class="nav-item">
                        <a class="nav-link">Blog</a>
                    </router-link>
                    <router-link tag="li" to="/login" class="nav-item">
                        <i class="far fa-user-circle"></i>
                        <a class="nav-link">Iniciar sesión</a>
                    </router-link>
                    <li class="nav-item social-icons">
                        <i class="fab fa-linkedin-in" @click="openLk()"></i>
                        <i class="fab fa-youtube" @click="openYt()"></i>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div>
            <div class="content" fluid>
                <div class="home-principal mx-auto pt-5 text-center">
                    <div class="home-section mt-5 row d-flex justify-content-center align-items-center">
                        <div style="max-width:450px;" class="col-12 col-sm-12 block-text text-left">
                            <!--<h1>Voice to insight</h1>-->
                            <h1 id="typewriter"></h1>
                            <p class="mb-4">Somos una compañía de analítica y estrategia de datos; usamos la inteligencia artificial y big data para crear soluciones de valor para la empresas.</p>
                            <b-button pill to="/login">Empezar</b-button>
                            <b-button pill class="white" href="#contact">Conocer más</b-button>
                        </div>
                        <div style="max-width:400px;" class="col-12 col-sm-12 block-text"></div>
                    </div>
                </div>
                <div class="home-solution" id="solution">
                    <div class="border-solution">
                        <svg class="overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                            <polygon points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                    <div class="home-section home-opts mx-auto pt-5 text-center">
                        <div style="margin-top: -130px;" class="row justify-content-around">
                            <div class="col-12 col-sm-12 col-md-6 col-lg-4 mt-4">
                                <div>
                                    <img src="~assets/imgi/3-solucion-voice.jpg" />
                                    <blockquote>
                                        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95">
                                            <polygon points="-30,95 583,95 583,65"></polygon>
                                        </svg>
                                        <img class="icon" src="~assets/imgi/3-solucion-icon-voice.png" />
                                        <h1>iMetrix Speech Analytics</h1>
                                        <h2>Analítica de voz y texto</h2>
                                    </blockquote>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-4 mt-4">
                                <div>
                                    <img src="~assets/imgi/3-solucion-text.jpg" />
                                    <blockquote>
                                        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95">
                                            <polygon points="-30,95 583,95 583,65"></polygon>
                                        </svg>
                                        <img class="icon" src="~assets/imgi/3-solucion-icon-text.png" />
                                        <h1>Customer Insights</h1>
                                        <h2>Analítica de negocio</h2>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="home-contact-parent" id="contact">
                    <div class="home-section home-contact mx-auto pt-4 mb-5 text-center">
                        <img class="text-left" src="~assets/imgi/4-icon-message-form.png" />
                        <h3 class="text-primary text-center">Contáctenos y obtenga la máxima eficiencia</h3>
                        <b-form class="mt-2 row px-4">
                            <div class="col-12 col-sm-6">
                                <b-form-input class="my-3" v-model="contact.name" placeholder="Nombre"></b-form-input>
                            </div>
                            <div class="col-12 col-sm-6">
                                <b-form-input class="my-3" v-model="contact.company" placeholder="Empresa"></b-form-input>
                            </div>
                            <div class="col-12 col-sm-6">
                                <b-form-input class="my-3" v-model="contact.phone" placeholder="Teléfono"></b-form-input>
                            </div>
                            <div class="col-12 col-sm-6">
                                <b-form-input class="my-3" v-model="contact.email" placeholder="Email"></b-form-input>
                            </div>
                            <div class="col-12 col-sm-12">
                                <b-form-textarea class="my-3" v-model="contact.message" rows="3" placeholder="Mensaje"></b-form-textarea>
                            </div>
                            <div class="col-12">
                                <b-form-checkbox class="text-left mt-2" v-model="contact.terms"><span>Acepto las <a @click.prevent.stop="$bvModal.show('policy')">políticas de privacidad</a> y <a @click.prevent.stop="$bvModal.show('habeas')">tratamiendo de datos</a>.</span></b-form-checkbox>
                                <b-button pill class="mt-5 yellow" :disabled="loadContact" @click="send">Enviar</b-button>
                            </div>
                        </b-form>
                    </div>
                </div>
                <div class="home-waves" id="feature">
                    <div class="home-section home-feature mx-auto pt-5 text-center">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-12 col-md-6 text-left mr-5">
                                <img class="icon" src="~assets/imgi/3-solucion-icon-voice.png" />
                                <h2 class="mt-3">iMetrix Speech <br /> Analytics - iSA</h2>
                                <p><span>iSA</span> transcribe llamadas e interpreta conversaciones habladas y chats en forma masiva y en poco tiempo; permite automatizar el proceso de auditoria de calidad de las reglas comerciales de sus agentes con los clientes.</p>
                                <p class="mt-3">Es una solución para empresas con negociaciones telefónicas grabadas, televentas, call centers o centros de contacto.</p>
                            </div>
                            <div class="col-12 col-md-6">
                                <img src="~assets/imgi/5-speech-analytics-vector.png" />
                            </div>
                        </div>
                    </div>
                    <div class="home-section home-feature mx-auto pt-4 text-center">
                        <img src="~assets/imgi/5-speech-analytics-titulo.png" />
                        <div class="feature-card row d-flex">
                            <div class="title col-12 col-sm-12 col-md-4 col-lg-3">
                                <span>1</span>
                                <h3>Recolección</h3>
                                <p>Centros de contacto generan archivos de voz y texto y guardan conversaciones con sus clientes</p>
                            </div>
                            <div class="col-12 col-sm-12 col-md-8 col-lg-9 row">
                                <img class="col-12 col-sm-6 col-md-3" src="~assets/imgi/5-speech-analytics-icon-1.png" />
                                <img class="col-12 col-sm-6 col-md-3" src="~assets/imgi/5-speech-analytics-icon-1.png" />
                                <img class="col-12 col-sm-6 col-md-3" src="~assets/imgi/5-speech-analytics-icon-1.png" />
                                <img class="col-12 col-sm-6 col-md-3" src="~assets/imgi/5-speech-analytics-icon-1.png" />
                            </div>
                        </div>
                        <div class="feature-card row d-flex">
                            <div class="title soft-gray col-12 col-sm-12 col-md-4 col-lg-3">
                                <span>2</span>
                                <h3>Procesamiento</h3>
                                <p><b class="yellow-text">ISA</b> procesa el 100% de las llamadas e identifica los parámetros de voz y el contenido hablado por los agentes con sus clientes</p>
                            </div>
                            <div class="card-content soft-gray col-12 col-sm-12 col-md-8 col-lg-9 row">
                                <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <img src="~assets/imgi/5-speech-analytics-icon-2.png" />
                                    <h4>Conversaciones de Voz</h4>
                                    <p>Audios de llamadas guardadas con autorización del cliente</p>
                                </div>
                                <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <img src="~assets/imgi/5-speech-analytics-icon-3.png" />
                                    <h4><b>iSA</b> Text to Voice</h4>
                                    <p>ISA convierte todas las llamadas de voz a texto</p>
                                </div>
                                <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <img src="~assets/imgi/5-speech-analytics-icon-4.png" />
                                    <h4>Reglas Comerciales</h4>
                                    <p>Cuenta con un algoritmo de comparación para la comprobación de cada regla comercial analizada</p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-card row d-flex">
                            <div class="title gray col-12 col-sm-12 col-md-4 col-lg-3">
                                <span>3</span>
                                <h3>Análisis</h3>
                                <p>Cada Regla comercial genera una métrica analizable y dentro del modelo de <b class="yellow-text">ISA</b></p>
                            </div>
                            <div class="card-content text-center col-12 col-sm-12 col-md-8 col-lg-9 row">
                                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <img src="~assets/imgi/5-speech-analytics-icon-5.png" />
                                    <h4 class="mb-0">Identificación</h4>
                                    <span>del Gestor o Analista</span>
                                </div>
                                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <img src="~assets/imgi/5-speech-analytics-icon-6.png" />
                                    <h4 class="mb-0">Tipo de Operación</h4>
                                    <span>Compra / Venta</span>
                                </div>
                                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <img src="~assets/imgi/5-speech-analytics-icon-7.png" />
                                    <h4 class="mb-0">Cantidad</h4>
                                    <span>Valor Nominal</span>
                                </div>
                                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <img src="~assets/imgi/5-speech-analytics-icon-8.png" />
                                    <h4 class="mb-0">Tipo de Orden</h4>
                                    <span>Límite / Condicional / Mercado</span>
                                </div>
                            </div>
                        </div>
                        <div class="feature-card row d-flex">
                            <div class="title yellow col-12 col-sm-12 col-md-4 col-lg-3">
                                <span>4</span>
                                <h3>Resultados</h3>
                                <p><b class="gray-text">ISA</b> verifica cada llamada convertida en texto, identifica las reglas comerciales y perfilamiento básico del agente</p>
                            </div>
                            <div class="card-content yellow text-center col-12 col-sm-12 col-md-8 col-lg-9 row">
                                <div class="col-12 col-sm-6 col-md-4">
                                    <img src="~assets/imgi/5-speech-analytics-icon-9.png" />
                                    <h4>Emociones</h4>
                                </div>
                                <div class="col-12 col-sm-6 col-md-4">
                                    <img src="~assets/imgi/5-speech-analytics-icon-10.png" />
                                    <h4>Patrones de Comportamiento</h4>
                                </div>
                                <div class="col-12 col-sm-6 col-md-4">
                                    <img src="~assets/imgi/5-speech-analytics-icon-11.png" />
                                    <h4>Predicción de Riesgo</h4>
                                </div>
                                <div class="col-12 col-sm-6 col-md-4">
                                    <img src="~assets/imgi/5-speech-analytics-icon-12.png" />
                                    <h4>Problemas en el servicio</h4>
                                </div>
                                <div class="col-12 col-sm-6 col-md-4">
                                    <img src="~assets/imgi/5-speech-analytics-icon-13.png" />
                                    <h4>Preferencias del cliente</h4>
                                </div>
                                <div class="col-12 col-sm-6 col-md-4">
                                    <img src="~assets/imgi/5-speech-analytics-icon-14.png" />
                                    <h4>Mensajes de marca</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="home-feature-black">
                    <div class="home-section home-feature mx-auto pt-4 text-center">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-12 col-md-6 text-left mr-5">
                                <img class="icon" src="~assets/imgi/3-solucion-icon-text.png" />
                                <h2 class="mt-3">ISA Customer Insights:</h2>
                                <p><span>iSA</span> Customer Insights potencia los análisis de ISA extrayendo información valiosa para monitorear y mejorar la experiencia de sus clientes, en aspectos relacionados con la marca, el producto, problemas en el servicio, objeciones en la venta, patrones de comportamiento o fraude, emociones, entre otros</p>
                            </div>
                            <div class="col-12 col-md-6">
                                <img src="~assets/imgi/6-text-analytics-vector.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="footer">
                    <div class="border-footer">
                        <svg class="overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                            <polygon points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                    <div class="home-section mx-auto">
                        <div class="home-section home-client text-center mx-auto">
                            <h3 class="mb-2">Nuestros clientes</h3>
                            <div class="px-5 mt-5">
                                <carousel :centerMode="true" :autoplay="true" :loop="true" :perPage="($mq == 'sm' ? 1 : ($mq == 'md' ? 2 : 4))" :navigationEnabled="true" :paginationEnabled="false" navigationNextLabel="<i class='fa fa-chevron-right fa-4x' aria-hidden='true'></i>"
                                navigationPrevLabel="<i class='fa fa-chevron-left fa-4x' aria-hidden='true'></i>">
                                    <slide>
                                        <img src="~assets/imgi/igs.png" />
                                    </slide>
                                    <slide>
                                        <img src="~assets/imgi/7-cliente-mente-logo_footer.png" />
                                    </slide>
                                    <slide>
                                        <img src="~assets/imgi/7-cliente-ultraserfinco-logo_footer.png" />
                                    </slide>
                                    <slide>
                                        <img src="~assets/imgi/IDENTIANPNG.png" />
                                    </slide>
                                    <slide>
                                        <img src="~assets/imgi/7-cliente-mente-logo_footer.png" />
                                    </slide>
                                    <slide>
                                        <img src="~assets/imgi/7-cliente-ultraserfinco-logo_footer.png" />
                                    </slide>
                                    <slide>
                                        <img src="~assets/imgi/IDENTIANPNG.png" />
                                    </slide>
                                    <slide>
                                        <img src="~assets/imgi/7-cliente-mente-logo_footer.png" />
                                    </slide>
                                    <slide>
                                        <img src="~assets/imgi/7-cliente-ultraserfinco-logo_footer.png" />
                                    </slide>
                                </carousel>
                            </div>
                        </div>
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
        <b-modal dialog-class="modal-dialog-scrollable modal-dialog-centered" id="policy" ok-only ok-title="ACEPTAR" title-tag="h4" title="Política de Privacidad" centered>
            <p>La presente Política de Privacidad establece los términos en que IMETRIX SAS usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento.</p> 
            <br />
            <b>Información que es recogida</b>
            <p>Nuestro sitio web podrá recoger información personal, por ejemplo: nombre, información de contacto como su dirección de correo. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún servicio o facturación.</p>
            <br />
            <b>Uso de la información recogida</b>
            <p>Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, y dar a conocer nuestros productos y servicios.  Es posible que sean enviados correos electrónicos a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.</p>
            <p>IMETRIX SAS está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.</p>
            <br />
            <b>Cookies</b>
            <p>Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su equipo, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web.</p>
            <p>Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente. Usted puede eliminar las cookies.</p>
            <br />
            <b>Enlaces a Terceros</b>
            <p>Este sitio web no contiene enlaces a otros sitios. Una vez que usted abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros.</p>
            <br />
            <b>Control de su información personal</b>
            <p>En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web. Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.</p>
            <p>IMETRIX SAS se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento, por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.</p>
        </b-modal>
        <b-modal id="habeas" dialog-class="modal-dialog-scrollable modal-dialog-centered" ok-only ok-title="ACEPTAR" title-tag="h4" title="Tratamiento de Datos">
            <b>La protección de sus datos es fundamental para nosotros</b>
            <br /><br />
            <p>En cumplimiento de los previsto en los artículos 15 y 20 de la Constitución Política y conforme a la Ley 1581 de 2012 y al Decreto 1377 de 2013, IMETRIX SAS,  en adelante “IMETRIX”, adopta la siguiente política para tratamiento de datos personales y se considerada como Responsable y/o Encargada del tratamiento de datos personales que almacena y recolecta de sus usuarios en desarrollo de sus actividades comerciales, de ventas de sus productos y servicios; y requiere obtener su autorización para continuar con el tratamiento de sus datos personales conforme a la política de privacidad las cuales están disponibles en www.imetrix.com.co</p>
            <br />
            <p>Esta información suministrada podrá ser procesada, recolectada, almacenada, usada, circulada, suprimida, actualizada, transmitida y/o transferida de acuerdo y conforme a nuestras políticas de tratamiento y con el fin de continuar desarrollando nuestros servicios para mantenerlo informado acerca nuestros productos y servicios.</p>
            <br />
            <p>IMETRIX, en los términos dispuestos por el artículo 10 del decreto 1377 de 2013 queda autorizada de manera expresa e inequívoca para mantener y manejar su información, a no ser que usted le manifieste lo contrario de manera directa, expresa o inequívoca,  por escrito, a la dirección de correo electrónico dispuesta para tal efecto soporte@imetrix.com.co o llamando a la línea de atención 57 1 3138336.</p>
        </b-modal>
    </div>
</template>

<script>

import auth from '~/mixins/auth'
import Typewriter from 'typewriter-effect/dist/core'

export default {
    
    head: {
    title: 'iMetrix - speech analytics',
    meta: [
      {
        hid: 'description', name: 'description', content: 'iSA interpreta conversaciones habladas en forma masiva y en poco tiempo, extrayendo información valiosa para monitorear y mejorar la experiencia de sus clientes',
        hid: 'keywords', name: 'keywords', content: 'Analítica de voz y texto, speech analytics, imetrix speech analytics, voice to text, voice analytics, text analytics, analítica de datos, estrategia en datos, AI, auditoria call center',
        name: 'keywords', name: 'keywords', content: 'Analítica de voz y texto, speech analytics, imetrix speech analytics, voice to text, voice analytics, text analytics, analítica de datos, estrategia en datos, AI, auditoria call center',
        content: 'iSA interpreta conversaciones habladas en forma masiva y en poco tiempo, extrayendo información valiosa para monitorear y mejorar la experiencia de sus clientes'
      }
    ],
  },
    mixins: [auth],
    data(){
        return {
            contactSchema: {
                name   : '',
                company: '',
                phone  : '',
                email  : '',
                message: '',
                terms  : false
            },
            contact: {},
            loadContact: false
        }
    },
    mounted(){

        new SmoothScroll('a[href*="#"]')
        new Typewriter('#typewriter', {
            strings: ['Voice to insight', 'Analítica de Voz', 'Analítica de Texto'],
            autoStart: true,
            loop: true,
            delay: 100
        })
    },
    created(){
        this.contact = this._.cloneDeep(this.contactSchema)
    },
    methods: {

        openWp(){
            window.open('https://wa.me/573165776309', '_blank')
        },

        openLk(){
            window.open('https://www.linkedin.com/company/imetrix-sas/?viewAsMember=true', '_blank')
        },

        openYt(){
            window.open('https://www.youtube.com/channel/UCU5NvxslVh531rcSzy2VIZg', '_blank')
        },

        // Formulario de contacto
        send(){

            let post = this._.cloneDeep(this.contact)
            
            if(!this.contact.terms){
                return $.notify({
                icon: "tim-icons icon-alert-circle-exc",
                message: 'Debes aceptar los políticas de privacidad y tratamiento de datos'
                }, {
                type: 'danger'
                })
            }

            this.loadContact = true

            this.$api(this, (xhr) => {
                xhr.post('/contact', this.$qs.stringify(post)).then((r) => {
                
                    let data = r.data

                    if(!data.response){

                        this.loadContact = false
                        $.notify({
                        icon: "tim-icons icon-alert-circle-exc",
                        message: data.message
                        }, {
                        type: 'danger'
                        })

                    }else{

                        this.loadContact = false
                        this.contact = this._.cloneDeep(this.contactSchema)

                        $.notify({
                        icon: "tim-icons icon-alert-circle-exc",
                        message: data.message
                        }, {
                        type: 'primary'
                        })
                    }

                }).catch(() => {
                    this.loadContact = false
                })
            })
        }
    }
}
</script>