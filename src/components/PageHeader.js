import { Card, makeStyles, Paper, Typography } from '@material-ui/core';

const styles = makeStyles( theme =>({
    root:{
        backgroundColor:"#fff",
        // transform:"translateƵ(4)"
    },
    PageHeader:{
        padding :theme.spacing(4),
        display:"flex",
        marginBottom:theme.spacing(2),
        color:"black"
    },
    pageIcon:{
        display:"inline-block",
        padding:theme.spacing(2),
        color:"#3c44b1",
        marginRight:theme.spacing(3)
    },
    pageTitle:{
        paddingLeft:theme.spacing(2),
        '& .MuiTypography-subtitle2':{
            opacity:"0.6 "
        }
    }
    
}));
    
function PageHeader(props)
{    
    const {title,subtitle,icon} = props;
    const classes = styles();
    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.PageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div className={classes.pageTitle} >
                <Typography
                    variant = "h6"
                    component = "div">
                        {title}
                    </Typography>
                    <Typography variant="subtitle2" component="div">
                        {subtitle}
                    </Typography>

                </div>
            </div>
        </Paper>
    )
}

export default PageHeader;