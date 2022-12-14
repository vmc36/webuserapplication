import React, { Component } from "react";

export class CommitButton extends Component {
  render() {
    const { text, onClick, disabled } = this.props;

    return (
      <button
        disabled={disabled}
        className="font-bold rounded-xl w-1/5 text-white p-4 my-4 bg-primaryColor md:w-1/2"
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
}
