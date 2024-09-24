import { Tag } from './Tag';
import { Meta, StoryObj } from '@storybook/react';

import { Droplets, Wind, UV, Eye } from '../Icons'

// Metadata
const meta: Meta<typeof Tag> = {
    component: Tag,
    title: 'Components/Atoms/Tag',
    tags: ['autodocs'],
    argTypes: {
        icon: {
            control: {
                type: 'select',
                options: {
                    None: null,
                    Droplets: <Droplets />,
                    Wind: <Wind />,
                    UV: <UV />,
                    Eye: <Eye />,
                },
            },
        },
        text: {
            control: {
                type: 'text'
            }
        },
        value: {
            control: {
                type: 'text'
            }
        }
    }
}

type Story = StoryObj<typeof meta>

// Tag
export const Default: Story = {
    args: {
        icon: <Droplets
                style={{
                    stroke: 'var(--colors-grayscale-gray-800)',
                    width: 'var(--Numbers-4-rem)',
                    height: 'var(--Numbers-4-rem)'
                }}
                />,
        text: 'Humedad',
        value: '21%'
    },
};
export const GroupTags: Story = {
    render: () => (
        <div style={{display:'flex', flexDirection:'column', gap:'0.75rem'}}>
            <Tag
                icon={
                    <Droplets
                        style={{
                            stroke: 'var(--colors-grayscale-gray-800)',
                            width: 'var(--Numbers-4-rem)',
                            height: 'var(--Numbers-4-rem)'
                        }}
                    />
                }
                text='Humedad'
                value='21%'
            />
            <Tag
                icon={
                    <Wind
                        style={{
                            stroke: 'var(--colors-grayscale-gray-800)',
                            width: 'var(--Numbers-4-rem)',
                            height: 'var(--Numbers-4-rem)'
                        }}
                    />
                }
                text='Viento'
                value='3.6 km/h - NNW/337°'
            />
            <Tag
                icon={
                    <UV
                        style={{
                            stroke: 'var(--colors-grayscale-gray-800)',
                            width: 'var(--Numbers-4-rem)',
                            height: 'var(--Numbers-4-rem)'
                        }}
                    />
                }
                text='UV índice'
                value='9'
            />
            <Tag
                icon={
                    <Eye
                        style={{
                            stroke: 'var(--colors-grayscale-gray-800)',
                            width: 'var(--Numbers-4-rem)',
                            height: 'var(--Numbers-4-rem)'
                        }}
                    />
                }
                text='Visibilidad'
                value='10km'
            />
        </div>
    )
};

export default meta;