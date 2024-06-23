import { ArrowDownward } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

function Cravings() {
  return (
    <Box>
      <Typography
        variant="h5"
        color="text.tertiary"
        marginTop={5}
        align="center"
      >
        End your Cravings Here
        <ArrowDownward />
      </Typography>
      <hr className="my-7 bg-black h-[2px]"/>
      <Stack direction="row" spacing={7}>
        <Card
          sx={{ maxWidth: 345, padding: 2 }}
          component={Paper}
          elevation={3}
        >
          
            <CardMedia
              component={"img"}
              src="https://images7.alphacoders.com/596/596343.jpg"
              height={194}
              sx={{}}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color={"text.tertiary"}
              >
                Margertta pizza
              </Typography>

              <Typography
                variant="body2"
                color="text.tertiary"
                component="p"
              >
                A delicious pizza made with fresh tomatoes, mozzarella, and basil.
              </Typography>
            </CardContent>

          <CardActions sx={{display:"flex",justifyContent:"space-between"}}>
            <Button size="small" variant="contained" color="primary">
              Add to Cart
            </Button>
            <Button size="small" variant="contained" color="primary">
              View Details
            </Button>
          </CardActions>
        </Card>


        <Card
          sx={{ maxWidth: 345, padding: 2 }}
          component={Paper}
          elevation={3}
        >
          
            <CardMedia
              component={"img"}
              src="https://images7.alphacoders.com/596/596343.jpg"
              height={194}
              sx={{}}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color={"text.tertiary"}
              >
                Margertta pizza
              </Typography>

              <Typography
                variant="body2"
                color="text.tertiary"
                component="p"
              >
                A delicious pizza made with fresh tomatoes, mozzarella, and basil.
              </Typography>
            </CardContent>

          <CardActions sx={{display:"flex",justifyContent:"space-between"}}>
            <Button size="small" variant="contained" color="primary">
              Add to Cart
            </Button>
            <Button size="small" variant="contained" color="primary">
              View Details
            </Button>
          </CardActions>
        </Card>


        <Card
          sx={{ maxWidth: 345, padding: 2 }}
          component={Paper}
          elevation={3}
        >
          
            <CardMedia
              component={"img"}
              src="https://images7.alphacoders.com/596/596343.jpg"
              height={194}
              sx={{}}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color={"text.tertiary"}
              >
                Margertta pizza
              </Typography>

              <Typography
                variant="body2"
                color="text.tertiary"
                component="p"
              >
                A delicious pizza made with fresh tomatoes, mozzarella, and basil.
              </Typography>
            </CardContent>

          <CardActions sx={{display:"flex",justifyContent:"space-between"}}>
            <Button size="small" variant="contained" color="primary">
              Add to Cart
            </Button>
            <Button size="small" variant="contained" color="primary">
              View Details
            </Button>
          </CardActions>
        </Card>


        <Card
          sx={{ maxWidth: 345, padding: 2 }}
          component={Paper}
          elevation={3}
        >
          
            <CardMedia
              component={"img"}
              src="https://images7.alphacoders.com/596/596343.jpg"
              height={194}
              sx={{}}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color={"text.tertiary"}
              >
                Margertta pizza
              </Typography>

              <Typography
                variant="body2"
                color="text.tertiary"
                component="p"
              >
                A delicious pizza made with fresh tomatoes, mozzarella, and basil.
              </Typography>
            </CardContent>

          <CardActions sx={{display:"flex",justifyContent:"space-between"}}>
            <Button size="small" variant="contained" color="primary">
              Add to Cart
            </Button>
            <Button size="small" variant="contained" color="primary">
              View Details
            </Button>
          </CardActions>
        </Card>

      </Stack>
      <hr className="my-7 bg-black h-[2px]"/>
    </Box>
  );
}

export default Cravings;
