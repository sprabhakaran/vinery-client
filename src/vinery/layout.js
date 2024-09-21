import React from 'react';
import Box from "@mui/material/Box";
import LeftNav from "./leftnav";
import VineryAppBar from "./app_bar";
import {Stack} from "@mui/material";
import Container from "@mui/material/Container";
import {Outlet} from "react-router-dom";

function VineryLayout() {
    return (
        <Box>
            <VineryAppBar/>
            <Container maxWidth='xl'>
                <Stack direction='row' spacing={5} justifyContent='left'>
                    <LeftNav></LeftNav>
                    <Box>
                        <Outlet/>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}

export default VineryLayout;