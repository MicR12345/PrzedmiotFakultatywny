import { Container, Drawer } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Height } from '@material-ui/icons';

const useStyles = makeStyles({
drawer:{
    width:'100%',
    height:'100%',
},
menu:{
    height:"10%",
    cursor:'pointer',
    display:'flex',

},
paper:{
    height:'10%'
}

});

const NavPanel = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const history = useHistory();
    const classes = useStyles();
    const redirectTo = (path: string, name: string) => <div onClick={()=>{ history.push(path) }}>{name}</div>

    return (
    <div>
        <Container maxWidth={false}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className = {classes.menu}
        >
            <ArrowDownwardIcon/>
            <Drawer
                open={isOpen}
                className = {classes.drawer}
                anchor={'top'}
                variant = 'persistent'
                classes={{ paper: classes.paper }}
            >
            <div>
            </div>
        </Drawer>
        </Container>
    </div>
    );
}
export default NavPanel;