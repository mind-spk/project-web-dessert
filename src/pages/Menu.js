import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const Menu = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center pb-[100px]  bg-[#ffff]">
      <h2 className="text-[#F0E3A1] text-3xl font-judson font-bold m-5">
        Customer Favorites
      </h2>
      <div className="flex flex-wrap gap-[55px] justify-center ">
        <Card sx={{ maxWidth: 350 }}>
          <CardMedia
            sx={{ height: 350 }}
            image="https://heartofthecity.co.nz/sites/default/files/styles/ratio_1_x_1_medium/public/2023-08/Daldang.JPG?itok=ACEjQsm8" 
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions className="gap-40 ">
            <Button className="bg-stone-600" size="small">Share</Button>
            <Button className=" bg-[#2E1B05]" size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 350 }}>
          <CardMedia
            sx={{ height: 350 }}
            image="https://heartofthecity.co.nz/sites/default/files/styles/ratio_1_x_1_medium/public/2019-06/federal-delicatessen-v1.jpg?itok=j6Zwa0e5"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Federal Delicatessen
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions className="gap-40">
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 350 }}>
          <CardMedia
            sx={{ height: 350 }}
            image="https://heartofthecity.co.nz/sites/default/files/styles/ratio_1_x_1_medium/public/2019-10/lapetitfourchette-hires-186.jpg?itok=qsysiEaX"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              La Petite Fourchette
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions className="gap-40">
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 350 }}>
          <CardMedia
            sx={{ height: 350 }}
            image="https://heartofthecity.co.nz/sites/default/files/styles/ratio_1_x_1_medium/public/2022-09/Oh-My-Croffle-hero.jpg?itok=AFPbDsfE"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              La Petite Fourchette
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions className="gap-40">
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Menu;
