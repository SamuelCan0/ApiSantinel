import express from 'express';
import morgan from "morgan";

//Routes
import usuariosRoutes from "./routes/usuarios.routes";
import pacientesRoutes from "./routes/pacinetes.routes";
import consultaRoutes from "./routes/consulta.routes";

const app = express();

//settings
app.set("port", 4000);
 
//configurar cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With,Content-Type,Accept,Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
    
    next();
});

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use(usuariosRoutes);
app.use(pacientesRoutes);
app.use(consultaRoutes);

export default app;