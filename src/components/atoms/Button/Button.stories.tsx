import {Button} from "./Button"
import type { Meta, StoryObj } from '@storybook/react';

// Metadata
const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Components/Atoms/Button',
    tags: ['autodocs'],
    argTypes: {
        label: {control: 'text'},
        variants: {
            control: {type: 'radio'},
            options: ['primary', 'secondary', 'tertiary'],
        },
        iconPosition: {
            control: {type: 'radio'},
            options: ['none', 'left', 'right', 'alone'],
        },
        iconIdentifier: {
            control: {type: 'radio'},
            options: ['arrow-left', 'trash'],
        },
    }
}

type Story = StoryObj<typeof meta>

// botones primarios
export const Primary: Story = {
    args: {
        label: 'Primary',
        variants: 'primary',
        iconPosition: 'none',
        iconIdentifier: 'arrow-left',
    },
};
// Botones secundarios
export const Secondary: Story = {
    args: {
        label: 'Secondary',
        variants: 'secondary',
        iconPosition: 'none',
        iconIdentifier: 'arrow-left',
    },
};
// Botones terciarios
export const Tertiary: Story = {
    args: {
        label: 'Tertiary',
        variants: 'tertiary',
        iconPosition: 'none',
        iconIdentifier: 'arrow-left',
    },
};

// Grupo de botones primarios
export const Group_Primarys: Story = {
    render: () => 
        <div style={{display:"flex", flexDirection:"row", gap:"12px"}}>
            <Button label="Label" variants="primary" iconPosition="none" iconIdentifier="arrow-left"/>
            <Button label="Label" variants="primary" iconPosition="left" iconIdentifier="arrow-left"/>
            <Button label="Label" variants="primary" iconPosition="right" iconIdentifier="arrow-left"/>
            <Button label="Label" variants="primary" iconPosition="alone" iconIdentifier="arrow-left"/>
        </div>
}
// Grupo de botones Secundarios
export const Group_Secondarys: Story = {
    render: () => 
        <div style={{display:"flex", flexDirection:"row", gap:"12px"}}>
            <Button label="Label" variants="secondary" iconPosition="none" iconIdentifier="arrow-left"/>
            <Button label="Label" variants="secondary" iconPosition="left" iconIdentifier="arrow-left"/>
            <Button label="Label" variants="secondary" iconPosition="right" iconIdentifier="arrow-left"/>
            <Button label="Label" variants="secondary" iconPosition="alone" iconIdentifier="arrow-left"/>
        </div>
}
// Grupo de botones Terciarios
export const Group_Tertiarys: Story = {
    render: () => 
        <div style={{display:"flex", flexDirection:"row", gap:"12px"}}>
            <Button label="Label" variants="tertiary" iconPosition="none" iconIdentifier="arrow-left"/>
            <Button label="Label" variants="tertiary" iconPosition="left" iconIdentifier="arrow-left"/>
            <Button label="Label" variants="tertiary" iconPosition="right" iconIdentifier="arrow-left"/>
            <Button label="Label" variants="tertiary" iconPosition="alone" iconIdentifier="arrow-left"/>
        </div>
}

export default meta;