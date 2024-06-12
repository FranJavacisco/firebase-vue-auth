<template>
    <div class="wrapper">
        <h2>Inicio de sesión</h2>
        <form 
            @submit.prevent="handleSubmit"
        >
            <div class="form__field">
                <input v-model="email" type="email" placeholder="Correo electrónico">
            </div>
            <div class="form__field">
                <input v-model="password" type="text" placeholder="Constraseña">
            </div>
            <div class="form__btn">
                <button>Iniciar sesión</button>
            </div>
        </form>
    </div>
</template>

<script>
    import firebaseAuthPlugin from "@/auth"
    import { app } from '../firebaseConfig.js';


    export default {
        name: 'LoginView',
        data() {
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            async handleSubmit() {
                const { email, password } = this;
               if ( [ email, password ].includes('') ) 
                return alert('Todos los campos son obligatorios');

                try {
                    const firebaseAuth = firebaseAuthPlugin( app )
                    const { user } = await firebaseAuth.loginUser( firebaseAuth.auth, email, password )
                    console.log({ user });
                    // const aboutRoute = this.$router.options.routes.find(route => route.name === 'home' || route.path === '/');
                    // aboutRoute && (aboutRoute.meta.login = false)
                    this.$router.options.routes.forEach(route => {
                        if ( route.name === 'home' ) {
                            route.meta.login = false
                            return
                        } 
                        route.meta.login = true
                    });
                    this.$router.push('/')
                } catch (error) {
                    console.error(error.message);
                    alert('Credenciales Invalidas')
                    this.email = ''
                    this.password = ''
                }
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        max-width: 120rem;
        width: 90%;
        margin: 0 auto;
        /* background-color: red; */
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

</style>