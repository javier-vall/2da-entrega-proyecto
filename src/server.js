import dotenv from "dotenv";
import app from "./express.app.js";
import connectDatabase from "./config/db.js";

dotenv.config();

const { PORT } = process.env;

connectDatabase();
app.listen(PORT, () => console.log(`Server activo en puerto ${PORT}.`));
