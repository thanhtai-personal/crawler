import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { ButtonGroup, Button } from '@material-ui/core'
import { CloudUpload as CloudUploadIcon } from '@material-ui/icons'

// Generate Order Data
function createData(id: number, name: string, author: string, date: string, status: string, lastChapter: number,
  lastUpdateUser: string, linkedKey: string) {
  return { id, name, author, date, status, lastChapter, linkedKey }
}

const rows = [
  createData(0, 'Thái sơ', 'Cao Lâu Đại Hạ', '00:00:00 07/07/2020', 'Success', 1000, 'Tai Tran', 'thai_so'),
  createData(1, 'Tru tiên 2', 'Tiêu Đỉnh', '00:00:00 07/07/2020', 'Failed', 1000, 'Tai Tran', 'tru_tien_2'),
  createData(2, 'Thế giới tu chân', 'Phương Tưởng', '00:00:00 07/07/2020', 'Pending', 1000, 'Tai Tran', 'the_gioi_tu_chan'),
  createData(3, 'Cực võ', 'Ngoan Ngoãn', '00:00:00 07/07/2020', 'Success', 1000, 'Tai Tran', 'cuc_vo'),
  createData(4, 'Vạn cổ thần đế', 'Phi Thiên Ngư', '00:00:00 07/07/2020', 'Success', 1000, 'Tai Tran', 'van_co_than_de'),
]

const cols = [{
  key: 'name',
  text: 'Tên truyện'
},
{
  key: 'author',
  text: 'Tác giả'
},
{
  key: 'date',
  text: 'Thời gian cập nhật'
},
{
  key: 'status',
  text: 'Trạng thái'
},
{
  key: 'lastChapter',
  text: 'Số chương'
},
{
  key: 'lastUpdateUser',
  text: 'Người cập nhật'
}]

// function preventDefault(event: any) {
//   event.preventDefault()
// }

const useStyles = makeStyles((theme) => ({
  rootTable: {
    marginBottom: theme.spacing(4)
  },
  tableHead: {
    backgroundColor: 'gray'
  },
  buttonGroup: {
  },
  button: {
    color: 'orange'
  }
}))

const CustomTable = (props: any) => {
  const { text, isCrawlingAll, crawlingSingle, isCrawlingSingleObj = {}, siteKey } = props
  const classes = useStyles()
  return (
    <Table size='small' className={classes.rootTable}>
      <TableHead className={classes.tableHead}>
        <TableRow>
          {cols.map((col, index) => (
            <TableCell align={index === cols.length - 1 ? 'right' : 'left'} key={`${col.key}-${index}`}>{text? text[col.key] || col.text : col.text}</TableCell>
          ))}
          <TableCell align={'left'} key='action'>{text?.action || 'Actions'}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row: any) => (
          <TableRow key={row.id}>
            {cols.map((col, index) => (
              <TableCell align={index === cols.length - 1 ? 'right' : 'left'} key={`${col.key}${index}`}>{row[col.key]}</TableCell>
            ))}
            <TableCell align={'right'} key='button-group'>
            <ButtonGroup className={classes.buttonGroup} size='small' aria-label='small outlined button group'>
                <Button
                  endIcon={<CloudUploadIcon />}
                  onClick={(e: any) => {
                    e.stopPropagation()
                    crawlingSingle &&  typeof crawlingSingle === 'function' && crawlingSingle(siteKey, row.linkedKey)
                  }}
                  className={classes.button}
                  disabled={isCrawlingAll || isCrawlingSingleObj[row.linkedKey]?.isCrawlingSingle}
                >
                  {text?.crawlingData || 'Crawling'}
                </Button>
              </ButtonGroup>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default CustomTable