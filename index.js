import express from "express";
import dotenv from "dotenv"; // Lee variables de entorno de un archivo .env
import cors from "cors";
import conectarDB from "./config/db.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";
import pacienteRoutes from "./routes/pacienteRoutes.js";

const app = express();
app.use(express.json());

dotenv.config(); // Busca los archivos .env y los carga en process.env

// Conectar a la base de datos
// const db = await mongoose.connect(process.env.MONGO_URI);
conectarDB();

const dominiosPermitidos = process.env.FRONTEND_URL.split(',');
 const corsOptions = {
   origin: function (origin, callback) {
     if (dominiosPermitidos.indexOf(origin) !== -1) {
       // El Origen del Request esta permitido
       callback(null, true);
     } else {
       callback(new Error("No permitido por CORS"));
     }
  },
};
app.use(cors(corsOptions));
//app.use(cors());

app.use("/api/veterinarios", veterinarioRoutes);
app.use("/api/pacientes", pacienteRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});
