import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();
  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
  }

  modalClick(close: boolean): void {
    this.closeModal.emit(close);
  }
}
