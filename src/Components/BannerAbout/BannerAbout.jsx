import style from "./BannerAbout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function BannerAbout() {
  return (
    <>
      <div className="mt-3 container">
        <div className={style.hero__title_container}>
          <h1 className="title-1 ">About Us</h1>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <div className={style.row}>
          <FontAwesomeIcon
            icon={faQuoteLeft}
            beat
            style={{ color: "#1c71c6" }}
          />
          <div className={style.image}>Where Trails Intermix</div>
          <FontAwesomeIcon
            icon={faQuoteLeft}
            beat
            style={{ color: "#1c71c6" }}
          />
        </div>
      </div>

      <div className="container mt-5 mb-5 g-0 gnl-section-container">
        <div className="row g-0 intro-headline">
          <div className="col-12 g-0">
            <h2 className="headline green">Who We Are</h2>
          </div>
        </div>
        <div className="row g-0 intro-content">
          <div className="col-12 g-0">
            The Leona M. and Harry B. Helmsley Charitable Trust is a global
            philanthropy committed to helping people live better lives today and
            creating stronger, healthier futures for individuals and
            communities. We partner with people and organizations to invest in
            new ideas or research across six program areas: Crohn’s Disease,
            Israel, Rural Healthcare, Type 1 Diabetes, Vulnerable Children in
            Sub-Saharan Africa, and New York City.{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerAbout;
