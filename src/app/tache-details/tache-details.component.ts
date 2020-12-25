import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendServicesService } from '../backend-services.service';
import { Tache } from '../Models/Tache';

@Component({
  selector: 'app-tache-details',
  templateUrl: './tache-details.component.html',
  styleUrls: ['./tache-details.component.css']
})
export class TacheDetailsComponent implements OnInit {

  id: number
  tache: Tache = new Tache()


  constructor(private service: BackendServicesService,private router: Router,) { }

  ngOnInit() {
    this.tacheById()
  }

  tacheById() {
    this.id = Number(sessionStorage.getItem('tache_id'))
    this.service.tacheById(this.id).subscribe(data => {
      this.tache = data
    })
  }

  delete(id) {
    if (confirm("Supprimer ?")) {
      this.service.deleteTache(id).subscribe(data => {
        this.router.navigate(['Taches'])
      })
    }
  }

}
