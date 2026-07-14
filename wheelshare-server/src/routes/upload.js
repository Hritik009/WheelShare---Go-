// const router  = require('express').Router();
// const multer  = require('multer');
// const path    = require('path');
// const fs      = require('fs');
// const { protect } = require('../middleware/auth');

// // ── Ensure uploads folder exists ──────────────────────────────────────────────
// const UPLOAD_DIR = path.join(__dirname, '../../uploads');
// if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

// const storage = multer.diskStorage({
//   destination: (_, __, cb) => cb(null, UPLOAD_DIR),
//   filename:    (_, file, cb) => {
//     const ext  = path.extname(file.originalname).toLowerCase() || '.jpg';
//     const name = `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`;
//     cb(null, name);
//   },
// });

// const upload = multer({
//   storage,
//   limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
//   fileFilter: (_, file, cb) => {
//     if (file.mimetype.startsWith('image/')) cb(null, true);
//     else cb(new Error('Only image files allowed'));
//   },
// });

// // POST /api/upload  — upload up to 8 images, returns array of URLs
// router.post('/', protect, upload.array('photos', 8), (req, res) => {
//   if (!req.files?.length) return res.status(400).json({ success: false, message: 'No files uploaded' });

//   const BASE = process.env.BASE_URL || `http://localhost:5000`;
//   const urls = req.files.map(f => ({ url: `${BASE}/uploads/${f.filename}`, public_id: f.filename }));
//   res.json({ success: true, data: urls });
// });

// module.exports = router;

const router = require('express').Router();
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const { protect } = require('../middleware/auth');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'wheelshare',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Only image files allowed'));
  },
});

router.post('/', protect, upload.array('photos', 8), (req, res) => {
  console.log("upload route hit");
  if (!req.files?.length) {
    return res.status(400).json({
      success: false,
      message: 'No files uploaded',
    });
  }

  const urls = req.files.map(file => ({
    url: file.path,
    public_id: file.filename,
  }));

  res.json({
    success: true,
    data: urls,
  });
});

module.exports = router;