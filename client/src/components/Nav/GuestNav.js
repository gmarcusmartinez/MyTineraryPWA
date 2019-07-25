import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import useStyles from '../../styles/NavbarStyles'

const GuestNav = () => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  const GuestLinks = [
    { to: '/', text: 'Home' },
    { to: '/cities', text: 'Cities' },
    { to: '/login', text: 'Login' },
    { to: '/signup', text: 'Signup' }
  ]

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            style={{ fontFamily: 'Caveat', fontSize: '1.5rem' }}>
            MyTinerary
          </Typography>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <ul
          style={{ listStyle: 'none', paddingInlineStart: '0px', margin: '0' }}>
          {GuestLinks.map(({ to, text, index }) => (
            <li button key={index} style={{ marginLeft: '-25px' }}>
              <p className={classes.navLink}>{text}</p>
              <Divider />
            </li>
          ))}
        </ul>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}>
        <div className={classes.drawerHeader} />
      </main>
    </div>
  )
}
export default GuestNav
