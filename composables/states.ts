import type { BreadcrumbLink } from "@nuxt/ui/dist/runtime/types/breadcrumb";

export const useBreadcrumb = () => {
  return useState<BreadcrumbLink[]>("breadcrumb", () => [
    {
      label: "Home",
      icon: "i-heroicons-home",
      to: "/",
    },
  ]);
};
