import React from 'react';
import Button from '@mui/material/Button'

const ProjectPart = () => {
    return (
        <div id="Projets">
             <section className="section features">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="text-center">
                <div className="heading">
                  <h2 className="mb-0">NOS PROJETS</h2>
                  <div className="box first"></div>
                </div>
                <p className="text-muted">
                  {/* All the features. No hidden layers.{' '} */}
                </p>
              </div>
            </div>
          </div>

          <div className="row g-3 gx-sm-5">
            <div className="col-lg-4 col-md-6">
              <div className="features-box mt-4 p-5">
                {/* <div className="avatar-sm features-icon">
                   <span className="avatar-title gradients">
                    <i className="mdi mdi-file-document-edit-outline"></i>
                  </span> 
                </div>  */}
                <h5 className="features-title fs-5 fw-bold">Diagnose me</h5>
                {/* <p className="mt-4 mb-0 text-muted">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little.
                </p> 
              */}
                <div className="row">
                  <div className="col-lg-8"></div>
                  <div className="col-lg-4">
                    <Button
                      className="mt-4"
                      variant="contained"
                      size="small"
                      onClick={() => console.log('click btn')}
                      data-bs-toggle="modal"
                      data-bs-target="#diagnoseMe"
                    >
                      Détails
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="features-box mt-4 p-5">
                <h5 className="features-title fs-5 fw-bold">Thérapie VR</h5>
                {/* <p className="mt-4 mb-0 text-muted">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little.
                </p>
                <Button
                  className="mt-4"
                  variant="contained"
                  size="small"
                  onClick={() => console.log('click btn')}
                >
                  plus de détails
                </Button> */}
                <div className="row">
                  <div className="col-lg-8"></div>
                  <div className="col-lg-4">
                    <Button
                      className="mt-4"
                      variant="contained"
                      size="small"
                      onClick={() => console.log('click btn')}
                    >
                      Détails
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="features-box mt-4 p-5">
                <h5 className="features-title fs-5 fw-bold">Pousse Seringue</h5>
                {/* <p className="mt-4 mb-0 text-muted">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little.
                </p>
                <Button
                  className="mt-4"
                  variant="contained"
                  size="small"
                  onClick={() => console.log('click btn')}
                >
                  plus de détails
                </Button> */}
                <div className="row">
                  <div className="col-lg-8"></div>
                  <div className="col-lg-4">
                    <Button
                      className="mt-4"
                      variant="contained"
                      size="small"
                      onClick={() => console.log('click btn')}
                    >
                      Détails
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="features-box mt-4 p-5">
                <h5 className="features-title fs-5 fw-bold">
                  Stérilisateur UVC
                </h5>
                {/* <p className="mt-4 mb-0 text-muted">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence.
                </p>
                <Button
                  className="mt-4"
                  variant="contained"
                  size="small"
                  onClick={() => console.log('click btn')}
                >
                  plus de détails
                </Button> */}
                <div className="row">
                  <div className="col-lg-8"></div>
                  <div className="col-lg-4">
                    <Button
                      className="mt-4"
                      variant="contained"
                      size="small"
                      onClick={() => console.log('click btn')}
                    >
                      Détails
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="features-box mt-4 p-5">
                <h5 className="features-title fs-5 fw-bold">
                  Coeur Artificiel
                </h5>
                {/* <p className="mt-4 mb-0 text-muted">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrovee.
                </p>
                <Button
                  className="mt-4"
                  variant="contained"
                  size="small"
                  onClick={() => console.log('click btn')}
                >
                  plus de détails
                </Button> */}
                <div className="row">
                  <div className="col-lg-8"></div>
                  <div className="col-lg-4">
                    <Button
                      className="mt-4"
                      variant="contained"
                      size="small"
                      onClick={() => console.log('click btn')}
                    >
                      Détails
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="features-box mt-4 p-5">
                <h5 className="features-title fs-5 fw-bold">
                  Ventilateur 12 modes{' '}
                </h5>
                {/* <p className="mt-4 mb-0 text-muted">
                  The European languages are members of the same family. Their
                  separate existence is a myth. For science, music, sport, etc,
                  Europe uses the same vocabulary. The languages
                </p>
                <Button
                  className="mt-4"
                  variant="contained"
                  size="small"
                  onClick={() => console.log('click btn')}
                >
                  plus de détails
                </Button> */}
                <div className="row">
                  <div className="col-lg-8"></div>
                  <div className="col-lg-4">
                    <Button
                      className="mt-4"
                      variant="contained"
                      size="small"
                      onClick={() => console.log('click btn')}
                    >
                      Détails
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mt-5 text-center">
            <a
              href="javascript:void(0)"
              className="btn btn-primary text-uppercase"
            >
              Start for free
            </a>
          </div> */}
        </div>
      </section>
        </div>
    );
}

export default ProjectPart;
