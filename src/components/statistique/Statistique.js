import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar'
import ProgressProvider from '../../ProgressProvider'
import 'react-circular-progressbar/dist/styles.css'

const Statistique = () => {
    const percentage = 45

    return (
        <div id="Stratégie">
             <section className="section cta">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center text-white">
                <h1 className="lh-base">
                  Start controlling your contributions, <br />
                  together with GititBack !
                </h1>
                <p className="mt-4 lh-base text-white-50">
                  The generated lorem is therefore always free trial from
                  explore we denounce <br /> with righteous indignation and
                  dislike men{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-3 gx-sm-5">
            <div className="col-lg-3 col-md-6">
              <div style={{ width: 200, height: 200 }}>
                <ProgressProvider valueStart={0} valueEnd={percentage}>
                  {(value) => (
                    <CircularProgressbar
                      value={value}
                      text={`${percentage}%`}
                    />
                  )}
                </ProgressProvider>
              </div>{' '}
            </div>
            <div className="col-lg-3 col-md-6">
              <div style={{ width: 200, height: 200 }}>
                <ProgressProvider valueStart={0} valueEnd={percentage}>
                  {(value) => (
                    <CircularProgressbar
                      value={value}
                      text={`${percentage}%`}
                    />
                  )}
                </ProgressProvider>
              </div>{' '}
            </div>
            <div className="col-lg-3 col-md-6">
              <div style={{ width: 200, height: 200 }}>
                <ProgressProvider valueStart={0} valueEnd={percentage}>
                  {(value) => (
                    <CircularProgressbar
                      value={value}
                      text={`${percentage}%`}
                    />
                  )}
                </ProgressProvider>
              </div>{' '}
            </div>
            <div className="col-lg-3 col-md-6">
              <div style={{ width: 200, height: 200 }}>
                <ProgressProvider valueStart={0} valueEnd={percentage}>
                  {(value) => (
                    <CircularProgressbar
                      value={value}
                      text={`${percentage}%`}
                    />
                  )}
                </ProgressProvider>
              </div>{' '}
            </div>
          </div>
        </div>
      </section>
        </div>
    );
}

export default Statistique;
