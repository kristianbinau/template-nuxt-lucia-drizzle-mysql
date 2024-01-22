<template>
  <h1>Profile</h1>
  <p>User id: {{ user.userId }}</p>
  <p>Username: {{ user.username }}</p>
  <form method="post" action="/api/logout" @submit.prevent="handleLogout">
    <input type="submit" value="Sign out" />
  </form>

  <h1>hello logged in dashboard</h1>
</template>

<script setup lang="ts">
const user = useAuthenticatedUser();

const handleLogout = async (e: Event) => {
  if (!(e.target instanceof HTMLFormElement)) return;
  await $fetch("/api/logout", {
    method: "POST",
    redirect: "manual",
  });
  await navigateTo("/login");
};
</script>
