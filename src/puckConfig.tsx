import { ComponentConfig, Config, DropZone } from "@measured/puck";
import { Button, Stack, Typography } from "@mui/material";

export type CxButtonProps = {
  label: string;
  color: "primary" | "secondary";
};

export type HeadingProps = {
  text?: string;
  padding?: string;
};

export type LayoutProps = {
  columns: {}[];
};

type CustomConfig = {
  CxButton: CxButtonProps;
  Heading: HeadingProps;
  Layout: LayoutProps;
};

const Heading: ComponentConfig<HeadingProps> = {
  fields: {
    text: { type: "text" },
    padding: { type: "text" },
  },
  defaultProps: {
    text: "Heading",
    padding: "3",
  },
  render: ({ text, padding }) => {
    return (
      <Typography variant="h1" padding={padding}>
        {text}
      </Typography>
    );
  },
};

const CxButton: ComponentConfig<CxButtonProps> = {
  fields: {
    label: { type: "text" },
    color: {
      type: "radio",
      options: [
        { label: "primary", value: "primary" },
        { label: "secondary", value: "secondary" },
      ],
    },
  },
  defaultProps: {
    label: "Learn more",
    color: "primary",
  },
  render: ({ color, label }) => {
    return (
      <Button variant="contained" color={color} fullWidth>
        {label}
      </Button>
    );
  },
};

const Layout: ComponentConfig<LayoutProps> = {
  fields: {
    columns: {
      type: "array",
      arrayFields: {},
    },
  },
  render: ({ columns }) => {
    return (
      <Stack direction="row" spacing={2}>
        {columns.map((_, index) => (
          <Stack key={index} direction="row" spacing={2} flexGrow={1}>
            <DropZone zone={`column-${index}`} />
          </Stack>
        ))}
      </Stack>
    );
  },
  defaultProps: {
    columns: [{}],
  },
};

export const config: Config<CustomConfig> = {
  components: { CxButton, Heading, Layout },
};
