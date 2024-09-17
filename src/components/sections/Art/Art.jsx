import "./art.css";

const Art = () => {
  return (
    <div className="art-wrapper">
      <div className="art-scrollx">
        <div className="art-intro">
          <h1 className="section-header">Art</h1>
        </div>

        <div className="art chiefs">
          <div className="image-n-title">
            <div className="image-wrapper">
              <img src="/assets/archive/art/chiefs.jpg" alt="" />
              <div className="image-overlay"></div>
            </div>

            <p className="title">Chiefs</p>
          </div>
        </div>

        <div className="art david">
          <div className="image-n-title">
            <div className="image-wrapper">
              <img src="/assets/archive/art/davids-throne.jpg" alt="" />
              <div className="image-overlay"></div>
            </div>

            <p className="title">David&apos;s throne</p>
          </div>
        </div>

        <div className="art shelosh">
          <div className="image-n-title">
            <div className="image-wrapper">
              <img src="/assets/archive/art/shelosh.jpg" alt="" />
              <div className="image-overlay"></div>
            </div>

            <p className="title">Shelosh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
