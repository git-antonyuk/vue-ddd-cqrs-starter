import { type App } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import Tooltip from "primevue/tooltip";
import StyleClass from "primevue/styleclass";
import Ripple from "primevue/ripple";
import ToastService from "primevue/toastservice";
import ConfirmationService from "primevue/confirmationservice";
import { definePreset } from "@primeuix/themes";

const stylePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{neutral.50}",
      100: "{neutral.100}",
      200: "{neutral.200}",
      300: "{neutral.300}",
      400: "{neutral.400}",
      500: "{neutral.500}",
      600: "{neutral.600}",
      700: "{neutral.700}",
      800: "{neutral.800}",
      900: "{neutral.900}",
      950: "{neutral.950}",
    },
    colorScheme: {
      dark: {
        surface: {
          0: "#ffffff",
          50: "{neutral.50}",
          100: "{neutral.100}",
          200: "{neutral.200}",
          300: "{neutral.300}",
          400: "{neutral.400}",
          500: "{neutral.500}",
          600: "{neutral.600}",
          700: "{neutral.700}",
          800: "{neutral.800}",
          900: "{neutral.900}",
          950: "{neutral.950}",
        },
      },
    },
  },
});

const config = {
  theme: {
    preset: stylePreset,
    options: {
      darkModeSelector: ".app-dark",
      prefix: "p",
      cssLayer: false,
    },
  },
};

export const installPrimeUI = (app: App) => {
  app.use(PrimeVue, config);
  app.directive("tooltip", Tooltip);
  app.directive("styleclass", StyleClass);
  app.directive("ripple", Ripple);
  app.use(ToastService);
  app.use(ConfirmationService);
};
