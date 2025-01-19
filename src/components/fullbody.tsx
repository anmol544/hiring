
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Fullbody = ()=> {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start',  gap:10 ,margin:5 }}>
      <Box sx={{ width: '400px', height: '200vh',  borderRadius: '10px',border:1,padding:2 }}>       
        <h1>Full Body Content</h1>
        {" Add your content here" }
      </Box>
      
      <Box sx={{ width: '400px', height: '70pxh',  borderRadius: '10px', border:1,padding:2,'@media (max-width: 600px)':{  display: 'none',} }}>
        <h1>Full Body Content</h1>
        {" Add your content here" }
      </Box>
  
    </Box>
    );
    };
    export default Fullbody;