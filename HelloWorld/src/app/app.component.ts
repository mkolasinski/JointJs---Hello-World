import * as $ from 'jquery';
import * as joint from 'jointjs';
// const joint = require('jointjs/dist/joint.js');

// import {ngOnInit} from '@angular/core';
import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  graph: any;
  paper: any;

  ngOnInit() {
    this.createGraph();
  }

  private createGraph() {
    this.graph = new joint.dia.Graph();
    this.paper = new joint.dia.Paper({
      el: $('#myholder'),
      width: 600,
      height: 400,
      model: this.graph,
      gridSize: 1
    });

    let rect = new joint.shapes.basic.Rect({
      position: {x: 100, y: 30},
      size: {width: 100, height: 30},
      attrs: {rect: {fill: '#1C9065'}, text: {text: 'first box', fill: 'white'}}
    });

    // let rect2 = rect.clone() ;
    //   rect2.translate(300);

    let rect2 = new joint.shapes.basic.Rect({
      position: {x: 250, y: 230},
      size: {width: 100, height: 30},
      attrs: {rect: {fill: '#AC2323'}, text: {text: 'second box', fill: 'white'}}
    });

    let link = new joint.dia.Link({
      source: {id: rect.id},
      target: {id: rect2.id}
    });

    this.graph.addCells([rect, rect2, link]);
  }
}





