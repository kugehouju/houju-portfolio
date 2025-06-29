// EmailJSの初期化
(function () {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
})();

// フォーム送信処理
window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      emailjs
        .sendForm(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, this)
        .then(
          function () {
            alert("送信完了しました！");
            // フォームの内容をクリア
            form.reset();
          },
          function (error) {
            alert("送信に失敗しました: " + JSON.stringify(error));
          }
        );
    });
  }
});
