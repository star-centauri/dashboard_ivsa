import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NgxEchartsDirective, NgxEchartsModule, provideEchartsCore } from 'ngx-echarts';
import { CanvasRenderer } from 'echarts/renderers';
import { GridComponent, TitleComponent, TooltipComponent, VisualMapComponent } from 'echarts/components';
import { BarChart, MapChart } from 'echarts/charts';
import * as echarts from 'echarts/core';
import { HttpClientModule } from '@angular/common/http';
import { IVSA } from '../models/ivsa.model';
import { DetailMunicipio } from '../models/detail.model';
import { IvsaService } from '../ivsa.service';
import rjGeo from '../../assets/geojs-33-mun-rj.json';
import { RouterModule } from '@angular/router';
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
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective, NgxEchartsModule, HttpClientModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [
    provideEchartsCore({ echarts }),
  ]
})
export class HomeComponent implements OnInit {
  chartOptions: echarts.EChartsCoreOption = {};
  municipiosIVSA: IVSA[] = [];
  detailMunicipio: DetailMunicipio[] | null = null;
  isBrowser = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private ivsaService: IvsaService
  ) {}

  ngOnInit(): void {
    // Checa se está no browser
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (!this.isBrowser) {
      // Se for SSR ou outro ambiente, não faz nada (não há 'window')
      return;
    }

    this.carregarDadosIVSA();
  }

  atualizarDadosMap(): void {
    const result = this.municipiosIVSA.map((item: IVSA) => ({ name: item.municipio, value: item.valor }));
    echarts.registerMap('RJ', rjGeo as any);

    this.chartOptions = {
      title: { text: 'Índice de vulnerabilidade socioambiental - RJ', left: 'center' },
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => `${params.name}<br/>IVSA: ${params.value != null ? params.value*100 : 0}%`
      },
      visualMap: {
        min: 0,
        max: 1,
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
          data: result
        }
      ]
    }
  }

  carregarDadosIVSA(): void {
    this.ivsaService.getMunicipioIVSA().subscribe(
      (data: IVSA[]) => {
        this.municipiosIVSA = data;
        this.atualizarDadosMap();
      },
      (error) => {
        console.log('Erro ao carregar os dados: ', error);
      }
    );
  }

  onChartClick(event: any): void {
    const municipio = event.name as string;
    
    // Exemplo de chamada ao backend
    this.ivsaService.getDetalhesMunicipio(municipio).subscribe(
      (dados: DetailMunicipio[]) => {
        this.detailMunicipio = dados;
      },
      (erro) => {
        console.error('Erro ao buscar detalhes do município:', erro);
      }
    );
  }
}
