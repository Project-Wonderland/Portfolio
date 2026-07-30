import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header 
      [ngClass]="{ 'py-3 shadow-lg shadow-black/20 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80': isScrolled, 'py-5 bg-transparent': !isScrolled }"
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        <!-- Brand / Logo -->
        <a href="#hero" class="group flex items-center gap-3 cursor-pointer">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
            <div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-cyan-400 text-lg tracking-wider">
              AM
            </div>
          </div>
          <div class="flex flex-col">
            <span class="text-lg font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
              Arun Marshlin
            </span>
            <span class="text-xs text-slate-400 font-medium tracking-wider uppercase">
              Full Stack Dev
            </span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          @for (item of navItems; track item.link) {
            <a 
              [href]="item.link" 
              class="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all duration-200">
              {{ item.label }}
            </a>
          }
        </nav>

        <!-- Availability Badge & CTA -->
        <div class="hidden lg:flex items-center gap-4">
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Hire
          </div>
          <a 
            href="#contact" 
            class="px-4 py-2 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-lg shadow-md shadow-cyan-500/20 transition-all duration-200 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5">
            Contact Me
          </a>
        </div>

        <!-- Mobile Hamburger Button -->
        <button 
          (click)="toggleMenu()"
          class="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation">
          @if (!isMenuOpen) {
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          } @else {
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          }
        </button>

      </div>

      <!-- Mobile Navigation Drawer -->
      @if (isMenuOpen) {
        <div class="md:hidden mt-3 px-4 pt-3 pb-6 bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800/80 animate-in slide-in-from-top duration-300">
          <div class="flex flex-col gap-2">
            @for (item of navItems; track item.link) {
              <a 
                [href]="item.link" 
                (click)="isMenuOpen = false"
                class="px-4 py-3 text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900 rounded-xl transition-all">
                {{ item.label }}
              </a>
            }
            <div class="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <div class="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Opportunities
              </div>
              <a 
                href="#contact" 
                (click)="isMenuOpen = false"
                class="w-full py-3 text-center text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl shadow-md shadow-cyan-500/20">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      }
    </header>
  `
})
export class HeaderComponent {
  isMenuOpen = false;
  isScrolled = false;

  navItems = [
    { label: 'Home', link: '#hero' },
    { label: 'Skills', link: '#skills' },
    { label: 'Experience', link: '#experience' },
    { label: 'Projects', link: '#projects' },
    { label: 'Education', link: '#education' },
    { label: 'Contact', link: '#contact' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
