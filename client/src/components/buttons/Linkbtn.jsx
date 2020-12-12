import React from "react";

const Linkbtn = ({ href, icon, title, className, buttonStyle }) => {
    return (
        <button
            style={buttonStyle}
            onClick={() => window.open(href, '_blank')}
            title={title}
        >
            <img src={icon} alt={title} className={className} />
        </button>
    );
};

export default Linkbtn;
// export function Input(props) {
//     return (
//       <div className="form-group">
//         <input className="form-control" {...props} />
//       </div>
//     );
//   }