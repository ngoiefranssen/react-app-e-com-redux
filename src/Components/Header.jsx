import {
  AppBar,
  Button,
  Tabs,
  Toolbar,
  useTheme
} from '@mui/material';
import React from 'react'
import { useState } from 'react';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const Header = () => {

  const [value, setValue] = useState();

  return (
    <React.Fragment>
      <AppBar sx={{ background: '#063970' }}>
        <Toolbar>
          <ProductionQuantityLimitsIcon />
                <Tabs
                  sx={{ ml: 'auto' }}
                  textColor='inherit'
                  value={value}
                  onChange={(e, value) => setValue(value)}
                  indicatorColor='secondary'
                >
                </Tabs>
                <Button sx={{ ml: 'auto' }} variant='contained'>Login</Button>
                <Button sx={{ ml: '10px' }} variant='contained'>Sing up</Button>
        </Toolbar> 
      </AppBar>
    </React.Fragment>
    
  )
}

export default Header;