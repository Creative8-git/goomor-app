import React, {} from 'react';

const Modelviewer = () => {
  return(
    <div>
      <div className="modelo-wrapper">
      <div style={{ width: '100%', paddingBottom: '56.25%', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
          <iframe
            title="Modelo Viewer"
            src="https://www.modelo.io/embedded/1844230467414241280?viewport=true&autoplay=false&autorotate=false&hideTools=false&showBIM=false&showBBoxSize=false&showKooRender=false&showSettings=false&showFullScreen=true&showLogo=true&showUploadModels=true&c_at0=13.159043265747071&c_at1=20.013113929199218&c_at2=13.123353434967042&c_theta=-2.4510128562178575&c_phi=0.19343292519943212&c_dis=44.31381298428009"
            style={{ width: '100%', height: '100%' }}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Modelviewer;
