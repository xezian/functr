const myFunction = document.getElementById("function");
const submit = document.getElementById("submit");
const xhr = new XMLHttpRequest();
const url = "/api/testfunction";

const edit = CodeMirror.fromTextArea(myFunction, {
  mode: "javascript",
  autorefresh: true,
  autofocus: true,
  lineNumbers: true,
  theme: "night"
});
edit.setValue("// write your function\n");
edit.setCursor({ line: 2, ch: 1 });

submit.addEventListener("click", () => {
  const code = edit.getValue();
  const funcName = document.getElementById("name").value;
  const args = document.getElementById("arguments").value;
  const expects = document.getElementById("expectation").value;

  const dataPkg = {
    code: code,
    funcName: funcName,
    args: args,
    expects: expects
  };

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // do something with response
      const results = document.getElementById("results");
      results.innerHTML += xhr.responseText + "<br/>";
    }
  };
  xhr.send(JSON.stringify(dataPkg));
});

clear.addEventListener("click", () => {
  const results = document.getElementById("results");
  results.innerHTML = "<a href='/'>" + results + "</a>";
});
