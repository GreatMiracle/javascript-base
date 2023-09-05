Sự kiện (Events): Sự kiện là những hành động hoặc biến cố xảy ra trong hệ thống, và chúng ta có thể lập trình để phản ứng khi nhận được sự kiện đó. Sự kiện có thể bao gồm nhiều thứ như click, hover, submit form, và nhiều sự kiện khác trên trang web.

Cách lắng nghe sự kiện:

Cách 1 (Không được khuyến nghị): Thêm sự kiện trực tiếp vào HTML như một thuộc tính, ví dụ: onClick="alert('clear')".
Cách 2 (Không được khuyến nghị): Sử dụng JavaScript event listener bằng cách chọn phần tử và đặt một hàm xử lý sự kiện, ví dụ: element.onclick = function() { alert('clear items'); }.
Cách 3 (Được khuyến nghị): Sử dụng phương thức addEventListener để thêm một event listener vào một phần tử. Đây là cách hiện đại và linh hoạt hơn.
Gỡ bỏ event listener: Khi cần, bạn có thể gỡ bỏ event listener bằng cách sử dụng removeEventListener. Điều này thường cần thiết khi bạn muốn loại bỏ một phần tử khỏi DOM.

Kích hoạt sự kiện programatically: Bạn cũng có thể kích hoạt sự kiện từ mã JavaScript của mình bằng cách sử dụng các phương thức như .click().

Xóa nội dung của danh sách: Cuối cùng, bài học giới thiệu cách xóa nội dung của một danh sách bằng cách sử dụng các phương pháp khác nhau, bao gồm việc xóa các phần tử con một cách tuần tự hoặc đặt innerHTML của danh sách thành rỗng.