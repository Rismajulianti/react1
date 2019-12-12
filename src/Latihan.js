import React, { Component } from "react";
import Background from "./bg2.png";
import bali from './bali.png';
import './styles.css';
class Latihan extends Component {
    render() {
        return (
            <div style={styles.background}>
                <div style={styles.parent}>
                    <div style={styles.logo}>
                        <img src={bali}
                        />
                    </div>
                    <div style={styles.parentQuotes}>
                        <h1 style={{ alignSelf: "center" }}>A Better Way To
                        </h1>
                        <h1 style={{ color: "#ff8000" }}>Travel To Bali</h1>
                    </div>
                    <div style={styles.wraper}>
                        <span style={{ marginLeft: 60, fontFamily: "Roboto", fontSize: 12 }}>Cheapest and  Easyer</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignSelf: "center" }}>
                        <div style={styles.parentButton}>
                            <div style={styles.Readmore}>
                                Readmore
                        </div>
                        </div>
                        <div style={styles.parentButton1}>
                            <div style={styles.Readmore1}>
                                Reservation
                        </div>
                        </div>
                    </div>
                    

                </div>
            </div >
        );
    }
}
let h = window.innerHeight;

const styles = {
    background: {
        display: "flex",
        backgroundImage: `url(${Background})`,
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        justifyContent: "center",
        alignItem: "center",
    },
    wraper: {
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        color: "#ffff",
        marginRight: 50,
    },
    parent: {
        display: "flex",
        backgroundColor: "rgba(42, 38, 61, 0.82)",
        height: h,
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItem: "center",
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        marginTop: 20,
    },
    border: {
        borderStyle: "solid",
    },
    parentQuotes: {
        justifyContent: "center",
        flexDirection: "column",
        alignItem: "center",
        color: '#FFFFFF',
        fontFamily: "Pacifico",
        textAlign: "center",
    },
    parentButton: {
        display: "flex",
        borderStyle: "groove",
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 20,
        margin: 16,
        fontFamily: "Pacifico",
    },
    Readmore: {
        color: "#FCB371",
        marginTop: -20,
        margin: 14,
        marginRight: 50,
        marginLeft: 20
    },
    parentButton1: {
        display: "flex",
        borderStyle: "groove",
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 20,
        margin: 16,
        background: "#FCB371",
        fontFamily: "Pacifico",
    },
    Readmore1: {
        color: "#ffff",
        margin: 14,
        marginRight: 50,
        marginLeft: 20,
    }
}

export default Latihan;