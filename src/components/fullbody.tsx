import Box from "@mui/material/Box";

const Fullbody = () => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        display: "flex",
        justifyContent: "center",
        gap: 5,
        margin: 5,
        overflow: "hidden",
        flexDirection: {
          xs: "column",
          sm: "column", // Stack vertically on small screens (sm)
          md: "row", // Side by side on larger screens (md and above)
        },
      }}
    >
      <Box
        sx={{
          height: "200vh",
          borderRadius: "10px",
          border: 1,
          padding: 2,
          width: {
            xs: "80vw",
            sm: "80vw", // Stack vertically on small screens (xs)
            md: "40vw", // Side by side on larger screens (sm and above)
          },
        }}
      >
        <h1>Full Body Content</h1>
        {" Add your content here"}
      </Box>

      <Box
        sx={{
          height: 500,
          borderRadius: "10px",
          border: 1,
          padding: 2,

          width: {
            xs: "80vw",
            sm: "80vw", // Stack vertically on small screens (xs)
            md: "40vw", // Side by side on larger screens (sm and above)
            l: "35vw",
            xl: "30vw",
          },
        }}
      >
        <h1>Second Body</h1>
        {" Add your content here"}
      </Box>
    </Box>
  );
};
export default Fullbody;
