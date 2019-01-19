import React, { Component } from "react";
import CodeMirror from "react-codemirror";
import "codemirror/mode/javascript/javascript";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/night.css";
import styled from "styled-components";

const Container = styled.div`
  .CodeMirror {
    height: 100vh;
  }
`;

export default class CodeMirrorContainer extends Component {
  render() {
    return (
      <Container>
        <CodeMirror
          options={{ mode: "javascript", theme: "night", lineNumbers: true }}
        />
      </Container>
    );
  }
}
