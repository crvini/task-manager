import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { createTaskUseCaseProvider, deleteTaskUseCaseProvider, tasksUseCaseProvider, updateTaskUseCaseProvider } from '../IoCs/task-IoC';
import { TaskRepository } from './task-module/core/repositories/task/task-repository';
import { TaskImplementRepository } from './task-module/infrastructure/repositories/task/task-implement-repository';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideRouter(routes),
    providePrimeNG({ 
        theme: {
            preset: Aura,
            options: {
              prefix: 'p',
              darkModeSelector: 'none',
              cssLayer: false
          }
        }
    }),
    createTaskUseCaseProvider,
    deleteTaskUseCaseProvider,
    tasksUseCaseProvider,
    updateTaskUseCaseProvider,
    {provide: TaskRepository, useClass: TaskImplementRepository},
  ]
};


