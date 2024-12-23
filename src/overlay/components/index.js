export function Button({ param = "SUBMIT", id, onClick, size = "100%" }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "0.8rem 0",
      }}>
      <button
        id={id}
        style={{
          backgroundColor: "transparent",
          color: "#fff",
          border: "0.1rem solid #fff",
          borderRadius: "10px",
          margin: "auto",
          padding: "0.7rem 0",
          paddingTop: "calc(0.8rem + 0.3svh)",
          width: size,
          maxWidth: "250px",
          fontSize: "1.8svh",
          fontFamily: "HelveticaLTPro-Bold",
          lineHeight: "1",
        }}
        onClick={() => {
          onClick()
        }}>
        {param}
      </button>
    </div>
  )
}

export function ButtonFlex({ param = "SUBMIT", id, onClick, size = "100%" }) {
  return (
    <button
      id={id}
      style={{
        backgroundColor: "transparent",
        color: "#fff",
        border: "0.1rem solid #fff",
        borderRadius: "10px",
        padding: "0.7rem 0",
        margin: "0 2vw",
        paddingTop: "calc(0.8rem + 0.3svh)",
        width: size,
        maxWidth: "250px",
        fontSize: "1.8svh",
        fontFamily: "HelveticaLTPro-Bold",
        lineHeight: "0.9",
      }}
      onClick={() => {
        try {
          onClick()
        } catch (err) {
          new Error(err + "onClick is not a function")
        }
      }}>
      {param}
    </button>
  )
}

export function Terms({ terms, setInfo }) {
  return (
    <section
      style={{
        display: "flex",
      }}
      className="terms">
      <div
        onClick={() => {
          setInfo((prev) => {
            return {
              ...prev,
              terms: !prev.terms,
            }
          })
        }}>
        <div
          id="terms"
          style={{
            width: "1.2svh",
            height: "1.2svh",
            backgroundColor: "#fff",
            borderRadius: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft:"1rem",
            marginRight: "1rem",
            border: "none",
          }}>
          <div
            style={{
              width: "1.2svh",
              height: "1.2svh",
              backgroundColor: !terms ? "#fff" : "#a3a3a3",
              borderRadius: 0,
              border: "none",
            }}
          />
        </div>
      </div>

      <div>
        <p
          style={{
            color: "white",
            fontSize: "0.75svh",
            textAlign: "left",
          }}>
          BY SUBMITTING THIS FORM, YOU AGREE TO RECEIVE RECURRING   
          AUTOMATED PROMOTIONAL AND PERSONALIZED MARKETING TEXT 
          MESSAGES (E.G. CART REMINDERS) FROM CK AT THE CELL NUMBER USED  
          WHEN SIGNING UP. CONSENT IS NOT A CONDITION OF ANY PURCHASE. REPLY 
          HELP FOR HELP AND STOP TO CANCEL. MSG FREQUENCY VARIES. MSG AND 
          DATA RATES MAY APPLY. VIEW{" "}
          <span
            style={{ 
              textDecoration: "underline",
              fontSize:"1svh"
            }}
            onClick={() => {
              window.open("/CoachHoliday2023.pdf")
            }}>
            {" "}
            TERMS & PRIVACY
          </span>
          .
        </p>
      </div>
    </section>
  )
}

export function Viber({ terms, setInfo }) {
  return (
    <section
      style={{
        display: "flex",
        marginBottom: "1rem",
      }}
      className="terms">
      <div
        onClick={() => {
          setInfo((prev) => {
            return {
              ...prev,
              viber: !prev.viber,
            }
          })
        }}>
        <div
          id="terms"
          style={{
            width: "2svh",
            height: "2svh",
            backgroundColor: "#fff",
            borderRadius: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "0.5rem",
            border: "none",
          }}>
          <div
            style={{
              width: "1.3svh",
              height: "1.3svh",
              backgroundColor: !terms ? "#fff" : "#a3a3a3",
              borderRadius: 0,
              border: "none",
            }}
          />
        </div>
      </div>

      <div>
        <p
          style={{
            color: "white",
            fontSize: "1.2svh",
            textAlign: "justify",
            marginTop: "0.rem",
          }}>
          I’VE VIBER ACCOUNT
        </p>
      </div>
    </section>
  )
}
export function Input({ placeholder = "First Name", size = "100%", type = "text", maxLength = 4, onChange }) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={placeholder}
      style={{
        textAlign: "center",
        fontSize:"0.8rem",
        color: "black",
        border: "none",
        backgroundColor: "white",
        width: size,
        padding: "0.7rem",
        margin: "0.5rem 0",
        borderRadius: "0",
      }}
      onChange={onChange}
    />
  )
}

export function AgeRange({ onChange }) {
  return (
    <select
      id="age-range"
      placeholder=""
      name="age-range"
      style={{
        width: "100%",
        textAlign: "center",
        color: "black",
        border: "none",
        backgroundColor: "white",
        padding: "0.7rem",
        margin: "0.5rem 0",
        borderRadius: "0",
      }}
      onChange={onChange}>
      <option value="">AGE RANGE</option>
      <option value="18-25">18-25</option>
      <option value="26-32">26-32</option>
      <option value="33-41">33-41</option>
      <option value="42-57">42-57</option>
      <option value="58 +">58 +</option>
    </select>
  )
}

export const LegerLine = ({ currentPage }) => {
  return (
    <div
      className="footer"
      style={{
        position: "absolute",
        bottom: "1.5%",
        left: "50%",
        zIndex: 10000000000000,
        transform: "translate(-50%,0)",
        width: "100vw",
        textAlign: "center",
        opacity: [3, 4, 5, 6].includes(currentPage) ? 0 : 1,
      }}>
      <span
        className="mt-auto"
        style={{
          fontSize: "1svh",
          color: "white",
          fontFamily: "HelveticaLTPro-Roman",
        }}>
        <span
          style={{
            fontSize: "1.2svh",
            position: "relative",
            top: "-0.03svh",
            marginRight: "0.5vw",
          }}>
          &reg;
        </span>
        {"  "} ALL RIGHTS RESERVED BY COACH. POWERED BY{" "}
        <a
          style={{
            color: "white",
            fontSize: "1svh",
            fontFamily: "HelveticaLTPro-Roman",
            textDecoration: "underline",
          }}
          href="https://www.instagram.com/conten.tech/?hl=en"
          target="_blank"
          rel="noopener noreferrer">
          CONTEN.T
        </a>
      </span>
    </div>
  )
}

export const DesktopBlock = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100svh",
        backgroundColor: "#C41F32",
      }}>
      <div
        className="block"
        style={{
          height: "6svh",
        }}
      />
      <div
        style={{
          height: "12svh",
          width: "fit-content",
          margin: "auto",
        }}>
        <img src="/2d/logolanding.webp" style={{ height: "100%" }} />
      </div>

      <div
        className="block"
        style={{
          height: "3svh",
        }}
      />

      <h2
        style={{
          lineHeight: "1.5",
          fontSize: "2svh",
          margin: "auto",
          width: "fit-content",
        }}>
        THIS EXPERIENCE IS ONLY AVAILABLE ON MOBILE <br />
        PLEASE SCAN THE QR CODE BELOW TO ACCESS
      </h2>

      <div
        className="block"
        style={{
          height: "4svh",
        }}
      />

      <div
        className="imgContainer"
        style={{
          position: "absolute",
          rotate: "180deg",
          height: "15svh",
          top: 0,
        }}>
        <img src="/2d/light.webp" />
      </div>

      <div
        className="imgContainer"
        style={{
          position: "absolute",
          rotate: "0deg",
          height: "15svh",
          bottom: 0,
          right: 0,
        }}>
        <img src="/2d/light.webp" />
      </div>

      <div
        className="imgContainerHeight"
        style={{
          height: "40svh",
          width: "fit-content",
          margin: "auto",
          padding: "3svh",
        }}>
        <img
          src="/2d/Coach_Holiday_Mobile_MY.png"
          style={{
            height: "100%",
          }}
        />
      </div>
      <div
        className="block"
        style={{
          height: "3svh",
        }}
      />
      <div
        className="block"
        style={{
          height: "4svh",
        }}
      />
      <Button
        param={"SHOP HOLIDAY"}
        id="learnmoreDesktop"
        size="100%"
        onClick={() => {
          window.open("https://malaysia.coach.com/holiday.html", "_blank")
        }}
      />
      <LegerLine />
    </div>
  )
}