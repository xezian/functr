window.onload = function() {
  const myFunction = document.getElementById("function");
  require([
    "../codemirror/lib/codemirror",
    "../codemirror/mode/javascript/javascript"
  ], function(CodeMirror) {
    CodeMirror.fromTextArea(myFunction, {
      lineNumbers: true,
      mode: "javascript",
      theme: "night"
    });
  });
  myFunction.focus();
  myFunction.setCursor({ line: 1, ch: 1 });
};
