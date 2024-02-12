import React from "react";

const MagazinesInner = () => {
  
  const openFullScreen = (imageUrl) => {
    const fullScreenDiv = document.createElement('div');
    fullScreenDiv.style.position = 'fixed';
    fullScreenDiv.style.top = '0';
    fullScreenDiv.style.left = '0';
    fullScreenDiv.style.width = '100%';
    fullScreenDiv.style.height = '100%';
    fullScreenDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    fullScreenDiv.style.display = 'flex';
    fullScreenDiv.style.justifyContent = 'center';
    fullScreenDiv.style.alignItems = 'center';
    fullScreenDiv.style.zIndex = '9999';

    const image = document.createElement('img');
    image.src = imageUrl;
    image.style.maxWidth = '90%';
    image.style.maxHeight = '90%';
    image.style.cursor = 'pointer';
    image.onclick = () => fullScreenDiv.remove();

    fullScreenDiv.appendChild(image);
    document.body.appendChild(fullScreenDiv);
  };

  return (
    <>
    <section id="projectsGallery" class="projects projects-gallery">
      <div class="container">
        <div class="row">
       
          <div className="col-sm-6 col-md-6 col-lg-4 pd-bottom-45">
            <div className="project-item">
              <div className="project__img">
                <img
                  src="/assets/img/Magzines/mag1.jpg"
                  alt="project img"
                  onClick={() => openFullScreen("/assets/img/Magzines/mag1.jpg")}
                />
              </div>
            </div>
          </div>
         
          <div className="col-sm-6 col-md-6 col-lg-4 pd-bottom-45">
            <div className="project-item">
              <div className="project__img">
                <img
                  src="/assets/img/Magzines/mag2.jpg"
                  alt="project img"
                  onClick={() => openFullScreen("/assets/img/Magzines/mag2.jpg")}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-4 pd-bottom-45">
            <div className="project-item">
              <div className="project__img">
                <img
                  src="/assets/img/Magzines/mag3.jpg"
                  alt="project img"
                  onClick={() => openFullScreen("/assets/img/Magzines/mag3.jpg")}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-4 pd-bottom-45">
            <div className="project-item">
              <div className="project__img">
                <img
                  src="/assets/img/Magzines/mag4.jpg"
                  alt="project img"
                  onClick={() => openFullScreen("/assets/img/Magzines/mag4.jpg")}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-4 pd-bottom-45">
            <div className="project-item">
              <div className="project__img">
                <img
                  src="/assets/img/Magzines/mag5.jpg"
                  alt="project img"
                  onClick={() => openFullScreen("/assets/img/Magzines/mag5.jpg")}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-4 pd-bottom-45">
            <div className="project-item">
              <div className="project__img">
                <img
                  src="/assets/img/Magzines/mag6.jpg"
                  alt="project img"
                  onClick={() => openFullScreen("/assets/img/Magzines/mag6.jpg")}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-4 pd-bottom-45">
            <div className="project-item">
              <div className="project__img">
                <img
                  src="/assets/img/Magzines/mag7.jpg"
                  alt="project img"
                  onClick={() => openFullScreen("/assets/img/Magzines/mag7.jpg")}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-4 pd-bottom-45">
            <div className="project-item">
              <div className="project__img">
                <img
                  src="/assets/img/Magzines/mag8.jpg"
                  alt="project img"
                  onClick={() => openFullScreen("/assets/img/Magzines/mag8.jpg")}
                />
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
    </>
  );
};

export default MagazinesInner;