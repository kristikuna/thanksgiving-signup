import React, { useState, useEffect } from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import { Button, Paper, Typography, Input, TextField } from "@mui/material"
import { styled } from "@mui/system"

const ColumnHeader = styled(TableCell)({
  background: "var(--color-code-bg)",
  minWidth: 170,
})

const SignUpTable = ({ allSignUps = [] }) => {
  const [rows, setRows] = useState([])
  const [isAddingRow, setIsAddingRow] = useState(false)

  console.log(allSignUps)
  useEffect(() => {
    setRows(allSignUps)
  }, [allSignUps])

  const handleAddRow = () => {
    setIsAddingRow(true)
    setRows([...rows, { name: "", food: "" }])
  }

  const handleChange = (index, field, value) => {
    const newRows = [...rows]
    newRows[index][field] = value
    setRows(newRows)
  }

  const handleEditRow = index => {
    // Logic to enable editing, can be customized further
    setIsAddingRow(false)
  }

  const handleDeleteRow = index => {
    const newRows = rows.filter((_, rowIndex) => rowIndex !== index)
    setRows(newRows)
  }
  return (
    <Paper
      sx={{
        background: "var(--color-code-bg)",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "1rem",
        // width: "100%",
        // overflow: "hidden",
      }}
    >
      <TableContainer
        sx={{
          // background: "var(--color-code-bg)",
          padding: "1rem",
          paddingInline: "5%",
          maxHeight: 440,
        }}
      >
        <Typography variant="h5">Sign Up Table</Typography>
        <Table stickyHeader aria-label="potluck table">
          <TableHead>
            <TableRow>
              <ColumnHeader>Name</ColumnHeader>
              <ColumnHeader>What You're Bringing</ColumnHeader>
              <ColumnHeader>Food Prep Needs</ColumnHeader>
              <ColumnHeader>Category</ColumnHeader>
              <ColumnHeader>Notes</ColumnHeader>
              <ColumnHeader>Actions</ColumnHeader>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  {isAddingRow && index === rows.length - 1 ? (
                    <Input
                      type="text"
                      value={row.name}
                      onChange={e =>
                        handleChange(index, "name", e.target.value)
                      }
                    />
                  ) : (
                    <Typography>{row.node?.name}</Typography>
                  )}
                </TableCell>
                <TableCell>
                  {isAddingRow && index === rows.length - 1 ? (
                    <Input
                      type="text"
                      value={row.food}
                      onChange={e =>
                        handleChange(index, "food", e.target.value)
                      }
                    />
                  ) : (
                    <Typography>{row.node?.food}</Typography>
                  )}
                </TableCell>
                <TableCell>
                  {isAddingRow && index === rows.length - 1 ? (
                    <Input
                      type="text"
                      value={row.foodPrepNeeds}
                      onChange={e =>
                        handleChange(index, "foodPrepNeeds", e.target.value)
                      }
                    />
                  ) : (
                    <Typography>{row.node?.foodPrepNeeds}</Typography>
                  )}
                </TableCell>
                <TableCell>
                  {isAddingRow && index === rows.length - 1 ? (
                    <Input
                      type="text"
                      value={row.category}
                      onChange={e =>
                        handleChange(index, "category", e.target.value)
                      }
                    />
                  ) : (
                    <Typography>{row.node?.category}</Typography>
                  )}
                </TableCell>
                <TableCell>
                  {isAddingRow && index === rows.length - 1 ? (
                    <TextField
                      type="text"
                      value={row.notes}
                      onChange={e =>
                        handleChange(index, "notes", e.target.value)
                      }
                    />
                  ) : (
                    <Typography>{row.node?.notes}</Typography>
                  )}
                </TableCell>
                <TableCell>
                  {isAddingRow && index === rows.length - 1 ? (
                    <Button onClick={() => setIsAddingRow(false)}>Save</Button>
                  ) : (
                    <>
                      <Button onClick={() => handleEditRow(index)}>Edit</Button>
                      <Button onClick={() => handleDeleteRow(index)}>
                        Delete
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button onClick={handleAddRow}>Add Row</Button>
      </TableContainer>
    </Paper>
  )
}

export default SignUpTable
