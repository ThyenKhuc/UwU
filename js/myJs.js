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

// ================================
// BACKGROUND MUSIC
// ================================

const backgroundMusic = new Audio("sound/background.mp3");

backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;

let musicStarted = false;

function playMusic() {
if (musicStarted) return;

backgroundMusic.play()
.then(() => {
musicStarted = true;
console.log("Background music is playing.");
})
.catch(error => {
console.log("Cannot play background music:", error);
});
}

// ================================
// OTHER SOUNDS
// ================================

function playSound(file) {
const audio = new Audio(file);

audio.play().catch(error => {
console.log("Cannot play sound:", file, error);
});
}

// ================================
// MAIN
// ================================

$(document).ready(function () {

// Nội dung
$("#text3").html(text.text3);
$("#text4").html(text.text4);
$("#yes").html(text.text6);
$("#no").html(text.text5);

// ==================================
// START MUSIC AFTER USER INTERACTION
// ==================================

$(document).one(
"click touchstart keydown",
function () {
playMusic();
}
);

setTimeout(function () {

```
$(".spinner").fadeOut();

$("#preloader")
  .delay(350)
  .fadeOut("slow");

$("body")
  .delay(350)
  .css("overflow", "visible");

firstQuestion();
```

}, 600);

function firstQuestion() {

```
$(".content").hide();

Swal.fire({
  title: text.text1,
  text: text.text2,
  imageUrl: "img/cheems.jpg",
  imageWidth: 300,
  imageHeight: 300,
  imageAlt: "Custom image",
  background: '#fff url("img/iput-bg.jpg")',
  confirmButtonText: "OK"
}).then(function () {

  // Thử phát nhạc thêm một lần
  playMusic();

  $(".content").show(200);

});
```

}

// ==================================
// SWITCH BUTTON
// ==================================

function switchButton() {

```
playSound("sound/duck.mp3");

const no = $("#no");
const yes = $("#yes");

const noPosition = {
  left: no.css("left"),
  top: no.css("top")
};

no.css({
  left: yes.css("left"),
  top: yes.css("top")
});

yes.css(noPosition);
```

}

function moveButton() {

```
playSound("sound/duck.mp3");

const maxX = screen.width <= 600 ? 300 : 500;
const maxY = 500;

$("#no").css({
  left: Math.random() * maxX + "px",
  top: Math.random() * maxY + "px"
});
```

}

// ==================================
// NO BUTTON
// ==================================

let noCount = 0;

$("#no").on("mousemove", function () {

```
if (noCount < 1) {
  switchButton();
} else {
  moveButton();
}

noCount++;
```

});

$("#no").on("click", function () {

```
playMusic();

if (screen.width >= 900) {
  switchButton();
}
```

});

// ==================================
// YES BUTTON
// ==================================

$("#yes").on("click", function () {

```
// Đảm bảo nhạc được phát
playMusic();

// Tick sound
playSound("sound/tick.mp3");


Swal.fire({

  title: text.text7,

  width: 900,

  padding: "3em",

  html:
    '<input type="text" ' +
    'class="form-control" ' +
    'id="txtReason" ' +
    'placeholder="Whyyy">',

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

  confirmButtonText: text.text8

}).then(function (result) {

  if (result.value) {

    Swal.fire({

      width: 900,

      title: text.text10,

      text: text.text11,

      confirmButtonText: text.text12,

      confirmButtonColor: "#83d0c9",

      background:
        '#fff url("img/iput-bg.jpg")',

      onClose: function () {

        window.location.href =
          "https://www.facebook.com/kiekhh/";

      }

    });

  }

});
```

});

$(document).on("input", "#txtReason", function () {

```
const input = $(this);
const length = input.val().length;

if (length >= text.text9.length) {
  input.val("");
  return;
}

if (length > 0) {
  input.val(
    text.text9.substring(0, length)
  );
}
```

});

});
