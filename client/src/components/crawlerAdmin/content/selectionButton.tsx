import React from 'react'
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import InputBase from '@material-ui/core/InputBase'
import { SortingEnum } from './../enum'
import { Typography } from '@material-ui/core'

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '\'Segoe UI\'',
        'Roboto',
        '\'Helvetica Neue\'',
        'Arial',
        'sans-serif',
        '\'Apple Color Emoji\'',
        '\'Segoe UI Emoji\'',
        '\'Segoe UI Symbol\'',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),
)(InputBase)

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    root: {
      margin: 'auto'
    }
  }),
)


const sortOptions = [
  {
    key: SortingEnum.name,
    value: SortingEnum.name,
    text: 'Tên'
  },
  {
    key: SortingEnum.date,
    value: SortingEnum.date,
    text: 'Ngày cập nhật'
  },
  {
    key: SortingEnum.status,
    value: SortingEnum.status,
    text: 'Trạng thái'
  }
]

export function CustomizedSelects(props: any) {
  const { options = sortOptions, text, onChange, id } = props
  const classes = useStyles()
  const [value, setValue] = React.useState(options[0].value)
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange && typeof onChange === 'function' && onChange()
    setValue(event.target.value as string)
  }
  return (
    <div className={classes.root} onClick={(e: any) => { e.stopPropagation() }}>
      <FormControl className={classes.margin}>
        <NativeSelect
          id={id || 'demo-customized-select-native'}
          value={value}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          {options.map((opt: any, index: number) => (
            <option key={`${opt.key}-${index}`} value={opt.value}>{opt.text}</option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  )
}
