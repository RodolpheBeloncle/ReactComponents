import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const StarRange = ({gameValue}) => {
  


    return (
        
      <>
       
          <Stack  spacing={1}>
            <Rating  name="half-rating-read" defaultValue={gameValue} precision={0.5} readOnly />
          </Stack>
       
      </>
        
            
        
    );
};

export default StarRange;
