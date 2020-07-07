import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

// Generate Order Data
function createData(id: number, date: string, name: string, shipTo: string, paymentMethod: string, amount: number) {
  return { id, date, name, shipTo, paymentMethod, amount }
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
]

const cols = [{
  key: 'date',
  text: 'Date'
},
{
  key: 'name',
  text: 'Name'
},
{
  key: 'shipTo',
  text: 'Ship To'
},
{
  key: 'paymentMethod',
  text: 'Payment Method'
},
{
  key: 'saleAmount',
  text: 'Sale Amount'
}]

// function preventDefault(event: any) {
//   event.preventDefault()
// }

const useStyles = makeStyles((theme) => ({
  rootTable: {
    marginBottom: theme.spacing(4)
  },
}))

const CustomTable = (props: any) => {
  const { text } = props
  const classes = useStyles()
  return (
    <Table size='small' className={classes.rootTable}>
      <TableHead>
        <TableRow>
          {cols.map((col, index) => (
            <TableCell align={index === cols.length - 1 ? 'right' : 'left'} key={`${col.key}-${index}`}>{text? text[col.key] || col.text : col.text}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row: any) => (
          <TableRow key={row.id}>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.shipTo}</TableCell>
            <TableCell>{row.paymentMethod}</TableCell>
            <TableCell align='right'>{row.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default CustomTable