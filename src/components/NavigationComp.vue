<template>
	<nav class="navigation">
		<ul class="navigation__links">
			<li class="navigation__link-content" v-for="{ title, path } in links">
				<RouterLink :to="path" class="navigation__link">{{ title }}</RouterLink>
			</li>
		</ul>
	</nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { reactive } from 'vue'

const links = reactive([
	{
		title: "Home",
		path: "/",
	},
	{
		title: "About",
		path: "/about",
	},
	{
		title: "Contact",
		path: "/contact",
	},
]);

</script>

<style setup>
.navigation {}

.navigation__links {
	display: flex;
	gap: 1rem;
}

.navigation__link-content {}

.navigation__link {
	display: inline-block;
	cursor: pointer;
}

.router-link-active {
	color: red;
}
</style>
