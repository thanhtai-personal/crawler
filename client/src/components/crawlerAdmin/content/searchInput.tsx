import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      width: 200,
      margin: 'auto',
      height: 'fit-content',
      marginRight: theme.spacing(2),
      backgroundColor: 'white'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    searchIcon: {
      color: 'black'
    }
  }),
)

export default function CustomizedInputBase(props: any) {

  const { text } = props

  const classes = useStyles()

  return (
    <Paper component='form' className={classes.root} onClick={(e: any) => { e.stopPropagation()}}>
      <InputBase
        className={classes.input}
        placeholder={'Tìm kiếm'}
        inputProps={{ 'aria-label': text?.search || 'tìm kiếm' }}
      />
      <IconButton className={classes.iconButton} aria-label='search'>
        <SearchIcon className={classes.searchIcon} />
      </IconButton>
      <Divider className={classes.divider} orientation='vertical' />
    </Paper>
  )
}
