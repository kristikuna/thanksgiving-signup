import React, { useState } from "react"
import { Button, TextField, Paper, Typography, Collapse } from "@mui/material"

const Add = () => {
  const [showForm, setShowForm] = useState(false)

  const handleButtonClick = () => {
    setShowForm(prev => !prev)
  }

  return (
    <>
      <Button variant="contained" onClick={handleButtonClick}>
        {showForm ? "Close Sign Up" : "Add to Sign Up"}
      </Button>

      <Collapse in={showForm}>
        <Paper elevation={3} sx={{ marginTop: 2, padding: 2 }}>
          <Typography variant="h6">Your Form</Typography>
          <form>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
            />
            <Button variant="contained" type="submit" color="primary">
              Submit
            </Button>
          </form>
        </Paper>
      </Collapse>
    </>
  )
}

export default Add
