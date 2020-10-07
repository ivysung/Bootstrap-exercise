$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});



$("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
    }
});


// $('#reserveModal').modal('toggle');

//   $('#reserveModal').modal('show');

// $('#reserveModal').modal('hide');


// $('#reserveButton').click(function(){
//     $('#reserveModal').modal('show');
// });

// $('#loginButton').click(function(){
//     $('#loginModal').modal('show');
// });


// $('#reserveModal').on('hidden.bs.modal', function (e) {
//     // do something...
//     // $('#reserveModal').modal('toggle');
    
//     $('#reserveModal').modal('show');
//     console.log(e);
//   });