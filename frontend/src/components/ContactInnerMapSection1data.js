import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function ContactInnerMapSection1data({data,setMap}) {


  return (
    <div>
    {data?.map(branch => (
      <Card key={branch.id}  sx={{ 
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
        <CardContent  onClick={()=>setMap(branch.gtag)} sx={{ flex: '1 0 auto', width: "300px" }}>
          <Typography component="div" variant="h6">
            {branch.branch}
          </Typography>
          
          <Typography variant="body2" color="text.secondary" component="div">
            {`Contact Person: ${branch.personName}`}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            {`Phone: ${branch.phone}`}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            {`Mobile: ${branch.mobile}`}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            {`Email: ${branch.email}`}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            {`Address: ${branch.address1}, \n ${branch.address2}`}
          </Typography>
        </CardContent>
      </Card>
    ))}
  </div>
  );
}