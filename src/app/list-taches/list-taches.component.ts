import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendServicesService } from '../backend-services.service';
import { Tache } from '../Models/Tache';

@Component({
  selector: 'app-list-taches',
  templateUrl: './list-taches.component.html',
  styleUrls: ['./list-taches.component.css']
})
export class ListTachesComponent implements OnInit {

  list: Tache[] = []
  tache: Tache = new Tache()
  t_update: Tache = new Tache()
  tacheForm: FormGroup;
  submitted = false;
  id: number

  constructor(private service: BackendServicesService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.taches();
    this.tacheForm = this.fb.group({
      description: ['', []]
    })
  }

  add() {
    this.service.addTache(this.tache).subscribe(data => {
    })
    this.taches()
  }

  onSubmit() {
    this.submitted = true;
    this.add();
    this.tacheForm.reset()
  }

  taches() {
    this.service.taches().subscribe(data => {
      this.list = data
    })
  }


  delete(id) {
    if (confirm("Supprimer ?")) {
      this.service.deleteTache(id).subscribe(data => {
        this.taches()
      })
    }
  }

  getTacheId(id) {
    sessionStorage.setItem('tache_id', "" + id)
    this.id = Number(sessionStorage.getItem('tache_id'))
    this.service.tacheById(this.id).subscribe(data => {
      this.t_update = data
    })
  }

  modifierTache() {
    this.id = Number(sessionStorage.getItem('tache_id'))
    this.service.updateTache(this.id, this.t_update).subscribe(res => {
      this.t_update = res;
      this.taches()
      
    })
  }

  onUpdate(updateTacheForm: NgForm) {
    this.modifierTache();
    updateTacheForm.reset()
   
  }

  tacheDetails(id){
    sessionStorage.setItem('tache_id', "" + id)
    this.router.navigateByUrl('Taches/'+id)
  }

}
