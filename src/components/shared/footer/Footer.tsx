import { Box, Container, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import facebookIcon from "../../../assets/landing_page/facebook.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17,26,34)" py={8}>
      <Container>
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="#fff">Consultation</Typography>
          <Typography color="#fff">Health Plans</Typography>
          <Typography color="#fff">Madicine</Typography>
          <Typography color="#fff">Diagonstics</Typography>
          <Typography color="#fff">NGOs</Typography>
        </Stack>
        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <Image src={facebookIcon} alt="facebook" width={30} height={30} />
          <Image src={facebookIcon} alt="facebook" width={30} height={30} />
          <Image src={facebookIcon} alt="facebook" width={30} height={30} />
          <Image src={facebookIcon} alt="facebook" width={30} height={30} />
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>
        <Stack direction="row" gap={2} justifyContent="space-between" alignItems='center' py={3}>
          <Typography component="p" color="white">
            &copy;2024 PH healthcare. All right reserved.
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            underline="none"
            fontWeight={600}
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>
          <Typography component="p" color="white">
Privacy policy | Terms & Conditions          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
