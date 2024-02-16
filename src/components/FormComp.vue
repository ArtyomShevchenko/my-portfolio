<template>
    <form class="form" @submit.prevent="sendEmail">
        <input type="email" class="form__input" v-model="formData.email" placeholder="Enter email">
        <button :disabled="formSend" class="form__btn" type="submit">Send</button>
    </form>
</template>

<script setup>
import emailjs from 'emailjs-com';
import { ref, reactive } from "vue";

const formSend = ref(false)

const formData = reactive({
    email: '',
})

function sendEmail(e) {
    try {
        emailjs.send(
            'service_lsz3a55',
            'template_o6ntpge',
            {
                email: formData.email,
            },
            'bqsQKTfwvEeaDOIsZ',
        )

        formSend.value = true
    }
    catch (error) {
        console.log({ error })
    };

    formData.email = '';
}
</script>

<style scoped>
.form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: center;
    gap: .5rem;
}

input,
button {
    border-radius: .2rem;
}

button {
    display: inline-block;
    padding: 0.5rem 2rem;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    border: none;
}

input {
    display: inline-block;
    padding: 0.5rem;
    background-color: var(--bg-third);
    color: var(--text-secondary);
    display: inline-block;
    min-width: 160px;
    outline: none;
    border: none;
}

input::placeholder {
    color: var(--text-third);
}
</style>