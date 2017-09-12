var widthGrid = null;
var arrColumns= [];

var dataSet_Param  = $.map(DB.data_parametria, function(el, i) {
  return [el];
});

function toggle(value,row,index){
    var checked = "";
    if(value == 1){
      checked = "checked";
    }

    return '<label class="switch"><input id="check'+index+'" type="checkbox" '+checked+' onClick="disabledRow(this,'+index+');"><span class="slider round"></span></label>'
}

function disabledRow(objToggle, index){
  var row = $("tr[data-index='"+index+"']");
  var td = $("tr[data-index='"+index+"'] td");

  if(objToggle.checked){
    row.css('background','');
    row.find('td').each (function() {
      $(this).find('a').each(function(){
          $(this).css('color','');
          $(".div"+index).remove();
      });
    });
  }else{
    row.css('background','#FAFAFA');
    if(isToggle()){
      row.find('td').each (function() {
        $(this).find('a').each(function(){
            $(this).css('color','#BDBDBD');
        });
        $(this).before('<div class="div'+index+'" style="position:absolute;height:'+$(this).outerHeight()+'px;width:100%;"></div>');
      });
    }else{
      row.find('td').each (function() {
        var td = $(this);
        td.find('a').each(function(){
          var dataValue = $(this).attr("data-value");
          if(dataValue != undefined){
            $(this).css('color','#BDBDBD');
            $(this).before('<div class="div'+index+'" style="position:absolute;height:'+td.outerHeight()+'px;width:100%;"></div>');
          }
        });
      });
    }
  }
}

function iniValid(){
  $('#tableValid').find('tr').each (function() {
      var tr = $(this);
      var index = tr.attr('data-index');
      if($("#check"+index).attr("checked") != "checked"){
        if(isToggle()){
          tr.find('td').each (function() {
            $(this).find('a').each(function(){
                $(this).css('color','#BDBDBD');
            });
            $(this).before('<div class="div'+index+'" style="position:absolute;height:'+$(this).outerHeight()+'px;width:100%;"></div>');
          });
        }else{
          tr.css('background','rgb(250, 250, 250)');
          tr.find('td').each (function() {
            var td = $(this);
            td.find('a').each (function(){
              var dataValue = $(this).attr("data-value");
              if(dataValue != undefined){
                $(this).css('color','#BDBDBD');
                $(this).before('<div class="div'+index+'" style="position:absolute;height:'+td.outerHeight()+'px;width:100%;"></div>');
              }
            });
          });
        }
      }
  });
}

$('#tableValid').bootstrapTable({
    search: true,
		pagination: true,
		pageSize: 5,
		pageList: [5, 20, 40],
    detailView: true,
    mobileResponsive:true,
    columns: [
      {field:'ID',title : 'ID',sortable: true,align:'center'},
      {field:'QUERY_SQL',title : 'Query',sortable: true, editable:true},
      {field:'DESC_QRY',title : 'Desc.Qry',sortable: true,editable:true},
      {field:'USR',title : 'Usuario',sortable: true,visible:false},
      {field:'F_ALTA',title : 'Alta',sortable: true,visible:false},
      {field:'F_MODIF',title : 'Modif.',sortable: true,visible:false},
      {field:'TBL_ORIGEN',title : 'Tbl. Origen',sortable: true,editable:true},
      {field:'ESQUEMA_TBL',title : 'Esquema Tbl.',sortable: true,editable:true},
      {field:'SECCION',title : 'Sección',sortable: true,editable:true},
      {field:'CONCEPTO',title : 'Concepto',sortable: true,visible:false},
      {field:'CRITICIDAD',title : 'Criticidad',sortable: true,editable:true},
      {field:'ACTIVO',title : 'Activo',sortable: false,formatter:toggle}
    ],
    uniqueId: 'ID',
    data:dataSet_Param,
    checkboxHeader: false,
    maintainSelected: false,
    detailFormatter: function(index, row, element) {
      var html = [];
      var hidden_columns = $(this).bootstrapTable('getHiddenColumns');
      var iRow = 0;
      html.push('<ul class="list-group" style="margin-bottom:0px;">');
      $.each(row, function (key, value) {
          var visible = hidden_columns[0].columns[0][iRow].visible;
          var title = hidden_columns[0].columns[0][iRow].title;
          if(!visible){
            html.push('<li class="list-group-item"><span class="glyphicon glyphicon-asterisk" aria-hidden="true" style="color:#337ab7"></span> <b>' + title + ':</b> ' + value +'</li>');
          }
          iRow++
      });
      html.push('</ul>');

      return html;
    },
    formatShowingRows: function (pageFrom, pageTo, totalRows) {
        return 'Mostrando ' + pageFrom + ' al ' + pageTo + ' de ' + totalRows + ' registros';
    },
    formatRecordsPerPage: function (pageNumber) {
    	return pageNumber + ' registros por pagina';
    },
    formatLoadingMessage: function () {
    	return 'Cargando, espere por favor...';
    },
    formatSearch: function () {
    	return 'Buscar';
    },
    formatNoMatches: function () {
    	return 'No se encontro informaci&oacute;n';
    }
});

function toggleColumns(isToggle){
  if(isToggle){
    var hidden_columns = $("#tableValid").bootstrapTable('getHiddenColumns');
    for(i = 0; i < hidden_columns.length; i++){
        $('#tableValid').bootstrapTable('showColumn',hidden_columns[i].field);
        arrColumns[i] = hidden_columns[i].field;
    }
  }else{
    for(i = 0; i < arrColumns.length; i++){
        $('#tableValid').bootstrapTable('hideColumn',arrColumns[i]);
    }
  }
}

function isToggle(){
  var data = JSON.stringify($('#tableValid').bootstrapTable('getOptions'));
  var isToggle = JSON.parse(data).cardView;
  return isToggle;
}
$('#tableValid').on('toggle.bs.table', function (cardView) {
  toggleColumns(isToggle());
});
$('#tableValid').on('post-body.bs.table', function () {
  iniValid();
});
