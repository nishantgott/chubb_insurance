import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isDropdownOpen = false;
  isDropdownOpen2 = false;
  isDropdownOpen3 = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.isDropdownOpen2 = false;
    this.isDropdownOpen3 = false;
  }

  toggleDropdown2() {
    this.isDropdownOpen2 = !this.isDropdownOpen2;
    this.isDropdownOpen = false;
    this.isDropdownOpen3 = false;
  }

  toggleDropdown3() {
    this.isDropdownOpen3 = !this.isDropdownOpen3;
    this.isDropdownOpen2 = false;
    this.isDropdownOpen = false;
  }
}


