import React from 'react';
import { Box } from '../src/components/Box';
import { Layers } from '../src/custom/Layers';
import { Properties } from '../src/custom/Properties';
import { Toolbar } from '../src/custom/Toolbar';

function Home() {
  return (
    <Box css={{ height: '100%' }}>
      <Toolbar />
      <Box css={{ bc: '$canvas', height: '100%', px: 250, pt: '36px' }}>
        <Layers />
        <Properties />
      </Box>
    </Box>
  );
}

export default Home;
