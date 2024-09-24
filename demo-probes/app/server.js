// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let isDatabaseConnected = false;
let users = []; // Stockage en mémoire des utilisateurs (simulé comme une base de données).

// Middleware pour parser le JSON
app.use(express.json());

// Simuler la connexion à une base de données
setTimeout(() => {
    isDatabaseConnected = true;
    console.log("Connected to the database.");
}, 100000); // Simuler un délai de connexion de 10 secondes.

// Sondes
app.get('/healthz', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Liveness Probe' });
});

app.get('/readiness', (req, res) => {
    if (isDatabaseConnected) {
        res.status(200).json({ status: 'ok', message: 'Readiness Probe' });
    } else {
        res.status(500).json({ status: 'error', message: 'Database not connected' });
    }
});

app.get('/startup', (req, res) => {
    // if (isDatabaseConnected) {
    //     res.status(200).json({ status: 'ok', message: 'Startup Probe' });
    // } else {
    //     res.status(500).json({ status: 'error', message: 'Startup not complete' });
    // }
    res.status(200).json({ status: 'ok', message: 'Startup Probe' });
});

// Routes de gestion des utilisateurs

// Créer un utilisateur
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and Email are required' });
    }
    const user = { id: users.length + 1, name, email };
    users.push(user);
    res.status(201).json(user);
});

// Lire tous les utilisateurs
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

// Lire un utilisateur spécifique
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
});

// Mettre à jour un utilisateur
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    const { name, email } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;
    res.status(200).json(user);
});

// Supprimer un utilisateur
app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    users.splice(userIndex, 1);
    res.status(204).json({ message: 'User deleted' });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});