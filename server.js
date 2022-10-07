import express from "express";
import path from "path";

// ==========
// App initialization
// ==========

// On définit le port d'écoute
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// On définit l'application
const app = express();

app.set("view engine", "twig");
app.set("views", path.join(__dirname, "views"));

// On démarre le serveur
async function init (){
  app.listen(APP_PORT, () => {
    console.log(`App listening at http://${APP_HOSTNAME}:${APP_PORT}`);
  });
}
