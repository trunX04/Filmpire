import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    imageLink: {
        display:'flex',
        justifyContent: 'center',
        padding: '10% 0',
    },
    image: {
        width: '90%',
    },
    links: {
        color: theme.palette.text.primary,
        textDecortaion: 'none',
    },
    genreImage: {
        filter: theme.palette.mode === 'dark' && 'invert(1)',
    },
}));
