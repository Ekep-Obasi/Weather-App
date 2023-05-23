import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(255, 236, 101)",
    },
    secondary: {
      main: "rgb(255, 236, 101)",
    },
  },
});

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mx: "auto" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          color=" #A09FB1"
        >{`${props.value}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function LinearProgressBar({ progess }) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "90%", my: 1 }}>
        <LinearProgressWithLabel value={progess} />
      </Box>
    </ThemeProvider>
  );
}
