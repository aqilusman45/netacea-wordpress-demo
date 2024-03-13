import { Button } from "./button";

const onClick = (e) => {
  e.preventDefault();
  alert("I have been clicked");
};

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      defaultValue: "primary",
      options: [
        "primary",
        "primary-arrow",
        "secondary",
        "secondary-arrow",
        "text-link",
        "text-link-arrow",
      ],
      control: { type: "select" },
    },
    mode: {
      defaultValue: "light",
      options: ["light", "dark"],
      control: { type: "select" },
    },
    label: {
      defaultValue: "Learn More",
      control: { type: "text" },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  variant: "primary",
  label: "Get A Quote",
  mode: "light",
  onClick,
  // slug: {
  //   current: '/',
  // },
};

export const ButtonPrimaryArrow = Template.bind({});
ButtonPrimaryArrow.args = {
  variant: "primary-arrow",
  label: "Get A Quote",
  mode: "light",
  onClick,
  // slug: {
  //   current: '/',
  // },
};
export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  variant: "secondary",
  label: "Get A Quote",
  mode: "light",
  onClick,
  // slug: {
  //   current: '/',
  // },
};

export const ButtonSecondaryArrow = Template.bind({});
ButtonSecondaryArrow.args = {
  variant: "secondary-arrow",
  mode: "light",
  label: "Get A Quote",
  onClick,
  // slug: {
  //   current: '/',
  // },
};
export const ButtonTextLink = Template.bind({});
ButtonTextLink.args = {
  variant: "text-link",
  label: "Get A Quote",
  mode: "light",
  onClick,
  // slug: {
  //   current: '/',
  // },
};
export const ButtonTextLinkArrow = Template.bind({});
ButtonTextLinkArrow.args = {
  variant: "text-link-arrow",
  label: "Get A Quote",
  mode: "light",
  onClick,
  // slug: {
  //   current: '/',
  // },
};
