import React from 'react'

const ColorPicker = ({ UIcolor, setUIColor }) => {
    return (
        <div className=''
            style={{ display: "flex", width: "300px", alignItems: "center", justifyContent: 'space-between' }}
        >
            <input type={"text"} value={UIcolor} style={{ width: "120px" }}
                onChange={(e) => {
                    setUIColor(e.target.value);
                }}
            />
            <input type={"color"} value={UIcolor}
                onChange={(e) => {
                    setUIColor(e.target.value)
                }}
            />
        </div>
    )
}

export default ColorPicker