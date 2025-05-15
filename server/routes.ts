import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes with '/api' prefix
  
  // Route to get university information
  app.get('/api/university', (req, res) => {
    const universityInfo = {
      name: "Almaty Humanitarian Economic University",
      shortName: "AHEU",
      established: 1995,
      location: "36, Aksay-3 microdistrict, 050031, Almaty, Kazakhstan",
      phone: "+7 (727) 303-32-73",
      email: "priem.ageu@mail.ru"
    };
    
    res.json(universityInfo);
  });

  // Route to get all institutes
  app.get('/api/institutes', (req, res) => {
    const institutes = [
      {
        id: "pedagogy",
        name: "Institute of Pedagogy, Business and Law",
        shortName: "Pedagogy, Business & Law",
        image: "photo-1524178232363-1fb2b075b655",
        programCount: 14,
        studentCount: 1200,
        facultyCount: 110,
        established: 1997
      },
      {
        id: "economics",
        name: "Institute of Economics, Statistics and IT Technologies",
        shortName: "Economics, Statistics & IT",
        image: "photo-1516321497487-e288fb19713f",
        programCount: 13,
        studentCount: 950,
        facultyCount: 95,
        established: 1998
      },
      {
        id: "symbat",
        name: "\"Symbat\" Institute of Design and Technology",
        shortName: "Design & Technology",
        image: "photo-1581078426770-6d336e5de7bf",
        programCount: 12,
        studentCount: 850,
        facultyCount: 80,
        established: 2003
      }
    ];
    
    res.json(institutes);
  });

  // Route to get an institute by ID
  app.get('/api/institutes/:id', (req, res) => {
    const institutes = [
      {
        id: "pedagogy",
        name: "Institute of Pedagogy, Business and Law",
        shortName: "Pedagogy, Business & Law",
        image: "photo-1524178232363-1fb2b075b655",
        programCount: 14,
        studentCount: 1200,
        facultyCount: 110,
        established: 1997
      },
      {
        id: "economics",
        name: "Institute of Economics, Statistics and IT Technologies",
        shortName: "Economics, Statistics & IT",
        image: "photo-1516321497487-e288fb19713f",
        programCount: 13,
        studentCount: 950,
        facultyCount: 95,
        established: 1998
      },
      {
        id: "symbat",
        name: "\"Symbat\" Institute of Design and Technology",
        shortName: "Design & Technology",
        image: "photo-1581078426770-6d336e5de7bf",
        programCount: 12,
        studentCount: 850,
        facultyCount: 80,
        established: 2003
      }
    ];
    
    const institute = institutes.find(inst => inst.id === req.params.id);
    
    if (!institute) {
      res.status(404).json({ message: "Institute not found" });
      return;
    }
    
    res.json(institute);
  });

  // Route to get all academic programs
  app.get('/api/programs', (req, res) => {
    const programs = [
      // Pedagogy Institute Programs
      {
        id: "business-administration",
        title: "Business Administration",
        description: "A comprehensive program preparing future business leaders with essential management skills and strategic thinking.",
        level: "bachelor",
        institute: "pedagogy",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "law",
        title: "Law",
        description: "Develop legal expertise through a program that combines theoretical foundations with practical legal skills.",
        level: "bachelor",
        institute: "pedagogy",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "education-leadership",
        title: "Education Leadership",
        description: "Prepare to lead educational institutions with advanced knowledge in educational policy, management, and innovation.",
        level: "master",
        institute: "pedagogy",
        duration: 2,
        studyForm: "full-time",
        credits: 120
      },
      // Economics Institute Programs
      {
        id: "computer-science",
        title: "Computer Science",
        description: "Learn programming, algorithms, and software development with a focus on practical applications in various industries.",
        level: "bachelor",
        institute: "economics",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "economics",
        title: "Economics",
        description: "Develop an understanding of economic principles and their application to business, policy, and global contexts.",
        level: "bachelor",
        institute: "economics",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "data-science",
        title: "Data Science",
        description: "Master the skills needed to analyze complex data sets, develop predictive models, and extract actionable insights.",
        level: "master",
        institute: "economics",
        duration: 2,
        studyForm: "full-time",
        credits: 120
      },
      // Symbat Institute Programs
      {
        id: "fashion-design",
        title: "Fashion Design",
        description: "Develop creative and technical skills needed for a successful career in the dynamic fashion industry.",
        level: "bachelor",
        institute: "symbat",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "interior-design",
        title: "Interior Design",
        description: "Learn to create functional and aesthetically pleasing interior spaces for commercial and residential settings.",
        level: "bachelor",
        institute: "symbat",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "interior-design-advanced",
        title: "Interior Design",
        description: "Advance your design expertise focusing on sustainability, innovation, and creating functional, aesthetic interior spaces.",
        level: "master",
        institute: "symbat",
        duration: 2,
        studyForm: "full-time",
        credits: 120
      }
    ];
    
    // Filter by level if provided
    const level = req.query.level as string;
    if (level && level !== 'all') {
      const filteredPrograms = programs.filter(program => program.level === level);
      res.json(filteredPrograms);
      return;
    }
    
    // Filter by institute if provided
    const institute = req.query.institute as string;
    if (institute && institute !== 'all') {
      const filteredPrograms = programs.filter(program => program.institute === institute);
      res.json(filteredPrograms);
      return;
    }
    
    // Return all programs if no filters
    res.json(programs);
  });

  // Route to get program by ID
  app.get('/api/programs/:id', (req, res) => {
    const programs = [
      // Pedagogy Institute Programs
      {
        id: "business-administration",
        title: "Business Administration",
        description: "A comprehensive program preparing future business leaders with essential management skills and strategic thinking.",
        level: "bachelor",
        institute: "pedagogy",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "law",
        title: "Law",
        description: "Develop legal expertise through a program that combines theoretical foundations with practical legal skills.",
        level: "bachelor",
        institute: "pedagogy",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "education-leadership",
        title: "Education Leadership",
        description: "Prepare to lead educational institutions with advanced knowledge in educational policy, management, and innovation.",
        level: "master",
        institute: "pedagogy",
        duration: 2,
        studyForm: "full-time",
        credits: 120
      },
      // Economics Institute Programs
      {
        id: "computer-science",
        title: "Computer Science",
        description: "Learn programming, algorithms, and software development with a focus on practical applications in various industries.",
        level: "bachelor",
        institute: "economics",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "economics",
        title: "Economics",
        description: "Develop an understanding of economic principles and their application to business, policy, and global contexts.",
        level: "bachelor",
        institute: "economics",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "data-science",
        title: "Data Science",
        description: "Master the skills needed to analyze complex data sets, develop predictive models, and extract actionable insights.",
        level: "master",
        institute: "economics",
        duration: 2,
        studyForm: "full-time",
        credits: 120
      },
      // Symbat Institute Programs
      {
        id: "fashion-design",
        title: "Fashion Design",
        description: "Develop creative and technical skills needed for a successful career in the dynamic fashion industry.",
        level: "bachelor",
        institute: "symbat",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "interior-design",
        title: "Interior Design",
        description: "Learn to create functional and aesthetically pleasing interior spaces for commercial and residential settings.",
        level: "bachelor",
        institute: "symbat",
        duration: 4,
        studyForm: "full-time",
        credits: 240
      },
      {
        id: "interior-design-advanced",
        title: "Interior Design",
        description: "Advance your design expertise focusing on sustainability, innovation, and creating functional, aesthetic interior spaces.",
        level: "master",
        institute: "symbat",
        duration: 2,
        studyForm: "full-time",
        credits: 120
      }
    ];
    
    const program = programs.find(p => p.id === req.params.id);
    
    if (!program) {
      res.status(404).json({ message: "Program not found" });
      return;
    }
    
    res.json(program);
  });

  // Route to submit contact form
  app.post('/api/contact', (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }
    
    // In a real app, we'd save to database, send email, etc.
    // This is a simplified example for demonstration
    
    res.json({ 
      success: true, 
      message: "Contact form submitted successfully",
      contact: { name, email, phone, subject, message }
    });
  });

  // Route to get news articles
  app.get('/api/news', (req, res) => {
    const newsItems = [
      {
        id: "graduation",
        title: "Spring 2023 Graduation Ceremony",
        excerpt: "Over 500 students received their diplomas at this year's spring graduation ceremony...",
        content: "Over 500 students received their diplomas at this year's spring graduation ceremony held in the main AHEU auditorium. The ceremony was attended by faculty, staff, and families of the graduates. The university president congratulated the graduates on their achievements and wished them success in their future endeavors.",
        image: "photo-1523050854058-8df90110c9f1",
        date: "2023-05-25"
      },
      {
        id: "research",
        title: "International Research Symposium",
        excerpt: "AHEU hosted researchers from 15 countries to discuss innovations in sustainable development...",
        content: "AHEU hosted researchers from 15 countries to discuss innovations in sustainable development at the annual International Research Symposium. The symposium featured keynote speeches, panel discussions, and research presentations on topics such as renewable energy, sustainable agriculture, and eco-friendly urban planning.",
        image: "photo-1560439514-4e9645039924",
        date: "2023-05-12"
      },
      {
        id: "design",
        title: "Symbat Design Exhibition",
        excerpt: "Students from the Symbat Institute showcased their innovative design projects to industry professionals...",
        content: "Students from the Symbat Institute of Design and Technology showcased their innovative design projects to industry professionals at the annual Design Exhibition. The exhibition featured works from fashion design, interior design, and graphic design students, with several projects receiving recognition and job offers from industry representatives.",
        image: "photo-1581078426770-6d336e5de7bf",
        date: "2023-04-30"
      }
    ];
    
    res.json(newsItems);
  });

  // Route to get news article by ID
  app.get('/api/news/:id', (req, res) => {
    const newsItems = [
      {
        id: "graduation",
        title: "Spring 2023 Graduation Ceremony",
        excerpt: "Over 500 students received their diplomas at this year's spring graduation ceremony...",
        content: "Over 500 students received their diplomas at this year's spring graduation ceremony held in the main AHEU auditorium. The ceremony was attended by faculty, staff, and families of the graduates. The university president congratulated the graduates on their achievements and wished them success in their future endeavors.",
        image: "photo-1523050854058-8df90110c9f1",
        date: "2023-05-25"
      },
      {
        id: "research",
        title: "International Research Symposium",
        excerpt: "AHEU hosted researchers from 15 countries to discuss innovations in sustainable development...",
        content: "AHEU hosted researchers from 15 countries to discuss innovations in sustainable development at the annual International Research Symposium. The symposium featured keynote speeches, panel discussions, and research presentations on topics such as renewable energy, sustainable agriculture, and eco-friendly urban planning.",
        image: "photo-1560439514-4e9645039924",
        date: "2023-05-12"
      },
      {
        id: "design",
        title: "Symbat Design Exhibition",
        excerpt: "Students from the Symbat Institute showcased their innovative design projects to industry professionals...",
        content: "Students from the Symbat Institute of Design and Technology showcased their innovative design projects to industry professionals at the annual Design Exhibition. The exhibition featured works from fashion design, interior design, and graphic design students, with several projects receiving recognition and job offers from industry representatives.",
        image: "photo-1581078426770-6d336e5de7bf",
        date: "2023-04-30"
      }
    ];
    
    const newsItem = newsItems.find(item => item.id === req.params.id);
    
    if (!newsItem) {
      res.status(404).json({ message: "News article not found" });
      return;
    }
    
    res.json(newsItem);
  });

  // Route to get upcoming events
  app.get('/api/events', (req, res) => {
    const events = [
      {
        id: "open-house",
        title: "Open House Day",
        description: "Explore our campus, meet faculty and students, and learn about our programs.",
        date: "2023-06-01",
        location: "Main Campus, AHEU"
      },
      {
        id: "orientation",
        title: "International Student Orientation",
        description: "Welcome session for new international students with information about living in Almaty and studying at AHEU.",
        date: "2023-06-15",
        location: "International Center, AHEU"
      },
      {
        id: "summer-school",
        title: "Summer School: Business Leadership",
        description: "Intensive one-week program on business leadership for current students and external participants.",
        date: "2023-07-05",
        location: "Business School, AHEU"
      },
      {
        id: "webinar",
        title: "Online Admissions Webinar",
        description: "Information session about application process, requirements, and deadlines for prospective students.",
        date: "2023-07-20",
        location: "Online (Zoom)"
      }
    ];
    
    res.json(events);
  });

  // Route to get event by ID
  app.get('/api/events/:id', (req, res) => {
    const events = [
      {
        id: "open-house",
        title: "Open House Day",
        description: "Explore our campus, meet faculty and students, and learn about our programs.",
        date: "2023-06-01",
        location: "Main Campus, AHEU"
      },
      {
        id: "orientation",
        title: "International Student Orientation",
        description: "Welcome session for new international students with information about living in Almaty and studying at AHEU.",
        date: "2023-06-15",
        location: "International Center, AHEU"
      },
      {
        id: "summer-school",
        title: "Summer School: Business Leadership",
        description: "Intensive one-week program on business leadership for current students and external participants.",
        date: "2023-07-05",
        location: "Business School, AHEU"
      },
      {
        id: "webinar",
        title: "Online Admissions Webinar",
        description: "Information session about application process, requirements, and deadlines for prospective students.",
        date: "2023-07-20",
        location: "Online (Zoom)"
      }
    ];
    
    const event = events.find(e => e.id === req.params.id);
    
    if (!event) {
      res.status(404).json({ message: "Event not found" });
      return;
    }
    
    res.json(event);
  });

  const httpServer = createServer(app);

  return httpServer;
}
