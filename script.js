const socket = io("http://localhost:3000");
const editor = document.getElementById("editor");


editor.addEventListener("input", () => {
  socket.emit("send-text", editor.value);
});


socket.on("receive-text", text => {
  editor.value = text;
});
