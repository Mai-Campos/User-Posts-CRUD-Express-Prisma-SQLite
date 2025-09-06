export function errorHandler(err, _req, res, _next) {
    console.log(err.stack);
    res.status(500).json({ message: "Algo salió mal" });
}