import CurrencyRupeeIcon from '@heroicons/react/24/solid/CurrencyRupeeIcon';
import BuildingOfficeIcon from '@heroicons/react/24/solid/BuildingOfficeIcon';
import NewspaperIcon from '@heroicons/react/24/solid/NewspaperIcon';
import InformationCircleIcon from '@heroicons/react/24/solid/InformationCircleIcon';
import DocumentTextIcon from '@heroicons/react/24/solid/DocumentTextIcon';
import ListBulletIcon from '@heroicons/react/24/solid/ListBulletIcon';
import ShieldCheckIcon from '@heroicons/react/24/solid/ShieldCheckIcon';
import FolderIcon from '@heroicons/react/24/solid/FolderIcon';
import PaperClipIcon from '@heroicons/react/24/solid/PaperClipIcon';
import StarIcon from '@heroicons/react/24/solid/StarIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

export const InvestorsInnerTab = (props) => {
  const { name, sx } = props;
  const getIcon = (name) => {
    switch (name) {
      case 'Financials':
      case 'Quarterly Compliances':
        return <CurrencyRupeeIcon />;
      case 'Corporate Governance':
          return <BuildingOfficeIcon />;
      case 'Corporate Information':
            return <InformationCircleIcon/>;
      case 'Newspaper Publication':
        return <NewspaperIcon />;
      case 'Right Issues':
        return <DocumentTextIcon />;
      case 'Listing Information':
        return <ListBulletIcon />;
      case 'CSR':
        return <ShieldCheckIcon />;
      case 'Annual Report & Notice Of AGM':
        return <FolderIcon />;
      case 'News Events':
        return <PaperClipIcon />;
      case 'Code Of Conduct':
        return <StarIcon />;
      default:
        return null;
    }
  };
  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              {name}
            </Typography>
            
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56,
              overlay:"auto"
            }}
          >
            <SvgIcon>
                {getIcon(name)}
              
            </SvgIcon>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};


