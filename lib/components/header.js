import React, {Component} from 'react';

export default class extends Component {
    render () {
        const styles = {
            titlebar: {
                "-webkit-app-region": "drag"
            },
            box: {
                textAlign: "center",
                height: 25,
                display: "block",
                width: "25rem",
                margin: "0.5em auto",
                border: "1px solid #333333",
                borderRadius: 4,
                background: "none",
                color: "white",
                fontSize: "0.8em",
            },
            hr: {
                marginTop: 6,
                height: 1,
                border: 0,
                backgroundColor: "#333333"
            }
        };
        return (
            <header style={styles.titlebar}>
                <input style={styles.box} type="text"/>
                <hr style={styles.hr}/>
            </header>
        );
    }
};