import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

function SignUpTable({ allSignUps }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="potluck table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>What You're Bringing</TableCell>
            <TableCell>Food Prep Needs</TableCell>
            <TableCell>Allergies</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allSignUps.map(signUp => (
            <TableRow
              key={signUp.node.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th">{signUp.node.name}</TableCell>
              <TableCell>{signUp.node.food}</TableCell>
              {/* <TableCell>{signUp.node.category}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default SignUpTable
