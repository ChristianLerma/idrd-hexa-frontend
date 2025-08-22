import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Material } from '@domain/entities/material.entity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-material-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './material-card.html',
})
export class MaterialCardComponent {
  @Input({ required: true }) material!: Material;
  @Output() delete = new EventEmitter<string>();

  formatCurrency(value: number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  }

  onDelete(): void {
    this.delete.emit(this.material.id);
  }
}
