import { Story, StoryContext } from '@storybook/react';
import { Suspense, useCallback, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n-sb';

export const I18nDecorator = () => (StoryComponent: Story) => (
    <Suspense fallback="">
        <I18nextProvider i18n={i18n}>
            <StoryComponent />
        </I18nextProvider>
    </Suspense>
);
