import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ContainerService } from './http/container/container.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    ContainerService
  ]
})
export class CoreModule {}
