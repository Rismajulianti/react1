import React from "react"

const Button = props => {
    return (
        <div type="button" style={styles.onlick}>
            {props.title}
        </div>
    )
}
export default Button;

const styles = {
    onlick: {
        display: 'flex',
        backgroundColor: '#FF7A00',
        padding: 16,
        marginLeft: 5,
        color: '#fff',
        borderRadius: 6,

    }
}