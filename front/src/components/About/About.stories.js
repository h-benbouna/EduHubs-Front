import { About } from ".";

export default {
  title: "Components/About",
  component: About,

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
