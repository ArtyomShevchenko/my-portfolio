<template>
    <header class="header">
        <div class="header__container">
            <div class="header__wrapper">
                <div class="header__body">
                    <NavigationComp />
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import NavigationComp from '@/components/NavigationComp.vue';
</script>

<style scoped>
.header {}

.header__container {
    background: var(--bg-secondary);
}

.header__wrapper {}

.header__body {}
</style>