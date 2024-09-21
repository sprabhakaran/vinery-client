import * as React from 'react';
import DraftsIcon from '@mui/icons-material/Drafts';
import InboxIcon from '@mui/icons-material/Inbox'
import {Collapse, ListItemButton, ListItemIcon, ListItemText, ListSubheader, List, ListItem} from "@mui/material";
import {ExpandLess, StarBorder, SendIcon} from "@mui/icons-material";
import Box from "@mui/material/Box";
import DashboardIcon from '@mui/icons-material/Dashboard';
import FenceIcon from '@mui/icons-material/Fence';
import CompressIcon from '@mui/icons-material/Compress';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import LiquorIcon from '@mui/icons-material/Liquor';
import {NavLink} from "react-router-dom";

function LeftNav() {
    return (
        <Box>
            <List>
                <ListItem>
                    <NavLink to="dashboard">
                        <ListItemButton>
                            <ListItemIcon>
                                <DashboardIcon></DashboardIcon>
                            </ListItemIcon>
                            <ListItemText primary='Dashboard'/>
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="vineyard">
                        <ListItemButton selected>
                            <ListItemIcon>
                                <FenceIcon></FenceIcon>
                            </ListItemIcon>
                            <ListItemText primary='Vineyard'/>
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="grape">
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon></InboxIcon>
                            </ListItemIcon>
                            <ListItemText primary='Grape'/>
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="ferment">
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon></InboxIcon>
                            </ListItemIcon>
                            <ListItemText primary='Ferment'/>
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="press">
                        <ListItemButton>
                            <ListItemIcon>
                                <CompressIcon></CompressIcon>
                            </ListItemIcon>
                            <ListItemText primary='Press'/>
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="fill">
                        <ListItemButton>
                            <ListItemIcon>
                                <FormatColorFillIcon></FormatColorFillIcon>
                            </ListItemIcon>
                            <ListItemText primary='Fill'/>
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="bottle">
                        <ListItemButton>
                            <ListItemIcon>
                                <LiquorIcon></LiquorIcon>
                            </ListItemIcon>
                            <ListItemText primary='Bottle'/>
                        </ListItemButton>
                    </NavLink>
                </ListItem>
            </List>
        </Box>
    );
}

export default LeftNav;