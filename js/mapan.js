
var obj={};
    obj={
      EM:{
        edo:'MX-MEX',
        name:'Estado de Mexico'
      },
      DF:{
        edo:'MX-DIF',
        name:'Distrito Federal'
      },
      VE:{
        edo:'MX-VER',
        name:'Veracruz'
      },
      JA:{
        edo:'MX-JAL',
        name:'Jalisco'
      },
      PU:{
        edo:'MX-PUE',
        name:'Puebla'
      },
      GU:{
        edo:'MX-GUA',
        name:'Guanajuato'
      },
      CS:{
        edo:'MX-CHP',
        name:'Chiapas'
      },
      NL:{
        edo:'MX-NLE',
        name:'Nuevo Leon'
      },
      MI:{
        edo:'MX-MIC',
        name:'Michoacan de Ocampo'
      },
      OA:{
        edo:'MX-OAX',
        name:'Oaxaca'
      },
      CU:{
        edo:'MX-CHH',
        name:'Chihuahua'
      },
      GO:{
        edo:'MX-GRO',
        name:'Guerrero'
      },
      TM:{
        edo:'MX-TAM',
        name:'Tamaulipas'
      },
      BN:{
        edo:'MX-BCN',
        name:'Baja California Norte'
      },
      SI:{
        edo:'MX-SIN',
        name:'Sinaloa'
      },
      CH:{
        edo:'MX-COA',
        name:'Cohahulia de Zaragoza'
      },
      SO:{
        edo:'MX-SON',
        name:'Sonora'
      },
      HI:{
        edo:'MX-HID',
        name:'Hidalgo'
      },
      SL:{
        edo:'MX-SLP',
        name:'San Luis Potosi'
      },
      TA:{
        edo:'MX-TAB',
        name:'Tabasco'
      },
      YU:{
        edo:'MX-YUC',
        name:'Yucatan'
      },
      QR:{
        edo:'MX-QUE',
        name:'Queretaro de Arteaga'
      },
      MO:{
        edo:'MX-MOR',
        name:'Morelos'
      },
      DU:{
        edo:'MX-DUR',
        name:'Durango'
      },
      ZA:{
        edo:'MX-ZAC',
        name:'Zacatecas'
      },
      QU:{
        edo:'MX-ROO',
        name:'Quintana Roo'
      },
      AG:{
        edo:'MX-AGU',
        name:'Aguascalientes'
      },
      TL:{
        edo:'MX-TLA',
        name:'Tlaxcala'
      },
      NA:{
        edo:'MX-NAY',
        name:'Nayarit'
      },
      CA:{
        edo:'MX-CAM',
        name:'Campeche'
      },
      BS:{
        edo:'MX-BCS',
        name:'Baja California Sur'
      },
      CO:{
        edo:'MX-COL',
        name:'Colima'
      }
    };

var atm = DB.indicadoresATM;
var i,a,entidad;
var catalogos = [];
var periodoSeleccioando = '201707';
for(i in atm){
  entidad = i;
  anios   = atm[i];
  for(var a in anios){
    if(periodoSeleccioando == a){

      var des =anios[periodoSeleccioando].desviacion;
      var a = parseFloat(des);
      obj[entidad]['desviacion'] = a;

    }
  }

};

var mapa_tGET = $.map(obj, function(el, i) {
  return [[el.edo,el.name, el.desviacion]];
});

console.log(mapa_tGET);

//Cargar el API de visualización y el paquete GeoChart.
 google.load('visualization', '1', {'packages': ['geochart']});
 //una devolución de llamada que se ejecutará cuando se carga el API de visualización de Google.
 google.setOnLoadCallback(drawRegionsMap);
// se crea un arreglo, donde se indica que la primera linea como se va a particionar el mapa, nombre del estado y la desviacion.
function drawRegionsMap() {
var data = new google.visualization.DataTable();
    data.addColumn('string', 'ID');
   data.addColumn('string', 'Estado');
   data.addColumn('number', 'Desviacion');
   data.addRows(
     mapa_tGET
   );

var options =
{
    region: 'MX',
    resolution: 'provinces',
    title:"Republica Mexicana",
    colorAxis: {
      values:[0,5,100],
      colors: [
         'rgb(0,255,0)',
         'rgb(231, 132, 3)',
         'rgb(243, 61, 16)'
       ]
     },
    backgroundColor: '#81d4fa',
    datalessRegionColor: '#FFFFFF',
    defaultColor: '#FFFFFF'
        };
var chart = new google.visualization.GeoChart(document.getElementById("mapa"));
chart.draw(data, options);
};
