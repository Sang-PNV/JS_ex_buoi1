//Bài 1:
document.getElementById("btnTinhLuong").onclick = function () {
  /* Input : - tạo biến cho người dùng nhập vào số ngày làm việc là soNgayLamViec
    - tạo biến là hằng số lương 1 ngày là 100.000
    */
  var soNgayLamViec = Number(document.getElementById("soNgayLamViec").value);
  const LUONG_MOT_NGAY = 100000;
  /**
   * Output : tạo biến tính tổng lương :tongLuong
   */
  var tongLuong = 0;
  /**
   * progress : tổng lương sẽ tính theo công thức :
   * tongLuong = soNgayLamViec * LUONG_MOT_NGAY
   * sau đó in ra kết quả
   */
  tongLuong = soNgayLamViec * LUONG_MOT_NGAY;
  document.getElementById("tongLuong").innerHTML = tongLuong.toLocaleString();
};

//Bài 2:
document.getElementById("btnSoTB").onclick = function () {
  /**
   * Input: tạo 5 biến cho người dùng nhập vào 5 số thực là soThuNhat, soThuHai, soThuBa, soThuTu, soThuNam
   */
  var soThuNhat = Number(document.getElementById("soThuNhat").value);
  var soThuHai = Number(document.getElementById("soThuHai").value);
  var soThuBa = Number(document.getElementById("soThuBa").value);
  var soThuTu = Number(document.getElementById("soThuTu").value);
  var soThuNam = Number(document.getElementById("soThuNam").value);
  /**
   * output : tạo biến tính số trung bình : giaTriTB
   */
  var giaTriTB = 0;
  /**progress:
   * tính giá trị trung bình theo công thức
   * (soThuNhat+soThuHai+soThuBa+soThuTu+soThuNam)/5
   * sau đó in ra kết quả
   */
  giaTriTB = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;
  document.getElementById("giaTriTB").innerHTML = giaTriTB;
};

//Bài 3:
domID("btnDoiTien").onclick = function () {
  /**
   * Input : tạo biến là số USD cho người dùng nhập vào là uSD
   * tạo hằng số quy đổi tiền là MENH_GIA là hằng số
   */
  var uSD = Number(domID("uSD").value);
  const MENH_GIA = 23500;
  /**
   * Output : tạo biến tính ra số tiền quy đổi thành VNĐ
   */
  var doiTien = 0;
  /**
   * progress
   * ta tính số tiền quy đổi theo công thức lấy giá trị từ uSD người dùng nhập vào * với MENH_GIA
   * sau đó in ra kết quả
   */
  doiTien = uSD * MENH_GIA;
  domID("quyDoi").innerHTML = doiTien.toLocaleString();
};

//Bài 4:
domID("tinhNao").onclick = function () {
  /**
   * input : tạo biến là chieuDai và chieuRong để người dùng nhập vào chiều dài và chiều rộng
   */
  var chieuDai = Number(domID("chieuDai").value);
  var chieuRong = Number(domID("chieuRong").value);
  /**
   * Output : tạo ra biến  là chu vi và diện tích : chuVi , dienTich để xuất ra chu vi và diện tích
   */
  var chuVi = 0;
  var dienTich = 0;
  /**progress
   * ta tính theo công thức :chuVi = (chieuDai + chieuRong) * 2
  dienTich = chieuDai * chieuRong
  sau đó xuất kết quả ra màn hình
   */
  chuVi = (chieuDai + chieuRong) * 2;
  dienTich = chieuDai * chieuRong;
  domID("chuVi").innerHTML = chuVi;
  domID("dienTich").innerHTML = dienTich;
};

//Bài 5 :
domID("btnTongKySo").onclick = function () {
  /**
   * Input: tạo biến cho người dùng nhập vào 1 số có 2 chữ số
   */
  var so2ChuSo = domID("so2ChuSo").value;
  /**
   * Output : tạo biến là kết quả tổng của 2 ký số
   */
  var tongKySo = 0;
  /**progress
   * Ta tạo 2 biến là soDonVi và soHangChuc để tính giá trị của hàng đơn vị và hàng chục
   * sau đó ta tính theo công thức : soDonVi = so2ChuSo % 10
 soHangChuc = Math.floor(so2ChuSo / 10)
*/
  var soDonVi = so2ChuSo % 10;
  var soHangChuc = Math.floor(so2ChuSo / 10);
  var soHangTram = Math.floor(so2ChuSo / 100);
  tongKySo = soDonVi + soHangChuc + soHangTram;
  domID("tongKySo").innerHTML = tongKySo;
};

function domID(id) {
  return document.getElementById(id);
}
