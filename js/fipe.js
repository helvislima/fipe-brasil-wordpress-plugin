
window.onload = loadVehicles();

$(document).ready(function() {
    $('#model, #brand, #year').select2();
});

function request(type, body, element) {
    $.post("https://veiculos.fipe.org.br/api/veiculos/" + type, body, function( data ) {
        if(element == "#model" || element == "#year") {
            $.each(data, function(i, p) {
                $(element).append($('<option value="'+p.Value+'">'+p.Label+'</option>'));
            });
        } else if(element == "#brand"){
            $.each(data.Modelos, function(i, p) {
                $("#brand").append($('<option value="'+p.Value+'">'+p.Label+'</option>'));
            });
        } 
    });
}

function loadVehicles() {
    var type = "ConsultarMarcas"
    var body = {'codigoTabelaReferencia': 282, 'codigoTipoVeiculo': 1};
    var element = "#model";
    request(type, body, element);
}

function getVehicleModelInfo() {
    $("#brand").empty();
    $("#year").empty();
    loadVehicles();
    getVehicleBrandInfo();
}

function getVehicleBrandInfo(fromChange = null) {
    $("#brand").prop("disabled", false);
    var type = "ConsultarModelos"
    var brand = $("#model").val();
    var body = {'codigoTabelaReferencia': 282, 'codigoTipoVeiculo': 1, 'codigoMarca': brand};
    var element = "#brand";
    request(type, body, element);
    if(fromChange) {
        getVehicleYearInfo();
    }
}

function getVehicleYearInfo() {
    $("#year").prop("disabled", false);
    var type = "ConsultarAnoModelo"
    var brand = $("#model").val();
    var model = $("#brand").val();
    var body = {'codigoTabelaReferencia': 282, 'codigoTipoVeiculo': 1, 'codigoMarca': brand, 'codigoModelo': model};
    var element = "#year";
    request(type, body, element);
}
