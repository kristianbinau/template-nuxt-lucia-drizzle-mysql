<script setup lang="ts">
definePageMeta({
  layout: 'public'
})

const user = useUser();
if (user.value) {
  await navigateTo("/u");
} else {
  await navigateTo("/login");
}
</script>

<template>
  <h1>hello</h1>
</template>
