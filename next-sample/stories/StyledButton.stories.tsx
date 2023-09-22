import { Meta, StoryFn } from '@storybook/react';
import { StyledButton } from '../components/StyledButton';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'StyledButton',
  component: StyledButton,
  argTypes: {
    // onClick: { action: 'clicked' },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'transparent'],
    },
    children: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof StyledButton>;

const Template: StoryFn<typeof StyledButton> = (args: any) => (
  <StyledButton {...args} />
);
export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  children: 'Primary',
};

const incrementAction = action('increment');

export const Increment = (props: any) => {
  const [count, setCount] = useState(0);

  const onClick = (e: React.MouseEvent) => {
    incrementAction(e, count);
    setCount((prev) => prev + 1);
  }

  return (
    <StyledButton {...props} variant='primary' onClick={onClick}>
      Increment
    </StyledButton>
  );
};

export const Primary = (props: any) => {
  return (
    <StyledButton {...props} variant='primary' onClick={linkTo('StyledButton', 'Success')}>
      Primary
    </StyledButton>
  );
};

export const Success = (props: any) => {
  return (
    <StyledButton {...props} variant='success' onClick={linkTo('StyledButton', 'Transparent')}>
      Success
    </StyledButton>
  );
};

export const Transparent= (props: any) => {
  return (
    <StyledButton {...props} variant='transparent' onClick={linkTo('StyledButton', 'Primary')}>
      Transparent
    </StyledButton>
  );
};
