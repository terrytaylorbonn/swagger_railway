const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const port = process.env.PORT || 3000;

// Swagger Documentation Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Basic API Route
app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello World!" });
});

app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});
