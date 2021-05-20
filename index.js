const express = require("express");
const nunjucks = require("nunjucks");
const morgan = require("morgan");

const routes = require("./routes");

const app = express();

const PORT = 3000;
// hace res.render funcionar con archivos html
app.set("view engine", "html");
// cuando res.render funciona con archivos html, haz que use nunjucks para eso.
app.engine("html", nunjucks.render);
// apuntá nunjucks al directorio conteniendo templates y apagando el cacheo,
// configure devuelve una instancia Enviornment que vamos a querer usar para
// agregar Markdown después.
nunjucks.configure("views", { noCache: true });

// setup the logger
app.use(morgan("tiny"));
//middleware de rutas
app.use("/", routes);

app.listen(PORT, () => {
	console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
