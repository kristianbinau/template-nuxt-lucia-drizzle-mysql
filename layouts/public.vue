<script setup lang="ts"></script>

<template>
  <UContainer class="flex justify-center items-center h-dvh">
    <UCard class="mb-60 w-full md:w-3/5 lg:w-2/5">
      <slot />
    </UCard>
    <UNotifications />
  </UContainer>
</template>
