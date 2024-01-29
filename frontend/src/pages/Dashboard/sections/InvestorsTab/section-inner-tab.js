
import {  Card, CardContent, Stack,  Typography } from '@mui/material';

export const SectionInnerTab = (props) => {
  const { name, sx } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={1}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              {name}
            </Typography>
            
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};


