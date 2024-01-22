export default defineNuxtRouteMiddleware((from) => {
  const breadcrumb = useBreadcrumb();

  breadcrumb.value = [
    {
      label: "Home",
      icon: "i-heroicons-home",
      to: "/u",
    },
    ...from.path
      .split("/")
      .filter((item) => item !== "u" && item !== "")
      .map((item) => {
        return {
          label: item.charAt(0).toUpperCase() + item.slice(1),
          to: from.path,
        };
      }),
  ];
});
