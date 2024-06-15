import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Container } from '@mui/material';
import '../Vendor.css'; // Import the CSS file

import axios from 'axios';

function createData(name, age, location) {
    return { name, age, location};
  }

export default function Beneficiary() {

const [beneficiary, setBeneficiary] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/all_beneficiary");
        setBeneficiary(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after mount

  const rowsdata = [];

  for (let i = 0; i < beneficiary.length; i++) {
    rowsdata.push(createData(beneficiary[i].name, beneficiary[i].age, beneficiary[i].location));
  }


return (
<Container className="vendor-container">
<Typography variant="h4" className="vendor-title">
Beneficiary
</Typography>
<Grid container spacing={4} justifyContent="center">
{rowsdata.map((item, index) => (
<Grid item key={index} xs={12} sm={6} md={4}>
<Card className="vendor-card">
<CardActionArea>
<CardMedia
component="img"
height="200" // Fixed height for consistent image size
image={item.image}
alt={item.name}
className="vendor-card-image"
/>
<CardContent className="vendor-card-content">
<Typography gutterBottom variant="h5" component="div" className="vendor-card-title">
{item.name}
</Typography>
<Typography variant="body2" color="text.secondary" className="bold-text">
<b>Age:</b> {item.age}
</Typography>
<Typography variant="body2" color="text.secondary" className="bold-text">
<b>Location:</b> {item.location}
</Typography>
</CardContent>
</CardActionArea>
</Card>
</Grid>
))}
</Grid>
</Container>
);
}