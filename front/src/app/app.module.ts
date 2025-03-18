import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
// import echarts core
import * as echarts from 'echarts/core';
// import necessary echarts components
import { BarChart, MapChart } from 'echarts/charts';
import { GridComponent, TitleComponent, TooltipComponent, VisualMapComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([
  BarChart, 
  GridComponent, 
  CanvasRenderer, 
  MapChart, 
  TooltipComponent,
  TitleComponent,
  VisualMapComponent,
]);

@NgModule({
  imports: [
    NgxEchartsModule.forRoot({ echarts }),
  ],
})
export class AppModule {}