$(document).ready(function () {
    $(function () {
        $.getJSON("js/automoveis.json", function (data) {

            $("#corpo").append("<table class='table table-bordered' border='1'><thead><tr><th scope='col'>Marca</th><th scope='col'>Modelo</th><th scope='col'>Camber Dianteiro Mínimo</th><th scope='col'>Camber Dianteiro Máximo</th><th scope='col'>Caster Dianteiro Mínimo</th><th scope='col'>Caster Dianteiro Máximo</th><th scope='col'>Convergência Dianteira Mínima</th><th scope='col'>Convergência Dianteira Mínima</th><th scope='col'>Camber Traseiro Mínimo</th><th scope='col'>Camber Traseiro Máximo</th><th scope='col'>Convergência Traseira Mínima</th><th scope='col'>Convergência Traseira Mínima</th></tr></thead><tbody id='TableData'></tbody></table>");

            for (var i = 0; i < data['automoveis'].length; i++) {
                $("#TableData").append("<tr>");

                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['MARCA'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CARRO'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MAX'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MAX'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MAX'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MAX'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MAX'] + "</td>");

                $("#TableData").append("</tr>");

                $("#loading").hide();

            }
        });
    });

    $("body").on("click", "#btnrecarregar", function () {
        $("#TableData").html("");
        $("#loading").show();
        $("#corpo").html("");
        $.getJSON("js/automoveis.json", function (data) {

            $("#corpo").append("<table class='table table-bordered' border='1'><thead><tr><th scope='col'>Marca</th><th scope='col'>Modelo</th><th scope='col'>Camber Dianteiro Mínimo</th><th scope='col'>Camber Dianteiro Máximo</th><th scope='col'>Caster Dianteiro Mínimo</th><th scope='col'>Caster Dianteiro Máximo</th><th scope='col'>Convergência Dianteira Mínima</th><th scope='col'>Convergência Dianteira Mínima</th><th scope='col'>Camber Traseiro Mínimo</th><th scope='col'>Camber Traseiro Máximo</th><th scope='col'>Convergência Traseira Mínima</th><th scope='col'>Convergência Traseira Mínima</th></tr></thead><tbody id='TableData'></tbody></table>");

            for (var i = 0; i < data['automoveis'].length; i++) {
                $("#TableData").append("<tr>");

                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['MARCA'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CARRO'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MAX'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MAX'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MAX'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MAX'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MAX'] + "</td>");

                $("#TableData").append("</tr>");

                $("#loading").hide();

            }
        });
    });

    /* $("body").on("click", "#btnpesquisa", function () {
        var valorpesquisa = $("#txtpesquisa").val();
        $("#TableData").html("");
        $("#loading").show();
        $("#corpo").html("");
        $.getJSON("js/automoveis.json", function (data) {
            $("#corpo").append("<table class='table table-bordered' border='1'><thead><tr><th scope='col'>Marca</th><th scope='col'>Carro</th><th scope='col'>Camber Dianteiro Mínimo</th><th scope='col'>Camber Dianteiro Máximo</th><th scope='col'>Caster Dianteiro Mínimo</th><th scope='col'>Caster Dianteiro Máximo</th><th scope='col'>Convergência Dianteira Mínima</th><th scope='col'>Convergência Dianteira Mínima</th><th scope='col'>Camber Traseiro Mínimo</th><th scope='col'>Camber Traseiro Máximo</th><th scope='col'>Convergência Traseira Mínima</th><th scope='col'>Convergência Traseira Mínima</th></tr></thead><tbody id='TableData'></tbody></table>");
            $.each(data, function (index, valor) {
                $.each(valor, function (ch, val) {
                    if (val.CARRO) {
                        var nomecarro = val.CARRO;
                        if (nomecarro.indexOf(valorpesquisa) > -1) {
                            $("#TableData").append("<tr>");

                            $("#TableData").append("<td scope='col'>" + val['MARCA'] + "</td>");
                            $("#TableData").append("<td scope='col'>" + val['CARRO'] + "</td>");
                            $("#TableData").append("<td scope='col'>" + val['CAMBER_DIANTEIRO_MIN'] + "</td>");
                            $("#TableData").append("<td scope='col'>" + val['CAMBER_DIANTEIRO_MAX'] + "</td>");
                            $("#TableData").append("<td scope='col'>" + val['CASTER_DIANTEIRO_MIN'] + "</td>");
                            $("#TableData").append("<td scope='col'>" + val['CASTER_DIANTEIRO_MAX'] + "</td>");
                            $("#TableData").append("<td scope='col'>" + val['CONVERGENCIA_DIANTEIRA_MIN'] + "</td>");
                            $("#TableData").append("<td scope='col'>" + val['CONVERGENCIA_DIANTEIRA_MAX'] + "</td>");
                            $("#TableData").append("<td scope='col'>" + val['CAMBER_TRASEIRA_MIN'] + "</td>");
                            $("#TableData").append("<td scope='col'>" + val['CAMBER_TRASEIRA_MAX'] + "</td>");
                            $("#TableData").append("<td scope='col'>" + val['CONVERGENCIA_TRASEIRA_MIN'] + "</td>");
                            $("#TableData").append("<td scope='col'>" + val['CONVERGENCIA_TRASEIRA_MAX'] + "</td>");

                            $("#TableData").append("</tr>");
                        }
                    }
                })
            })


            $("#loading").hide();
        });
    }); */

    $("body").on("keyup", "#txtpesquisa", function () {
        var valorpesquisa = $("#txtpesquisa").val();
        if (valorpesquisa.length <= 1) {
            return false
        }
        $("#TableData").html("");
        $("#loading").show();
        $("#corpo").html("");
        $.getJSON("js/automoveis.json", function (data) {
            $("#corpo").append("<table class='table table-bordered' border='1'><thead><tr><th scope='col'>Marca</th><th scope='col'>Modelo</th><th scope='col'>Camber Dianteiro Mínimo</th><th scope='col'>Camber Dianteiro Máximo</th><th scope='col'>Caster Dianteiro Mínimo</th><th scope='col'>Caster Dianteiro Máximo</th><th scope='col'>Convergência Dianteira Mínima</th><th scope='col'>Convergência Dianteira Mínima</th><th scope='col'>Camber Traseiro Mínimo</th><th scope='col'>Camber Traseiro Máximo</th><th scope='col'>Convergência Traseira Mínima</th><th scope='col'>Convergência Traseira Mínima</th></tr></thead><tbody id='TableData'></tbody></table>");
            $.each(data, function (index, valor) {
                $.each(valor, function (ch, val) {
                    if (val.CARRO) {
                        var nomecarro = val.CARRO;
                        if (nomecarro.indexOf(valorpesquisa) > -1) {
                            $("#TableData").append("<tr>");

                            $("#TableData").append("<td scope='col'>" + val['MARCA'] + "</td>");
                            $("#TableData").append("<td scope='col'>" + ' '+val['CARRO'] + "</td>");
                            $("#TableData").append("<td scope='col'>" + val['CAMBER_DIANTEIRO_MIN'] + "</td>");
                            $("#TableData").append("<td scope='col'>" + val['CAMBER_DIANTEIRO_MAX'] + "</td>");
                            $("#TableData").append("<td scope='col'>" + val['CASTER_DIANTEIRO_MIN'] + "</td>");
                            $("#TableData").append("<td scope='col'>" + val['CASTER_DIANTEIRO_MAX'] + "</td>");
                            $("#TableData").append("<td scope='col'>" + val['CONVERGENCIA_DIANTEIRA_MIN'] + "</td>");
                            $("#TableData").append("<td scope='col'>" + val['CONVERGENCIA_DIANTEIRA_MAX'] + "</td>");
                            $("#TableData").append("<td scope='col'>" + val['CAMBER_TRASEIRA_MIN'] + "</td>");
                            $("#TableData").append("<td scope='col'>" + val['CAMBER_TRASEIRA_MAX'] + "</td>");
                            $("#TableData").append("<td scope='col'>" + val['CONVERGENCIA_TRASEIRA_MIN'] + "</td>");
                            $("#TableData").append("<td scope='col'>" + val['CONVERGENCIA_TRASEIRA_MAX'] + "</td>");

                            $("#TableData").append("</tr>");
                        }
                    }
                })
            })


            $("#loading").hide();
        });
    });
})