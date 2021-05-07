
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Materiel } from '../modele/Materiel';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {

  fileref!: AngularFireStorageReference;
  fichierUrl!: Observable<string>;
  urlString:string="vide";




  constructor(private http: HttpClient,private st: AngularFireStorage) { }



  url = "http://localhost:5000/api/materiels/";
  getallMateriels(): Observable<Materiel[]> {
    return this.http.get<Materiel[]>(this.url);
  }
  getMaterielByIdDefi(IdDefi: string): Observable<Materiel[]> {

    return this.http.get<Materiel[]>(this.url+IdDefi);
  }

  getMaterialByLabel(IdDefi: string,label:number): Observable<Materiel> {

    return this.http.get<Materiel>(this.url+IdDefi+"/"+label);
  }

  updateMateriel(materiel:Materiel) : Observable<Materiel> {
    return this.http.put<Materiel>(this.url+materiel.id+"/"+materiel.label,materiel);
  }

  creationMateriel(materiel: Materiel): Observable<Materiel> {



    return this.http.post<Materiel>(this.url+materiel.label,materiel);
  }


  deleteMateriel(materiel:Materiel) : Observable<void> {
    return this.http.delete<void>(this.url+materiel.id+"/"+materiel.label);
  }


  choisirFichier(event: any):Observable<string> {

    let path: string = '/Cyberchamis/Materiels/' + event.target.files[0].name
    this.fileref = this.st.ref(path);

    console.log("fichier", event.target.files[0]);
    const task = this.st.upload(path, event.target.files[0]);
    //

    task.snapshotChanges().pipe(
      finalize(() => this.fichierUrl = this.fileref.getDownloadURL())
    )
      .subscribe();
    this.fichierUrl = this.fileref.getDownloadURL();
   this.fichierUrl.subscribe( x =>{this.urlString=x;console.log("le chemin de fichier est",x)} );
return this.fichierUrl;


  }
f(s:string):string{
  return s
}

  /*uploadFichier():Observable<string> {
    this.task.snapshotChanges().pipe(
      finalize(() => this.fichierUrl = this.fileref.getDownloadURL())
    )
      .subscribe();
    this.fichierUrl = this.fileref.getDownloadURL();
   this.fichierUrl.subscribe( x =>{this.urlString=x;console.log("le chemin de fichier est",x)} );
return this.fichierUrl;
  }*/




}
