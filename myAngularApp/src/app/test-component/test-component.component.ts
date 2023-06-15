import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
})
export class TestComponentComponent implements OnInit {
  interval: any;

  @Input()
  tableManager = {
    results: [
      {phongthuchien: 'Phòng 1', tongso: 999, danggoi: 222, dangcho: 777},
      {phongthuchien: 'Phòng 2', tongso: 999, danggoi: 222, dangcho: 777},
      {phongthuchien: 'Phòng 3', tongso: 999, danggoi: 222, dangcho: 777},
      {phongthuchien: 'Phòng 4', tongso: 999, danggoi: 222, dangcho: 777},
      {phongthuchien: 'Phòng 5', tongso: 999, danggoi: 222, dangcho: 777},
      {phongthuchien: 'Phòng 6', tongso: 999, danggoi: 222, dangcho: 777},
      {phongthuchien: 'Phòng 7', tongso: 999, danggoi: 222, dangcho: 777},
      {phongthuchien: 'Phòng 8', tongso: 999, danggoi: 222, dangcho: 777},
      {phongthuchien: 'Phòng 9', tongso: 999, danggoi: 222, dangcho: 777},
      {phongthuchien: 'Phòng 10', tongso: 999, danggoi: 222, dangcho: 777},
    ],
    page: 1,        // Trang hiện tại
    offset: 3,      // Mỗi trang hiển thị bao nhiêu records?
    totalPages: 4,  // Tổng công có bao nhiêu trang?
    Math: Math
  };

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Chạy bộ đếm thời gian (sau xxx thời giam thì sẽ gọi hàm 1 lần)
    this.interval = setInterval(() => {
      this.ticktock();
    }, 1000); // Sau 3000ms thì sẽ chuyển trang
  }

  ticktock() {
    // Nếu trang > tổng => reset trang về 1
    let currentPage = this.tableManager.page + 1;
    if(currentPage > this.tableManager.totalPages) {
      currentPage = 1;
    }
    this.tableManager.page = currentPage;
  }

  stopTime() {
    clearInterval(this.interval);
  }
}
