import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import './ContactInnerMapSection1data.css';

import { useState } from 'react';

export default function ContactInnerMapSection1data({data,setMap,setTargetid,targetid}) {


  return (
    <div>
    {data?.map(branch => (
      <Card key={branch.id}  className={`card ${targetid===branch.id ? 'selected' : ''}`} sx={{ 
        display: 'flex', 
        marginTop: '10px', 
        transition: 'background-color 0.3s ease',
        '&:hover': {
          backgroundColor: '#f5f5f5', // Change color on hover
        },
        '&:active': {
          backgroundColor: '#e0e0e0', // Change color on active state
        }
      }}>
        <CardContent onClick={()=>{setMap(branch.gtag); setTargetid(branch.id)}} sx={{ flex: '1 0 auto', width: "300px" }} className='card-rp'>
  <Typography component="div" variant="h6">
    {branch.branch}
  </Typography>

  {branch.personName && ( // Check if personName has a value
    <Typography variant="body2" color="text.secondary" component="div">
      <b>Contact Person: </b>{`${branch.personName}`}
    </Typography>
  )}

  {branch.phone && (
    <Typography variant="body2" color="text.secondary" component="div">
      <b>Phone: </b>{`${branch.phone}`}
    </Typography>
  )}

  {branch.mobile && (
    <Typography variant="body2" color="text.secondary" component="div">
      <b>Mobile: </b>{`${branch.mobile}`}
    </Typography>
  )}

  {branch.email && (
    <Typography variant="body2" color="text.secondary" component="div">
      <b>Email: </b>{`${branch.email}`}
    </Typography>
  )}

  {(branch.address1 || branch.address2) && ( // Check if either address1 or address2 has a value
    <Typography variant="body2" color="text.secondary" component="div">
      <b>Address: </b>{`${branch.address1}, ${branch.address2}`}
    </Typography>
  )}
</CardContent>

      </Card>
    ))}
  </div>
  );
}