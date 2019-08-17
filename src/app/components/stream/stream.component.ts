import { Component, OnInit } from '@angular/core';

declare var videojs: any;

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var options = 
    {
    plugins: {
        httpSourceSelector:
        {
        default: 'auto'
        }
    }
    };
    var player = videojs('video-player', options);
    player.httpSourceSelector();
  }
}
