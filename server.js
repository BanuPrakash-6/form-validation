const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// File upload setup
const upload = multer({ dest: "uploads/" });

// Handle form submission
app.post("/register", upload.single("photo"), (req, res) => {
  console.log("✅ Student Registration Received:");
  console.log(req.body);

  if (req.file) {
    console.log("📸 Uploaded File:", req.file.originalname);
  }

  res.send(`
    <h2>🎉 Registration Successful!</h2>
    <p>Thank you, <b>${req.body.fullname}</b>. Your details have been submitted.</p>
    <a href="/">Go Back</a>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
