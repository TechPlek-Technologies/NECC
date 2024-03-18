import CurrencyRupeeIcon from '@heroicons/react/24/solid/CurrencyRupeeIcon';
import EyeIcon from '@heroicons/react/24/solid/EyeIcon';
import BuildingLibraryIcon from '@heroicons/react/24/solid/BuildingLibraryIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import DocumentArrowDownIcon from '@heroicons/react/24/solid/DocumentArrowDownIcon';
import EnvelopeIcon from '@heroicons/react/24/solid/EnvelopeIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import BriefcaseIcon from '@heroicons/react/24/solid/BriefcaseIcon';

import { SvgIcon } from '@mui/material';
import { FaBuilding, FaUsers } from 'react-icons/fa';

export const items = [
  {
    title: 'Account',
    path: '/admin/dashboard',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Careers',
    path: '/admin/career',
    icon: (
      <SvgIcon fontSize="small">
         <BriefcaseIcon />
      </SvgIcon>
    )
  },
  // {
  //   title: 'Content',
  //   path: '/admin/content',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //        <BriefcaseIcon />
  //     </SvgIcon>
  //   )
  // },
  {
    title: 'Offices',
    path: '/admin/office',
    icon: (
      <SvgIcon fontSize="small">
        <BuildingLibraryIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Contacts',
    path: '/admin/contact',
    icon: (
      <SvgIcon fontSize="small">
        <EnvelopeIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Investors',
    path: '/admin/investor',
    icon: (
      <SvgIcon fontSize="small">
        <CurrencyRupeeIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Corporate Information',
    path: '/admin/corporateInformation',
    icon: (
      <SvgIcon fontSize="small">
        <FaBuilding />
      </SvgIcon>
    )
  },
  {
    title: 'Key Personnel Management',
    path: '/admin/Keypersonnel',
    icon: (
      <SvgIcon fontSize="small">
        <FaUsers />
      </SvgIcon>
    )
  },
  {
    title: 'CSR',
    path: '/admin/csr',
    icon: (
      <SvgIcon fontSize="small">
        <DocumentArrowDownIcon />
      </SvgIcon>
    )
  },
 
  {
    title: 'Error',
    path: '/404',
    icon: (
      <SvgIcon fontSize="small">
        <XCircleIcon />
      </SvgIcon>
    )
  }
];
