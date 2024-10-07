import style from '../NotFound/NotFound.module.css'

function NotFound() {
  

  return (
    <>
      <div className={style.notFoundPage}>
      <div className={style.robotContainer}>
        <div className={style.robot}>
          <div className={style.robotHead}>
            <div className={style.robotEyes}>
              <div className={style.eye + " "+style.leftEye}></div>
              <div className={style.eye + " " +style.rightEye}></div>
            </div>
            <div className={style.robotMouth}></div>
          </div>
          <div className={style.robotBody}>
            <div className={style.robotArms}></div>
            <div className={style.robotLegs}></div>
          </div>
        </div>
        <h1>404 Not Found</h1>
        <p>Oops! It looks like the page you're looking for doesn't exist. I'm here to help!</p>
        <button className={style.homeButton} onClick={() => window.location.href = '/'}>
          Go Back Home
        </button>
      </div>
    </div>
    </>
  )
}

export default NotFound