import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [];
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.decorators = [];
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};

export const Outlined = Template.bind({});
Outlined.decorators = [ThemeDecorator(Theme.LIGHT)];
Outlined.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINED,
};

export const OutlinedDark = Template.bind({});
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
OutlinedDark.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINED,
};
