

# Tiêu đề
Bạn có thể viết các lớp tiêu đề h1, h2, h3 cho đến h6 bằng cách thêm số lượng ký tự # tương ứng vào đầu dòng. Một ký tự # tương đương với h1, 2 ký tự # tương đương với h2 ...

Ví dụ khi viết
# h1
## h2
### h3
#### h4
##### h5
###### h6

***
# Nhấn mạnh, highlight
Bạn có thể kẹp một từ ở đầu và cuối bằng 1 ký tự * để in nghiêng

-2 ký tự ** để bôi đậm


 -3 ký tự *** để vừa in nghiêng vừa bôi đậm.

*in nghiêng*

**bôi đậm**

***vừa in nghiêng vừa bôi đậm***

***
# Để viết inline code, bạn dùng cú pháp
`inlide code`

***
# Để highlight block code, bạn viết

```php

echo ("highlight code");

```
***
# Link, image
## Link
Để chèn link vào bài viết, bạn dùng cú pháp sau:

[title](http://~)

Ví dụ: 

[Markdown](http://https://vi.wikipedia.org/wiki/Markdown)

## Image
Cú pháp chèn hình ảnh như sau:

![alt](http://~) 

Ví dụ:

![markdown](https://images.viblo.asia/518eea86-f0bd-45c9-bf38-d5cb119e947d.png)

***
# List
## List dạng gạch đầu dòng:
* item
* item 1
* item 2
* item 3

## List dạng số:
1. item
2. item 2
3. item 3

***
# Horizonal rules
Để có được horizonal rules bạn chỉ cần viết *** như sau:

***
horizonal rules

***
# Blockquotes
Cú pháp blockquotes là

> text

***
# Escape markdown
Đôi khi trong khi viết bài bạn sẽ sử dụng những kí kiệu trùng với cú pháp của markdown. Để phân biệt, bạn chỉ cần thêm dấu \ trước những kí hiệu đó là được.

Ví dụ nếu bạn viết

\*text*

***
# Advanced Markdown Embedment
Cách 1: Dùng cú pháp dưới đây để chèn link video từ tất cả các nguồn:

{@embed: URL}


{@embed: https://www.youtube.com/watch?v=HndN6P9ke6U}

***
# Dùng cho Strikethrough
Sử dụng ~~ ở đầu (hoặc đầu và cuối câu) nếu muốn gạch ngang giữa chữ của câu đó.

~~TopDev việc làm IT hàng đầu~~

***
# Tạo bảng
Sử dụng theo mẫu dưới đây để tạo bảng:

| Name  | Email         | Phone       |
| ----- | ------------- | ----------- |
| AAAAA | abc@gmail.com | 08045078888 |
| BBBB  | xyz@gmail.com | 09069969999 |

***
# Task list
- [x] Task 1
- [ ] Task 1
- [ ] Task 1
- [ ] Task 1

***
# Đổi màu chữ

<span style="color: green">This is text color</span>