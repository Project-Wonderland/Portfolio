import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  category: string;
  badge: string;
  description: string;
  keyFeatures: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-24 relative overflow-hidden">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            Featured Work
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Key <span class="text-gradient-cyan">Projects</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            Engineering solutions designed to streamline real-world operations and optimize service delivery.
          </p>
        </div>

        <!-- Featured Project Showcase -->
        @for (project of featuredProjects; track project.title) {
          <div class="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-700/80 mb-12">
            
            <!-- Ambient Card Orbs -->
            <div class="absolute -right-20 -top-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <!-- Project Details (Cols 1-7) -->
              <div class="lg:col-span-7 space-y-6">
                
                <div class="flex items-center gap-3 flex-wrap">
                  <span class="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                    {{ project.category }}
                  </span>
                  <span class="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium">
                    {{ project.badge }}
                  </span>
                </div>

                <h3 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {{ project.title }}
                </h3>

                <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
                  {{ project.description }}
                </p>

                <!-- Key Features Checklist -->
                <div class="space-y-3 pt-2">
                  <h4 class="text-sm font-semibold uppercase text-slate-400 tracking-wider">Core Capabilities:</h4>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    @for (feature of project.keyFeatures; track feature) {
                      <div class="flex items-center gap-2.5 text-sm text-slate-300">
                        <div class="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span>{{ feature }}</span>
                      </div>
                    }
                  </div>
                </div>

                <!-- Tech Stack Pills -->
                <div class="pt-4 border-t border-slate-800/80 flex items-center gap-2 flex-wrap">
                  <span class="text-xs text-slate-400 font-medium mr-2">Built With:</span>
                  @for (tech of project.techStack; track tech) {
                    <span class="glass-pill px-3 py-1 rounded-full text-xs font-medium text-cyan-300">
                      {{ tech }}
                    </span>
                  }
                </div>

              </div>

              <!-- Visual Representation / Interactive Mockup (Cols 8-12) -->
              <div class="lg:col-span-5 flex justify-center">
                <div class="w-full glass-panel p-6 rounded-3xl border border-slate-800 space-y-4 shadow-2xl">
                  
                  <!-- GPS Status Mockup Header -->
                  <div class="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                    <div class="flex items-center gap-2 text-emerald-400 font-medium">
                      <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      GPS Tracking Active
                    </div>
                    <span class="text-slate-400 font-mono">Location Sync: 100%</span>
                  </div>

                  <!-- Simulated Radar Routing Interface -->
                  <div class="h-48 rounded-2xl bg-slate-950 border border-slate-800 relative flex items-center justify-center overflow-hidden">
                    <div class="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
                    
                    <!-- Radar Rings -->
                    <div class="w-36 h-36 rounded-full border border-cyan-500/20 animate-ping absolute"></div>
                    <div class="w-24 h-24 rounded-full border border-cyan-500/40 absolute"></div>
                    
                    <!-- Location Marker Pin -->
                    <div class="relative z-10 flex flex-col items-center">
                      <div class="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-bounce">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        </svg>
                      </div>
                      <span class="mt-2 text-[11px] font-mono text-cyan-300 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">
                        Technician Dispatched
                      </span>
                    </div>
                  </div>

                  <!-- System Stats -->
                  <div class="grid grid-cols-2 gap-2 text-center text-xs">
                    <div class="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <span class="text-slate-400 block text-[10px]">Routing Logic</span>
                      <span class="text-white font-semibold">Nearest Tech First</span>
                    </div>
                    <div class="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <span class="text-slate-400 block text-[10px]">Backend Framework</span>
                      <span class="text-cyan-400 font-semibold">ASP.NET / C#</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        }

      </div>
    </section>
  `
})
export class ProjectsComponent {
  featuredProjects: Project[] = [
    {
      title: 'Automatic Service Call Booking Using GPS',
      category: 'Enterprise IoT & Location System',
      badge: 'Full Stack ASP.NET & GPS Integration',
      description: 'Built a GPS-based service call booking system using ASP.NET and C#, integrating GPS modules for real-time location tracking and automated service request routing.',
      keyFeatures: [
        'Real-time GPS Location Tracking',
        'Automated Service Call Dispatching',
        'Geofenced Technician Routing',
        'Customer Service Dashboard'
      ],
      techStack: ['ASP.NET Core', 'C#', 'GPS Module Integration', 'SQL Server', 'REST Web API', 'Entity Framework']
    }
  ];
}
