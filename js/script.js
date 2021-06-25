

//form section
$(document).ready(() => {
  $("#submit").click((e) => {
    if ($("#email").val() === "" || $("#name").val() === "") {
      e.preventDefault();
      alert('enter your Name and email address');
    } else alert(`${$("#name").val()} we have received your message. Thank you for contacting us. `);
    $("form").trigger("reset");
  });
})
//form section