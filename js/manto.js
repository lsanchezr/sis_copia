var max;
$( "#datepicker" ).datepicker({
  beforeShowDay: function(d) {
    var  existsDate = false;
    var dateCalendar = $.datepicker.formatDate("mm/dd/yy", d);
    $.each(DB.logs, function (keyDate, objDate) {
      var keyDateFormat = $.datepicker.formatDate("mm/dd/yy",$.datepicker.parseDate('m-dd-yy', keyDate));
      if(dateCalendar == keyDateFormat){
        existsDate = true;
      }
    });
    if (existsDate) {
        return [true, "" ];

    } else {
        return [false, "" ];
    }
    existsDate = false;
  }
});

var colsManto = [
  {title : 'name',width: '350px'},
  {title : 'visits'},
  {title : 'mail'},
  {title : 'Date'},
  {title : 'last'},
  {title : 'first'}
];

var tableManto = $('#table_manto').DataTable({
  bPaginate : false,
  sPaginationType: 'first_last_numbers',
  columns   : colsManto,
  data      : [],
  dom       : 'Bfrtip',
  select    : 'single',
  altEditor : true,
  order     : [[ 0, 'asc' ]],
  iDisplayLength: 10,
  buttons   : [],
  bDestroy  : true,
  bAutoWidth: false,
  searching : false,
  language : lenguaje
});

function js_buscar(){
  var date = $.datepicker.formatDate("m-dd-yy", $('#datepicker').datepicker('getDate'));
  getLogDate(date);
}

function js_limpiar(){
  $('#datepicker').val("");
  getLogDate('');
}

function getMaxDate(){
  var maxDate = null;
  $.each(DB.logs, function (keyDate, objDate) {
      var keyDateFormat = $.datepicker.formatDate("mm/dd/yy",$.datepicker.parseDate('m-dd-yy', keyDate));
      var keyDateValue = $.datepicker.formatDate("m-dd-yy",$.datepicker.parseDate('m-dd-yy', keyDate));

      if(maxDate != null){
        if($.datepicker.parseDate('m-dd-yy', keyDate).getTime() > $.datepicker.parseDate('m-dd-yy', maxDate).getTime()){
          maxDate = keyDate;
          max = keyDateFormat;
        }
      }else{
        maxDate = keyDate;
        max = keyDateFormat;
      }
  });
}

function getLogDate(date){

  tableManto.clear().draw(false);

  $.each(DB.logs, function (keyDate, objDate) {
      var keyDateFormat = $.datepicker.formatDate("mm/dd/yy",$.datepicker.parseDate('m-dd-yy', keyDate));
      var keyDateValue = $.datepicker.formatDate("m-dd-yy",$.datepicker.parseDate('m-dd-yy', keyDate));

      if(date == ''){
        $.each(objDate, function (key, objUser) {
          tableManto.row.add([objUser.name,objUser.visits,objUser.mail,keyDateFormat,objUser.last,objUser.first]).draw(false);
        });
      }else{
        if(keyDateValue == date){
          $.each(objDate, function (key, objUser) {
            tableManto.row.add([objUser.name,objUser.visits,objUser.mail,keyDateFormat,objUser.last,objUser.first]).draw(false);
          });
        }
      }

  });
}
getMaxDate();
$("#datepicker").datepicker( "setDate" , max);
js_buscar();
