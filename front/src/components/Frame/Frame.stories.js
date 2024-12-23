import { Frame } from ".";

export default {
  title: "Components/Frame",
  component: Frame,

  argTypes: {
    property1: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "dark",
    className: {},
  },
};
