
<head>
    <link rel="stylesheet" href="<?=plugin_dir_url(__DIR__)?>css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="<?=plugin_dir_url(__DIR__)?>js/fipe.js"></script>
    <link href=<?=plugin_dir_url(__DIR__)?>css/select2.min.css" rel="stylesheet" />
    <script src="<?=plugin_dir_url(__DIR__)?>js/select2.min.js" defer></script>

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
        <select name="model" onChange="getVehicleModelInfo()" id="model"> 
            <option>digite ou selecione uma marca...</option>
        </select>
    </div>
    
    <div class="content">
        <label>Modelo do veículo</label>
        <select name="brand" onChange="getVehicleBrandInfo(true)" disabled id="brand">
            <option>digite ou selecione um modelo...</option>
        </select>
    </div>

    <div class="content">
        <label>Ano do modelo do veículo</label>
        <select name="year" onChange="getVehicleYearInfo()" disabled id="year">  
            <option>digite ou selecione o ano...</option>
        </select>
    </div>

    <button class="send-button" onClick="">Obter informações</button>

    <div id="informations"></div>

</div>  
