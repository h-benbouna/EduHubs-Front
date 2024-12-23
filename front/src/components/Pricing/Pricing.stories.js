import { Pricing } from ".";

export default {
  title: "Components/Pricing",
  component: Pricing,

  argTypes: {
    property1: {
      options: ["drop-down", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "drop-down",
    className: {},
    divClassName: {},
    icon: "/img/icon-5.png",
  },
};
