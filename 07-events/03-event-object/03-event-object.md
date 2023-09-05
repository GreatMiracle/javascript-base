Dưới đây là các thuộc tính của đối tượng sự kiện e và mô tả của mỗi thuộc tính:

e.target: Đây là phần tử DOM mà sự kiện đã xảy ra trên. Điều này có nghĩa là phần tử nào đã gây ra sự kiện, ví dụ: nếu bạn nhấn chuột vào một nút trên trang web, e.target sẽ là phần tử nút đó.

e.currentTarget: Đây là phần tử DOM mà trình lắng nghe sự kiện được gắn vào. Nó có thể khác với e.target nếu bạn đang sử dụng delegation hoặc nếu bạn có nhiều phần tử con bên trong một phần tử cha và sự kiện xảy ra trên một trong các phần tử con.

e.type: Thuộc tính này chứa tên loại sự kiện. Ví dụ, nếu đây là một sự kiện click, e.type sẽ chứa chuỗi "click".

e.timeStamp: Đây là thời điểm mà sự kiện đã xảy ra, được tính bằng miligiây từ thời điểm mà trang web bắt đầu tải.

e.clientX và e.clientY: Đây là tọa độ của con trỏ chuột (hoặc ngón tay trên thiết bị cảm ứng) tại thời điểm sự kiện xảy ra, tính từ góc trên bên trái của cửa sổ trình duyệt.

e.offsetX và e.offsetY: Đây là tọa độ của con trỏ chuột tại thời điểm sự kiện xảy ra, tính từ góc trên bên trái của phần tử e.target.

e.pageX và e.pageY: Tương tự như e.clientX và e.clientY, đây cũng là tọa độ của con trỏ chuột, nhưng tính từ góc trên bên trái của toàn bộ tài liệu (document) thay vì cửa sổ trình duyệt.

e.screenX và e.screenY: Đây là tọa độ của con trỏ chuột tính từ góc trên bên trái của màn hình máy tính của bạn, không phụ thuộc vào cửa sổ trình duyệt.


Phương thức preventDefault của đối tượng sự kiện được thảo luận. Nó được sử dụng để ngăn chặn hành vi mặc định của một sự kiện, chẳng hạn như việc gửi biểu mẫu hoặc điều hướng liên kết.
Người hướng dẫn minh họa ví dụ về việc sử dụng preventDefault trên một liên kết để ngăn chặn việc điều hướng đến một trang khác.