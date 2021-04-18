import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  results:any;
  constructor(private auth: AngularFireAuth) {}

  signUp(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string) {
    debugger;
     return this.auth.signInWithEmailAndPassword(email, password);
  }

  getUser() {
    return this.auth.authState;
  }

  signOut() {
    return this.auth.signOut();
  }

  moviesData(){
    return  [
      {
        "id":"1",
        "title":"Captain Marvel",
        "poster":"https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
        "overview":"A boy is given the ability to become an adult superhero in times of need with a single magic word.",
        "release_date":1553299200,
        "genres":[
          "Action","Comedy","Fantasy"
        ]
      },
      {
        "id":"2",
        "title":"Captain Marvel",
        "poster":"https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
        "overview":"The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
        "release_date":1551830400,
        "genres":["Action","Adventure","Science Fiction"]
      },
      {"id":"3",
      "title":"Escape Room",
      "poster":"https://image.tmdb.org/t/p/w500/8Ls1tZ6qjGzfGHjBB7ihOnf7f0b.jpg",
      "overview":"Six strangers find themselves in circumstances beyond their control, and must use their wits to survive.",
      "release_date":1546473600,
      "genres":["Thriller","Action","Horror","Science Fiction"]
      },
     
    
    ]
  }
}
