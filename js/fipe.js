
window.onload = loadVehicles();

$(document).ready(function() {
    $('#model, #brand, #year').select2();
});

function request(type, body, element) {
    $.post("https://veiculos.fipe.org.br/api/veiculos/" + type, body, function( data ) {
        if(element == "#model") {
            $.each(data.Modelos, function(i, p) {
                $(element).append($('<option value="'+p.Value+'">'+p.Label+'</option>'));
            });
        } else if(element == "#brand" || element == "#year"){
            $.each(data, function(i, p) {
                $(element).append($('<option value="'+p.Value+'">'+p.Label+'</option>'));
            });
        }  else if (element == "#informations") {
            clearSearch();
            $("#informations").show();
            $(".loading").hide();
            $("#carBrandModel").text(data.Marca + ' - ' + data.Modelo);
            $("#carInfo").text('Ano: '+data.AnoModelo+' / À '+data.Combustivel+'');
            $("#carValue").text(data.Valor);
            $("#searchDate").text('Referência: '+data.MesReferencia+'');
        }
    });
}

function loadVehicles() {
    var type = "ConsultarMarcas"
    var body = {
        'codigoTabelaReferencia': 282, 
        'codigoTipoVeiculo': 1
    }
    var element = "#brand";
    request(type, body, element);
}

function getVehicleBrandInfo() {
    $("#model").find('option').not(':first').remove();
    $("#year").find('option').not(':first').remove();
    getVehicleModelInfo();
}

function getVehicleModelInfo(fromChange = null) {
    $("#model").prop("disabled", false);
    var type = "ConsultarModelos"
    var brand = $("#brand").val();
    var body = {
        'codigoTabelaReferencia': 282, 
        'codigoTipoVeiculo': 1, 
        'codigoMarca': brand
    };
    var element = "#model";
    request(type, body, element);
    if(fromChange) {
        getVehicleYearInfo();
    }
}

function getVehicleYearInfo() {
    $("#year").find('option').not(':first').remove();
    $("#year").prop("disabled", false);
    var type = "ConsultarAnoModelo";
    var brand = $("#brand").val();
    var model = $("#model").val();
    var body = {
        'codigoTabelaReferencia': 282, 
        'codigoTipoVeiculo': 1, 
        'codigoMarca': brand, 
        'codigoModelo': model
    };
    var element = "#year";
    request(type, body, element);
}

function clearSearch() {
    $("#carBrandModel").empty()
    $("#carInfo").empty();
    $("#carValue").empty()
    $("#searchDate").empty();
}
function getAllParameters() {
    $(".loading").show();
    var type = "ConsultarValorComTodosParametros";
    var year = $("#year").val();
    var splitYearFuel = year.split("-");
    var year = splitYearFuel[0];
    var fuel = splitYearFuel[1];
    var element = "#informations";
    var body = {
        "codigoTabelaReferencia": 282,
        "codigoMarca": parseInt($("#brand").val()),
        "codigoModelo": parseInt($("#model").val()),
        "codigoTipoVeiculo": 1,
        "anoModelo": parseInt(year),
        "codigoTipoCombustivel": parseInt(fuel),
        "tipoVeiculo": "carro",
        "modeloCodigoExterno": null,
        "tipoConsulta": "tradicional"
    };
    request(type, body, element);
}
