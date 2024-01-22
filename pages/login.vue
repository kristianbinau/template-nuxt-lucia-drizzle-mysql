<template>
  <h1 class="mb-4 text-2xl text-primary">Login - {{ appConfig.appName }}</h1>

  <UForm
    :validate="validate"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormGroup label="Username" name="username">
      <UInput v-model="state.username" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "public",
  middleware: ["unprotected"],
});

import type { FormError, FormSubmitEvent } from "#ui/types";

const appConfig = useAppConfig();
const toast = useToast();

const state = reactive({
  username: undefined,
  password: undefined,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.username) errors.push({ path: "username", message: "Required" });
  if (!state.password) errors.push({ path: "password", message: "Required" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  try {
    await $fetch("/api/login", {
      method: "POST",
      body: {
        username: state.username,
        password: state.password,
      },
      redirect: "manual",
    });

    await navigateTo("/u");
  } catch (e) {
    const { data: error } = e as {
      data: {
        message: string;
      };
    };

    toast.add({
      icon: "i-heroicons-exclamation-circle",
      title: "Login Error",
      description: error.message,
    });
  }
}
</script>
