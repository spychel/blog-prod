import { addDecorator } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StyleDecorator } from "shared/config/storybook/StyleDecorator/StyleDecorator";
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from "app/providers/ThemeProvider";
import { I18nDecorator } from "shared/config/storybook/I18nDecorator/I18nDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'ru', title: 'Русский' },
      ],
      showName: true,
    },
  },
};


addDecorator(StyleDecorator);
addDecorator(RouterDecorator());
addDecorator(ThemeDecorator(Theme.LiGHT));
//addDecorator(I18nDecorator());