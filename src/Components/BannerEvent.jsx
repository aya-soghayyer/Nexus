import colors from "../utils/Colors";
import bannerImg from "../assets/Group 27.svg";
import job from "../assets/job.gif";

const Banner = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: colors.bannerSec,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          marginTop: "15px ",
          marginBottom: "100px",
        }}
      >
        <div className="mx-5 container-fluid">
          <div className="row gap-5">
            <div className="col-6 me-5">
              <h1
                className="fst-italic"
                style={{ fontSize: "3.2rem", marginTop: "9rem" }}
              >
                Explore your  
                <span
                  style={{
                    color: colors.secondary,
                    textShadow: "1px 1px 10px  #4ADEDE",
                    marginLeft:"15px "
                  }}
                >
                   next
                </span>
                <span
                  style={{
                    color: colors.secondary,
                    textShadow: "2px 2px 10px  #4ADEDE",
                    marginLeft:"15px "

                  }}
                >
                   Event
                </span>
              </h1>
              <p className="fs-5 mt-5">
                Here is the land of your future where you can explore your
                passion and imagination
              </p>

              <div className="flex ">
                <img src={bannerImg} alt="Happy figures" className="w-40" />
              </div>
            </div>
            <div className="col ms-5">
              <div className="d-flex gap-5" style={{ marginTop: "9rem" }}>
                <img src={job} alt="Happy figures" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
