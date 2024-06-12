<template>
    <div class="wrapper">
        <h2>Registro</h2>
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
                <button>Registrar</button>
            </div>
        </form>
    </div>
</template>

<script>
    import firebaseAuthPlugin from "@/auth"
    import { app } from '../firebaseConfig.js';


    export default {
        name: 'SignUpView',
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
                    const userCredential = await firebaseAuth.createUser( firebaseAuth.auth, email, password )
                    alert('Registro completado exitosamente')
                    this.email = ''
                    this.password = ''

                    
                    const user = userCredential.user;
                    console.log({ user });
                } catch (error) {
                    console.error(error.message);
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