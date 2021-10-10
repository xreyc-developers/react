import React from "react";
import './ChartBar.css';

const ChartBar = (props) => {
    let barFillHeight = '0%';

    if(props.maxValue > 0) {
        barFillHeight = Math.round((props.value/props.maxValue) * 100) + '%';
    }

    // INLINE CSS : el.style.height = barFillHeight;
    // TWO WAYS TO INLINE
    // - 'background-color': '#fff'
    // - backgroundColor: '#fff'
    // React automatically attach 'px' to some numeric inline properties
    const divStyle = {
        height: barFillHeight,
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={divStyle}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
}

export default ChartBar;