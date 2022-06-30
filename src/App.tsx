import { useState } from 'react'
import logo from './logo.svg'
import './App.css';
import theme from './theme';
import { Button,Stack,Typography,styled} from '@mui/material'

import {Add,Settings} from '@mui/icons-material';
function App() {
  const [count, setCount] = useState(0)
const BlueButton = styled(Button)({
  
  color:"#fff",
  margin:"50",
  "&:hover" : {
    backgroundColor:"white",
    color:"red"
  }
})
  return (
    <div className="App">
      <BlueButton size="large" variant='contained' startIcon={<Add/>} color="error"> Blue button</BlueButton>
    <h1>Material Ui</h1>
    <Stack spacing={5} direction="row">
      <Button variant="contained" startIcon={<Settings/>} size="large" color="success"> Text</Button>
      <Button variant="contained" disabled>Contained</Button>
      <Button variant="contained" startIcon={<Add/>} size="large" color="success">Add new Post</Button>
    </Stack>
    <Typography variant="h1" component="h1">H1 heading</Typography>
    </div>
  )
}

export default App
