function encode() {
  document.getElementById("textOutput").value = btoa(
    document.getElementById("textInput").value
  );
}
function decode() {
  document.getElementById("textOutput").value = atob(
    document.getElementById("textInput").value
  );
}
