
import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PeopleIcon from '@material-ui/icons/People'
import BarChartIcon from '@material-ui/icons/BarChart'
import LayersIcon from '@material-ui/icons/Layers'
import AssignmentIcon from '@material-ui/icons/Assignment'
import List from '@material-ui/core/List'
import { ListMenuEnum, ContentKeyEnum } from './enum'

const mainListItems = [
  {
    key: ContentKeyEnum.dashBoard,
    text: 'Dashboard',
    icon: <DashboardIcon />
  },
  {
    key: ContentKeyEnum.noval,
    text: 'Novals',
    icon: <ShoppingCartIcon />
  },
  {
    key: ContentKeyEnum.user,
    text: 'Users',
    icon: <PeopleIcon />
  },
  {
    key: 'reports',
    text: 'Reports',
    icon: <BarChartIcon />
  },
  {
    key: 'integrations',
    text: 'Integrations',
    icon: <LayersIcon />
  },
]

const secondaryListItems = [
  {
    key: 'currentMonth',
    text: 'Current month',
    icon: <AssignmentIcon />
  },
  {
    key: 'lastQuarter',
    text: 'Last quarter',
    icon: <AssignmentIcon />
  },
  {
    key: 'yearEndSale',
    text: 'Year-end sale',
    icon: <AssignmentIcon />
  }
]

const MenuItems = (props: any) => {
  const { itemType, text, subHeaderText = 'Saved reports', items,
    updateContentKey
  } = props
  let menuItems = mainListItems
  if (itemType === ListMenuEnum.secondary) {
    menuItems = secondaryListItems
  }
  if (items) menuItems = items

  return (
    <List>
      {itemType === ListMenuEnum.secondary && <ListSubheader inset>{text ? text[subHeaderText] : subHeaderText}</ListSubheader>}
      {(menuItems.map((item, index) => (
        <ListItem button key={`${item.key}-${index}`} onClick={(e: any) => {
          updateContentKey && typeof updateContentKey === 'function' && updateContentKey(item.key)
        }}>
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={text ? text[item.key] : item.text} />
        </ListItem>
      )))}
    </List>
  )
}

export default MenuItems