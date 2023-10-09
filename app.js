const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const userRoutes = require('./src/routes/user.route');
const spaRoutes = require('./src/routes/spa.route');
const diningCapacityRoutes = require('./src/routes/dining_capacity.route');

app.use('/users', userRoutes);
app.use('/spa/services', spaRoutes);
app.use('/dining-capacity', diningCapacityRoutes);

app.use(express.json());

app.listen(port, () => {
    console.log('Server listening on PORT:', port)
})

app.get('/status', (req, res) => {
    const status = {
        'Status': 'Running'
    }
    res.send(status);
});
