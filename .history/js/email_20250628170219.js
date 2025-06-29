// EmailJSの初期化
(function () {
  emailjs.init("public_xxxxxxxxxxxxxxxxxxxxx"); // ここに本物のPublic Keyを入れてください
})();

// フォーム送信処理
window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      emailjs.sendForm("service_pqx29rb", "template_xxxxxxx", this).then(
        function () {
          alert("送信完了しました！");
        },
        function (error) {
          alert("送信に失敗しました: " + JSON.stringify(error));
        }
      );
    });
  }
});
