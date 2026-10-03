const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Handle relative paths like /../css/styles8.css or /../js/scripts8.js
app.use((req, res, next) => {
  if (req.url.includes('..')) {
    const cleanUrl = req.url.replace(/\/\.\.\//g, '/').replace(/^\/\.\./, '');
    return res.redirect(cleanUrl);
  }
  next();
});

// Endpoint to upload or replace image assets directly
app.post('/api/upload', express.raw({ type: '*/*', limit: '30mb' }), (req, res) => {
  const targetPath = req.query.path;
  if (!targetPath || targetPath.includes('..') || !targetPath.startsWith('assets/img/')) {
    return res.status(400).json({ error: 'Invalid path. Must be under assets/img/' });
  }
  try {
    const fullPath = path.join(__dirname, targetPath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, req.body);
    return res.json({ success: true, path: targetPath });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// Serve static files from current directory
app.use(express.static(__dirname, {
  extensions: ['html', 'htm']
}));

// Route for homepage and fallback
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
