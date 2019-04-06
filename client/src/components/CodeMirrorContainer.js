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

const RightButton = styled.button`
  position: absolute;
  bottom: 0;
  z-index: 4;
  right: 0;
`;

const LeftButton = styled.button`
  position: absolute;
  bottom: 0;
  z-index: 4;
  left: 30px;
`;

const GutterButton = styled.button`
  position: absolute;
  bottom: 4px;
  left: 4px;
  z-index: 4;
`;

const FloatingDiv = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100vw;
  color: white;
`;
const Top = styled.div`
  position: absolute;
  font-family: monospace;
  top: 4px;
  left: 34px;
  width: 100vw;
  color: #8900d1;
`;

const info = [
  { top: "// maybe the function is you" },
  { top: "// were you wondering what the arguments are like?" },
  { top: "// for now chill" },
  { top: "// maybe it's a feature, maybe it's a bug" },
  { top: "// politeness is key", floatingDiv: "🔑" },
  { top: "// emptiness is key" },
  { top: "// distance is a value" },
  {
    top:
      "// what if the argument included a function? could you make it it fun?"
  }
];

export default class CodeMirrorContainer extends Component {
  state = {
    top: "// hello \n",
    code: "\nfunction functr() {\n\t// welcome to functr!\n\t\n};",
    floatingDiv: "",
    position: 0,
    info: info
  };
  sendIt = () => {
    API.submitCode(this.state.code, this.state.functName).then(res => {
      this.setState({ code: res.data });
    });
  };
  resetIt = e => {
    API.refresh().then(res => {
      this.setState({ floatingDiv: res });
      setTimeout(() => {
        this.setState({ floatingDiv: "" });
      }, 5000);
      this.setState({
        top: "// hello \n",
        code: "\nfunction functr() {\n\t// welcome to functr!\n\t\n};"
      });
    });
  };
  questionIt = () => {
    const { position, info } = this.state;
    if (position + 1 < info.length) {
      this.setState(info[position]);
      this.setState({ position: position + 1 });
      if (this.state.floatingDiv !== "") {
        setTimeout(() => {
          this.setState({ floatingDiv: "" });
        }, 5000);
      }
    } else {
      this.setState({ position: 0 });
      this.setState(info[position]);
    }
  };
  handleChange = (editor, data, newCode) => {
    this.setState({ code: newCode });
  };
  render() {
    const { floatingDiv, code, top } = this.state;
    return (
      <Container>
        <CodeMirror
          value={code}
          name="codemirror"
          editorDidMount={editor => {
            editor.focus();
          }}
          onBeforeChange={(editor, data, code) => {
            this.setState({ code });
          }}
          cursor={{
            line: 3
          }}
          onChange={this.handleChange}
          options={{ mode: "javascript", theme: "night", lineNumbers: true }}
        />
        <Top>{top}</Top>
        <RightButton onClick={this.sendIt}>send it!</RightButton>
        <LeftButton onClick={this.resetIt}>reset it!</LeftButton>
        <GutterButton onClick={this.questionIt}>?</GutterButton>
        <FloatingDiv>{floatingDiv}</FloatingDiv>
      </Container>
    );
  }
}
