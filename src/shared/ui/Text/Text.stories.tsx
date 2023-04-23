import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Text',
    text: '123456',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Text',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: '123456',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Text',
    text: '123456',
    theme: TextTheme.ERROR,
};

export const ErrorOnlyTitle = Template.bind({});
ErrorOnlyTitle.args = {
    title: 'Text',
    theme: TextTheme.ERROR,
};

export const ErrorOnlyText = Template.bind({});
ErrorOnlyText.args = {
    text: '123456',
    theme: TextTheme.ERROR,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Text',
    text: '123456',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Text',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: '123456',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Text',
    text: '123456',
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorOnlyTitleDark = Template.bind({});
ErrorOnlyTitleDark.args = {
    title: 'Text',
    theme: TextTheme.ERROR,
};
ErrorOnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorOnlyTextDark = Template.bind({});
ErrorOnlyTextDark.args = {
    text: '123456',
    theme: TextTheme.ERROR,
};
ErrorOnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
