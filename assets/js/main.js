$(document).ready(function(){
 //Live Medicine Search
    $("#seachMedicine").keyup(function () {
        var live = $(this).val();
        if (live != ''){
         $.ajax({
             url:"ajax/searchMedicine.php",
             method:"post",
             data:{search:live},
             dataType:"text",
             success:function (data) {
                 $('#stat').fadeIn();
                 $('#stat').html(data);
             }
         })
        }else {
            $('#stat').html('');
        }
    });

    $(document).on('click', '.medicineData', function () {
        //$("#seachMedicine").val($(this).text());
        $("#seachMedicine").val($(this).firstElementChild().text());

        //$("#seachMedicine").val($(this).getElementsByClassName(".brandname").text());
        //$("#seachMedicine").val($(".brandName").text());
        //$("#productId").val($(this).text());
        $('#stat').fadeOut();
    });


 });