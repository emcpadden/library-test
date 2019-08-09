import { NgModule, ModuleWithProviders } from '@angular/core';
import { MylibComponent } from './mylib.component';
import { MylibService } from './mylib.service';
import { IMyLibConfig } from './mylib-config.interface';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import {MySocket} from './my-socket.service';

const defaultSocketConfig: SocketIoConfig = { url: 'http://localhost:8988', options: {} };

let mySocketFactory = (socketConfig?: SocketIoConfig) => {
  if (!socketConfig) {
    socketConfig =  defaultSocketConfig
  }
  return new MySocket(socketConfig);
};
@NgModule({
  declarations: [MylibComponent],
  imports: [
    SocketIoModule
  ],
  exports: [MylibComponent]
})
export class MylibModule { 
  static forRoot(config: IMyLibConfig): ModuleWithProviders {
    const mySocket = new MySocket(config.socket);
    return {
      ngModule: MylibModule,
      providers: [ 
        {
          provide: MySocket,
          useValue: mySocket
        },
        MylibService ]
    }
  }
}
