import "./lifestyle.css";

import { handleHover, handleLeave } from "./utils";

const Lifestyle = () => {
  return (
    <>
      <div className="lifestyle-wrapper">
        <div className="lifestyle-intro">
          <h1 className="section-header">Lifestyle</h1>
        </div>

        <div
          className="lifestyle"
          onMouseOver={(e) => handleHover(e)}
          onMouseLeave={(e) => handleLeave(e)}
        >
          <div className="lifestyle-image-wrapper shippy">
            <img src="/assets/archive/lifestyle/shippy.png" alt="" />
            <div className="image-overlay"></div>
          </div>
        </div>

        <div
          className="lifestyle"
          onMouseOver={(e) => handleHover(e)}
          onMouseLeave={(e) => handleLeave(e)}
        >
          <div className="lifestyle-image-wrapper chemical">
            <img src="/assets/archive/lifestyle/chemicals.png" alt="" />
            <div className="image-overlay"></div>
          </div>
        </div>

        <div
          className="lifestyle"
          onMouseOver={(e) => handleHover(e)}
          onMouseLeave={(e) => handleLeave(e)}
        >
          <div className="lifestyle-image-wrapper donpapi">
            <img src="/assets/archive/lifestyle/donpapi.png" alt="" />
            <div className="image-overlay"></div>
          </div>
        </div>

        <div
          className="lifestyle"
          onMouseOver={(e) => handleHover(e)}
          onMouseLeave={(e) => handleLeave(e)}
        >
          <div className="lifestyle-image-wrapper fifty-seven">
            <img src="/assets/archive/lifestyle/57.png" alt="" />
            <div className="image-overlay"></div>
          </div>
        </div>

        <div
          className="lifestyle"
          onMouseOver={(e) => handleHover(e)}
          onMouseLeave={(e) => handleLeave(e)}
        >
          <div className="lifestyle-image-wrapper shakkana">
            <img src="/assets/archive/lifestyle/shakkana.png" alt="" />
            <div className="image-overlay"></div>
          </div>
        </div>

        <div
          className="lifestyle"
          onMouseOver={(e) => handleHover(e)}
          onMouseLeave={(e) => handleLeave(e)}
        >
          <div className="lifestyle-image-wrapper benjiflow">
            <img src="/assets/archive/lifestyle/benjiflow.png" alt="" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lifestyle;
