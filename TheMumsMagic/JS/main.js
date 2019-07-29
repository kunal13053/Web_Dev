// Animate Smooth Scroll
$('#content-link').on('click', function(){
  const services = $('#services-id').position().top;

  $('html, body').animate(
    {
    scrollTop: services
    },
    900
  );
});
