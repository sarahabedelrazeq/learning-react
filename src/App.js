import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingInline: 48,
            }}
          >
            <div>
              <h1 style={{ fontSize: 40 }}>Carter</h1>
            </div>
            <div>
              <div
                style={{
                  background: "rgba(0,0,0, 0.1)",
                  paddingInline: 15,
                  paddingBlock: 10,
                  borderRadius: 30,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <input
                    type="search"
                    placeholder="Search this blog..."
                    style={{
                      border: 0,
                      backgroundColor: "transparent",
                      height: 20,
                      outline: 0,
                    }}
                  />
                </div>
                <div>
                  <button className="search-button">
                    <svg
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="SearchIcon"
                      width="30"
                      fill="white"
                    >
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button>Menu</button>
            </div>
          </div>
        </nav>
      </header>

      <div className="imgcontainer">
        <img src="avatar.png" alt="img" className="avatar"></img>
      </div> 
      
      <div className="text">
        <h1> mohammad alzghoul</h1>
        <p>
          I am a front-end developer and UI designer. In my free time, I enjoy
          chasing my dog all over the house and collecting dust from my window
          sill.  
        </p>
        <button className="visit-btn">visit profile</button>
      </div>
    </div>
  );
}

export default App;
