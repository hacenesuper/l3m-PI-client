import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { DomSanitizer } from '@angular/platform-browser';
import { MaterielService } from '../materiel.service';
import { Materiel } from '../modele/Materiel';
@Component({
  selector: 'app-test-imageupload',
  templateUrl: './test-imageupload.component.html',
  styleUrls: ['./test-imageupload.component.scss']
})
export class TestImageuploadComponent implements OnInit {
 fichierUrl!: Observable<string>;
  downloadURL!: Observable<string>;
  uploadPercent!: Observable<number>;
  fileref!: AngularFireStorageReference;
  fichierChoisi!: File;
  task!: AngularFireUploadTask;
  materielUrl: string = "";
  materials:Materiel[]=[];
  s:string="https://images.ctfassets.net/lzny33ho1g45/T5qqQQVznbZaNyxmHybDT/b76e0ff25a495e00647fa9fa6193a3c2/best-url-shorteners-00-hero.png";
  constructor(private httpclient: HttpClient, private st: AngularFireStorage, private auth: AngularFireAuth,private materialservice:MaterielService) {
    auth.user.subscribe(console.log);
  }

  ngOnInit(): void {
this.materialservice.getMaterielByIdDefi("D151").subscribe(w=>{console.log(w);
this.materials=w});
console.log("ww",this.materials);
this.materialservice.creationMateriel({id:"D189",label:4,description:"d",ressource:"https://youtu.be/k9HYC0EJU6E",type:"vidéo"}).subscribe();

  }



  choisirFichier(event: any) {

    this.materialservice.choisirFichier(event).subscribe(w=>{
      console.log("methodeURL",w);
    });

  }


  /* uploadFichier() {

this.fichierUrl=this.materialservice.uploadFichier() ;
this.fichierUrl.subscribe(x=>{this.materielUrl=x;console.log(x);/*
tritement*///});

  //}








}
