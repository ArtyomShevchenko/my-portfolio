<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__wrapper">
                <div class="footer__body">
                    <SocialsComp />
                    <FormComp />
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import FormComp from "@/components/FormComp.vue"
import SocialsComp from "@/components/SocialsComp.vue"
</script>

<style scoped>
.footer {}

.footer__container {
    background: var(--bg-secondary);
}

.footer__wrapper {}

.footer__body {
    display: flex;
    justify-content: space-around;
    gap: 1rem;
}
</style>