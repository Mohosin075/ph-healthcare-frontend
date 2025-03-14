import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>
        <Typography component="h1" variant="h3" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography component="h1" variant="h3" fontWeight={600}>
          Come From
        </Typography>
        <Typography
          component="h1"
          variant="h3"
          fontWeight={600}
          color="primary.main"
        >
          Preventive Care
        </Typography>
        <Typography
          component="p"
          variant="h6"
          fontWeight={400}
          sx={{
            my: 2,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia
          neque corporis assumenda ex quod impedit .
        </Typography>
        <Button>Make Appointment</Button>
        <Button
          variant="outlined"
          sx={{
            ml: "15px",
          }}
        >
          Contact Us
        </Button>
      </Box>
      <Box
        sx={{
          flex: 1,
          p: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "200px",
            top: "-30px",
          }}
        >
          <Image src={assets.svgs.arrow} alt="arrow" width={100} height={100} />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box
            sx={{
              mt: 4,
            }}
          >
            <Image
              src={assets.images.doctor1}
              alt="doctor1"
              width={240}
              height={380}
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              alt="doctor2"
              width={240}
              height={350}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "220px",
              left: "150px",
            }}
          >
            <Image
              src={assets.images.doctor3}
              alt="doctor3"
              width={240}
              height={240}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "-50px",
              right: 0,
              zIndex: "-1",
            }}
          >
            <Image
              src={assets.images.stethoscope}
              alt="doctor3"
              width={180}
              height={180}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
