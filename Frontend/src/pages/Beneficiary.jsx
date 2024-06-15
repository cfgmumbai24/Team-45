import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Container } from '@mui/material';
import '../Vendor.css'; // Import the CSS file

export default function Beneficiary() {
const [data, setData] = useState([]);

useEffect(() => {
fetch('/list2.json')
.then((response) => response.json())
.then((data) => setData(data))
.catch((error) => console.error('Error fetching data:', error));
}, []);

return (
<Container className="vendor-container">
<Typography variant="h4" className="vendor-title">
Volunteers
</Typography>
<Grid container spacing={4} justifyContent="center">
{data.map((item, index) => (
<Grid item key={index} xs={12} sm={6} md={4}>
<Card className="vendor-card">
<CardActionArea>
<CardMedia
component="img"
height="200" // Fixed height for consistent image size
image={item.image}
alt={item.title}
className="vendor-card-image"
/>
<CardContent className="vendor-card-content">
<Typography gutterBottom variant="h5" component="div" className="vendor-card-title">
{item.title}
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