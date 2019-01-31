import React, { Component } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/javascript/javascript";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/night.css";
import styled from "styled-components";
import API from "./API/API";

const Container = styled.div`
  .CodeMirror {
    height: 100vh;
  }
`;

const SendItButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export default class CodeMirrorContainer extends Component {
  state = {
    codemirror: "",
    functName: "trialFunct"
  };
  sendIt = () => {
    API.submitCode(this.state.codemirror, this.state.functName).then(res => {
      this.setState({ codemirror: res.data });
    });
  };
  handleChange = async (editor, data, newCode) => {
    await this.setState({ codemirror: newCode });
  };
  render() {
    return (
      <Container>
        <CodeMirror
          value={this.state.codemirror}
          name="codemirror"
          onBeforeChange={(editor, data, codemirror) => {
            this.setState({ codemirror });
          }}
          onChange={this.handleChange}
          options={{ mode: "javascript", theme: "night", lineNumbers: true }}
        />
        <SendItButton onClick={this.sendIt}>send it!</SendItButton>
      </Container>
    );
  }
}
