const text = {
text1: "Chào eim",
text2: "Tớ có điều này muốn hỏi cậu nhớ phải trả lời thật lòng nhaaa.",
text3: "Cậu đồng ý làm ni tớ nhe=)))",
text4: "Nếu cậu ko trả lời mà thoát ra tức là muốn làm người yêu tớ rồi nhaaaa",
text5: "Đéo :)",
text6: "Yêu ơi là yêu <3",
text7: "lí do cậu thích tớ đi :vvvv",
text8: "Gửi cho tớ <3",
text9: "Vì cậu đẹp try vlllll",
text10: "Tớ biết thừa mà:))))))",
text11: " giờ thì chờ gì nữa mà ko inbox cho tớ đi nàooo",
text12: "okee"
};

$(function () {

const music = $("#bgMusic")[0];
music.volume = 0.5;

function playMusic() {
music.play().catch(() => {});
}

// Phát nhạc sau tương tác đầu tiên
$(document).one("click touchstart keydown", playMusic);

// Nội dung
$("#text3").html(text.text3);
$("#text4").html(text.text4);
$("#yes").html(text.text6);
$("#no").html(text.text5);

// Loading
setTimeout(() => {
firstQuestion();
$(".spinner").fadeOut();
$("#preloader").delay(350).fadeOut("slow");
$("body").delay(350).css("overflow", "visible");
}, 600);

// Popup đầu tiên
function firstQuestion() {
$(".content").hide();

```
Swal.fire({
  title: text.text1,
  text: text.text2,
  imageUrl: "img/cheems.jpg",
  imageWidth: 300,
  imageHeight: 300,
  background: '#fff url("img/iput-bg.jpg")'
}).then(() => {
  playMusic();
  $(".content").show(200);
});
```

}

// Âm thanh phụ
function sound(file) {
new Audio(file).play().catch(() => {});
}

// Đổi vị trí 2 nút
function switchButton() {
sound("sound/duck.mp3");

```
const no = $("#no");
const yes = $("#yes");

const noPos = {
  left: no.css("left"),
  top: no.css("top")
};

no.css({
  left: yes.css("left"),
  top: yes.css("top")
});

yes.css(noPos);
```

}

// Di chuyển nút NO
function moveButton() {
sound("sound/duck.mp3");

```
const maxX = screen.width <= 600 ? 300 : 500;

$("#no").css({
  left: Math.random() * maxX + "px",
  top: Math.random() * 500 + "px"
});
```

}

let n = 0;

$("#no").on("mousemove", function () {
if (n < 1) {
switchButton();
} else {
moveButton();
}

```
n++;
```

});

$("#no").on("click", function () {
playMusic();

```
if (screen.width >= 900) {
  switchButton();
}
```

});

// Nút YES
$("#yes").on("click", function () {

```
playMusic();
sound("sound/tick.mp3");

Swal.fire({
  title: text.text7,
  width: 900,
  padding: "3em",
  html:
    '<input type="text" class="form-control" id="txtReason" placeholder="Whyyy">',
  background: '#fff url("img/iput-bg.jpg")',
  backdrop: `
    rgba(0,0,123,0.4)
    url("img/giphy2.gif")
    left top
    no-repeat
  `,
  showCancelButton: false,
  confirmButtonColor: "#fe8a71",
  confirmButtonText: text.text8
}).then(result => {

  if (result.value) {

    Swal.fire({
      width: 900,
      title: text.text10,
      text: text.text11,
      confirmButtonText: text.text12,
      confirmButtonColor: "#83d0c9",
      background: '#fff url("img/iput-bg.jpg")',
      onClose: () => {
        location.href = "https://www.facebook.com/kiekhh/";
      }
    });

  }
});
```

});

// Tự điền lý do
$(document).on("input", "#txtReason", function () {

```
const value = $(this).val();
const answer = text.text9;

if (value.length >= answer.length) {
  $(this).val("");
} else if (value.length > 0) {
  $(this).val(answer.substring(0, value.length));
}
```

});

});
