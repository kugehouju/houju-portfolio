(function () {
  emailjs.init("3n6j2CZeu1smbDFrT");
})();

window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      emailjs.sendForm("service_pqx29rb", "template_p3qfr9a", this).then(
        function () {
          alert("送信完了しました！");
          form.reset();
        },
        function (error) {
          alert("送信に失敗しました: " + JSON.stringify(error));
        }
      );
    });
  }
});
