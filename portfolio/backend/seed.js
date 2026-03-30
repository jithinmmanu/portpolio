import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    
    await Project.deleteMany();
    
    await Project.insertMany([
      {
        title: 'E-Commerce App',
        description: 'Full-stack shopping platform with payment integration.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
        url: '#',
        github: 'https://github.com/username/ecommerce',
        category: 'Web App',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
      },
      {
        title: 'Task Manager',
        description: 'Real-time collaborative task management tool.',
        image: 'https://images.unsplash.com/photo-1506784367996-9b210a57d1d5?w=500',
        url: '#',
        github: 'https://github.com/username/taskmanager',
        category: 'Web App',
        technologies: ['React', 'Socket.io', 'Express']
      },
      {
        title: 'Weather Dashboard',
        description: 'Modern weather app with forecasts and maps.',
        image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500',
        url: '#',
        github: 'https://github.com/username/weatherapp',
        category: 'Mobile App',
        technologies: ['React Native', 'OpenWeather API']
      }
    ]);
    
    console.log('Sample data seeded');
    process.exit();
  })
  .catch(err => console.error(err));

