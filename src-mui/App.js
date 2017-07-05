import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

class App extends React.Component{
    render(){
        const style = {
  margin: 12,
  marginRight: 20,

};
const styles={
        smallIcon: {
    width: 36,
    height: 36,
  },mediumIcon: {
    width: 48,
    height: 48,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
}
        return(
            <MuiThemeProvider>
            <div>
             <FontIcon className="material-icons">home</FontIcon>
                 <FloatingActionButton style={style}>
      <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton mini={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton secondary={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton mini={true} secondary={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton disabled={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton mini={true} disabled={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
                <RaisedButton label="Default" style={style} />
                <RaisedButton label="Primary" primary={true} style={style} />
                <RaisedButton label="Secondary" secondary={true} style={style} />
                <RaisedButton label="Disabled" disabled={true} style={style} />
                <RaisedButton label="Full width" fullWidth={true} />
                 <IconButton>
      <ActionHome />
    </IconButton>

    <IconButton
      iconStyle={styles.smallIcon}
      style={styles.small}
    >
      <ActionHome />
    </IconButton>

    <IconButton
      iconStyle={styles.mediumIcon}
      style={styles.medium}
    >
      <ActionHome />
    </IconButton>

    <IconButton
      iconStyle={styles.largeIcon}
      style={styles.large}
    >
      <ActionHome />
    </IconButton>

            </div>
            </MuiThemeProvider>
        )
    }
}
export default App