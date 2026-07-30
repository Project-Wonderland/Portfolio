import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: string;
  accentColor: string;
  skills: { name: string; tag: string; level?: string }[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-24 relative overflow-hidden">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Technical Expertise
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span class="text-gradient-cyan">Technologies</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            Core tech stack and tools I specialize in to build high-performance web applications and robust backend APIs.
          </p>
        </div>

        <!-- Categories Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (category of skillCategories; track category.title) {
            <div class="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group hover:border-slate-700/80 transition-all duration-300">
              
              <div class="space-y-6">
                <!-- Category Title Header -->
                <div class="flex items-center gap-4 pb-4 border-b border-slate-800/80">
                  <div [class]="'w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg ' + category.accentColor">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="category.icon"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {{ category.title }}
                    </h3>
                    <p class="text-xs text-slate-400 font-medium">
                      {{ category.subtitle }}
                    </p>
                  </div>
                </div>

                <!-- Skill Pill Tags -->
                <div class="flex flex-wrap gap-2.5 pt-2">
                  @for (skill of category.skills; track skill.name) {
                    <div class="glass-pill px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-white cursor-default group/pill shadow-sm">
                      <span class="w-2 h-2 rounded-full bg-cyan-400 group-hover/pill:scale-125 transition-transform"></span>
                      <span>{{ skill.name }}</span>
                    </div>
                  }
                </div>
              </div>

              <!-- Bottom subtle badge counter -->
              <div class="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span>{{ category.skills.length }} Key Skills</span>
                <span class="text-cyan-400 font-medium">Verified Expertise</span>
              </div>

            </div>
          }
        </div>

        <!-- Highlight Banner -->
        <div class="mt-12 glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-white font-bold text-base">Continuous Learning & AI-Driven Productivity</h4>
              <p class="text-slate-400 text-xs sm:text-sm">Experienced in leveraging modern AI coding assistants to accelerate debugging and code optimization.</p>
            </div>
          </div>
          <div class="shrink-0">
            <a href="#experience" class="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
              <span>See Skills in Action</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  `
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      subtitle: 'Modern Web & UI Engineering',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      accentColor: 'bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-cyan-500/20',
      skills: [
        { name: 'Angular (v12+)', tag: 'Framework' },
        { name: 'TypeScript', tag: 'Language' },
        { name: 'HTML5', tag: 'Markup' },
        { name: 'Tailwind CSS', tag: 'Styling' },
        { name: 'Reactive Forms', tag: 'Angular' }
      ]
    },
    {
      title: 'Backend Engineering',
      subtitle: 'RESTful APIs & Service Architecture',
      icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
      accentColor: 'bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-blue-500/20',
      skills: [
        { name: 'ASP.NET Core', tag: 'Framework' },
        { name: 'Web API (REST)', tag: 'API' },
        { name: 'C#', tag: 'Language' },
        { name: 'LINQ', tag: 'Data Query' }
      ]
    },
    {
      title: 'Database & Tools',
      subtitle: 'Data Management & Dev Workflow',
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
      accentColor: 'bg-gradient-to-tr from-emerald-500 to-teal-600 shadow-emerald-500/20',
      skills: [
        { name: 'SQL Server', tag: 'RDBMS' },
        { name: 'Entity Framework Core', tag: 'ORM' },
        { name: 'Git', tag: 'VCS' },
        { name: 'Postman', tag: 'Testing' }
      ]
    }
  ];
}
