import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-slate-950 border-t border-slate-800/80 py-12 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          <!-- Logo & Brand -->
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-md shadow-blue-500/20">
              <div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-cyan-400 text-sm">
                AM
              </div>
            </div>
            <div>
              <span class="text-base font-bold text-white tracking-tight">Arun Marshlin</span>
              <p class="text-xs text-slate-400">Angular & .NET Core Developer</p>
            </div>
          </div>

          <!-- Footer Navigation Links -->
          <div class="flex items-center gap-6 text-sm font-medium text-slate-400 flex-wrap justify-center">
            <a href="#hero" class="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#skills" class="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" class="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" class="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#education" class="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#contact" class="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <!-- Back To Top Button -->
          <button 
            (click)="scrollToTop()"
            class="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-2 text-xs font-semibold"
            aria-label="Back to top">
            <span>Back to Top</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </button>

        </div>

        <!-- Copyright Info -->
        <div class="pt-8 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {{ currentYear }} Arun Marshlin. Designed & Built with Angular & Tailwind CSS.</p>
          <p class="flex items-center gap-1">
            <span>Coimbatore, Tamil Nadu, India</span>
          </p>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
