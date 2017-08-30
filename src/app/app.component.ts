import { Component,OnInit } from '@angular/core';
import { DomSanitizer,SafeHtml,SafeUrl } from '@angular/platform-browser';

declare var jsPDF;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  doc: any;
  constructor(private sanitizer: DomSanitizer) {
    
  }
  
  ngOnInit() {
    this.doc = new jsPDF();
    this.doc.text(20, 20, 'Hello world!');
    this.doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    this.doc.addPage();
    this.doc.text(20, 20, 'Do you like that?');
    // Save the PDF
  }
  printPdf() {
    
   
    this.doc.save('Test.pdf');
  }

  optputPDF() {
    this.doc.output('datauri');
  }


  getIframeContent():SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl( this.doc.output('datauristring'));
  }



}
