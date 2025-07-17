import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NgxEchartsDirective, NgxEchartsModule, provideEchartsCore } from 'ngx-echarts';
import { CanvasRenderer } from 'echarts/renderers';
import { DataZoomComponent, GridComponent, LegendComponent, TitleComponent, ToolboxComponent, TooltipComponent, VisualMapComponent } from 'echarts/components';
import { BarChart, MapChart, PieChart } from 'echarts/charts';
import * as echarts from 'echarts/core';
import { HttpClientModule } from '@angular/common/http';
import { IVSA } from '../models/ivsa.model';
import { DetailMunicipio } from '../models/detail.model';
import { IvsaService } from '../ivsa.service';
import rjGeo from '../../assets/geojs-33-mun-rj.json';
import { RouterModule } from '@angular/router';
import 'echarts/theme/dark';
import { Faixa } from '../models/faixa.model';
echarts.use([
  BarChart, 
  PieChart,
  GridComponent, 
  CanvasRenderer, 
  MapChart, 
  TooltipComponent,
  TitleComponent,
  VisualMapComponent,
  ToolboxComponent,
  DataZoomComponent,
  LegendComponent
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
  lineCriticidadeOptions: echarts.EChartsCoreOption = {};
  lineSuportabilidadeOptions: echarts.EChartsCoreOption = {};
  lineIncidenteOptions: echarts.EChartsCoreOption = {};
  pieFaixaOptions: echarts.EChartsCoreOption = {};

  municipiosIVSA: IVSA[] = [];
  criticidadeMunicipios: IVSA[] = [];
  suportabilidadeMunicipios: IVSA[] = [];
  incidenteMunicipios: IVSA[] = [];
  detailMunicipio: DetailMunicipio[] | null = null;
  faixaIVSA: Faixa[] = [];
  
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
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
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

  atualizarDadosLinhaCriticidade(): void {
    const result = this.criticidadeMunicipios;
    
    this.lineCriticidadeOptions = {
      title: { text: 'Criticidade por município', left: 'center' },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: 180, // aumenta o espaço à esquerda para labels longas
        right: 40,
        top: 60,
        bottom: 40
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
          dataZoom: { show: true }
        }
      },
      dataZoom: [
        {
          type: 'slider',
          yAxisIndex: 0, // Para gráfico horizontal, use yAxisIndex
          start: 0,
          end: 100
        }
      ],
      xAxis: {
        type: 'value',
        name: 'Valor', // Legenda do eixo X
        nameLocation: 'middle',
        nameGap: 30
      },
      yAxis: {
        type: 'category',
        data: result.map(item => item.municipio),
        axisTick: {
          alignWithLabel: true
        }
      },
      series: [
        {
          type: 'bar',
          data: result.map(item => item.valor),
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    }
  }

  atualizarDadosLinhaSuportabilidade(): void {
    const result = this.suportabilidadeMunicipios;

    this.lineSuportabilidadeOptions = {
      title: { text: 'Suportabilidade por município', left: 'center' },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: 180, // aumenta o espaço à esquerda para labels longas
        right: 40,
        top: 60,
        bottom: 40
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
          dataZoom: { show: true }
        }
      },
      dataZoom: [
        {
          type: 'slider',
          yAxisIndex: 0, // Para gráfico horizontal, use yAxisIndex
          start: 0,
          end: 100
        }
      ],
      xAxis: {
        type: 'value',
        name: 'Valor', // Legenda do eixo X
        nameLocation: 'middle',
        nameGap: 30
      },
      yAxis: {
        type: 'category',
        data: result.map(item => item.municipio),
        axisTick: {
          alignWithLabel: true
        }
      },
      series: [
        {
          type: 'bar',
          data: result.map(item => 1 - item.valor), // (1-suportabilidade)
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    }
  }

  atualizarDadosLinhaIncidente(): void {
    const result = this.incidenteMunicipios;

    this.lineIncidenteOptions = {
      title: { text: 'Histórico de Incidentes por Município', left: 'center' },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: 180, // aumenta o espaço à esquerda para labels longas
        right: 40,
        top: 60,
        bottom: 40
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
          dataZoom: { show: true }
        }
      },
      dataZoom: [
        {
          type: 'slider',
          yAxisIndex: 0, // Para gráfico horizontal, use yAxisIndex
          start: 0,
          end: 100
        }
      ],
      xAxis: {
        type: 'value',
        name: 'Valor', // Legenda do eixo X
        nameLocation: 'middle',
        nameGap: 30
      },
      yAxis: {
        type: 'category',
        data: result.map(item => item.municipio),
        axisTick: {
          alignWithLabel: true
        }
      },
      series: [
        {
          type: 'bar',
          data: result.map(item => item.valor),
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    };
  }

  atualizarDadosFaixaIVSA(): void {
    const result = this.faixaIVSA;

    this.pieFaixaOptions = {
      title: { text: 'Faixa do IVSA', left: 'center' },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [{
        name: 'Faixa IVSA',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: result.map(item => ({
          value: item.quantidade,
          name: item.faixa
        }))
      }]
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

    this.ivsaService.getCriticidadePorMunicipio().subscribe(
      (data: IVSA[]) => {
        this.criticidadeMunicipios = data;
        this.atualizarDadosLinhaCriticidade();
      },
      (error) => {
        console.log('Erro ao carregar os dados de criticidade: ', error);
      }
    );

    this.ivsaService.getSuportabilidadePorMunicipio().subscribe(
      (data: IVSA[]) => {
        this.suportabilidadeMunicipios = data;
        this.atualizarDadosLinhaSuportabilidade();
      },
      (error) => {
        console.log('Erro ao carregar os dados de suportabilidade: ', error);
      }
    );

    this.ivsaService.getIncidentePorMunicipio().subscribe(
      (data: IVSA[]) => {
        this.incidenteMunicipios = data;
        this.atualizarDadosLinhaIncidente();
      },
      (error) => {
        console.log('Erro ao carregar os dados de incidentes: ', error);
      }
    );

    this.ivsaService.getFaixaIvsa().subscribe(
      (data: Faixa[]) => {
        this.faixaIVSA = data;
        this.atualizarDadosFaixaIVSA();
      },
      (error) => {
        console.log('Erro ao carregar os dados de faixa IVSA: ', error);
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
