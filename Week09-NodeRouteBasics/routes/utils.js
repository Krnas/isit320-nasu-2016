module.exports = {

    $('#calculateCircumference').click(function () {
    console.log('Click to calculate circumference');
    var radius = $('#radiusInput').val();
    var input = {radius: radius};
    $.getJSON('/calculateCircumference', input, function (result) {
        var output = JSON.stringify(result, null, 4);
        console.log(output);
        $('#debug').html(output);
    });
});
}
