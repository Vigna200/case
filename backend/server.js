const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const submissionRoutes = require('./routes/submissionRoutes');
app.use('/api', submissionRoutes);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((error) => console.error('❌ MongoDB connection error:', error));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
