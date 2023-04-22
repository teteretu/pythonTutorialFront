import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public message: string = "";

    constructor(private apiService: ApiService) { }

    public ngOnInit() {
        this.apiService.getHello().subscribe((data: any) => {
            console.log("TESTEE", data);
            this.message = data.hello;
        });
    }
}
