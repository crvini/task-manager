import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-task-card',
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    ChipModule
  ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent implements OnInit {



  constructor() { }
  @Input()
  title: string = '';
  @Input()
  description: string = '';
  @Input()
  status: boolean = false;
  @Output()
  delete: EventEmitter<true> = new EventEmitter<true>();
  @Output()
  complete: EventEmitter<true> = new EventEmitter<true>();
  chart: string = '';
  ngOnInit(): void {
    console.log('TaskCardComponent', this.status);
    this.chart = this.obtenerInicial(this.title);
  }
  deleteItem(): void {
    console.log('deleteItem');
    this.delete.emit();
  }
  ComleteItem(): void {
    this.complete.emit();
  }
  obtenerInicial(cadena: string): string {
    if (!cadena) {
      return '';
    }
    return cadena.charAt(0).toUpperCase();
  }
}
