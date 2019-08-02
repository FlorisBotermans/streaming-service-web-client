import { Component, OnInit } from '@angular/core';
import * as flvjs from '../../../../node_modules/flv.js/dist/flv';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var videoElement = document.getElementById('videoElement');
    var flvPlayer = flvjs.createPlayer({
      type: 'flv',
      isLive: true,
      url: 'http://localhost:8888/live/STREAM_NAME.flv'

    });
      flvPlayer.attachMediaElement(videoElement);
      flvPlayer.load();
      flvPlayer.play();
      //}
  }
}
