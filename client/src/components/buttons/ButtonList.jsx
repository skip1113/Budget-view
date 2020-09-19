import React from 'react';

export function ScrapeBtn(props) {
    return(
        <button {...props} className="scrape-btn">
            {props.children}
        </button>
    );
}
export function ResetForm(props) {
    return(
        <button {...props} className="clear-btn">
            {props.children}
        </button>
    );
}