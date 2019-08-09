import { Injectable } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io';

export class MySocket extends Socket {
 
    constructor(config: SocketIoConfig) {
        super(config);
    }
 
}