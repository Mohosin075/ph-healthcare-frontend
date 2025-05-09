import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next : {
      revalidate : 30
    }
  });
  const { data: specialties } = await res.json();
  return (
    <Container>
      <Box
        sx={{
          margin: "40px 0",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Typography variant="h5" fontWeight={600}>
            Explore treatment across specialists
          </Typography>
          <Typography component="p" fontWeight={300} fontSize="px">
            Experience doctor across all specialist
          </Typography>
        </Box>
        <Stack direction="row" gap={4} mt={5}>
          {specialties.map((specialty : any) => (
            <Box
              key={specialty.key}
              sx={{
                flex: 1,
                width: "150px",
                backgroundColor: "rgba(145, 145, 145, .5)",
                border: "1px solid rgba(250, 250, 250, 1)",
                borderRadius: "10px",
                textAlign: "center",
                padding: "40px 10px",
                "& img": {
                  width: "50px",
                  height: "50px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid blue",
                  borderRadius: "10px",
                  padding: "40px 10px",
                },
              }}
            >
              <Image
                src={specialty.icon}
                width={100}
                height={100}
                alt="specialty"
              />
              <Box>
                <Typography component="p" fontWeight={300} fontSize={18} mt={2}>
                  {specialty.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
        <Button
          variant="outlined"
          sx={{
            marginTop: "20px",
          }}
        >
          View All
        </Button>
      </Box>
    </Container>
  );
};

export default Specialist;
