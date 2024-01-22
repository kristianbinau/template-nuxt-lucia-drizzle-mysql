<script setup lang="ts">
const appConfig = useAppConfig();

const firstLetterOf = (str: string) => str.charAt(0).toUpperCase();
const everyThingAfterFirstLetter = (str: string) => str.slice(1);

const navigation = [
  {
    label: "Dashboard",
    icon: "i-heroicons-home",
    to: "/u/dashboard",
  },
  {
    label: "Profile",
    icon: "i-heroicons-user",
    to: "/u/profile",
  },
  {
    label: "Settings",
    icon: "i-heroicons-cog-6-tooth",
    to: "/u/settings",
  },
];

const userNavigation = [
  {
    label: "Settings",
    icon: "i-heroicons-cog-6-tooth",
    to: "/u/settings",
  },
  {
    label: "Logout",
    icon: "i-heroicons-arrow-right-on-rectangle",
    to: "/logout",
  },
];

const breadcrumb = useBreadcrumb();
</script>

<template>
  <div class="container-grid min-h-screen bg-gray-950">
    <NuxtLink to="/" class="logo flex items-center px-5 text-2xl font-bold">
      <h1>
        <span class="text-primary">{{ firstLetterOf(appConfig.appName) }} </span
        >{{ everyThingAfterFirstLetter(appConfig.appName) }}
      </h1>
    </NuxtLink>
    <nav class="nav flex justify-between items-center">
      <UBreadcrumb :links="breadcrumb" class="ms-4" />

      <UPopover class="ms-auto me-4">
        <UAvatar icon="i-heroicons-photo" size="sm" />

        <template #panel>
          <div class="p-2">
            <UVerticalNavigation :links="userNavigation"> </UVerticalNavigation>
          </div>
        </template>
      </UPopover>
    </nav>
    <aside class="aside bg-gray-950 px-2">
      <UVerticalNavigation :links="navigation" />
    </aside>
    <main class="main bg-gray-900 p-4">
      <slot></slot>
      <UNotifications />
    </main>
  </div>
</template>

<style scoped>
.container-grid {
  display: grid;
  grid-template-columns: 13rem 1fr;
  grid-template-rows: 4rem 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "logo nav"
    "aside main";
}
.logo {
  grid-area: logo;
}
.aside {
  grid-area: aside;
}
.nav {
  grid-area: nav;
}
.main {
  grid-area: main;
}
</style>
