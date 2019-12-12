import React, { Component } from "react";
import Background from "./bg.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: window.matchMedia("(min-width: 648px)").matches,
      email: ""
    };
  }
  componentDidMount() {
    const handler = e => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 648px)").addListener(handler);
  }

  onChangeText = e => {
    this.setState({
      email: e.target.value
    });
  };
  onButtonPress = () => {
    alert(`Akun Anda telah terdaftar sebagai ${this.state.email}`);
    return false;
  };
  render() {
    const { matches, email } = this.state;
    return (
      <Router>
        <div style={styles.background}>
          <div style={styles.overlay}>
            <div
              style={{
                display: "flex",
                position: "absolute",
                width: "100%",
                backgroundColor: "rgba(255,255,255,0.7)",
                justifyContent: "center"
              }}
            >
              <Link style={styles.link} to="/">
                <section style={styles.section}>Home</section>
              </Link>
              <Link style={styles.link} to="/about">
                <section style={styles.section}>About Me</section>
              </Link>
            </div>

            <Switch>
              <Route path="/about">
                <div style={styles.container}>
                  <div style={{ alignSelf: "center", marginTop: 64 }}>
                    <center>
                      <img src={Foto} style={{ height: 150, width: 180, marginTop: 20 }} />
                    </center>
                    <div style={matches ? styles.Quotes : styles.Quotes2}>
                      Hello! My Name Is Rino Satya Putra As Junior Full Stack
                      engineering :v
                    </div>
                  </div>
                </div>
              </Route>
              <Route path="/">
                <div style={styles.container}>
                  <Header title="Rino Satya Putra" />
                  <div style={matches ? styles.Quotes : styles.Quotes2}>
                    The Most Simple & Yet{" "}
                    <b style={{ color: "#ffa82e" }}> Powerful Way</b> to{" "}
                    <b style={{ color: "#ffa82e" }}>Launch</b> your Startup
                  </div>
                  <div style={styles.parent}>
                    <div style={styles.parentInput}>
                      <input
                        onChange={e => this.onChangeText(e)}
                        value={email}
                        type="email"
                        name="name"
                        style={matches ? styles.input : styles.input2}
                        placeholder="Masukan Email Kamu..."
                        autocomplate="off"
                      />
                    </div>
                    <a
                      href="/ "
                      style={{ textDecoration: "none", disable: "none" }}
                      onClick={this.onButtonPress}
                    >
                      <Button value={email} title="Daftar" />
                    </a>
                  </div>
                  <div style={styles.parentFooter}>
                    <div style={styles.textScroll}>
                      <p style={styles.footer}>Scroll Down to explore</p>
                    </div>
                    <img
                      alt="chevron"
                      src={Chevron}
                      height="24"
                      width="24"
                      style={styles.parentIcon}
                    />
                  </div>
                </div>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
// let w = window.innerWidth;
let h = window.innerHeight;

const styles = {
  background: {
    display: "flex",
    backgroundImage: `url(${Background})`,
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  overlay: {
    backgroundColor: "rgba(81, 77, 67, 0.7)",
    height: h,
    width: "100%"
  },
  link: {
    textDecoration: "none",
    color: "black"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    background: "transparent",
    margin: 16
  },
  textJudul: {
    alignSelf: "center",
    marginTop: 50,
    borderStyle: "solid",
    borderWidth: 10,
    maxWidth: 50,
    color: "#fff",
    justifyContent: "center",
    padding: 10,
    fontWeight: "bold"
  },
  Quotes: {
    alignSelf: "center",
    marginTop: 100,
    color: "white",
    fontSize: 32,
    textAlign: "center",
    maxWidth: 700
  },
  section: {
    margin: 8,
    padding: 8,
    borderStyle: "groove",
    borderWidth: 1,
    borderColor: "red"
  },
  Quotes2: {
    alignSelf: "center",
    marginTop: 100,
    color: "white",
    fontSize: 20,
    textAlign: "center"
  },
  parent: {
    display: "flex",
    alignSelf: "center",
    marginTop: 60
  },
  parentInput: {
    display: "flex",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginRight: 16
  },
  input: {
    padding: 16,
    borderStyle: "none",
    fontSize: 14,
    width: 250,
    borderRadius: 6
  },
  input2: {
    padding: 10,
    // width: 250,
    borderStyle: "none",
    fontSize: 14,
    borderRadius: 6
  },
  onlick: {
    display: "flex",
    backgroundColor: "#FF7A00",
    padding: 16,
    marginLeft: 5,
    color: "#fff",
    borderRadius: 6
  },
  parentFooter: {
    display: "flex",
    alignSelf: "center",
    marginTop: 100,
    flexDirection: "column"
  },
  footer: {
    color: "white",
    fontSize: 15
  },
  parentIcon: {
    alignSelf: "center"
  }
};
export default App;
