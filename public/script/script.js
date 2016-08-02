function dropdownClick(target, other) {
  if($(other).hasClass('active')) {
    $(other).removeClass('active');
  }
  $(target).toggleClass('active');
}

$('.dropdown-trigger').on('click', function() {
  dropdownClick('.profile-dropdown', '.mobile-menu-dropdown');
});

$('.dropdown-trigger--mobile').on('click', function() {
  dropdownClick('.mobile-menu-dropdown', '.profile-dropdown');
});

$('#flat').colpick({
    color:'123456',
    flat:true,
    layout:'hex'
});
