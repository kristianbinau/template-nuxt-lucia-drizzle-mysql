<template></template>

<script lang="ts" setup>
definePageMeta({
  layout: "public",
  middleware: ["protected"],
});

await $fetch("/api/logout", {
  method: "POST",
  redirect: "manual",
});
await navigateTo("/login");
</script>
