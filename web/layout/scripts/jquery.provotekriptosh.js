
$(document).ready(function () {
    // encrypt listener
    $('#encryptBtn').click(function () {
        var t = new Date();
        var ciphertext = Aes.Ctr.encrypt($('#plaintext').val(), $('#password').val(), 256);
        $('#encrypt-time').html(((new Date() - t)) + 'ms');
        $('#cipher').val(ciphertext);
    });

    // decrypt listener
    $('#decryptBtn').click(function () {
        var t = new Date();
        var plain = Aes.Ctr.decrypt($('#cipher').val(), $('#password').val(), 256);
        $('#decrypt-time').html(((new Date() - t)) + 'ms');
        $('#plaintext').val(plain);
    });


    $('#plaintextDiv .clear').click(function () {
        $('#plaintext').val("");
    });
    $('#cipherDiv .clear').click(function () {
        $('#cipher').val("");
    });


});
