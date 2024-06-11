<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <input v-model="email" type="email" placeholder="Email" />
            <input v-model="password" type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import { auth } from "../firebase";

export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async login() {
            try {
                await auth.signInWithEmailAndPassword(this.email, this.password);
                this.$router.push("/home");
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>