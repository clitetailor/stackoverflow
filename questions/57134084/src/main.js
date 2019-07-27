import path from "path";
import { app, BrowserWindow } from "electron";
import * as R from "ramda";

const greet = R.replace("{name}", R.__, "Hello, {name}!");

let greeting = greet("Alice");

console.log(greeting);

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile(path.resolve(__dirname, "index.html"));

  win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
