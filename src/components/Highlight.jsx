// components/Highlight.jsx
import React from "react";
import PropTypes from "prop-types";

// Renders text where **wrapped** segments are emphasised (used for metrics).
const Highlight = ({ text }) => (
  <>
    {text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={index} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      ) : (
        <React.Fragment key={index}>{part}</React.Fragment>
      )
    )}
  </>
);

Highlight.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Highlight;
