import React from "react";

const Header = props => {
    return (
        <div style={styles.textJudul}>{props.title}</div>
    )
}
export default Header;

const styles = {
    textJudul: {
        alignSelf: 'center',
        marginTop: 60,
        borderStyle: 'solid',
        borderWidth: 5,
         color: '#fff',
        justifyContent: 'center',
        padding: 10,
        fontWeight: 'bold',
    }
}