import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-from-upload',
  templateUrl: './from-upload.component.html',
  styleUrls: ['./from-upload.component.css']
})
export class FromUploadComponent implements OnInit {

  constructor( private fireStorage: AngularFireStorage) { }
  uploadFile: string = "";
  private basePath = '/uploads';
  ngOnInit(): void {
  } 

  chooseFile(e:any){
    let file = e.target.files[0];
    const filePath = `${this.basePath}/${file.name}`;
    const storageRef = this.fireStorage.ref(filePath);
    this.fireStorage.upload(filePath, file)
    .snapshotChanges()
    .pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log(downloadURL);
          this.uploadFile = downloadURL;
        });
      })
    ).subscribe();
    
  }

}
