import Stack from "../components/AnthonyStack"

export default {
  title: "Components/Stack",
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 },
  },
}

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map(n => (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {n + 1}
      </div>
    ))}
  </Stack>
)

export const Horizontal = Template.bind({})
Horizontal.args = {
  direction: "row",
  spacing: 2,
  wrap: false,
  numberOfChildren: 5
}

export const Vertical = Template.bind({})
Vertical.args = {
  direction: "column",
  spacing: 2,
  wrap: false,
  numberOfChildren: 5
}

export const NoSpacing = Template.bind({})
NoSpacing.args = {
  direction: "row",
  spacing: 0,
  wrap: false,
  numberOfChildren: 6
}

export const WrapOverflow = Template.bind({})
WrapOverflow.args = {
  numberOfChildren: 40,
  direction: "row",
  spacing: 2,
  wrap: true,
}

export const Empty = Template.bind({})
Empty.args = {
  numberOfChildren: 0,
  direction: "row",
  spacing: 2,
  wrap: false,
}
