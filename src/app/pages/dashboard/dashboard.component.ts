import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/_service/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ciudad = '';
  temperatura = 0;
  humedad = 0;

  constructor(private climaService: ClimaService) { }

  ngOnInit(): void {
  }

  mostrarClima(){
    this.climaService.obtenerClima(this.ciudad).subscribe( data => {
      this.temperatura = data.main.temp;
      this.humedad = data.main.humidity;
    });
  }

}
