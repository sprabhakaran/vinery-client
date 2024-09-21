import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {Paper, styled} from "@mui/material";
import VineyardCard from "./vineyard_card";

export const Vineyard = () => {
    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <>
            <Box alignItems='left' sx={{ border: '2px solid grey' }}>Vineyard Toolbar</Box>
            <Container maxWidth="lg" sx={{border: '1px solid #fff', marginTop: '12px'}}>
                <Grid container spacing={4}>
                    <Grid item>
                        <VineyardCard name="Sula Vineyards" address="" geo={""}/>
                    </Grid>
                    <Grid item>
                        <VineyardCard name="Vallonne Vineyards" address="" geo={""}/>
                    </Grid>
                    <Grid item>
                        <VineyardCard name="Chandon India winery" address="" geo={""}/>
                    </Grid>
                    <Grid item>
                        <VineyardCard name="York Winery" address="" geo={""}/>
                    </Grid>
                    <Grid item>
                        <VineyardCard name="Vallonne Vineyards" address="" geo={""}/>
                    </Grid>
                    <Grid item>
                        <VineyardCard name="Vallonne Vineyards" address="" geo={""}/>
                    </Grid>
                    <Grid item>
                        <VineyardCard name="Vallonne Vineyards" address="" geo={""}/>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}