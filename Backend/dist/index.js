import app from "./app.js";
import { connectionToDatabase } from "./db/connection.js";
//Connection and listeners
const PORT = process.env.PORT || 5000;
connectionToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log("Server Open and Connect to Database!"));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map