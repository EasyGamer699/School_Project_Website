function generateBarCode() {
    var nric = $('#text').val();
    var size = $('#size').val(); 
    var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(nric) + '&size=' + size + 'x' + size;
    $('#barcode').attr('src', url);
}


$('#size').on('input', function () {
    $('#size-value').text($(this).val());
    generateBarCode(); 
});


$(document).ready(function () {
    generateBarCode(); 
});
