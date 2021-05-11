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
    alignItems: 'center',
    display:'flex',
},
menu:{
    width:"100%",
    height:"10%",
    cursor:'pointer',
    display:'flex',
    textAlign:'center',
    alignItems: 'center',
    background: 'LightBlue',
    borderBottom:'1px solid black',
    justifyContent:'center',
},
paper:{
    height:'10%',
    alignItems: "center",
    background: "LightBlue",
    borderBottom:'1px solid black',
    flexGrow:0,
},
buttonArrow:{
    height:"100%",
    width:"auto",
    flexGrow:1,
    justifyContent:"space-between",
    alignItems: 'center',
    marginLeft:'100%',
},
drawerButtons:{
    alignItems: 'center',
    display:'flex',
    textAlign:"center",
    justifyContent:'space-evenly',
    border:'1px solid black',
    height:"100%"
},
drawerButton:{
    alignItems: 'center',
    textAlign:'center',
    display:'flex',
    justifyContent:'space-evenly',
    flexGrow:1,
    height:'100%',
    border:'1px solid black',
},
});

const NavPanel = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const history = useHistory();
    const classes = useStyles();
    const redirectTo = (path: string, name: string) => <div className={classes.drawerButton} onClick={()=>{ history.push(path) }}>{name}</div>
    return (
        <Container maxWidth={'xl'}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className = {classes.menu}
        >
            <div className={classes.buttonArrow}><ArrowDownwardIcon/></div>
            <Drawer
                open={isOpen}
                className = {classes.drawer}
                anchor={'top'}
                variant = 'persistent'
                classes={{ paper: classes.paper }}
            >
            <Container className = {classes.drawerButtons} maxWidth={false}>
            {redirectTo('/','Home')}
            {redirectTo('/Clicker','Clicker')}
            {redirectTo('/','Home')}

            </Container>
        </Drawer>
        <hr/>
        </Container>
    );
}
export default NavPanel;