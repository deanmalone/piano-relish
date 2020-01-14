import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from './logo.svg'
import green from '@material-ui/core/colors/green';
import Keyboard from './components/Keyboard';
import Notation from './components/Notation';
import { PianoNote } from './core/PianoNote';
import { PianoService } from './core/PianoService'
import { SoundService } from './core/SoundService'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    notation: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    keyboard: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: green[50],
    },
  }),
);

const maxNotes = 32;

const pianoService = new PianoService();
const soundService = new SoundService();

const App: React.FC = () => {

  const classes = useStyles();

  const [notes, setNotes] = React.useState<PianoNote[]>([]);

  const handleKeyPress = (keyId: number) => {
    console.log(keyId);
    const note = pianoService.getNoteByKeyId(keyId);
    soundService.playNote(keyId);
    addNote(note)
  }

  const handleClearClick = () => {
    setNotes([]);
  }

  const addNote = (note: PianoNote) => {
    if (notes.length === maxNotes) {
      setNotes([
        note
      ])
    }
    else {
      setNotes([
        ...notes,
        note
      ])
    }
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} alt="Logo" />
          <div className={classes.grow} />
          <Button color="inherit" onClick={handleClearClick}>Clear</Button>
        </Toolbar>
      </AppBar>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.notation} elevation={1}>
              <Notation notes={notes} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.keyboard}>
              <Keyboard highlightedKeyId={0} onKeyPress={handleKeyPress} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
