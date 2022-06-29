import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button,Stack} from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h1>Material Ui</h1>
    <Stack spacing={10} direction="row">
      <Button variant="text" startIcon={<SettingsIcon/>}> Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    </div>
  )
}

export default App
