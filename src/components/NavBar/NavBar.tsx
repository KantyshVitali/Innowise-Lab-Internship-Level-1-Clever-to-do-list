import { Button, Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';

import { StateProps } from '../../const/index';
import { HOME_ROUTE } from '../../utils';

const NavBar = (props: StateProps): JSX.Element => {
  const { auth } = props;
  const [user] = useAuthState(auth);

  return (
    <AppBar color="secondary" position="static">
      <Toolbar variant="dense">
        <Grid container justify="flex-end">
          {user ? (
            <Button onClick={() => auth?.signOut()} variant="outlined">
              Выйти
            </Button>
          ) : (
            <NavLink to={HOME_ROUTE}>
              <Button variant="outlined">Логин</Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export { NavBar };