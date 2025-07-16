import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
// import echarts core
import * as echarts from 'echarts/core';
// import necessary echarts components
import { BarChart, MapChart } from 'echarts/charts';
import { DataZoomComponent, GridComponent, TitleComponent, ToolboxComponent, TooltipComponent, VisualMapComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { IvsaService } from './ivsa.service';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
echarts.use([
  BarChart, 
  GridComponent, 
  CanvasRenderer, 
  MapChart, 
  TooltipComponent,
  TitleComponent,
  VisualMapComponent,
  ToolboxComponent,
  DataZoomComponent
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule, // Adicione o HttpClientModule aqui
    NgxEchartsModule.forRoot({ echarts }),
  ],
  providers: [IvsaService], // Adicione o serviço aos providers
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}