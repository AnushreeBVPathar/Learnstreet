
$("#content").load("pages/home.html");
$("#washingMachine").load("pages/washingMachine.html");

$("#meganavlist > li").click(function(){
    var index = $(this).attr('id');
    var modelId = "model" + index;
    // $(".mod").show();
    $(".mod").hide();
    $("#" + modelId).show();
    $(".navbar").click(function(){
        $(".mod").hide();
    })
});


$(".menu").click(function() {
    $("#meganavlist").hide();
    $("#meganavlist").show();
})

