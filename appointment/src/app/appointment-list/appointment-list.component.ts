import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent {
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];

  addAppointment() {
    if (!this.newAppointmentTitle || !this.newAppointmentDate) {
      return;
    }
    let newAppointment: Appointment = {
      id: this.appointments.length + 1,
      title: this.newAppointmentTitle.trim(),
      date: this.newAppointmentDate,
    };
    this.appointments.push(newAppointment);
    this.newAppointmentTitle = '';
    this.newAppointmentDate = new Date();
  }
}
