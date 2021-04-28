import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0B72B9'
const arcOrange = '#FFBA60'
const arcWhite = '#ffffff'

export default createMuiTheme ({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        },
        tertiary: {
            main: `${arcWhite}`
        }
    },
    typography: {
        h3 : {
            fontWeight: 300
        }
    }
})