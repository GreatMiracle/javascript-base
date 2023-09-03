console.log(10 < 20 && 30 > 15 && 40 > 30); // Must all be true
console.log(10 > 20 || 30 < 15); // Only one has to be true

// && - Will return first falsy value or the last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;

console.log("a: " +a );

const posts = ['Post One', 'Post Two'];
posts.length > 0 && console.log(posts[0]);

// || - Will return the first truthy value or the last value

let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b);

// ?? - Returns the right side operand when the left is null or undefined

let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = '' ?? 30;

console.log("c: " +c);

/*

Các giá trị falsy là những giá trị mà JavaScript coi là giá trị sai (false) trong ngữ cảnh điều kiện.
Dưới đây là danh sách các giá trị falsy trong JavaScript:
false: Giá trị boolean false.
0: Số 0.
null: Giá trị đặc biệt null, đại diện cho sự không tồn tại của giá trị.
undefined: Giá trị đặc biệt undefined, đại diện cho biến chưa được định nghĩa hoặc thuộc tính không tồn tại.
NaN: Giá trị đặc biệt NaN, đại diện cho "Not-a-Number" và xảy ra khi thực hiện các phép toán không hợp lệ với số.
'' (chuỗi rỗng): Một chuỗi không có ký tự nào, gọi là chuỗi rỗng.
document.all: Một giá trị đặc biệt chỉ tồn tại trong môi trường trình duyệt cũ, không được hỗ trợ trong các môi trường hiện đại.

*/