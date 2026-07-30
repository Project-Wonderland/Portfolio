import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="py-24 relative overflow-hidden">
      
      <!-- Background Ambient Orb -->
      <div class="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Let's Connect
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get In <span class="text-gradient-cyan">Touch</span>
          </h2>
          <p class="text-slate-400 text-base sm:text-lg">
            Have a project in mind or interested in working together? Reach out directly or send a message below!
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <!-- Contact Details Cards (Cols 1-5) -->
          <div class="lg:col-span-5 space-y-6">
            
            <div class="glass-card rounded-3xl p-8 space-y-6">
              <h3 class="text-2xl font-bold text-white border-b border-slate-800 pb-4">
                Contact Details
              </h3>

              <!-- Email Card -->
              <div class="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 group hover:border-cyan-500/40 transition-all">
                <div class="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <span class="text-xs font-medium text-slate-400 uppercase tracking-wider block">Email Address</span>
                  <a href="mailto:marshlinofficial@gmail.com" class="text-sm sm:text-base font-semibold text-white hover:text-cyan-400 transition-colors truncate block">
                    marshlinofficial&#64;gmail.com
                  </a>
                  <button 
                    (click)="copyEmail()"
                    class="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
                    @if (isCopied) {
                      <span class="text-emerald-400 flex items-center gap-1">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Copied to Clipboard!
                      </span>
                    } @else {
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                      </svg>
                      Copy Email Address
                    }
                  </button>
                </div>
              </div>

              <!-- LinkedIn Card -->
              <div class="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 group hover:border-blue-500/40 transition-all">
                <div class="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.64 1.64 0 1 0 1.64 1.64A1.64 1.64 0 0 0 7.86 6.7Z"/>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <span class="text-xs font-medium text-slate-400 uppercase tracking-wider block">LinkedIn Profile</span>
                  <a href="https://linkedin.com/in/arun-marshlin" target="_blank" rel="noopener noreferrer" class="text-sm sm:text-base font-semibold text-white hover:text-blue-400 transition-colors truncate block flex items-center gap-1">
                    <span>linkedin.com/in/arun-marshlin</span>
                    <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Location Card -->
              <div class="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 group hover:border-emerald-500/40 transition-all">
                <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <span class="text-xs font-medium text-slate-400 uppercase tracking-wider block">Current Location</span>
                  <span class="text-sm sm:text-base font-semibold text-white block">
                    Coimbatore, Tamil Nadu, India
                  </span>
                </div>
              </div>

            </div>

          </div>

          <!-- Reactive Contact Form (Cols 6-12) -->
          <div class="lg:col-span-7">
            <div class="glass-card rounded-3xl p-8 space-y-6">
              
              <div class="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 class="text-2xl font-bold text-white">Send a Direct Message</h3>
                  <p class="text-xs text-slate-400 mt-1">Built with Angular Reactive Forms & Validation</p>
                </div>
                <span class="text-xs font-mono text-cyan-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                  Form Validation Active
                </span>
              </div>

              @if (isSubmitted) {
                <div class="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-2 animate-in fade-in">
                  <div class="flex items-center gap-2 text-lg font-bold text-emerald-400">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Message Sent Successfully!</span>
                  </div>
                  <p class="text-sm text-slate-300">
                    Thank you for reaching out. Arun Marshlin will get back to you shortly at <strong class="text-white">{{ contactForm.value.email }}</strong>.
                  </p>
                  <button 
                    (click)="resetForm()"
                    class="mt-4 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 hover:text-cyan-300">
                    Send Another Message
                  </button>
                </div>
              } @else {
                <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-5">
                  
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <!-- Name Input -->
                    <div class="space-y-1.5">
                      <label for="name" class="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                        Your Name <span class="text-rose-400">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        formControlName="name"
                        placeholder="e.g. John Doe"
                        class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                        [ngClass]="{ 'border-rose-500/80': isControlInvalid('name') }">
                      @if (isControlInvalid('name')) {
                        <p class="text-xs text-rose-400">Name is required (min 2 characters).</p>
                      }
                    </div>

                    <!-- Email Input -->
                    <div class="space-y-1.5">
                      <label for="email" class="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                        Your Email <span class="text-rose-400">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        formControlName="email"
                        placeholder="e.g. john@example.com"
                        class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                        [ngClass]="{ 'border-rose-500/80': isControlInvalid('email') }">
                      @if (isControlInvalid('email')) {
                        <p class="text-xs text-rose-400">Please enter a valid email address.</p>
                      }
                    </div>
                  </div>

                  <!-- Subject Input -->
                  <div class="space-y-1.5">
                    <label for="subject" class="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      formControlName="subject"
                      placeholder="Project Opportunity / Technical Consultation"
                      class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm">
                  </div>

                  <!-- Message TextArea -->
                  <div class="space-y-1.5">
                    <label for="message" class="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                      Message <span class="text-rose-400">*</span>
                    </label>
                    <textarea 
                      id="message" 
                      formControlName="message"
                      rows="4"
                      placeholder="Hi Arun, I would like to discuss..."
                      class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm resize-none"
                      [ngClass]="{ 'border-rose-500/80': isControlInvalid('message') }"></textarea>
                    @if (isControlInvalid('message')) {
                      <p class="text-xs text-rose-400">Message must be at least 10 characters.</p>
                    }
                  </div>

                  <!-- Submit Button -->
                  <button 
                    type="submit" 
                    [disabled]="contactForm.invalid"
                    class="w-full py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-cyan-500/20 transition-all duration-300 flex items-center justify-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                    <span>Submit Message</span>
                  </button>

                </form>
              }

            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class ContactComponent {
  contactForm: FormGroup;
  isCopied = false;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  copyEmail() {
    navigator.clipboard.writeText('marshlinofficial@gmail.com');
    this.isCopied = true;
    setTimeout(() => {
      this.isCopied = false;
    }, 3000);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitted = true;
    }
  }

  resetForm() {
    this.contactForm.reset();
    this.isSubmitted = false;
  }
}
