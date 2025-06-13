import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgxGraphModule, Node, Edge } from '@swimlane/ngx-graph';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-ford-min',
  imports: [NgxGraphModule],
  templateUrl: './ford-min.component.html',
  styleUrl: './ford-min.component.css',
})
export class FordMinComponent implements OnInit {
  my_links: Edge[] = [];
  my_nodes: Node[] = [];
  my_links_subject = new Subject<Edge[]>();
  my_nodes_subject = new Subject<Node[]>();

  my_nodes_subscription: Subscription | null = null;
  my_links_subscription: Subscription | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.my_links_subscription = this.my_links_subject.subscribe(
      (links: Edge[]) => {
        this.my_links = links;
      }
    );
    this.my_nodes_subscription = this.my_nodes_subject.subscribe(
      (nodes: Node[]) => {
        this.my_nodes = nodes;
      }
    );

    this.addNode('Node 1');
    this.addNode('Node 2');
    this.addLink('1', '2');
  }

  emitNodeSubject() {
    // this.my_nodes = [...this.my_nodes];
    // this.my_nodes_subject.next(this.my_nodes);
    this.my_nodes_subject.next(this.my_nodes.slice()); //copy of nodes list
  }
  emitLinkSubject() {
    this.my_links = [...this.my_links];
    this.my_links_subject.next(this.my_links); //copy of links list
    // this.my_links_subject.next(this.my_links.slice()); //copy of links list
  }

  addNode(label: string = '') {
    this.my_nodes.push({
      id: (this.my_nodes.length + 1).toString(),
      label: label,
    });
    this.cdr.detectChanges();
    console.log(this.my_nodes);
    this.emitNodeSubject();
  }

  addLink(source: string, target: string) {
    this.my_links.push({
      id: 'link' + (this.my_links.length + 1).toString(),
      source: source,
      target: target,
    });
    console.log(this.my_links);
    this.emitLinkSubject();
  }
}
