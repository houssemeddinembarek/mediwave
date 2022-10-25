import React, {useState} from 'react'
import { Typography } from '@mui/material'
import Popover from '@mui/material/Popover'
import { FaInfoCircle } from 'react-icons/fa'

const DescriptionMediwave = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget)
      }
    const handlePopoverClose = () => {
        setAnchorEl(null)
      }
    
      const open = Boolean(anchorEl)
  return (
    <div id="descriptionMediwave">
      <div className="container mt-5">
        <div className="text-center">
          <div className="heading">
            <h2 className="mb-0">Description Mediwave:</h2>
            <div className="box first"></div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-4">
            <div className="mt-5 text-center">
              <p
                className="cta-text"
                style={{ color: '#505050', fontWeight: 'bold' }}
              >
                Objectif{' '}
                <span>
                  <FaInfoCircle
                    style={{ color: '#4baae9' }}
                    aria-owns={open ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                  />
                  :
                </span>
              </p>
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'left',
                  horizontal: 'top',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography sx={{ p: 1 }}>
                  objectif maximal : 2500 KTND.
                </Typography>
              </Popover>

              <h1 className="cta-heading">
                <div className="d-flex justify-content-center">
                  {/* <AnimatedNumbers
                    includeComma
                    animateToNumber={num}
                    style={{}}
                    fontStyle={{
                      fontSize: 'calc(1.2825rem + .39vw)',
                      textAlign: 'center',
                      color: '#ff7f29',
                    }}
                    duration={1000}
                    configs={[
                      { mass: 1, tension: 220, friction: 100 },
                      { mass: 1, tension: 180, friction: 130 },
                      { mass: 1, tension: 280, friction: 90 },
                      { mass: 1, tension: 180, friction: 135 },
                      { mass: 1, tension: 260, friction: 100 },
                      { mass: 1, tension: 210, friction: 180 },
                    ]}
                  ></AnimatedNumbers> */}
                  <p style={{ fontSize: 24, color: '#4baae9' }}>500 KTND</p>
                </div>
              </h1>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="mt-5 text-center">
              <p className="cta-text" style={{ fontWeight: 'bold' }}>
                Levé:
              </p>
              <h1 className="cta-heading">
                <div className="d-flex justify-content-center">
                  <p style={{ fontSize: 24, color: '#4baae9' }}>0</p>
                </div>
              </h1>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="mt-5 text-center">
              <p className="cta-text" style={{ fontWeight: 'bold' }}>
                Actions libérées
              </p>
              <h1 className="cta-heading">
                <div className="d-flex justify-content-center">
                  <p style={{ fontSize: 24, color: '#4baae9' }}>18,7 %</p>
                </div>
              </h1>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="mt-5 text-center">
              <p className="cta-text" style={{ fontWeight: 'bold' }}>
                Evaluation de la société
              </p>
              <h1 className="cta-heading">
                <div className="d-flex justify-content-center">
                  {/* <AnimatedNumbers
                    includeComma
                    animateToNumber={evaluation}
                    style={{}}
                    fontStyle={{
                      fontSize: 'calc(1.2825rem + .39vw)',
                      textAlign: 'center',
                      color: '#ff7f29',
                    }}
                    duration={1000}
                    configs={[
                      { mass: 1, tension: 220, friction: 100 },
                      { mass: 1, tension: 180, friction: 130 },
                      { mass: 1, tension: 280, friction: 90 },
                      { mass: 1, tension: 180, friction: 135 },
                      { mass: 1, tension: 260, friction: 100 },
                      { mass: 1, tension: 210, friction: 180 },
                    ]}
                  ></AnimatedNumbers> */}
                  <p style={{ fontSize: 24, color: '#4baae9' }}>11 520 KTND</p>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DescriptionMediwave
