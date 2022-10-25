import * as React from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Zoom from '@mui/material/Zoom'
import Fab from '@mui/material/Fab'
import { green } from '@mui/material/colors'
import Box from '@mui/material/Box'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  }
}

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
}

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
}

export default function FloatingActionButtonZoom() {
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  }

  const fabs = [
    {
      color: 'primary',
      sx: fabStyle,
      label: 'Add',
    },
    {
      color: 'secondary',
      sx: fabStyle,
      label: 'Edit',
    },
    {
      color: 'inherit',
      sx: { ...fabStyle, ...fabGreenStyle },
      label: 'Expand',
    },
  ]

  return (
    <div className="row mt-5">
      <div className="col-lg-3"></div>
      <div className="col-lg-6">
        <Box
          sx={{
            bgcolor: 'background.paper',
            width: 900,
            position: 'relative',
            minHeight: 200,
          }}
        >
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="action tabs example"
            >
              <Tab label="IDEA" {...a11yProps(0)} />
              <Tab label="STRATEGY" {...a11yProps(1)} />
              <Tab label="TEAM" {...a11yProps(2)} />
              <Tab label="ATTACHMENTS" {...a11yProps(3)} />
              <Tab label="INVESTORS" {...a11yProps(4)} />
              <Tab label="Q&A" {...a11yProps(5)} />
              <Tab label="PRESS" {...a11yProps(6)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}></TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              Item Three
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              Item Three
            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>
              <div className="col_lg-12 d-flex flex-row">
                <div className="col-lg-3">
                  <div className="card" style={{ width: '100%' }}>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card" style={{ width: '100%' }}>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card" style={{ width: '100%' }}>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card" style={{ width: '100%' }}>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example</p>
                    </div>
                  </div>
                </div>
              </div>{' '}
            </TabPanel>
            <TabPanel value={value} index={5} dir={theme.direction}>
              Item Three
            </TabPanel>
            <TabPanel value={value} index={6} dir={theme.direction}>
              Item Three
            </TabPanel>
          </SwipeableViews>
          {/* {fabs.map((fab, index) => (
            <Zoom
              key={fab.color}
              in={value === index}
              timeout={transitionDuration}
              style={{
                transitionDelay: `${
                  value === index ? transitionDuration.exit : 0
                }ms`,
              }}
              unmountOnExit
            >
              <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
                {fab.icon}
              </Fab>
            </Zoom>
          ))} */}
        </Box>
      </div>
      <div className="col-lg-3"></div>
    </div>
  )
}
