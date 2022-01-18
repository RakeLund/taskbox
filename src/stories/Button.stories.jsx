import React from "react";

import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  primary: true,
  label: "Text",
  className: "blu-button",
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Text",
//   className: "blu-button--secondary",
//   primary: false,
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Text",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Text",
// };

export const Outlined = Template.bind({});
Outlined.args = {
  label: "Text",
  className: "blu-button-outlined",
  primary: true,
};
