import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-responsive',
  templateUrl: './table-responsive.component.html',
  styleUrls: ['./table-responsive.component.scss'],
})
export class TableResponsiveComponent implements OnInit {
  interval: any;

  @Input()
  tableManager = {
    results: [
      {stt: 1, phongthuchien: 'Phòng A107 - Tai Mũi Họng', bacsi: 'HỒ VĂN PHÁT', trangthai: 'Đã đóng', mota: 'Phòng A107 - Tai Mũi Họng', tongso: 0, danggoi: 0, dangcho: 0, daxong: 0, uutien: 'null', tmp_phongthuchien_sophong: '', tmp_phongthuchien_ten: ''},
      {stt: 2, phongthuchien: 'Phòng A117 - Nội tiết Phòng', bacsi: 'TRẦN BẢO CHÂU', trangthai: 'Mở', mota: 'Khám nội - nội tiết', tongso: 5, danggoi: 0, dangcho: 5, daxong: 0, uutien: 'null', tmp_phongthuchien_sophong: '', tmp_phongthuchien_ten: ''},
    ],
    page: 1,        // Trang hiện tại
    offset: 10,     // Mỗi trang hiển thị bao nhiêu records?
    totalPages: 4,  // Tổng công có bao nhiêu trang?
    Math: Math
  };

  ngOnInit() {
    /* Ý tưởng đơn giản:
    1. Tạo biến tạm để lưu số phòng và tên
    2. Render ra các CLASS CSS tương ứng
    3. Sử dụng CSS để ẩn hiện thông tin tùy theo SCREEN giao diện
    */
    // Tùy chỉnh dữ liệu, cắt chuỗi theo yêu cầu
    this.tableManager.results.forEach(element => {
      const arrTenPhong = element.phongthuchien.split('-');
      element.tmp_phongthuchien_sophong = arrTenPhong[0].trim();
      element.tmp_phongthuchien_ten = arrTenPhong[1].trim();
    });
  }

  ngAfterViewInit() {
   
  }
}
