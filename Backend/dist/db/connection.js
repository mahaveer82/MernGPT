import { connect, disconnect } from "mongoose";
async function connectionToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot connect mongodb");
    }
}
async function disconnectFromDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("disconnect to mongodb");
    }
}
export { connectionToDatabase, disconnectFromDatabase };
//# sourceMappingURL=connection.js.map