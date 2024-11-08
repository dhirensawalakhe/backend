// server.js
const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for requests from your static site
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Variable to track download count
let downloadCount = 0;

// Define an endpoint to track downloads
app.post('/track-download', (req, res) => {
  if (req.body.action === 'download') {
    // Increment the download count
    downloadCount += 1;

    // Log download count to the console (for checking during testing)
    console.log(`Download count: ${downloadCount}`);

    // Save count to a file for persistence
    fs.writeFileSync('download-count.txt', downloadCount.toString());

    // Send a response with the current count
    return res.status(200).json({ message: 'Download tracked', downloadCount });
  }
  // Send an error if action is not recognized
  return res.status(400).json({ message: 'Invalid action' });
});

// Start server on the specified PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
const express = require('express');
const cors = require('cors');  // Import the CORS package

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for requests from GitHub Pages URL
app.use(cors({
  origin: 'https://your-username.github.io', // Replace with your actual GitHub Pages URL
}));

// Your routes, e.g., /download and /upload
app.get('/download', (req, res) => {
  res.download(path.join(__dirname, 'public/template.jpg'));
});

// More routes here...

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
