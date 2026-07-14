const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ASS5_2';

const site = {
  collegeName: 'Yash College',
  tagline: 'Learn, build, and lead with programs shaped for modern careers.',
  description:
    'A simple college website inspired by program-centric university pages and admission-focused engineering college homepages.',
  stats: [
    { label: 'Programs', value: '12' },
    { label: 'Faculty', value: '48' },
    { label: 'Placements', value: '91%' },
    { label: 'Student Clubs', value: '26' }
  ],
  programs: [
    {
      name: 'Computer Science and Engineering',
      level: 'B.Tech',
      duration: '4 Years',
      summary: 'Full-stack, cloud, AI, and software engineering foundations.'
    },
    {
      name: 'Information Technology',
      level: 'B.Tech',
      duration: '4 Years',
      summary: 'Networks, databases, web systems, and product engineering.'
    },
    {
      name: 'Data Science',
      level: 'B.Sc',
      duration: '3 Years',
      summary: 'Statistics, analytics, data engineering, and visualization.'
    },
    {
      name: 'Business Administration',
      level: 'BBA',
      duration: '3 Years',
      summary: 'Management, marketing, finance, and entrepreneurship skills.'
    }
  ],
  faculty: [
    {
      name: 'Dr. Meera Rao',
      role: 'Dean, Academics',
      focus: 'Curriculum design and outcome-based education'
    },
    {
      name: 'Prof. Anil Deshmukh',
      role: 'Head, Computer Science',
      focus: 'Artificial intelligence and software architecture'
    },
    {
      name: 'Prof. Nisha Kapoor',
      role: 'Head, Student Affairs',
      focus: 'Student support, clubs, and career readiness'
    }
  ],
  highlights: [
    'Industry-linked workshops',
    'Placement training and mock interviews',
    'Smart classrooms and digital library',
    'Hackathons, design sprints, and seminars'
  ],
  events: [
    {
      date: 'April 12, 2026',
      title: 'Open House for Admissions',
      note: 'Meet faculty, tour the campus, and explore programs.'
    },
    {
      date: 'April 20, 2026',
      title: 'Design and Innovation Expo',
      note: 'Student projects, prototypes, and poster presentations.'
    }
  ]
};

const applicationSchema = new mongoose.Schema(
  {
    formType: {
      type: String,
      enum: ['application', 'contact'],
      required: true
    },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    program: { type: String, trim: true },
    tenthMarks: { type: Number },
    twelfthMarks: { type: Number },
    cetScore: { type: Number },
    jeeScore: { type: Number },
    subject: { type: String, trim: true },
    message: { type: String, trim: true }
  },
  {
    timestamps: true
  }
);

applicationSchema.index({ createdAt: -1 });

const Application = mongoose.models.Application || mongoose.model('Application', applicationSchema, 'college');

const memoryStore = [];
let dbReady = false;

function parseNumber(value) {
  if (value === undefined || value === null || value === '') {
    return undefined;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

async function saveApplication(payload) {
  if (dbReady) {
    return Application.create(payload);
  }

  memoryStore.unshift({
    _id: Date.now().toString(),
    ...payload,
    createdAt: new Date(),
    updatedAt: new Date()
  });

  return memoryStore[0];
}

async function listApplications() {
  if (dbReady) {
    return Application.find().sort({ createdAt: -1 }).lean();
  }

  return memoryStore;
}

async function connectDatabase() {
  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 4000
    });
    dbReady = true;
    console.log(`Connected to MongoDB at ${MONGODB_URI}`);
  } catch (error) {
    dbReady = false;
    console.warn(`MongoDB connection failed. Running with in-memory storage. ${error.message}`);
  }
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', async (req, res, next) => {
  try {
    const applications = await listApplications();
    res.render('home', {
      site,
      applicationsCount: applications.length,
      submitted: req.query.submitted === '1',
      openModal: req.query.open === '1',
      dbReady
    });
  } catch (error) {
    next(error);
  }
});

app.get('/programs', (req, res) => {
  res.render('programs', { site });
});

app.get('/faculty', (req, res) => {
  res.render('faculty', { site });
});

app.get('/admissions', (req, res) => {
  res.render('admissions', {
    site,
    submitted: req.query.submitted === '1',
    openModal: req.query.open === '1',
    dbReady
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', { site, submitted: req.query.submitted === '1' });
});

app.post('/apply', async (req, res, next) => {
  try {
    const entry = {
      formType: 'application',
      name: (req.body.name || '').trim(),
      email: (req.body.email || '').trim(),
      phone: (req.body.phone || '').trim(),
      program: (req.body.program || '').trim(),
      tenthMarks: parseNumber(req.body.tenthMarks),
      twelfthMarks: parseNumber(req.body.twelfthMarks),
      cetScore: parseNumber(req.body.cetScore),
      jeeScore: parseNumber(req.body.jeeScore),
      message: (req.body.message || '').trim()
    };

    if (!entry.name || !entry.email || !entry.program) {
      return res.redirect('/admissions?submitted=0&open=1');
    }

    await saveApplication(entry);
    res.redirect('/admissions?submitted=1');
  } catch (error) {
    next(error);
  }
});

app.post('/contact', async (req, res, next) => {
  try {
    const entry = {
      formType: 'contact',
      name: (req.body.name || '').trim(),
      email: (req.body.email || '').trim(),
      subject: (req.body.subject || '').trim(),
      message: (req.body.message || '').trim()
    };

    if (!entry.name || !entry.email || !entry.message) {
      return res.redirect('/contact?submitted=0');
    }

    await saveApplication(entry);
    res.redirect('/contact?submitted=1');
  } catch (error) {
    next(error);
  }
});

app.get('/api/applications', async (req, res, next) => {
  try {
    const applications = await listApplications();
    res.json(applications);
  } catch (error) {
    next(error);
  }
});

app.get('/api/inquiries', async (req, res, next) => {
  try {
    const applications = await listApplications();
    res.json(applications);
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

async function start() {
  await connectDatabase();
  app.listen(PORT, () => {
    console.log(`College site running at http://localhost:${PORT}`);
  });
}

start();
