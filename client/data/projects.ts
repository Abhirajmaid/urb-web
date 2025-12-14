import { ProjectRecord } from '@/types/project';

// Project type for display components (matches the old structure)
export type Project = {
  id: string;
  title: string;
  description: string[];
  mainImage?: string;
  mainImageAlt?: string;
  secondaryImages?: {
    src: string;
    alt: string;
  }[];
  essentials: string[];
  gallery?: {
    src: string;
    alt: string;
  }[];
};

export const staticProjects: ProjectRecord[] = [
  {
    id: 'skyline-towers',
    name: 'Skyline Towers',
    overview: 'A modern residential complex featuring luxury apartments with panoramic city views, state-of-the-art amenities, and sustainable design principles.',
    essentials: [
      'Premium location in the heart of the city',
      'World-class amenities including gym, pool, and concierge',
      'Eco-friendly construction with LEED certification'
    ],
    featureImages: {
      primary: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
      city: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
    },
    gallery: [
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80'
    ],
    createdAt: '2023-01-15T00:00:00.000Z',
    updatedAt: '2023-06-20T00:00:00.000Z',
    status: 'completed',
    location: 'Riverside District',
    industries: ['Residential', 'Real Estate']
  },
  {
    id: 'riverfront-residences',
    name: 'Riverfront Residences',
    overview: 'Elegant waterfront living spaces combining contemporary architecture with natural surroundings, offering residents a serene lifestyle by the river.',
    essentials: [
      'Prime waterfront location with private marina access',
      'Luxury finishes and smart home technology',
      'Dedicated green spaces and walking trails'
    ],
    featureImages: {
      primary: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      city: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80'
    },
    gallery: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80'
    ],
    createdAt: '2022-05-10T00:00:00.000Z',
    updatedAt: '2022-08-15T00:00:00.000Z',
    status: 'completed',
    location: 'Downtown Metropolis',
    industries: ['Residential', 'Waterfront']
  },
  {
    id: 'modular-megacity',
    name: 'Modular Megacity',
    overview: 'An innovative urban development project featuring modular construction techniques, designed to create sustainable and affordable housing solutions.',
    essentials: [
      'Revolutionary modular construction technology',
      'Affordable housing with premium quality',
      'Rapid construction timeline with minimal disruption'
    ],
    featureImages: {
      primary: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
      city: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
    },
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    createdAt: '2023-08-20T00:00:00.000Z',
    updatedAt: '2023-12-10T00:00:00.000Z',
    status: 'completed',
    location: 'Urban Core',
    industries: ['Residential', 'Innovation']
  },
  {
    id: 'coastal-horizon',
    name: 'Coastal Horizon',
    overview: 'Luxury beachfront development offering exclusive ocean views, premium amenities, and a sophisticated coastal lifestyle experience.',
    essentials: [
      'Stunning oceanfront location with private beach access',
      'Premium luxury finishes and designer interiors',
      'Exclusive resort-style amenities and services'
    ],
    featureImages: {
      primary: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      city: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=800&q=80'
    },
    gallery: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    createdAt: '2023-10-05T00:00:00.000Z',
    updatedAt: '2024-03-15T00:00:00.000Z',
    status: 'active',
    location: 'Seaside Boulevard',
    industries: ['Residential', 'Luxury']
  },
  {
    id: 'tech-campus',
    name: 'Tech Campus',
    overview: 'A state-of-the-art technology campus designed to foster innovation, featuring modern office spaces, research facilities, and collaborative environments.',
    essentials: [
      'Cutting-edge technology infrastructure',
      'Flexible workspace designs for modern work',
      'Integrated green spaces and wellness facilities'
    ],
    featureImages: {
      primary: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=800&q=80',
      city: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
    },
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    ],
    createdAt: '2023-11-12T00:00:00.000Z',
    updatedAt: '2024-01-20T00:00:00.000Z',
    status: 'active',
    location: 'Innovation District',
    industries: ['Commercial', 'Technology']
  },
  {
    id: 'green-towers',
    name: 'Green Towers',
    overview: 'Eco-friendly residential towers featuring sustainable design, renewable energy systems, and extensive green spaces for environmentally conscious living.',
    essentials: [
      'LEED Platinum certified sustainable design',
      'Solar power and energy-efficient systems',
      'Rooftop gardens and urban farming spaces'
    ],
    featureImages: {
      primary: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      city: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
    },
    gallery: [
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    ],
    createdAt: '2023-03-25T00:00:00.000Z',
    updatedAt: '2023-05-18T00:00:00.000Z',
    status: 'completed',
    location: 'Eco Park',
    industries: ['Residential', 'Sustainability']
  }
];

// Export a function to get a project by ID
export function getProjectById(id: string): ProjectRecord | null {
  return staticProjects.find(project => project.id === id) || null;
}

// Export a function to get all projects
export function getAllProjects(): ProjectRecord[] {
  return staticProjects;
}
