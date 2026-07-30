import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkExperience {
  role: string;
  company: string;
  period: string;
  isCurrent: boolean;
  location: string;
  highlights: string[];
  metricsBadge?: string;
  techUsed: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="py-24 relative overflow-hidden bg-slate-950/40">
      
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Career Journey
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work <span class="text-gradient-cyan">Experience</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            My professional progression as a Full Stack Developer building enterprise-grade applications.
          </p>
        </div>

        <!-- Timeline Container -->
        <div class="relative pl-6 sm:pl-10 space-y-12">
          
          <!-- Vertical Line -->
          <div class="absolute left-2.5 sm:left-4 top-4 bottom-4 w-1 bg-gradient-to-b from-cyan-500 via-blue-600 to-slate-800 rounded-full"></div>

          @for (exp of experiences; track exp.role + exp.company) {
            <div class="relative group">
              
              <!-- Timeline Glowing Node Dot -->
              <div 
                [class]="'absolute -left-6 sm:-left-10 top-1.5 w-6 h-6 rounded-full border-4 border-slate-950 flex items-center justify-center transition-all duration-300 group-hover:scale-125 ' + (exp.isCurrent ? 'bg-cyan-400 shadow-lg shadow-cyan-500/50' : 'bg-blue-600')">
                <span [class]="'w-2 h-2 rounded-full ' + (exp.isCurrent ? 'bg-slate-950 animate-ping' : 'bg-white')"></span>
              </div>

              <!-- Experience Card -->
              <div class="glass-card rounded-3xl p-6 sm:p-8 space-y-6">
                
                <!-- Card Header -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                  <div>
                    <div class="flex items-center gap-3 flex-wrap">
                      <h3 class="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {{ exp.role }}
                      </h3>
                      @if (exp.isCurrent) {
                        <span class="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                          Present Role
                        </span>
                      }
                      @if (exp.metricsBadge) {
                        <span class="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
                          ⚡ {{ exp.metricsBadge }}
                        </span>
                      }
                    </div>
                    
                    <div class="flex items-center gap-2 mt-1.5 text-base font-semibold text-cyan-400">
                      <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                      <span>{{ exp.company }}</span>
                    </div>
                  </div>

                  <!-- Date Pill -->
                  <div class="flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-900/90 px-4 py-2 rounded-2xl border border-slate-800 shrink-0 self-start sm:self-center">
                    <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>{{ exp.period }}</span>
                  </div>
                </div>

                <!-- Responsibilities Highlights List -->
                <ul class="space-y-3">
                  @for (item of exp.highlights; track item) {
                    <li class="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                      <span class="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-cyan-400"></span>
                      <span>{{ item }}</span>
                    </li>
                  }
                </ul>

                <!-- Tech Badges Footer -->
                <div class="pt-4 border-t border-slate-800/60 flex items-center gap-2 flex-wrap text-xs">
                  <span class="text-slate-400 font-medium mr-1">Technologies:</span>
                  @for (tech of exp.techUsed; track tech) {
                    <span class="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-mono">
                      {{ tech }}
                    </span>
                  }
                </div>

              </div>

            </div>
          }

        </div>

      </div>
    </section>
  `
})
export class ExperienceComponent {
  experiences: WorkExperience[] = [
    {
      role: 'Software Engineer',
      company: 'Angler technology',
      period: 'March 2026 - Present',
      isCurrent: true,
      location: 'Coimbatore, India',
      metricsBadge: '20+ AI-Resolved Bugs',
      highlights: [
        'Developed and integrated .NET Core REST APIs for a Warehouse Management System across Android and web applications.',
        'Leveraged AI-assisted analysis to resolve 20+ application bugs and streamlined data operations using Entity Framework.',
        'Architected clean data access layer methods ensuring high system responsiveness under heavy concurrent data transactions.'
      ],
      techUsed: ['.NET Core REST API', 'Entity Framework', 'Android Integration', 'AI-Assisted Debugging', 'C#', 'SQL Server']
    },
    {
      role: 'Jr. Software Engineer',
      company: 'Unite Care Software Solution',
      period: 'Aug 2024 - May 2025',
      isCurrent: false,
      location: 'Coimbatore, India',
      metricsBadge: '35% SQL Performance Boost',
      highlights: [
        'Maintained EMR (Electronic Medical Records) modules using Angular and ASP.NET Core Web API serving 1,000+ daily active users.',
        'Improved SQL query performance by up to 35% through indexing and stored procedure optimization.',
        'Collaborated directly with product teams to build modular Angular reactive forms and reusable client components.'
      ],
      techUsed: ['Angular (v12+)', 'ASP.NET Core Web API', 'SQL Server Indexing', 'Stored Procedures', 'EMR Systems']
    },
    {
      role: 'Jr. ASP.NET Developer',
      company: 'Bull Machines Pvt Ltd',
      period: 'Jun 2023 - Aug 2024',
      isCurrent: false,
      location: 'Coimbatore, India',
      highlights: [
        'Built and enhanced ASP.NET Core applications integrated with SQL Server databases.',
        'Developed RESTful Web APIs to support internal CRM systems and automated business processes.',
        'Maintained core database schemas and performed bug fixes across backend services.'
      ],
      techUsed: ['ASP.NET Core', 'C#', 'SQL Server', 'REST APIs', 'Internal CRM', 'LINQ']
    }
  ];
}
