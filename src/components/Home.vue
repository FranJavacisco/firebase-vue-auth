<template>
    <div>
        <h1>Home</h1>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
import { auth } from "../firebase";

export default {
    methods: {
        async logout() {
            try {
                await auth.signOut();
                this.$router.push("/login");
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>