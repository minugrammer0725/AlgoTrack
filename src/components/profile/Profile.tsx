import { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';

import { Avatar, Box, Typography } from '@mui/material';

interface IProfile {
  name?: string;
}

const Profile: FC<IProfile> = (props): ReactElement => {
  const {name = 'Minwoo'} = props;


  return (
    <Box display={'flex'} flexDirection={'column'}
      justifyContent={'center'} alignItems={'center'}>
      {/* Avatar */}
      <Avatar sx={{
        width: '96px',
        height: '96px',
        backgroundColor: 'primary.main',
        marginBottom: '16px'
      }}>
        <Typography variant='h4' color={'text.primary'}>{name[0]}</Typography>
      </Avatar>
      {/* Name */}
      <Typography variant='h6' color={'text.primary'}>Welcome, {name}</Typography>
      {/* Message */}
      <Typography variant='body1' color={'text.primary'}>This is your personal Leetcode Tracker!</Typography>
    </Box>

  )
}

Profile.propTypes = {
  name: PropTypes.string
};


export default Profile;