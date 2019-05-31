import { Component, OnInit, HostBinding } from '@angular/core';
import { EventoService } from '../../../Site/services/eventos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evento-dashboard',
  templateUrl: './evento-dashboard.component.html',
  styleUrls: ['./evento-dashboard.component.css']
})
export class EventoDashboardComponent implements OnInit {

  // @HostBinding('class') classes = 'row';
  evento: any = [];

  constructor(private eventoService: EventoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getEventosById()
  }

  getEventosById() {
    const params = this.activatedRoute.snapshot.params;
    this.eventoService.getAllEventoById().subscribe(
      res => {
        this.evento = res;
      },
      err => console.error(err)
    );
  }


}
