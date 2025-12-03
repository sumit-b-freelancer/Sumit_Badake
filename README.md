# Personal Portfolio - SUMIT BADAKE

This is my professional portfolio built with Next.js and TailwindCSS. It showcases my projects, skills, and experience as an AI/ML engineer.

## 🚀 Live Demo

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sumit-b-freelancer/personal_protofilo)

## 📁 Project Structure

```
next-portfolio-sumit/
├─ README.md
├─ package.json
├─ next.config.mjs
├─ tailwind.config.js
├─ postcss.config.js
├─ public/
│  ├─ resume.pdf   <-- Replace with your actual resume
│  └─ images/
│     └─ profile.jpg
├─ pages/
│  ├─ _app.jsx
│  ├─ index.jsx
│  ├─ about.jsx
│  ├─ projects.jsx
│  ├─ achievements.jsx
│  ├─ freelance.jsx
│  ├─ contact.jsx
│  ├─ project-inquiry.jsx
│  └─ api/
│     └─ contact.js
├─ components/
│  ├─ Layout.jsx
│  ├─ Navbar.jsx
│  ├─ Hero.jsx
│  ├─ ProjectCard.jsx
│  ├─ SkillPill.jsx
│  ├─ Footer.jsx
│  └─ Timeline.jsx
├─ lib/
│  └─ mongodb.js
├─ styles/
│  └─ globals.css
├─ .env.local.example
└─ .env.local
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- MongoDB (either local installation or MongoDB Atlas account)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sumit-b-freelancer/personal_protofilo.git
cd personal_protofilo
```

2. Install dependencies:
```bash
npm install
```

### MongoDB Setup

#### Option 1: Local MongoDB (Development)

1. Install MongoDB on your local machine
2. Start MongoDB service
3. The application is already configured to use your local MongoDB at `mongodb://localhost:27017/portfolio`

#### Option 2: MongoDB Atlas (Production)

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Update `.env.local` with your Atlas connection string

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🌐 Deployment

### Deploy with Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and create a new project
3. Import your repository
4. Add the following environment variables:
   - `MONGODB_URI` - Your MongoDB connection string (Atlas)
   - `MONGODB_DB` - Your MongoDB database name
5. Deploy!

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB=your_database_name
```

Refer to `.env.local.example` for examples of both local and Atlas configurations.

## 🎨 Customization

### Personal Information

Update your personal information in:
- `pages/index.jsx` - Main page content
- `pages/about.jsx` - About page with skills and education
- `pages/contact.jsx` - Contact information

### Projects

Modify the projects array in:
- `pages/index.jsx` - Featured projects on homepage
- `pages/projects.jsx` - Complete projects list

### Resume

Replace `public/resume.pdf` with your actual resume file.

## 📞 Contact Form

The contact form uses MongoDB to store messages. Make sure to set up your MongoDB connection for this feature to work.

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio. Pull requests are welcome for any improvements or bug fixes.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).