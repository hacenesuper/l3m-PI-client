import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../modele/Question';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private http: HttpClient) { }

  url = "http://localhost:5000/api/questions/";
  getallQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.url);
  }
  getQuestionsByIdDefi(IdDefi: string): Observable<Question[]> {

    return this.http.get<Question[]>(this.url+IdDefi);
  }

  getQuestionsByLabel(IdDefi: string,label:number): Observable<Question> {

    return this.http.get<Question>(this.url+IdDefi+"/"+label);
  }

  updateQuestion(question:Question) : Observable<Question> {
    return this.http.put<Question>(this.url+question.id+"/"+question.label,question);
  }

  creationQuestion(question: Question): Observable<Question> {



    return this.http.post<Question>(this.url+question.label,question);
  }


  deleteQuestion(question:Question) : Observable<void> {
    return this.http.delete<void>(this.url+question.id+"/"+question.label);
  }


}
