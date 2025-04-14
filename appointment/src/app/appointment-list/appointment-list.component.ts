import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent implements OnInit {
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];

  ngOnInit(): void {
    // Load appointments from local storage
    const storedAppointments = localStorage.getItem('appointments');
    if (storedAppointments) {
      this.appointments = JSON.parse(storedAppointments);
    } else {
      this.appointments = [];
    }
  }

  //Add appointment
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
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }

  //Delete appointment
  removeAppointment(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
}
