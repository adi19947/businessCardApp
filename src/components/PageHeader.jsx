import { Box, Divider, Typography } from "@mui/material";
import { string } from "prop-types";
import { useTheme } from "../providers/ThemeProvider";

const PageHeader = ({ title, subtitle }) => {
  const { isDark } = useTheme();
  return (
    <>
      <Box>
        <Typography
          variant="h2"
          component="h1"
          sx={{ color: isDark ? "white" : "black" }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          sx={{ color: isDark ? "white" : "black" }}
        >
          {subtitle}
        </Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
    </>
  );
};

export default PageHeader;

PageHeader.propTypes = {
  title: string,
  subtitle: string,
};
