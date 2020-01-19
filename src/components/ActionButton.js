import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

const ActionButton = (props) => (
  <div id={`${props.id}` + `ActionButton`}>
    <StyledButton onClick={props.action}>{props.label}</StyledButton>
  </div>
);

ActionButton.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default ActionButton;


