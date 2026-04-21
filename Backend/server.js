require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const rateLimit = require('express-rate-limit');
const supabase = require('./Plugin/SupaBaseClient');



const app = express();
app.set('trust proxy', 1);
const PORT = process.env.PORT;

const GoomorProductDetail = require('./Data/GoomorProductDetail');
const LaserLiteProductDetail = require('./Data/LaserLiteProductDetail');
const BondorProductDetail = require('./Data/BondorProductDetail');
const AmpeLiteProductDetail = require('./Data/AmpeLiteProductDetail');
const LysaghtProductDetail = require('./Data/LysaghtProductDetail');
const MetrollProductDetail = require('./Data/MetrollProductDetail');
const PalramProductDetail = require('./Data/PalramProductDetail');
const StramitProductDetail = require('./Data/StramitProductDetail');
const VersicladProductDetail = require('./Data/VersicladProductDetail');
const StratCoProductDetail = require('./Data/StratCoProductDetail');
const standardFlashing = require('./Data/Flashing/StandardFlashing'); // Import Standard Flashing URLs
const customFlashing = require('./Data/Flashing/CustomFlashing'); // Import Custom Flashing URLs
const standardFlashingDetail = require('./Data/StandardFlashingDetail');
const customFlashingDetail = require('./Data/CustomFlashingDetail');

const allowedOrigins = ['http://localhost:3000','https://goomor-frontend.onrender.com','https://goomor-frontend.vercel.app'];
 const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));
// Apply CORS middleware before other middleware
app.use(express.json());
app.options(allowedOrigins, cors(corsOptions)); // Handle preflight requests
app.use(express.static('public'));
// Serve local bucket (Data/goomorproductimage) at /goomorproductimage
app.use('/goomorproductimage', express.static(path.join(__dirname, 'Data', 'goomorproductimage')));


// app.use('/api', userRoutes);


// Data API
// app.use('/api', productRoutes);
app.get('/api/test', (req, res) => {
  console.log('Test route hit');
  res.send('API is working!');
});
app.get('/api/goomorproducts', (req, res) => {
  res.json(GoomorProductDetail);
});
app.get('/api/goomorproducts/:id', (req, res) => {
  const productId = req.params.id.toLowerCase();
  const product = GoomorProductDetail.find((p) => p.id.toLowerCase() === productId);

  if (product) {
      res.json(product);
  } else {
      res.status(404).json({ message: 'Product not found' });
  }
});
app.get('/api/laserliteproducts', (req, res) => {
    res.json(LaserLiteProductDetail);
  });
  app.get('/api/laserliteproducts/:id', (req, res) => {
    const productId = req.params.id.toLowerCase();
    const product = LaserLiteProductDetail.find((p) => p.id.toLowerCase() === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
  });

  app.get('/api/bondorproducts', (req, res) => {
    res.json(BondorProductDetail);
  });
  app.get('/api/bondorproducts/:id', (req, res) => {
    const productId = req.params.id.toLowerCase();
    const product = BondorProductDetail.find((p) => p.id.toLowerCase() === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
  });

  app.get('/api/standardflashing', (req, res) => {
    res.json(standardFlashingDetail);
  });
  app.get('/api/standardflashing/:id', (req, res) => {
    const productId = req.params.id.toLowerCase();
    const product = standardFlashingDetail.find((p) => p.id.toLowerCase() === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
  });

  app.get('/api/customflashing', (req, res) => {
    res.json(customFlashingDetail);
  });
  app.get('/api/customflashing/:id', (req, res) => {
    const productId = req.params.id.toLowerCase();
    const product = customFlashingDetail.find((p) => p.id.toLowerCase() === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
  });

  app.get('/api/ampeliteproducts', (req, res) => {
    res.json(AmpeLiteProductDetail);
  });
  app.get('/api/ampeliteproducts/:id', (req, res) => {
    const productId = req.params.id.toLowerCase();
    const product = AmpeLiteProductDetail.find((p) => p.id.toLowerCase() === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
  });
  app.get('/api/lysaghtproducts', (req, res) => {
    res.json(LysaghtProductDetail);
  });
  app.get('/api/lysaghtproducts/:id', (req, res) => {
    const productId = req.params.id.toLowerCase();
    const product = LysaghtProductDetail.find((p) => p.id.toLowerCase() === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
  });
  app.get('/api/metrollproducts', (req, res) => {
    res.json(MetrollProductDetail);
  });
  app.get('/api/metrollproducts/:id', (req, res) => {
    const productId = req.params.id.toLowerCase();
    const product = MetrollProductDetail.find((p) => p.id.toLowerCase() === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
  });
  app.get('/api/palramproducts', (req, res) => {
    res.json(PalramProductDetail);
  });
  app.get('/api/palramproducts/:id', (req, res) => {
    const productId = req.params.id.toLowerCase();
    const product = PalramProductDetail.find((p) => p.id.toLowerCase() === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
  });
  app.get('/api/stramitproducts', (req, res) => {
    res.json(StramitProductDetail);
  });
  app.get('/api/stramitproducts/:id', (req, res) => {
    const productId = req.params.id.toLowerCase();
    const product = StramitProductDetail.find((p) => p.id.toLowerCase() === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
  });

  app.get('/api/versicladproducts', (req, res) => {
    res.json(VersicladProductDetail);
  });
  app.get('/api/versicladproducts/:id', (req, res) => {
    const productId = req.params.id.toLowerCase();
    const product = VersicladProductDetail.find((p) => p.id.toLowerCase() === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
  });
  app.get('/api/stratcoproducts', (req, res) => {
    res.json(StratCoProductDetail);
  });
  app.get('/api/stratcoproducts/:id', (req, res) => {
    const productId = req.params.id.toLowerCase();
    const product = StratCoProductDetail.find((p) => p.id.toLowerCase() === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
  });

  app.get('/api/flashings', (req, res) => {
    res.json({
      standard: standardFlashing,
      custom: customFlashing,
    });
  });

app.use((req, res, next) => {
  console.log(`Origin: ${req.headers.origin}`);
  console.log(`Method: ${req.method}`);
  next();
});
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

app.use(limiter);

const upload = multer({ dest: 'uploads/' });

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

const generateExcel = async (orderDetails, headers) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Order');

  // Define headers dynamically based on template
  worksheet.columns = headers.map((header) => ({
    header,
    key: header.replace('*', '').trim(),
    width: 20,
  }));

  // Add header row with contact and address details
  worksheet.addRow(orderDetails.headerRow);

  // Add grouped product rows
  orderDetails.groupedItems.forEach((group) => {
    worksheet.addRow(group);
  });

  return workbook.xlsx.writeBuffer();
};

// POST endpoint to handle form data and email sending
app.post('/send-email', upload.array('files'), async (req, res) => {
  try {
    const attachments = req.files.map(file => ({
      filename: file.originalname,
      path: file.path
    }));

    const mailOptions = {
      from: 'sales@goomor.com.au', // Replace with your email address
      to: req.body.to,
      subject: req.body.subject,
      text: req.body.text,
      attachments: attachments
    };

    await transporter.sendMail(mailOptions);

    // Clean up uploaded files
    attachments.forEach(attachment => {
      fs.unlink(attachment.path, (err) => {
        if (err) {
          console.error(`Error deleting file: ${attachment.path}`, err);
        }
      });
    });

    res.status(200).send('Email successfully sent!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email.');
  }
});


//Supabase API
const authenticateUser = async (req, res, next) => {
  if (!supabase) return res.status(503).json({ error: 'Auth not configured. Set SUPABASE_URL and SUPABASE_ANON_KEY in .env' });
  const token = req.headers.authorization?.split(' ')[1]; // Extract JWT from header
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  const { data: user, error } = await supabase.auth.getUser(token);
  if (error || !user) return res.status(401).json({ error: 'Invalid token' });

  req.user = user;
  next();
};


app.post('/login', async (req, res) => {
  if (!supabase) return res.status(503).json({ error: 'Auth not configured. Set SUPABASE_URL and SUPABASE_ANON_KEY in .env' });
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) return res.status(400).json({ error: error.message });

  res.json({ user: data.user, token: data.session.access_token }); // Send token to frontend
});

app.post('/logout', async (req, res) => {
  if (!supabase) return res.status(503).json({ error: 'Auth not configured. Set SUPABASE_URL and SUPABASE_ANON_KEY in .env' });
  const token = req.headers.authorization?.split(' ')[1]; // Get token from request

  if (!token) return res.status(400).json({ error: 'No token provided' });

  const { error } = await supabase.auth.admin.signOut(token); // Invalidate session on Supabase
  if (error) return res.status(400).json({ error: error.message });

  res.json({ message: 'Logged out successfully' });
});


app.get('/user', authenticateUser, async (req, res) => {
  res.json({ user: req.user });
});


// Alternative consolidated products API
app.get('/api/all-products', (req, res) => {
  try {
    // Merge products from all sources
    const allProducts = [
      ...GoomorProductDetail,
      ...LaserLiteProductDetail,
      ...BondorProductDetail,
      ...LysaghtProductDetail,
      ...MetrollProductDetail,
      ...PalramProductDetail,
      ...StramitProductDetail,
      ...VersicladProductDetail,
      ...StratCoProductDetail,
      ...standardFlashingDetail,
      ...customFlashingDetail,
    ];

    res.json(allProducts);
  } catch (error) {
    console.error('Error fetching all products:', error);
    res.status(500).json({ message: 'Error retrieving products' });
  }
});

app.get('/api/all-units', (req, res) => {
  try {
    const units = [
      { unit_id: "m", unit_name: "Meter" },
      { unit_id: "mm", unit_name: "Millimeter" },
      { unit_id: "cm", unit_name: "Centimeter" },
      { unit_id: "kg", unit_name: "Kilogram" },
      { unit_id: "pcs", unit_name: "Pieces" },
    ];
    res.json(units);
  } catch (error) {
    console.error('Error fetching units:', error);
    res.status(500).json({ message: 'Error retrieving units' });
  }
});




// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});






























// app.post('/api/orders', upload.array('files'), async (req, res) => {
//   try {
//     const { orderDetails, templateHeaders } = JSON.parse(req.body.orderDetails);
//     const files = req.files;

//     // Generate Excel file
//     const excelBuffer = await generateExcel(orderDetails, templateHeaders);

//     // Prepare email attachments
//     const attachments = [
//       {
//         filename: 'OrderDetails.xlsx',
//         content: excelBuffer,
//         contentType:
//           'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
//       },
//       ...files.map((file) => ({
//         filename: file.originalname,
//         path: file.path,
//       })),
//     ];

//     // Send email
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: process.env.SMTP_PORT,
//       secure: true,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to: 'sales@goomor.com.au',
//       subject: 'New Order Submission',
//       text: `Order details for ${orderDetails.headerRow['*ContactName']}`,
//       attachments,
//     });

//     // Clean up uploaded files
//     files.forEach((file) => fs.unlinkSync(file.path));

//     res.status(200).send('Order submitted successfully!');
//   } catch (error) {
//     console.error('Error processing order:', error);
//     res.status(500).send('Error processing order.');
//   }
// });
//get color for single color product
// app.get('/api/products/:productId/colors', async (req, res) => {
//   const { productId } = req.params;

//   try {
//     const query = `
//       SELECT c.color_name AS name, c.color_code AS hex
//       FROM Colors c
//       JOIN ProductColors pc ON c.color_id = pc.color_id
//       WHERE pc.product_id = $1
//     `;
//     const colors = await db.query(query, [productId]); // Use db.query here
//     res.status(200).json(colors.rows);
//   } catch (error) {
//     console.error('Error fetching colors for product:', error);
//     res.status(500).json({ error: 'Error fetching colors for product' });
//   }
// });

// app.post('/api/products/:code/images', async (req, res) => {
//   const { code } = req.params; // Product code
//   const { imageUrl } = req.body; // S3 image URL from request body

//   if (!imageUrl) {
//       return res.status(400).send('Image URL is required.');
//   }

//   try {
//       // Check if product exists
//       const productExists = await db.query(
//           'SELECT 1 FROM Products WHERE product_code = $1',
//           [code]
//       );
//       if (productExists.rowCount === 0) {
//           return res.status(404).send('Product not found.');
//       }

//       // Insert image URL into ProductImages table
//       const sql = `
//           INSERT INTO ProductImages (product_code, image_url)
//           VALUES ($1, $2)
//       `;
//       await db.query(sql, [code, imageUrl]);
//       res.status(201).send('Image URL stored successfully.');
//   } catch (error) {
//       console.error('Error saving image URL:', error);
//       res.status(500).send('Database error.');
//   }
// });

// app.get('/api/products/:code/images', async (req, res) => {
//   const { code } = req.params; // Product code

//   try {
//       const sql = `
//           SELECT pi.image_url
//           FROM ProductImages pi
//           JOIN Products p ON pi.product_id = p.product_id
//           WHERE p.product_code = $1
//       `;
//       const { rows } = await db.query(sql, [code]);

//       if (rows.length === 0) {
//           return res.status(404).send('No images found for this product.');
//       }

//       res.json({ images: rows.map(row => row.image_url) });
//   } catch (error) {
//       console.error('Error fetching image URLs:', error);
//       res.status(500).send('Database error.');
//   }
// });



// console.log('Retail routes loaded');
// //--- Retail Database ---//

// // Import the new schema routes
// app.use('/api', retailRoutes);



// Add images to a product







