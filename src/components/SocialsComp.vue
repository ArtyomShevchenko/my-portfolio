<template>
    <ul class="social__links">
        <li v-for="{ title, path } in socials" class="social__link-content">
            <a :href="path" target="_blank" class="social__link">{{ title }}</a>
        </li>
    </ul>
</template>

<script setup>
import { reactive } from "vue";
const socials = reactive(
    [
        {
            title: "GitHub",
            path: "https://github.com/ArtyomShevchenko",
            icon: undefined,
        },
        {
            title: "YouTube",
            path: "https://www.youtube.com/@ArtyomStouch",
            icon: undefined,
        },
        {
            title: "Telegram",
            path: "https://t.me/+380934877758",
            icon: undefined,
        },
    ]
)
</script>

<style scoped>
.social__links {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.social__link-content {}

.social__link {}
</style>