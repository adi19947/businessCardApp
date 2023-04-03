import { Box, Button, Chip, Divider, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

const TypographyComponent = () => (
  <>
    <Box display="flex">
      <Typography variant="h1" component="h1" color="initial">
        Hello!!
      </Typography>
      <Divider orientation="vertical" flexItem />
      <Typography variant="h2" component="h1" align="center" color="initial">
        All!!
      </Typography>
    </Box>
    <Divider />
    <Typography
      sx={{
        padding: 10,
        color: "blue",
      }}
      variant="body1"
      component="h1"
      fontWeight={200}
      color="primary"
    >
      Yess!!
    </Typography>
    <Divider> Center</Divider>
    <Divider textAlign="right"> Right</Divider>
    <Divider textAlign="left"> Left</Divider>
    <Divider>
      <Chip label="Something" />
    </Divider>

    <Box>
      <Button variant="text">text</Button>
      <Button
        variant="contained"
        color="success"
        size="large"
        startIcon={<SendIcon />}
      >
        contained
      </Button>
      <Button variant="outlined">outlined</Button>
      <Button variant="outlined" disabled size="small">
        disabled
      </Button>

      <IconButton aria-label="Delete">
        <DeleteIcon />
      </IconButton>
    </Box>
  </>
);

export default TypographyComponent;
