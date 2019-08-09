declare var require: any
import { Injectable } from '@angular/core';
//import { uuidv4 as uuid } from 'uuid';
const uuidv4 = require('uuid/v4');
import {MySocket} from './my-socket.service';

@Injectable({
  providedIn: 'root'
})
export class MylibService {

  constructor(private socket: MySocket) { 
    
  }

  getUUID() {
    return uuidv4();
  }
}
