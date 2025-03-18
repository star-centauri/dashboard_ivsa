import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NgxEchartsDirective, NgxEchartsModule, provideEchartsCore } from 'ngx-echarts';
import { CanvasRenderer } from 'echarts/renderers';
import { GridComponent, TitleComponent, TooltipComponent, VisualMapComponent } from 'echarts/components';
import { BarChart, MapChart } from 'echarts/charts';
import * as echarts from 'echarts/core';
import rjGeo from '../assets/geojs-33-mun-rj.json';
echarts.use([
  BarChart, 
  GridComponent, 
  CanvasRenderer, 
  MapChart, 
  TooltipComponent,
  TitleComponent,
  VisualMapComponent,
]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective, NgxEchartsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    provideEchartsCore({ echarts }),
  ]
})
export class AppComponent implements OnInit {
  chartOptions: echarts.EChartsCoreOption = {};
  isBrowser = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // Checa se está no browser
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (!this.isBrowser) {
      // Se for SSR ou outro ambiente, não faz nada (não há 'window')
      return;
    }

    echarts.registerMap('RJ', rjGeo as any);

    this.chartOptions = {
      title: { text: 'Mapa RJ', left: 'center' },
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => `${params.name}<br/>Valor: ${params.value ?? 0}`
      },
      visualMap: {
        min: 0,
        max: 100,
        left: 'left',
        top: 'bottom',
        text: ['Alto', 'Baixo'],
        calculable: true
      },
      series: [
        {
          name: 'Mapa de Calor',
          type: 'map',
          map: 'RJ',
          roam: true,
          label: { show: false },
          data: [
            // Ajuste nomes e valores conforme seu GeoJSON
            { name: 'RIO DE JANEIRO', value: 80 },
            { name: 'NITERÓI', value: 45 },
            { name: 'PETRÓPOLIS', value: 70 }
          ]
        }
      ]
    }
  }
}
