const textConfig = {
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
text12: "okee",
};

$(document).ready(function () {

const bgMusic = document.getElementById("bgMusic");

// Âm lượng từ 0 đến 1
bgMusic.volume = 0.9;

// Tránh gọi play nhiều lần
let musicStarted = false;

function playBackgroundMusic() {

```
if (musicStarted) {
  return;
}

const playPromise = bgMusic.play();

if (playPromise !== undefined) {

  playPromise
    .then(function () {

      musicStarted = true;

      console.log("Background music started.");

    })
    .catch(function (error) {

      console.log(
        "Không thể tự động phát nhạc:",
        error
      );

    });
}
```

}


setTimeout(function () {

```
firstQuestion();

$(".spinner").fadeOut();

$("#preloader")
  .delay(350)
  .fadeOut("slow");

$("body")
  .delay(350)
  .css({
    overflow: "visible",
  });
```

}, 600);


$("#text3").html(textConfig.text3);

$("#text4").html(textConfig.text4);

$("#no").html(textConfig.text5);

$("#yes").html(textConfig.text6);


function firstQuestion() {

```
$(".content").hide();

Swal.fire({

  title: textConfig.text1,

  text: textConfig.text2,

  imageUrl: "img/cheems.jpg",

  imageWidth: 300,

  imageHeight: 300,

  background: '#fff url("img/iput-bg.jpg")',

  imageAlt: "Custom image",

}).then(function () {

  /*
   * Người dùng vừa tương tác với popup.
   * Đây là thời điểm thích hợp để trình duyệt
   * cho phép phát nhạc.
   */

  playBackgroundMusic();

  $(".content").show(200);

});
```

}


function switchButton() {

```
// Âm thanh khi nút chạy
const audio = new Audio("sound/duck.mp3");

audio.play().catch(function (error) {
  console.log("Không thể phát duck.mp3:", error);
});


const leftNo = $("#no").css("left");

const topNo = $("#no").css("top");

const leftYes = $("#yes").css("left");

const topYes = $("#yes").css("top");


$("#no").css("left", leftYes);

$("#no").css("top", topYes);

$("#yes").css("left", leftNo);

$("#yes").css("top", topNo);
```

}



function moveButton() {

```
// Âm thanh khi nút chạy
const audio = new Audio("sound/duck.mp3");

audio.play().catch(function (error) {
  console.log("Không thể phát duck.mp3:", error);
});


let x;
let y;


if (screen.width <= 600) {

  x = Math.random() * 300;

  y = Math.random() * 500;

} else {

  x = Math.random() * 500;

  y = Math.random() * 500;

}


const left = x + "px";

const top = y + "px";


$("#no").css("left", left);

$("#no").css("top", top);
```

}

// ==================================================
// NO BUTTON
// ==================================================

let n = 0;

$("#no").mousemove(function () {

```
if (n < 1) {

  switchButton();

}


if (n > 1) {

  moveButton();

}


n++;
```

});

$("#no").click(function () {

```
// Đảm bảo nhạc đã được kích hoạt
playBackgroundMusic();


if (screen.width >= 900) {

  switchButton();

}
```

});

// ==================================================
// GENERATE TEXT IN INPUT
// ==================================================

function textGenerate() {

```
let n = "";

const text = " " + textConfig.text9;

const a = Array.from(text);


const textVal = $("#txtReason").val()
  ? $("#txtReason").val()
  : "";


const count = textVal.length;


if (count > 0) {

  for (let i = 1; i <= count; i++) {

    n = n + a[i];


    if (i == text.length + 1) {

      $("#txtReason").val("");

      n = "";

      break;

    }

  }

}


$("#txtReason").val(n);
```

}

// ==================================================
// YES BUTTON
// ==================================================

$("#yes").click(function () {

```
// Đảm bảo nhạc nền đang phát
playBackgroundMusic();


// Âm thanh tick
const audio = new Audio("sound/tick.mp3");

audio.play().catch(function (error) {

  console.log(
    "Không thể phát tick.mp3:",
    error
  );

});


// ==================================================
// FIRST POPUP
// ==================================================

Swal.fire({

  title: textConfig.text7,

  width: 900,

  padding: "3em",

  html:
    "<input type='text' class='form-control' " +
    "id='txtReason' placeholder='Whyyy'>",

  background:
    '#fff url("img/iput-bg.jpg")',

  backdrop: `
    rgba(0,0,123,0.4)
    url("img/giphy2.gif")
    left top
    no-repeat
  `,

  showCancelButton: false,

  confirmButtonColor: "#fe8a71",

  cancelButtonColor: "#f6cd61",

  confirmButtonText: textConfig.text8,

}).then(function (result) {

  // ==================================================
  // SECOND POPUP
  // ==================================================

  if (result.value) {

    Swal.fire({

      width: 900,

      confirmButtonText:
        textConfig.text12,

      background:
        '#fff url("img/iput-bg.jpg")',

      title:
        textConfig.text10,

      text:
        textConfig.text11,

      confirmButtonColor:
        "#83d0c9",

      onClose: function () {

        window.location =
          "https://www.facebook.com/kiekhh/";

      },

    });

  }

});


// ==================================================
// AUTO GENERATE INPUT TEXT
// ==================================================

$("#txtReason").focus(function () {

  const handleWriteText =
    setInterval(function () {

      textGenerate();

    }, 10);


  $("#txtReason").blur(function () {

    clearInterval(handleWriteText);

  });

});
```

});

});
