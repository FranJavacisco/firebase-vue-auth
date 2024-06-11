<template>
    <div>
        <h1>Sign Up</h1>
        <form @submit.prevent="signUp">
            <input v-model="email" type="email" placeholder="Email" />
            <input v-model="password" type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
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
        async signUp() {
            try {
                await auth.createUserWithEmailAndPassword(this.email, this.password);
                this.$router.push("/home");
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>