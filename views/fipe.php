
<head>
    <link rel="stylesheet" href="<?=plugin_dir_url(__DIR__)?>css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="<?=plugin_dir_url(__DIR__)?>js/fipe.js"></script>
    <link href=<?=plugin_dir_url(__DIR__)?>css/select2.min.css" rel="stylesheet" />
    <script src="<?=plugin_dir_url(__DIR__)?>js/select2.min.js" defer></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.3.1/css/all.min.css" rel="stylesheet">
    <style>
        .select2-selection__rendered {
            font-size: 14px !important
        }
        .select2-container--default .select2-results>.select2-results__options {
            font-size: 14px
        }
    </style>
</head>

<div id="component"> 
    <h3>CONSULTA TABELA FIPE</h3>
    <div class="content">
        <label>Marca do veiculo</label>
        <select name="brand" onChange="getVehicleBrandInfo()" id="brand"> 
            <option>digite ou selecione uma marca...</option>
        </select>
    </div>

    <div class="content">
        <label>Modelo do veículo</label>
        <select name="model" onChange="getVehicleModelInfo(true)" disabled id="model">
            <option>digite ou selecione um modelo...</option>
        </select>
    </div>

    <div class="content">
        <label>Ano do modelo do veículo</label>
        <select name="year" disabled id="year">  
            <option>digite ou selecione o ano...</option>
        </select>
    </div>

    <button class="send-button" onClick="getAllParameters()">Obter informações</button>
    <div class="loading" style="display:none"><i class="fas fa-spinner fa-spin"></i> Buscando dados ...</div>
    <div id="informations" style="display: none">
        <div class="card-body">
            <div class="row">
            <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0" id="carBrandModel"></h5>
                <p class="mt-3 mb-0 text-muted text-sm">
                    <span class="text-nowrap" id="carInfo"></span>
                </p>
                <span class="h2 font-weight-bold mb-0" id="carValue"></span>
            </div>
            <div class="col-auto">
                <div class="icon icon-shape bg-danger text-white rounded-circle shadow">
                <i class="fas fa-chart-bar"></i>
                </div>
            </div>
            </div>
            <p class="mt-3 mb-0 text-muted text-sm">
                <span class="text-nowrap" id="searchDate"></span>
            </p>
        </div>
    </div>
</div>
</body>
