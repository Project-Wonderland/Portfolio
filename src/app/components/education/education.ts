import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  icon: string;
  gradient: string;
  highlights: string[];
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="py-24 relative overflow-hidden bg-slate-950/40">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            Academic Background
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & <span class="text-gradient-cyan">Qualifications</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            Strong computer science foundation supporting my full stack software development background.
          </p>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          @for (item of educationList; track item.degree) {
            <div class="glass-card rounded-3xl p-8 space-y-6 flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300">
              
              <div class="space-y-6">
                
                <!-- Card Header -->
                <div class="flex items-start gap-4">
                  <div [class]="'w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg ' + item.gradient">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="item.icon"></path>
                    </svg>
                  </div>
                  <div>
                    <span class="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">Post Graduate / Degree</span>
                    <h3 class="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {{ item.degree }}
                    </h3>
                    <p class="text-sm font-medium text-slate-300 mt-1">
                      {{ item.field }}
                    </p>
                  </div>
                </div>

                <!-- Institution Details -->
                <div class="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                  <div class="flex items-center gap-2 text-sm font-semibold text-white">
                    <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                    <span>{{ item.institution }}</span>
                  </div>
                  <div class="flex items-center gap-2 text-xs text-slate-400">
                    <svg class="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    </svg>
                    <span>{{ item.location }}</span>
                  </div>
                </div>

                <!-- Coursework / Key Highlights -->
                <div class="space-y-2">
                  <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Key Coursework:</span>
                  <div class="flex flex-wrap gap-2">
                    @for (highlight of item.highlights; track highlight) {
                      <span class="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
                        {{ highlight }}
                      </span>
                    }
                  </div>
                </div>

              </div>

              <!-- Degree Completion Badge -->
              <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span class="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Degree Completed
                </span>
                <span class="text-slate-400">Full Time Academic Program</span>
              </div>

            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class EducationComponent {
  educationList: EducationItem[] = [
    {
      degree: 'Master of Computer Applications (MCA)',
      field: 'Advanced Computer Applications & Software Engineering',
      institution: 'KIT Kalaignar Karunanidhi Institute of Technology',
      location: 'Coimbatore, Tamil Nadu, India',
      icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
      gradient: 'bg-gradient-to-tr from-blue-600 to-cyan-500 shadow-cyan-500/20',
      highlights: ['Software Architecture', 'Web Technologies', 'Advanced Database Systems', 'Enterprise Software Design', 'Object-Oriented Programming']
    },
    {
      degree: 'B.Sc. Computer Technology',
      field: 'Computer Technology & Information Systems',
      institution: 'Hindusthan College of Arts and Science',
      location: 'Coimbatore, Tamil Nadu, India',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      gradient: 'bg-gradient-to-tr from-emerald-500 to-teal-600 shadow-emerald-500/20',
      highlights: ['Data Structures & Algorithms', 'C# / .NET Fundamentals', 'Database Management Systems', 'Operating Systems', 'Web Fundamentals']
    }
  ];
}
