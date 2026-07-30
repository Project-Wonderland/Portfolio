import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden min-h-screen flex items-center justify-center">
      
      <!-- Background Ambient Glow Orbs -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div class="absolute top-1/3 left-10 w-[300px] h-[300px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Text Content (Cols 1-7) -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <!-- Tech Badge -->
            <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide uppercase shadow-lg shadow-cyan-500/10">
              <svg class="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              Full Stack Engineering Specialist
            </div>

            <!-- Main Heading -->
            <div class="space-y-2">
              <p class="text-slate-400 text-lg md:text-xl font-medium tracking-wide">Hello, I'm</p>
              <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none">
                Arun <span class="text-gradient-cyan">Marshlin</span>
              </h1>
              <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300">
                Angular & .NET Core Developer <span class="text-blue-400">|</span> Full Stack Developer
              </h2>
            </div>

            <!-- Headline Paragraph -->
            <p class="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Full stack developer with <span class="text-cyan-400 font-semibold">2+ years of experience</span> building scalable, high-performance web applications using <span class="text-white font-medium">Angular</span>, <span class="text-white font-medium">ASP.NET Core</span>, and <span class="text-white font-medium">SQL Server</span>.
            </p>

            <!-- CTA Buttons -->
            <div class="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a 
                href="#projects" 
                class="px-7 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 shadow-xl shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2">
                <span>View Projects</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>

              <a 
                href="#experience" 
                class="px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 backdrop-blur-md">
                <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>View Experience</span>
              </a>

              <a 
                href="#contact" 
                class="px-5 py-3.5 rounded-xl font-medium text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-2">
                <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>Get In Touch</span>
              </a>
            </div>

            <!-- Quick Tech Pills -->
            <div class="pt-6 border-t border-slate-800/80 flex items-center justify-center lg:justify-start gap-3 flex-wrap text-xs text-slate-400">
              <span class="font-semibold text-slate-300">Core Stack:</span>
              <span class="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-400">Angular v12+</span>
              <span class="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-blue-400">ASP.NET Core</span>
              <span class="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-purple-400">C# / LINQ</span>
              <span class="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400">SQL Server</span>
            </div>

          </div>

          <!-- Visual Interactive Profile Card (Cols 8-12) -->
          <div class="lg:col-span-5 flex justify-center">
            <div class="relative w-full max-w-md">
              
              <!-- Card Background Glow -->
              <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-1000"></div>

              <!-- Main Card Container -->
              <div class="relative glass-card p-6 sm:p-8 rounded-3xl space-y-6">
                
                <!-- Profile Header Avatar -->
                <div class="flex items-center gap-4">
                  <div class="relative">
                    <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-600 p-1 shadow-lg shadow-cyan-500/20">
                      <div class="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-3xl font-extrabold text-white">
                        AM
                      </div>
                    </div>
                    <span class="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-slate-950 rounded-full"></span>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-white">Arun Marshlin</h3>
                    <p class="text-sm text-cyan-400 font-medium">Software Engineer</p>
                    <p class="text-xs text-slate-400 flex items-center gap-1 mt-1">
                      <svg class="w-3.5 h-3.5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      Coimbatore, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <!-- Stats Grid -->
                <div class="grid grid-cols-2 gap-3 pt-2">
                  <div class="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                    <div class="text-2xl font-black text-cyan-400">2+</div>
                    <div class="text-xs text-slate-400 mt-0.5">Years Experience</div>
                  </div>

                  <div class="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                    <div class="text-2xl font-black text-emerald-400">35%</div>
                    <div class="text-xs text-slate-400 mt-0.5">SQL Performance Boost</div>
                  </div>

                  <div class="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                    <div class="text-2xl font-black text-purple-400">20+</div>
                    <div class="text-xs text-slate-400 mt-0.5">Bugs Resolved via AI</div>
                  </div>

                  <div class="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                    <div class="text-2xl font-black text-blue-400">1,000+</div>
                    <div class="text-xs text-slate-400 mt-0.5">Daily EMR Users Served</div>
                  </div>
                </div>

                <!-- Code Terminal Snippet Card -->
                <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-1.5 shadow-inner">
                  <div class="flex items-center gap-1.5 pb-2 border-b border-slate-800 text-slate-500">
                    <span class="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span class="ml-2 text-[10px] tracking-wider text-slate-400">developer.profile.ts</span>
                  </div>
                  <p><span class="text-purple-400">const</span> developer = &#123;</p>
                  <p class="pl-4"><span class="text-cyan-400">name</span>: <span class="text-emerald-300">'Arun Marshlin'</span>,</p>
                  <p class="pl-4"><span class="text-cyan-400">role</span>: <span class="text-emerald-300">'Full Stack Developer'</span>,</p>
                  <p class="pl-4"><span class="text-cyan-400">primaryTech</span>: [<span class="text-amber-300">'Angular'</span>, <span class="text-amber-300">'.NET Core'</span>, <span class="text-amber-300">'SQL'</span>],</p>
                  <p class="pl-4"><span class="text-cyan-400">status</span>: <span class="text-emerald-300">'Building scalable web applications'</span></p>
                  <p>&#125;;</p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}
