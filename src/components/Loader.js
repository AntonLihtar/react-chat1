import React from 'react';
import {Box, Button, Container, Grid} from "@mui/material";

const Loger = () => {
  return (
    <Container>
      <Grid container style={{height: window.innerHeight - 50}}
            alignItems={"center"}
            justifyContent={"center"}
      >
        <Grid style={{width: 400, background: 'lightgray'}}
              container
              alignItems={"center"}
              direction={"column"}
        >
          <Box p={5}>
            <Button onClick={login} variant={"outlined"}>Войти с помощью Google</Button>
          </Box>
        </Grid>

      </Grid>
    </Container>
  );
};

export default Loger;