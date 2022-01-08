import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Paper, Avatar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import illustrationHeroImg from "../assets/images/illustration-hero.svg";
import Link from "@mui/material/Link";

import MusicIcon from "../assets/images/icon-music.svg";

const StyledCard = styled(Card)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  margin: theme.spacing(2.5),
  textAlign: "center",
  borderRadius: "12px",
  boxShadow: "-2px 36px 43px 3px rgba(114,128,167,0.31)",
}));

export default function OrderSummaryCard() {
  return (
    <StyledCard sx={{ maxWidth: 375 }} elevation={0}>
      <CardMedia
        component="img"
        height="220"
        sx={{
          objectFit: "fill",
        }}
        image={illustrationHeroImg}
        alt="Illustration Hero"
      />
      <CardContent sx={{ p: 5 }}>
        <Typography gutterBottom variant="h3" fontSize="26px" component="div">
          Order Summary
        </Typography>
        <Typography variant="subtitle1" fontSize="14px" color="secondary.content">
          You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
        </Typography>
        <Paper
          elevation={0}
          variant="outlined"
          sx={{
            bgcolor: "primary.light",
            border: "0px",
            borderRadius: "8px",
            p: "15px",
            mt: "15px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Avatar>
              <img src={MusicIcon} alt="Music Icon" />
            </Avatar>
            <div style={{ marginRight: "auto", paddingLeft: "15px" }}>
              <Typography variant="h5" fontSize="14px" color="primary.contrastText">
                Annual Plan
              </Typography>
              <Typography variant="h6" fontSize="14px" color="secondary.content">
                $59.99/year
              </Typography>
            </div>
            <div>
              <Link
                href="#"
                sx={{
                  color: "secondary.main",
                  fontSize: "12px",
                  textDecoration: "underline",
                  fontWeight: "700",
                  "&:hover": {
                    color: "primary.dark",
                    textDecoration: "none",
                  },
                }}
              >
                Change
              </Link>
            </div>
          </Box>
        </Paper>
        <Button
          size="large"
          color="secondary"
          variant="contained"
          sx={{
            width: "100%",
            mt: "30px",
            fontSize: "13px",
            borderRadius: "8px",
            boxShadow: "0px 20px 10px 2px rgb(224, 232, 255)",
            "&:hover": {
              backgroundColor: "primary.dark",
              boxShadow: "0px 20px 10px 2px rgb(224, 232, 255)",
            },
          }}
        >
          Proceed to Payment
        </Button>
        <Button
          sx={{
            width: "100%",
            mt: "20px",
            color: "secondary.content",
            fontSize: "13px",
            "&:hover": {
              color: "primary.contrastText",
            },
          }}
          href="#text-buttons"
        >
          Cancel Order
        </Button>
      </CardContent>
    </StyledCard>
  );
}
