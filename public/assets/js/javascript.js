const myFunction = document.getElementById("function");

const edit = CodeMirror.fromTextArea(myFunction, {
  mode: "javascript",
  autorefresh: true,
  autofocus: true,
  lineNumbers: true,
  theme: "night"
});
edit.setValue("// write your function\n");
edit.setCursor({ line: 2, ch: 1 });
