var DB = {};
DB = {
  nombre : 'Liliana',
  pate   : 'Sanchez',
  mate   : 'Romero',
  pelis  : {},
  logs   : {
  	"6-12-2017": {
  		"56": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 135,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "9:39:10 PM",
  			"first": "7:40:31 AM"
  		},
  		"57": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 36,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "5:28:43 PM",
  			"first": "10:16:32 AM"
  		},
  		"58": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 7,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "5:14:08 PM",
  			"first": "12:34:31 AM"
  		}
  	},
  	"7-23-2017": {
  		"143": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 96,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "7:24:20 PM",
  			"first": "8:38:14 AM"
  		}
  	},
  	"6-18-2017": {
  		"71": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 1,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "12:19:33 AM",
  			"first": "12:19:33 AM"
  		}
  	},
  	"6-26-2017": {
  		"86": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 23,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "3:50:52 PM",
  			"first": "9:10:43 AM"
  		},
  		"87": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 29,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "5:52:52 PM",
  			"first": "11:56:22 AM"
  		}
  	},
  	"5-23-2017": {
  		"9": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": "304",
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:57:22 PM",
  			"first": "8:15:19 AM"
  		},
  		"10": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": "32",
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "5:52:36 PM",
  			"first": "12:09:40 AM"
  		},
  		"11": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": "13",
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "2:00:12 PM",
  			"first": "12:11:30 AM"
  		}
  	},
  	"7-31-2017": {
  		"163": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 88,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "3:55:06 PM",
  			"first": "8:02:53 AM"
  		},
  		"164": {
  			"name": "TERESA NATALIA AMMLER CASTELLANOS",
  			"visits": 11,
  			"mail": "teresa.ammler@bbva.com",
  			"last": "1:20:46 PM",
  			"first": "10:13:16 AM"
  		},
  		"165": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 3,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "3:09:32 PM",
  			"first": "11:43:18 AM"
  		},
  		"166": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 3,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "4:31:30 PM",
  			"first": "4:31:19 PM"
  		}
  	},
  	"6-5-2017": {
  		"40": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 148,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:27:34 PM",
  			"first": "7:17:16 AM"
  		},
  		"41": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 2,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "12:09:17 AM",
  			"first": "10:06:55 AM"
  		}
  	},
  	"7-5-2017": {
  		"98": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 35,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "1:10:06 PM",
  			"first": "7:59:03 AM"
  		},
  		"99": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 18,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "3:23:49 PM",
  			"first": "10:35:05 AM"
  		},
  		"100": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 6,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "11:07:18 AM",
  			"first": "10:52:40 AM"
  		},
  		"101": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 1,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "4:23:32 PM",
  			"first": "4:23:32 PM"
  		}
  	},
  	"6-20-2017": {
  		"75": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 261,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "9:06:35 PM",
  			"first": "8:27:30 AM"
  		},
  		"76": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 45,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "7:36:45 PM",
  			"first": "10:39:30 AM"
  		},
  		"77": {
  			"name": "PELAGIO ANTONIO GARCIA TAPIA",
  			"visits": 40,
  			"mail": "p.garcia3@bbva.com",
  			"last": "8:05:55 PM",
  			"first": "6:22:54 PM"
  		}
  	},
  	"7-15-2017": {
  		"128": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 4,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "9:32:20 PM",
  			"first": "12:28:13 AM"
  		}
  	},
  	"7-28-2017": {
  		"158": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 9,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "9:44:24 AM",
  			"first": "8:46:09 AM"
  		},
  		"159": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 3,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "2:27:36 PM",
  			"first": "9:11:17 AM"
  		},
  		"160": {
  			"name": "PELAGIO ANTONIO GARCIA TAPIA",
  			"visits": 16,
  			"mail": "p.garcia3@bbva.com",
  			"last": "4:41:11 PM",
  			"first": "3:40:34 PM"
  		},
  		"161": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 4,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "4:41:19 PM",
  			"first": "4:40:33 PM"
  		}
  	},
  	"6-17-2017": {
  		"70": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 13,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:58:45 PM",
  			"first": "9:44:20 AM"
  		}
  	},
  	"7-4-2017": {
  		"95": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 13,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "5:24:52 PM",
  			"first": "9:08:21 AM"
  		},
  		"96": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 43,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "12:53:20 AM",
  			"first": "9:24:27 AM"
  		},
  		"97": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 1,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "5:13:07 PM",
  			"first": "5:13:07 PM"
  		}
  	},
  	"5-31-2017": {
  		"29": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 80,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "7:26:04 PM",
  			"first": "7:00:01 AM"
  		},
  		"30": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 143,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "6:41:36 PM",
  			"first": "12:27:51 AM"
  		},
  		"31": {
  			"name": "PELAGIO ANTONIO GARCIA TAPIA",
  			"visits": 12,
  			"mail": "p.garcia3@bbva.com",
  			"last": "6:45:02 PM",
  			"first": "5:30:59 PM"
  		}
  	},
  	"6-11-2017": {
  		"54": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 146,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:42:50 PM",
  			"first": "12:00:13 AM"
  		},
  		"55": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 1,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "10:09:29 AM",
  			"first": "10:09:29 AM"
  		}
  	},
  	"7-30-2017": {
  		"162": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 29,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "9:35:34 PM",
  			"first": "5:53:54 PM"
  		}
  	},
  	"5-29-2017": {
  		"24": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 213,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:00:34 PM",
  			"first": "8:49:35 AM"
  		},
  		"25": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 64,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "4:03:52 PM",
  			"first": "9:59:19 AM"
  		}
  	},
  	"7-14-2017": {
  		"123": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 120,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "9:04:42 PM",
  			"first": "12:02:53 AM"
  		},
  		"124": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 5,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "12:14:56 AM",
  			"first": "9:05:32 AM"
  		},
  		"125": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 28,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "10:11:40 PM",
  			"first": "10:36:20 AM"
  		},
  		"126": {
  			"name": "PELAGIO ANTONIO GARCIA TAPIA",
  			"visits": 13,
  			"mail": "p.garcia3@bbva.com",
  			"last": "6:51:52 PM",
  			"first": "12:23:28 AM"
  		},
  		"127": {
  			"name": "JOSELYN ALEXANDRA RUIZ ANGLES",
  			"visits": 1,
  			"mail": "joselynalexandra.ruiz.contractor@bbva.com",
  			"last": "3:40:51 PM",
  			"first": "3:40:50 PM"
  		}
  	},
  	"7-22-2017": {
  		"142": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 1,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:13:17 AM",
  			"first": "10:13:16 AM"
  		}
  	},
  	"8-3-2017": {
  		"174": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 1,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "10:23:59 AM",
  			"first": "10:23:59 AM"
  		},
  		"175": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 1,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "3:33:54 PM",
  			"first": "3:33:54 PM"
  		},
  		"176": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 1,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "3:34:54 PM",
  			"first": "3:34:54 PM"
  		}
  	},
  	"5-22-2017": {
  		"7": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": "200",
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:08:22 PM",
  			"first": "7:41:33 AM"
  		},
  		"8": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": "8",
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "5:26:26 PM",
  			"first": "4:01:01 PM"
  		}
  	},
  	"6-9-2017": {
  		"50": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 110,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:24:17 PM",
  			"first": "12:08:45 AM"
  		},
  		"51": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 11,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "4:39:59 PM",
  			"first": "11:03:15 AM"
  		},
  		"52": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 3,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "2:03:03 PM",
  			"first": "12:34:41 AM"
  		}
  	},
  	"6-3-2017": {
  		"39": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 9,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "8:06:18 PM",
  			"first": "12:27:23 AM"
  		}
  	},
  	"8-10-2017": {
  		"184": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 4,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:54:46 AM",
  			"first": "7:42:05 AM"
  		}
  	},
  	"5-28-2017": {
  		"23": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 221,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "7:52:36 PM",
  			"first": "12:17:07 AM"
  		}
  	},
  	"5-30-2017": {
  		"26": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 171,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:28:44 PM",
  			"first": "8:11:03 AM"
  		},
  		"27": {
  			"name": "PELAGIO ANTONIO GARCIA TAPIA",
  			"visits": 13,
  			"mail": "p.garcia3@bbva.com",
  			"last": "8:04:46 PM",
  			"first": "3:31:48 PM"
  		},
  		"28": {
  			"name": "AARON DE LA CRUZ JIMENEZ",
  			"visits": 1,
  			"mail": "a.delacruzj@bbva.com",
  			"last": "3:51:02 PM",
  			"first": "3:51:01 PM"
  		}
  	},
  	"5-17-2017": {
  		"2": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": "163",
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:32:44 PM",
  			"first": "10:40:07 AM"
  		}
  	},
  	"5-25-2017": {
  		"16": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": "240",
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "7:26:04 PM",
  			"first": "12:00:30 AM"
  		},
  		"17": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": "20",
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "5:55:04 PM",
  			"first": "10:06:47 AM"
  		},
  		"18": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": "97",
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "7:45:25 PM",
  			"first": "10:30:05 AM"
  		}
  	},
  	"6-21-2017": {
  		"78": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 23,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "6:01:26 PM",
  			"first": "7:59:46 AM"
  		},
  		"79": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 42,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "6:36:08 PM",
  			"first": "11:37:43 AM"
  		}
  	},
  	"6-24-2017": {
  		"84": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 5,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:29:07 AM",
  			"first": "10:23:00 AM"
  		}
  	},
  	"6-10-2017": {
  		"53": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 85,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:58:57 PM",
  			"first": "7:15:14 AM"
  		}
  	},
  	"6-13-2017": {
  		"59": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 128,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:56:23 PM",
  			"first": "4:30:04 AM"
  		},
  		"60": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 82,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "11:50:03 PM",
  			"first": "9:30:11 AM"
  		},
  		"61": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 29,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "5:47:04 PM",
  			"first": "12:46:46 AM"
  		}
  	},
  	"6-16-2017": {
  		"68": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 3,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "1:49:59 AM",
  			"first": "12:18:41 AM"
  		},
  		"69": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 217,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "4:35:31 PM",
  			"first": "7:45:38 AM"
  		}
  	},
  	"6-19-2017": {
  		"72": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 256,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "8:44:26 PM",
  			"first": "7:08:41 AM"
  		},
  		"73": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 112,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "8:20:48 PM",
  			"first": "10:35:35 AM"
  		},
  		"74": {
  			"name": "PELAGIO ANTONIO GARCIA TAPIA",
  			"visits": 30,
  			"mail": "p.garcia3@bbva.com",
  			"last": "8:38:39 PM",
  			"first": "6:41:21 PM"
  		}
  	},
  	"6-6-2017": {
  		"42": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 47,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "9:27:17 PM",
  			"first": "7:38:07 AM"
  		},
  		"43": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 14,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "5:40:40 PM",
  			"first": "9:12:17 AM"
  		},
  		"44": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 7,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "1:24:33 PM",
  			"first": "1:15:52 PM"
  		}
  	},
  	"6-27-2017": {
  		"88": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 4,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "9:23:55 AM",
  			"first": "8:55:27 AM"
  		},
  		"89": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 2,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:34:10 PM",
  			"first": "10:34:04 PM"
  		}
  	},
  	"8-9-2017": {
  		"183": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 5,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "2:56:17 PM",
  			"first": "9:43:38 AM"
  		}
  	},
  	"5-18-2017": {
  		"3": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": "72",
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "6:46:58 PM",
  			"first": "7:58:33 AM"
  		}
  	},
  	"7-26-2017": {
  		"152": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 85,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "8:47:38 PM",
  			"first": "8:19:33 AM"
  		},
  		"153": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 5,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "4:22:15 PM",
  			"first": "8:57:41 AM"
  		},
  		"154": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 18,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "7:59:57 PM",
  			"first": "4:00:24 PM"
  		},
  		"155": {
  			"name": "PELAGIO ANTONIO GARCIA TAPIA",
  			"visits": 31,
  			"mail": "p.garcia3@bbva.com",
  			"last": "6:46:27 PM",
  			"first": "5:31:19 PM"
  		}
  	},
  	"6-29-2017": {
  		"90": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 1,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "1:11:47 PM",
  			"first": "1:11:47 PM"
  		}
  	},
  	"7-12-2017": {
  		"117": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 75,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "9:54:51 PM",
  			"first": "7:47:47 AM"
  		},
  		"118": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 1,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "8:52:25 AM",
  			"first": "8:52:25 AM"
  		},
  		"119": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 7,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "12:27:26 AM",
  			"first": "10:27:57 AM"
  		}
  	},
  	"7-20-2017": {
  		"137": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 102,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:54:13 PM",
  			"first": "8:32:11 AM"
  		},
  		"138": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 9,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "6:03:06 PM",
  			"first": "12:45:53 AM"
  		},
  		"139": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 1,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "4:02:11 PM",
  			"first": "4:02:11 PM"
  		}
  	},
  	"6-8-2017": {
  		"48": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 141,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:59:51 PM",
  			"first": "7:00:24 AM"
  		},
  		"49": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 1,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "11:15:13 AM",
  			"first": "11:15:13 AM"
  		}
  	},
  	"8-7-2017": {
  		"177": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 8,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "3:52:34 PM",
  			"first": "8:13:41 AM"
  		},
  		"178": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 2,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "11:58:38 AM",
  			"first": "9:28:49 AM"
  		},
  		"179": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 1,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "7:43:38 PM",
  			"first": "7:43:37 PM"
  		}
  	},
  	"5-20-2017": {
  		"5": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": "114",
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:46:06 PM",
  			"first": "1:30:26 AM"
  		}
  	},
  	"8-2-2017": {
  		"171": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 4,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:53:21 AM",
  			"first": "8:51:52 AM"
  		},
  		"172": {
  			"name": "TERESA NATALIA AMMLER CASTELLANOS",
  			"visits": 5,
  			"mail": "teresa.ammler@bbva.com",
  			"last": "9:34:23 AM",
  			"first": "8:57:56 AM"
  		},
  		"173": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 4,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "12:05:34 AM",
  			"first": "12:04:52 AM"
  		}
  	},
  	"6-2-2017": {
  		"35": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 120,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:08:39 PM",
  			"first": "5:09:01 AM"
  		},
  		"36": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 4,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "9:46:26 AM",
  			"first": "9:34:13 AM"
  		},
  		"37": {
  			"name": "PELAGIO ANTONIO GARCIA TAPIA",
  			"visits": 4,
  			"mail": "p.garcia3@bbva.com",
  			"last": "11:34:04 AM",
  			"first": "11:32:08 AM"
  		},
  		"38": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 2,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "11:38:00 AM",
  			"first": "11:37:20 AM"
  		}
  	},
  	"6-23-2017": {
  		"82": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 24,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "5:44:24 PM",
  			"first": "9:29:17 AM"
  		},
  		"83": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 9,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "12:44:42 AM",
  			"first": "11:04:31 AM"
  		}
  	},
  	"6-15-2017": {
  		"65": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 202,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:15:48 PM",
  			"first": "6:58:59 AM"
  		},
  		"66": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 65,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "6:41:39 PM",
  			"first": "10:31:04 AM"
  		},
  		"67": {
  			"name": "PELAGIO ANTONIO GARCIA TAPIA",
  			"visits": 12,
  			"mail": "p.garcia3@bbva.com",
  			"last": "5:05:26 PM",
  			"first": "4:18:38 PM"
  		}
  	},
  	"7-18-2017": {
  		"132": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 160,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "8:15:19 PM",
  			"first": "8:33:53 AM"
  		},
  		"133": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 3,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "11:46:29 AM",
  			"first": "11:39:38 AM"
  		}
  	},
  	"6-1-2017": {
  		"32": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 182,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "8:53:01 PM",
  			"first": "7:26:59 AM"
  		},
  		"33": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 4,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "6:06:30 PM",
  			"first": "10:06:10 AM"
  		},
  		"34": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 11,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "6:32:59 PM",
  			"first": "3:54:33 PM"
  		}
  	},
  	"7-11-2017": {
  		"114": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 242,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:57:47 PM",
  			"first": "12:10:10 AM"
  		},
  		"115": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 24,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "4:12:54 PM",
  			"first": "8:22:33 AM"
  		},
  		"116": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 21,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "8:13:42 PM",
  			"first": "9:05:48 AM"
  		}
  	},
  	"7-17-2017": {
  		"129": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 74,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "1:15:17 PM",
  			"first": "8:20:16 AM"
  		},
  		"130": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 5,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "9:44:45 AM",
  			"first": "9:40:33 AM"
  		},
  		"131": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 2,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "2:47:57 PM",
  			"first": "11:10:55 AM"
  		}
  	},
  	"6-14-2017": {
  		"62": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 131,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "3:25:14 PM",
  			"first": "12:00:09 AM"
  		},
  		"63": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 52,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "5:35:12 PM",
  			"first": "12:14:26 AM"
  		},
  		"64": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 8,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "9:05:43 AM",
  			"first": "8:28:26 AM"
  		}
  	},
  	"6-7-2017": {
  		"45": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 23,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "10:42:41 PM",
  			"first": "8:56:40 AM"
  		},
  		"46": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 1,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "9:58:27 AM",
  			"first": "9:58:27 AM"
  		},
  		"47": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 7,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "6:27:27 PM",
  			"first": "10:57:58 AM"
  		}
  	},
  	"7-7-2017": {
  		"105": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 25,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "9:36:20 PM",
  			"first": "9:14:37 AM"
  		},
  		"106": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 6,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "6:07:32 PM",
  			"first": "9:45:59 AM"
  		},
  		"107": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 16,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "12:31:30 AM",
  			"first": "9:50:47 AM"
  		},
  		"108": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 3,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "12:15:11 AM",
  			"first": "12:14:16 AM"
  		}
  	},
  	"7-8-2017": {
  		"109": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 7,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:48:44 PM",
  			"first": "11:33:06 PM"
  		}
  	},
  	"8-8-2017": {
  		"180": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 21,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "6:14:17 PM",
  			"first": "9:18:34 AM"
  		},
  		"181": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 1,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "1:27:26 PM",
  			"first": "1:27:26 PM"
  		},
  		"182": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 2,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "4:44:14 PM",
  			"first": "3:14:35 PM"
  		}
  	},
  	"7-25-2017": {
  		"147": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 60,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "7:09:47 PM",
  			"first": "9:10:25 AM"
  		},
  		"148": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 4,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "4:40:46 PM",
  			"first": "9:26:46 AM"
  		},
  		"149": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 1,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "10:01:48 AM",
  			"first": "10:01:48 AM"
  		},
  		"150": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 6,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "12:06:53 AM",
  			"first": "10:01:48 AM"
  		},
  		"151": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 11,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "7:09:59 PM",
  			"first": "11:09:45 AM"
  		}
  	},
  	"5-26-2017": {
  		"19": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 237,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:54:46 PM",
  			"first": "7:16:02 AM"
  		},
  		"20": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 6,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "1:24:23 PM",
  			"first": "9:15:37 AM"
  		},
  		"21": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 58,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "5:46:34 PM",
  			"first": "12:34:14 AM"
  		}
  	},
  	"8-1-2017": {
  		"167": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 107,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "5:47:29 PM",
  			"first": "8:25:17 AM"
  		},
  		"168": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 2,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "10:16:56 AM",
  			"first": "10:15:53 AM"
  		},
  		"169": {
  			"name": "TERESA NATALIA AMMLER CASTELLANOS",
  			"visits": 21,
  			"mail": "teresa.ammler@bbva.com",
  			"last": "5:23:07 PM",
  			"first": "12:45:49 AM"
  		},
  		"170": {
  			"name": "PELAGIO ANTONIO GARCIA TAPIA",
  			"visits": 1,
  			"mail": "p.garcia3@bbva.com",
  			"last": "12:58:50 AM",
  			"first": "12:58:50 AM"
  		}
  	},
  	"7-9-2017": {
  		"110": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 151,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:20:11 PM",
  			"first": "00:32:58 AM"
  		}
  	},
  	"6-30-2017": {
  		"91": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 3,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "7:51:51 PM",
  			"first": "7:49:49 PM"
  		}
  	},
  	"7-6-2017": {
  		"102": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 336,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "2:37:07 PM",
  			"first": "1:05:21 AM"
  		},
  		"103": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 6,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "3:37:03 PM",
  			"first": "8:27:58 AM"
  		},
  		"104": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 20,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "6:15:39 PM",
  			"first": "9:54:22 AM"
  		}
  	},
  	"6-22-2017": {
  		"80": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 76,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "5:02:52 PM",
  			"first": "10:19:14 AM"
  		},
  		"81": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 12,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "4:49:11 PM",
  			"first": "2:31:50 PM"
  		}
  	},
  	"7-3-2017": {
  		"92": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 7,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "3:39:58 PM",
  			"first": "9:28:58 AM"
  		},
  		"93": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": 16,
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "5:51:28 PM",
  			"first": "12:08:19 AM"
  		},
  		"94": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 8,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "12:25:19 AM",
  			"first": "12:20:41 AM"
  		}
  	},
  	"7-10-2017": {
  		"111": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 183,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:48:05 PM",
  			"first": "8:05:50 AM"
  		},
  		"112": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 14,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "5:40:24 PM",
  			"first": "9:28:02 AM"
  		},
  		"113": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 3,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "3:50:08 PM",
  			"first": "11:04:52 AM"
  		}
  	},
  	"6-25-2017": {
  		"85": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 71,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "2:03:16 PM",
  			"first": "10:09:31 AM"
  		}
  	},
  	"7-13-2017": {
  		"120": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 98,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:49:25 PM",
  			"first": "8:26:53 AM"
  		},
  		"121": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 6,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "12:50:09 AM",
  			"first": "8:53:06 AM"
  		},
  		"122": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 8,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "4:34:02 PM",
  			"first": "11:23:40 AM"
  		}
  	},
  	"5-24-2017": {
  		"12": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": "358",
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:56:18 PM",
  			"first": "12:00:23 AM"
  		},
  		"13": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": "21",
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "4:20:04 PM",
  			"first": "9:30:47 AM"
  		},
  		"14": {
  			"name": "ALEJANDRO TORRES RUIZ",
  			"visits": "1",
  			"mail": "alejandro.torres.ruiz.contractor@bbva.com",
  			"last": "9:30:47 AM",
  			"first": "9:30:47 AM"
  		},
  		"15": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": "42",
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "11:28:03 PM",
  			"first": "1:33:56 PM"
  		}
  	},
  	"7-21-2017": {
  		"140": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 65,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:52:37 PM",
  			"first": "10:25:38 AM"
  		},
  		"141": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 1,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "10:41:23 AM",
  			"first": "10:41:23 AM"
  		}
  	},
  	"7-24-2017": {
  		"144": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 47,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "4:28:04 PM",
  			"first": "8:33:07 AM"
  		},
  		"145": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 3,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "9:27:20 PM",
  			"first": "10:28:36 AM"
  		},
  		"146": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 7,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "12:02:11 AM",
  			"first": "11:49:00 AM"
  		}
  	},
  	"5-19-2017": {
  		"4": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": "283",
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:56:35 PM",
  			"first": "8:14:35 AM"
  		}
  	},
  	"5-27-2017": {
  		"22": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 81,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:59:14 PM",
  			"first": "12:01:44 AM"
  		}
  	},
  	"7-27-2017": {
  		"156": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 134,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "7:54:18 PM",
  			"first": "8:29:25 AM"
  		},
  		"157": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 3,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "3:28:58 PM",
  			"first": "9:41:13 AM"
  		}
  	},
  	"5-16-2017": {
  		"1": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": "46",
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "5:21:18 PM",
  			"first": "9:49:59 AM"
  		}
  	},
  	"5-21-2017": {
  		"6": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": "178",
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:59:11 PM",
  			"first": "12:10:23 AM"
  		}
  	},
  	"7-19-2017": {
  		"134": {
  			"name": "NORBERTO LOPEZ DE LARA ESPINOSA",
  			"visits": 162,
  			"mail": "norberto.lopezdelara.contractor@bbva.com",
  			"last": "11:27:25 PM",
  			"first": "6:14:58 AM"
  		},
  		"135": {
  			"name": "MANUEL SANCHEZ PAU",
  			"visits": 4,
  			"mail": "manuel.sanchez.pau.contractor@bbva.com",
  			"last": "5:26:37 PM",
  			"first": "11:18:46 AM"
  		},
  		"136": {
  			"name": "JOSE EDUARDO GALVAN GUTIERREZ",
  			"visits": 1,
  			"mail": "joseeduardo.galvan@bbva.com",
  			"last": "11:50:56 AM",
  			"first": "11:50:55 AM"
  		}
  	}
  },
  who    : {
    sspgs: {
      0:{
        "name":"Joselyn Alexandra Ruiz Angeles",
        "id":"1",
        "mail":"joselynalexandra.ruiz.contractor@bbva.com",
        "edit":"SI"
      },
      1:{
        "name":"Manuel Sanchez Pau",
        "id":"2",
        "mail":"manuel.sanchez.pau.contractor@bbva.com",
        "edit":"SI"
      },
      2:{
        "name":"Norberto Lodela",
        "id":"3",
        "mail":"norberto.lopezdelara.contractor@bbva.com",
        "edit":"SI"
      },
      3:{
        "name":"Liliana Hernandez",
        "id":"4",
        "mail":"lilisanrom@gmail.com",
        "edit":"SI"
      },
      4:{
        "name":"Leonardo Vargas",
        "id":"5",
        "mail":"leonet4@gmail.com",
        "edit":"SI"
      }
    }
  },
  dtaTblDataSet:{"1":{"id":1,"desc":"Total de Terminales Punto de Venta (TPV)","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"2":{"id":2,"desc":"Terminales sólo con lector de chip.","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"3":{"id":3,"desc":"Terminales sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"4":{"id":4,"desc":"Terminales con lector de chip y lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"5":{"id":5,"desc":"Dispositivos móviles habilitados como terminales punto de venta a través de lectores de tarjetas (TPV-DM) ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"6":{"id":6,"desc":"Aguascalientes/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"7":{"id":7,"desc":"Aguascalientes/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"8":{"id":8,"desc":"Aguascalientes/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"9":{"id":9,"desc":"Aguascalientes/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"10":{"id":10,"desc":"Aguascalientes/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"11":{"id":11,"desc":"Baja California Norte/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"12":{"id":12,"desc":"Baja California Norte/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"13":{"id":13,"desc":"Baja California Norte/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"14":{"id":14,"desc":"Baja California Norte/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"15":{"id":15,"desc":"Baja California Norte/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"16":{"id":16,"desc":"Baja California Sur/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"17":{"id":17,"desc":"Baja California Sur/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"18":{"id":18,"desc":"Baja California Sur/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"19":{"id":19,"desc":"Baja California Sur/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"20":{"id":20,"desc":"Baja California Sur/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"21":{"id":21,"desc":"Campeche /Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"22":{"id":22,"desc":"Campeche /Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"23":{"id":23,"desc":"Campeche /Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"24":{"id":24,"desc":"Campeche /Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"25":{"id":25,"desc":"Campeche /Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"26":{"id":26,"desc":"Chiapas/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"27":{"id":27,"desc":"Chiapas/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"28":{"id":28,"desc":"Chiapas/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"29":{"id":29,"desc":"Chiapas/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"30":{"id":30,"desc":"Chiapas/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"31":{"id":31,"desc":"Chihuahua/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"32":{"id":32,"desc":"Chihuahua/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"33":{"id":33,"desc":"Chihuahua/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"34":{"id":34,"desc":"Chihuahua/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"35":{"id":35,"desc":"Chihuahua/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"36":{"id":36,"desc":"Coahuila /Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"37":{"id":37,"desc":"Coahuila /Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"38":{"id":38,"desc":"Coahuila /Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"39":{"id":39,"desc":"Coahuila /Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"40":{"id":40,"desc":"Coahuila /Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"41":{"id":41,"desc":"Colima/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"42":{"id":42,"desc":"Colima/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"43":{"id":43,"desc":"Colima/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"44":{"id":44,"desc":"Colima/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"45":{"id":45,"desc":"Colima/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"46":{"id":46,"desc":"DF/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"47":{"id":47,"desc":"DF/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"48":{"id":48,"desc":"DF/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"49":{"id":49,"desc":"DF/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"50":{"id":50,"desc":"DF/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"51":{"id":51,"desc":"Durango/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"52":{"id":52,"desc":"Durango/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"53":{"id":53,"desc":"Durango/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"54":{"id":54,"desc":"Durango/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"55":{"id":55,"desc":"Durango/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"56":{"id":56,"desc":"Estado de México/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"57":{"id":57,"desc":"Estado de México/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"58":{"id":58,"desc":"Estado de México/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"59":{"id":59,"desc":"Estado de México/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"60":{"id":60,"desc":"Estado de México/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"61":{"id":61,"desc":"Guanajuato/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"62":{"id":62,"desc":"Guanajuato/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"63":{"id":63,"desc":"Guanajuato/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"64":{"id":64,"desc":"Guanajuato/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"65":{"id":65,"desc":"Guanajuato/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"66":{"id":66,"desc":"Guerrero/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"67":{"id":67,"desc":"Guerrero/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"68":{"id":68,"desc":"Guerrero/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"69":{"id":69,"desc":"Guerrero/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"70":{"id":70,"desc":"Guerrero/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"71":{"id":71,"desc":"Hidalgo/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"72":{"id":72,"desc":"Hidalgo/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"73":{"id":73,"desc":"Hidalgo/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"74":{"id":74,"desc":"Hidalgo/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"75":{"id":75,"desc":"Hidalgo/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"76":{"id":76,"desc":"Jalisco/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"77":{"id":77,"desc":"Jalisco/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"78":{"id":78,"desc":"Jalisco/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"79":{"id":79,"desc":"Jalisco/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"80":{"id":80,"desc":"Jalisco/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"81":{"id":81,"desc":"Michoacán/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"82":{"id":82,"desc":"Michoacán/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"83":{"id":83,"desc":"Michoacán/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"84":{"id":84,"desc":"Michoacán/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"85":{"id":85,"desc":"Michoacán/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"86":{"id":86,"desc":"Morelos/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"87":{"id":87,"desc":"Morelos/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"88":{"id":88,"desc":"Morelos/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"89":{"id":89,"desc":"Morelos/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"90":{"id":90,"desc":"Morelos/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"91":{"id":91,"desc":"Nayarit/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"92":{"id":92,"desc":"Nayarit/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"93":{"id":93,"desc":"Nayarit/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"94":{"id":94,"desc":"Nayarit/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"95":{"id":95,"desc":"Nayarit/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"96":{"id":96,"desc":"Nuevo leon/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"97":{"id":97,"desc":"Nuevo leon/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"98":{"id":98,"desc":"Nuevo leon/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"99":{"id":99,"desc":"Nuevo leon/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"100":{"id":100,"desc":"Nuevo leon/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"101":{"id":101,"desc":"Oaxaca/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"102":{"id":102,"desc":"Oaxaca/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"103":{"id":103,"desc":"Oaxaca/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"104":{"id":104,"desc":"Oaxaca/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"105":{"id":105,"desc":"Oaxaca/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"106":{"id":106,"desc":"Puebla/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"107":{"id":107,"desc":"Puebla/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"108":{"id":108,"desc":"Puebla/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"109":{"id":109,"desc":"Puebla/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"110":{"id":110,"desc":"Puebla/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"111":{"id":111,"desc":"Queretaro/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"112":{"id":112,"desc":"Queretaro/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"113":{"id":113,"desc":"Queretaro/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"114":{"id":114,"desc":"Queretaro/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"115":{"id":115,"desc":"Queretaro/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"116":{"id":116,"desc":"Quintana Roo/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"117":{"id":117,"desc":"Quintana Roo/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"118":{"id":118,"desc":"Quintana Roo/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"119":{"id":119,"desc":"Quintana Roo/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"120":{"id":120,"desc":"Quintana Roo/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"121":{"id":121,"desc":"San Luis Potosí/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"122":{"id":122,"desc":"San Luis Potosí/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"123":{"id":123,"desc":"San Luis Potosí/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"124":{"id":124,"desc":"San Luis Potosí/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"125":{"id":125,"desc":"San Luis Potosí/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"126":{"id":126,"desc":"Sinaloa/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"127":{"id":127,"desc":"Sinaloa/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"128":{"id":128,"desc":"Sinaloa/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"129":{"id":129,"desc":"Sinaloa/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"130":{"id":130,"desc":"Sinaloa/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"131":{"id":131,"desc":"Sonora/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"132":{"id":132,"desc":"Sonora/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"N","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"133":{"id":133,"desc":"Sonora/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"134":{"id":134,"desc":"Sonora/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"135":{"id":135,"desc":"Sonora/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"136":{"id":136,"desc":"Tabasco/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"137":{"id":137,"desc":"Tabasco/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"138":{"id":138,"desc":"Tabasco/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"139":{"id":139,"desc":"Tabasco/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"140":{"id":140,"desc":"Tabasco/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"141":{"id":141,"desc":"Tamaulipas/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"142":{"id":142,"desc":"Tamaulipas/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"143":{"id":143,"desc":"Tamaulipas/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"144":{"id":144,"desc":"Tamaulipas/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"145":{"id":145,"desc":"Tamaulipas/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"146":{"id":146,"desc":"Tlaxcala/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"147":{"id":147,"desc":"Tlaxcala/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"148":{"id":148,"desc":"Tlaxcala/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"149":{"id":149,"desc":"Tlaxcala/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"150":{"id":150,"desc":"Tlaxcala/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"151":{"id":151,"desc":"Veracruz/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"152":{"id":152,"desc":"Veracruz/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"153":{"id":153,"desc":"Veracruz/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"154":{"id":154,"desc":"Veracruz/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"155":{"id":155,"desc":"Veracruz/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"156":{"id":156,"desc":"Yucatán/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"157":{"id":157,"desc":"Yucatán/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"158":{"id":158,"desc":"Yucatán/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"159":{"id":159,"desc":"Yucatán/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"160":{"id":160,"desc":"Yucatán/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"161":{"id":161,"desc":"Zacatecas/Cajeros Automáticos en sucursal sólo con lector de banda magnética ","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"162":{"id":162,"desc":"Zacatecas/Cajeros Automáticos en sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"163":{"id":163,"desc":"Zacatecas/Cajeros Automáticos fuera de sucursal sólo con lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"164":{"id":164,"desc":"Zacatecas/Cajeros Automáticos fuera de sucursal con lector de chip y lector de banda magnética","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0},"165":{"id":165,"desc":"Zacatecas/Total de Cajeros Automáticos","edo":"Act","c2val":"CD_ATM_TPV","t2val":"TDRR282_GEOLOCALIZA","nWrkFlw":"WF_TPV_PTE_PRUEBA","codWrkFlw":1011,"crit":"S","cond":"Hacer un COUNT(DISTINCT(CD_ATM_TPV))  DE LA TABLA TDRR129_COMERCIO DONDE CD_ESTADO = 'CODIGO DEL ESTADO' AND CD_ARCHIVO_ORIGEN = 'COMERCIOS'  AND CD_PERIODO IN ('201701','201702','201703') DE LA TABLA TDRR282_GEOLOCALIZA","fInsRull":"(calculado)","lstMd":"-","usrMod":"","umbLim":0}},
  data_parametria :{"1":{"ID":"1","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"2":{"ID":"2","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"3":{"ID":"3","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"4":{"ID":"4","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"5":{"ID":"5","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"6":{"ID":"6","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"7":{"ID":"7","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"8":{"ID":"8","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"9":{"ID":"9","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"10":{"ID":"10","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"11":{"ID":"11","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"12":{"ID":"12","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"13":{"ID":"13","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"14":{"ID":"14","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"15":{"ID":"15","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"16":{"ID":"16","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"17":{"ID":"17","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"18":{"ID":"18","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"0"},"19":{"ID":"19","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"20":{"ID":"20","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"21":{"ID":"21","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"22":{"ID":"22","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"23":{"ID":"23","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"24":{"ID":"24","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"25":{"ID":"25","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"26":{"ID":"26","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"27":{"ID":"27","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"28":{"ID":"28","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"29":{"ID":"29","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"30":{"ID":"30","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"31":{"ID":"31","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"32":{"ID":"32","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"33":{"ID":"33","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"34":{"ID":"34","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"35":{"ID":"35","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"36":{"ID":"36","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"37":{"ID":"37","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"38":{"ID":"38","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"39":{"ID":"39","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"40":{"ID":"40","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"41":{"ID":"41","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"42":{"ID":"42","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"43":{"ID":"43","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"44":{"ID":"44","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"45":{"ID":"45","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"46":{"ID":"46","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"47":{"ID":"47","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"48":{"ID":"48","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"49":{"ID":"49","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"50":{"ID":"50","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"51":{"ID":"51","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"52":{"ID":"52","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"53":{"ID":"53","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"54":{"ID":"54","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"55":{"ID":"55","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"56":{"ID":"56","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"57":{"ID":"57","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"58":{"ID":"58","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"59":{"ID":"59","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"60":{"ID":"60","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"61":{"ID":"61","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"62":{"ID":"62","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"63":{"ID":"63","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"64":{"ID":"64","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"65":{"ID":"65","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"66":{"ID":"66","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"67":{"ID":"67","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"68":{"ID":"68","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"69":{"ID":"69","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"70":{"ID":"70","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"71":{"ID":"71","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"72":{"ID":"72","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"73":{"ID":"73","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"74":{"ID":"74","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"75":{"ID":"75","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"76":{"ID":"76","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"77":{"ID":"77","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"78":{"ID":"78","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"79":{"ID":"79","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"80":{"ID":"80","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"81":{"ID":"81","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"82":{"ID":"82","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"83":{"ID":"83","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"84":{"ID":"84","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"85":{"ID":"85","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"86":{"ID":"86","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"87":{"ID":"87","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"88":{"ID":"88","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"89":{"ID":"89","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"90":{"ID":"90","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"91":{"ID":"91","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"92":{"ID":"92","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"93":{"ID":"93","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"94":{"ID":"94","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"95":{"ID":"95","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"96":{"ID":"96","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"},"97":{"ID":"97","QUERY_SQL":"SELECT TO_ATM FROM ZREG_FACT.TDRR852_ATM_VERTICAL\nWHERE CD_PERIODO='201706'\nAND CD_LOC_CAJERO='SUC'\nAND CD_ESTADO='AG';","DESC_QRY":"NUMERO DE CAJEROS EN SUCURSAL EN AGS","USR":"karen","F_ALTA":"8/17/2017","F_MODIF":"8/22/2017","TBL_ORIGEN":"tdrr282_geolocaliza","ESQUEMA_TBL":"zreg_ODS","SECCION":"Tarjetas","CONCEPTO":"Distribución de Cajeros Automáticos","CRITICIDAD":"Normal","ACTIVO":"1"}},
  dataSet: [
    [ 'Tiger Nixon', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800',' ',' ',' ',' ',' ',' ',' '],
    [ 'Garrett Winters', 'Accountant', 'Tokyo', '8422', '2011/07/25', '$170,750',' ',' ',' ',' ',' ',' ',' '],
    [ 'Ashton Cox', 'Junior Technical Author', 'San Francisco', '1562', '2009/01/12', '$86,000',' ',' ',' ',' ',' ',' ',' '],
    [ 'Cedric Kelly', 'Senior Javascript Developer', 'Edinburgh', '6224', '2012/03/29', '$433,060',' ',' ',' ',' ',' ',' ',' '],
    [ 'Airi Satou', 'Accountant', 'Tokyo', '5407', '2008/11/28', '$162,700',' ',' ',' ',' ',' ',' ',' '],
    [ 'Brielle Williamson', 'Integration Specialist', 'New York', '4804', '2012/12/02', '$372,000',' ',' ',' ',' ',' ',' ',' '],
    [ 'Herrod Chandler', 'Sales Assistant', 'San Francisco', '9608', '2012/08/06', '$137,500',' ',' ',' ',' ',' ',' ',' '],
    [ 'Rhona Davidson', 'Integration Specialist', 'Tokyo', '6200', '2010/10/14', '$327,900',' ',' ',' ',' ',' ',' ',' '],
    [ 'Colleen Hurst', 'Javascript Developer', 'San Francisco', '2360', '2009/09/15', '$205,500',' ',' ',' ',' ',' ',' ',' '],
    [ 'Sonya Frost', 'Software Engineer', 'Edinburgh', '1667', '2008/12/13', '$103,600',' ',' ',' ',' ',' ',' ',' '],
    [ 'Jena Gaines', 'Office Manager', 'London', '3814', '2008/12/19', '$90,560',' ',' ',' ',' ',' ',' ',' '],
    [ 'Quinn Flynn', 'Support Lead', 'Edinburgh', '9497', '2013/03/03', '$342,000',' ',' ',' ',' ',' ',' ',' '],
    [ 'Charde Marshall', 'Regional Director', 'San Francisco', '6741', '2008/10/16', '$470,600',' ',' ',' ',' ',' ',' ',' '],
    [ 'Haley Kennedy', 'Senior Marketing Designer', 'London', '3597', '2012/12/18', '$313,500',' ',' ',' ',' ',' ',' ',' '],
    [ 'Tatyana Fitzpatrick', 'Regional Director', 'London', '1965', '2010/03/17', '$385,750',' ',' ',' ',' ',' ',' ',' '],
    [ 'Michael Silva', 'Marketing Designer', 'London', '1581', '2012/11/27', '$198,500',' ',' ',' ',' ',' ',' ',' '],
    [ 'Paul Byrd', 'Chief Financial Officer (CFO)', 'New York', '3059', '2010/06/09', '$725,000',' ',' ',' ',' ',' ',' ',' '],
    [ 'Gloria Little', 'Systems Administrator', 'New York', '1721', '2009/04/10', '$237,500',' ',' ',' ',' ',' ',' ',' '],
    [ 'Bradley Greer', 'Software Engineer', 'London', '2558', '2012/10/13', '$132,000',' ',' ',' ',' ',' ',' ',' '],
    [ 'Dai Rios', 'Personnel Lead', 'Edinburgh', '2290', '2012/09/26', '$217,500',' ',' ',' ',' ',' ',' ',' '],
    [ 'Jenette Caldwell', 'Development Lead', 'New York', '1937', '2011/09/03', '$345,000',' ',' ',' ',' ',' ',' ',' '],
    [ 'Yuri Berry', 'Chief Marketing Officer (CMO)', 'New York', '6154', '2009/06/25', '$675,000',' ',' ',' ',' ',' ',' ',' '],
    [ 'Caesar Vance', 'Pre-Sales Support', 'New York', '8330', '2011/12/12', '$106,450',' ',' ',' ',' ',' ',' ',' '],
    [ 'Doris Wilder', 'Sales Assistant', 'Sidney', '3023', '2010/09/20', '$85,600',' ',' ',' ',' ',' ',' ',' '],
    [ 'Angelica Ramos', 'Chief Executive Officer (CEO)', 'London', '5797', '2009/10/09', '$1,200,000',' ',' ',' ',' ',' ',' ',' '],
    [ 'Gavin Joyce', 'Developer', 'Edinburgh', '8822', '2010/12/22', '$92,575',' ',' ',' ',' ',' ',' ',' '],
    [ 'Jennifer Chang', 'Regional Director', 'Singapore', '9239', '2010/11/14', '$357,650',' ',' ',' ',' ',' ',' ',' '],
    [ 'Brenden Wagner', 'Software Engineer', 'San Francisco', '1314', '2011/06/07', '$206,850',' ',' ',' ',' ',' ',' ',' '],
    [ 'Fiona Green', 'Chief Operating Officer (COO)', 'San Francisco', '2947', '2010/03/11', '$850,000',' ',' ',' ',' ',' ',' ',' '],
    [ 'Shou Itou', 'Regional Marketing', 'Tokyo', '8899', '2011/08/14', '$163,000',' ',' ',' ',' ',' ',' ',' '],
    [ 'Michelle House', 'Integration Specialist', 'Sidney', '2769', '2011/06/02', '$95,400',' ',' ',' ',' ',' ',' ',' '],
    [ 'Suki Burks', 'Developer', 'London', '6832', '2009/10/22', '$114,500',' ',' ',' ',' ',' ',' ',' '],
    [ 'Prescott Bartlett', 'Technical Author', 'London', '3606', '2011/05/07', '$145,000',' ',' ',' ',' ',' ',' ',' '],
    [ 'Gavin Cortez', 'Team Leader', 'San Francisco', '2860', '2008/10/26', '$235,500',' ',' ',' ',' ',' ',' ',' '],
    [ 'Martena Mccray', 'Post-Sales support', 'Edinburgh', '8240', '2011/03/09', '$324,050',' ',' ',' ',' ',' ',' ',' '],
    [ 'Unity Butler', 'Marketing Designer', 'San Francisco', '5384', '2009/12/09', '$85,675',' ',' ',' ',' ',' ',' ',' ']
  ],
  indicadores : {
    CuentasNivel4:{
      rfp:37,
      'Cuentas a la vista asociadas a nomina':10,
      'Cuentas a la vista nivel 4 en MN' :38
    },
    Tarjetas : {
      rfp:513,
      'Medios de Pago':143,
      'Distribucion TPVs':160,
      'Distribucion de Cajeros - ATM':160,
      'Operaciones en Cajeros Automaticos':50
    },
    'Sistemas y Medios para transferencias utilizados':{
      rfp:12,
      'Banca Electronica':29,
      Domiciliaciones:6,
      swift:2
    },
    'Medios de acceso a disposicion del cliente':{
      rfp:81,
      'Host to Host' :10
    },
    Cheques:{
      rfp:10
    },
    Fraudes:{
      rfp:27,
      Fraudes:26
    },
    'Operaciones en Sucursal':{
      rfp:12,
      'Operaciones en Sucursal':12
    }
  },
  indicadoresATM : {"AG":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":117},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":115},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":112},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":111}},"BN":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":330},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":326},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":321},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":316}},"BS":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":97},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":94},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":89},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":84}},"CA":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":92},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":90},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":87},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":84}},"CH":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":347},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":342},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":340},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":338}},"CO":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":71},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":70},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":67},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":66}},"CS":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":220},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":216},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":213},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":210}},"CU":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":247},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":246},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":245},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":243}},"DF":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":1615},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":1614},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":1611},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":1607}},"DU":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":116},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":113},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":108},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":105}},"EM":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":1141},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":1136},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":1131},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":1129}},"GO":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":189},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":188},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":185},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":181}},"GU":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":469},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":465},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":460},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":457}},"HI":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":203},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":201},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":199},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":196}},"JA":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":1007},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":1006},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":1004},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":1001}},"MI":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":481},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":480},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":479},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":475}},"MO":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":136},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":135},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":134},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":133}},"NA":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":110},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":107},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":105},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":103}},"NL":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":420},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":419},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":416},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":415}},"OA":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":119},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":116},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":112},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":110}},"PU":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":374},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":369},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":365},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":360}},"QR":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":125},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":122},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":119},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":118}},"QU":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":210},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":207},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":203},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":200}},"SI":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":213},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":212},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":207},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":205}},"SL":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":148},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":146},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":145},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":143}},"SO":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":307},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":305},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":304},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":302}},"TA":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":148},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":145},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":143},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":138}},"TL":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":86},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":85},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":80},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":75}},"TM":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":221},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":219},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":216},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":212}},"VE":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":464},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":462},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":460},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":456}},"YU":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":113},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":112},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":110},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":105}},"ZA":{"201707":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":109},"201706":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":107},"201705":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":104},"201704":{"FH_CARGA":"2017-02-08T08:00:00.000Z","CD_LOC_CAJERO":"SUC","TO_ATM":99}}},
  indicadoresTPV:{"AG":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":2903},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":2898},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":2895},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":2890}},"BN":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":9598},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":9597},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":9593},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":9589}},"BS":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":5253},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":5251},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":5249},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":5247}},"CA":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":2091},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":2088},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":2086},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":2081}},"CH":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":7722},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":7721},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":7716},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":7714}},"CO":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":1699},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":1697},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":1693},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":1689}},"CS":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":4757},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":4755},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":4753},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":4752}},"CU":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":7157},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":7156},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":7154},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":7151}},"DF":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":40539},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":40537},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":40533},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":40528}},"DU":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":2695},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":2691},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":2690},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":2686}},"EM":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":24682},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":24677},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":24673},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":24671}},"GO":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":4456},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":4453},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":4452},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":4447}},"GU":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":9021},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":9018},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":9013},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":9012}},"HI":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":4044},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":4041},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":4040},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":4038}},"JA":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":21260},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":21259},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":21256},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":21253}},"MI":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":6533},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":6528},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":6525},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":6524}},"MO":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":3333},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":3332},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":3327},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":3324}},"NA":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":2575},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":2573},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":2570},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":2568}},"NL":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":12911},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":12910},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":12907},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":12905}},"OA":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":3264},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":3259},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":3257},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":3254}},"PU":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":9391},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":9389},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":9385},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":9382}},"QR":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":11133},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":11128},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":11124},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":11123}},"QU":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":6048},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":6044},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":6043},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":6040}},"SI":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":6679},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":6676},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":6675},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":6673}},"SL":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":4182},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":4179},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":4176},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":4171}},"SO":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":8038},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":8033},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":8029},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":8026}},"TA":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":4431},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":4426},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":4422},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":4419}},"TL":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":1375},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":1374},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":1371},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":1369}},"TM":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":6132},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":6127},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":6122},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":6117}},"VE":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":10699},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":10695},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":10693},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":10688}},"YU":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":4951},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":4948},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":4944},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":4943}},"ZA":{"201707":{"FH_CARGA":"31/07/2017","TO_TPV":2071},"201706":{"FH_CARGA":"31/07/2017","TO_TPV":2067},"201705":{"FH_CARGA":"31/07/2017","TO_TPV":2062},"201704":{"FH_CARGA":"31/07/2017","TO_TPV":2058}}},
  table  : function(){
    var dataSet_tGet  = $.map(this.dtaTblDataSet, function(el, i) {
            return [[el.id,el.desc,el.edo,el.c2val,el.t2val,el.nWrkFlw,el.codWrkFlw,el.crit,el.cond,el.fInsRull,el.lstMd,el.usrMod,el.umbLim]];
          });
    var table;
    $('#tableGet').DataTable({
      data   : dataSet_tGet,
      columns: [
        {title : 'ID'},
        {title : 'Desc'},
        {title : 'Edo Act/InAct'},
        {title : 'Campo a Validar'},
        {title : 'Tabla a Validar'},
        {title : 'Nom. WrkFlw'},
        {title : 'Cod. WrkFlw'},
        {title : 'Criticidad'},
        {title : 'Codición'},
        {title : 'F. Insert Regla'},
        {title : 'F. ultima Modificación'},
        {title : 'Usuario Ultima Modificación'},
        {title : 'Umbral Limite'}
      ],
      language : {
        'sProcessing'    :  'Procesando...',
        'sLengthMenu'    :  'Mostrar _MENU_ registros',
        'sZeroRecords'   :  'No se encontraron resultados',
        'sEmptyTable'    :  'Ningún dato disponible en esta tabla',
        'sInfo'          :  'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
        'sInfoEmpty'     :  'Mostrando registros del 0 al 0 de un total de 0 registros',
        'sInfoFiltered'  :  '(filtrado de un total de _MAX_ registros)',
        'sInfoPostFix'   :  '',
        'sSearch'        :  'Buscar:',
        'sUrl'           :  '',
        'sInfoThousands' :  ',',
        'sLoadingRecords':  'Cargando...',
        'oPaginate'      :  {
          'sFirst'     :  'Primero',
          'sLast'      :  'Último',
          'sNext'      :  'Siguiente',
          'sPrevious'  :  'Anterior'
        },
        'oAria': {
          'sSortAscending' : ': Activar para ordenar la columna de manera ascendente',
          'sSortDescending': ': Activar para ordenar la columna de manera descendente'
        }
      }
    });
    /*

		"": "tdrr282_geolocaliza",
		"": "zreg_ODS",
		"": "Tarjetas",
		"": "Distribución de Cajeros Automáticos",
		"": "Normal",
		"": "1"
    */
    var dataSet_tGet  = $.map(this.data_parametria, function(el, i) {
      return [[el.ID,el.QUERY_SQL,el.DESC_QRY,el.USR,el.F_ALTA,el.F_MODIF,el.TBL_ORIGEN,el.ESQUEMA_TBL,el.SECCION,el.CONCEPTO,el.CRITICIDAD,el.ACTIVO]];
    });
    table = $('#tbleParametria').DataTable({
      data   : dataSet_tGet,
      columns: [
        {title : 'ID'},
        {title : 'Query'},
        {title : 'Desc.Qry'},
        {title : 'Usuario'},
        {title : 'Alta'},
        {title : 'Modif.'},
        {title : 'Tbl. Origen'},
        {title : 'Esquema Tbl.'},
        {title : 'Sección'},
        {title : 'Concepto'},
        {title : 'Criticidad'},
        {title : 'Activo'},
      ],
      altEditor : true,
      responsive: true,
      columnDefs: [
          { responsivePriority: 1, targets: 0 },
          { responsivePriority: 2, targets: -1 },
          {'width':'15px','targets': 0 },
          {'className':'dt-center','targets': [0, 3]},
          {'data-priority':[0,3,5]}
      ],
      language : {
        'sProcessing'    :  'Procesando...',
        'sLengthMenu'    :  'Mostrar _MENU_ registros',
        'sZeroRecords'   :  'No se encontraron resultados',
        'sEmptyTable'    :  'Ningún dato disponible en esta tabla',
        'sInfo'          :  'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
        'sInfoEmpty'     :  'Mostrando registros del 0 al 0 de un total de 0 registros',
        'sInfoFiltered'  :  '(filtrado de un total de _MAX_ registros)',
        'sInfoPostFix'   :  '',
        'sSearch'        :  'Buscar:',
        'sUrl'           :  '',
        'sInfoThousands' :  ',',
        'sLoadingRecords':  'Cargando...',
        'oPaginate'      :  {
          'sFirst'     :  'Primero',
          'sLast'      :  'Último',
          'sNext'      :  'Siguiente',
          'sPrevious'  :  'Anterior'
        },
        'oAria': {
          'sSortAscending' : ': Activar para ordenar la columna de manera ascendente',
          'sSortDescending': ': Activar para ordenar la columna de manera descendente'
        }
      },
      dom       : 'Bfrtip',
      select    : 'single',
      order     : [[ 0, 'asc' ]],
      iDisplayLength: 10,
      buttons   : [{
        extend  : 'selected',
        text    : 'Editar',
        name    : 'edit'
      },{
        extend  : 'selected',
        text    : 'Borrar',
        name    : 'delete'
      },{
        text    : 'Descargar TXT',
        name    : 'download'
      },{
        text    : 'Carga Masiva',
        name    : 'download'
      }],
      bDestroy : true
    });
    /*Users*/
    var sisPagsUsrs = $.map(this.who.sspgs, function(el, i) {
      return [[el.id, el.name, el.mail, el.edit]];
    });
    table = $('#dataTblUsrs').DataTable({
      "sPaginationType": "full_numbers",
      data      : sisPagsUsrs,
      columns   : [
        {title: "Id"},
        {title: "Nombre"},
        {title: "Mail"},
        {title: "Edita?"}
      ],
      columnDefs: [
        {'width':'15px','targets': 0 },
        {'className':'dt-center','targets': [0, 3]}
      ],
      dom       : 'Bfrtip',
      select    : 'single',
      responsive: true,
      altEditor : true,
      order     : [[ 1, 'asc' ]],
      iDisplayLength: 10,
      buttons   : [{
        text    : 'Nuevo usuario',
        name    : 'add'
      },{
        extend  : 'selected',
        text    : 'Editar',
        name    : 'edit'
      },{
        extend  : 'selected',
        text    : 'Eliminar',
        name    : 'delete'
      }],
      bDestroy : true
    });
  },
  imgs :{
    mapa : '<svg width="999.73236" height="679.94141" xmlns="http://www.w3.org/2000/svg"> <g> <path d="m608.3077,562.51895c-1.04542,-0.72708 -3.36326,-1.64022 -5.15076,-2.0292c-1.7875,-0.38898 -3.25,-1.07307 -3.25,-1.52021c0,-0.44714 -2.23799,-2.5197 -4.97332,-4.60568l-4.97331,-3.7927l4.10238,-2.3302c2.85964,-1.6243 4.46982,-2.02524 5.31532,-1.32354c1.61366,1.33922 2.52893,0.27421 2.52893,-2.94266c0,-1.44833 0.55123,-3.18456 1.22496,-3.85829c0.9579,-0.9579 0.96236,-1.64544 0.0205,-3.15364c-0.75985,-1.21671 -0.84289,-2.15215 -0.22496,-2.53406c0.54701,-0.33807 0.97952,-5.65719 0.97952,-12.04636c0,-10.49606 0.15395,-11.44098 1.864,-11.44098c1.05131,0 3.09359,1.77431 4.68422,4.06959c1.55113,2.23827 4.10982,4.73645 5.68598,5.55152c2.91455,1.50717 6.7658,1.07004 6.7658,-0.76795c0,-0.59894 1.19622,-0.74934 2.93047,-0.36843c2.35945,0.51822 3.15555,0.22306 4.08562,-1.51479c0.75671,-1.41393 1.80278,-1.98906 3.03276,-1.66742c1.03269,0.27006 2.40387,-0.14309 3.04708,-0.91811c0.92878,-1.11911 0.61704,-1.92108 -1.51476,-3.89676c-1.47632,-1.36821 -3.33603,-2.48765 -4.13269,-2.48765c-0.79666,0 -1.44848,-0.65266 -1.44848,-1.45035c0,-0.7977 -2.22603,-2.47157 -4.94674,-3.71972c-5.59059,-2.56473 -6.90854,-5.25642 -4.69492,-9.58856c0.77043,-1.50775 1.73149,-4.27558 2.13568,-6.15073c0.62236,-2.88731 0.37284,-3.68781 -1.62956,-5.22777c-1.31496,-1.01128 -1.77492,-1.82827 -1.03627,-1.84063c1.83351,-0.0307 9.13399,-8.02657 9.33848,-10.228c0.0917,-0.98683 0.20416,-2.58174 0.25,-3.54424c0.11441,-2.40275 3.4251,-5.5247 5.15482,-4.86094c0.77926,0.29903 1.30697,1.54542 1.17268,2.76975c-0.17122,1.561 0.71433,2.84077 2.9641,4.28362c3.80051,2.43739 3.70922,3.87 -0.29077,4.5631c-2.74571,0.47576 -2.93547,0.8194 -3.22275,5.83617c-0.27414,4.78749 -0.0194,5.57649 2.5,7.74326c3.55403,3.05657 4.68979,3.03093 7.01299,-0.15831l1.87456,-2.57336l3.45885,1.82336c1.90237,1.00284 3.62044,1.90994 3.81794,2.01577c0.1975,0.10584 -0.51221,1.45584 -1.57713,3c-2.4583,3.56461 -6.25857,15.02466 -6.07098,18.30758c0.21261,3.72073 1.49808,4.85955 7.4327,6.58479c6.0244,1.75134 6.14558,3.10546 0.36067,4.03051c-3.73397,0.59708 -5.64519,2.53879 -4.43165,4.50233c0.31856,0.51544 -0.39001,2.93927 -1.5746,5.38629c-2.69623,5.56966 -2.31678,7.68643 1.57809,8.80347c2.2314,0.63995 3.31502,1.73506 3.99314,4.03545c0.97215,3.29788 2.27455,3.70688 7.52271,2.36239c2.11854,-0.54274 2.84466,-0.19203 3.97489,1.91983c1.29731,2.42404 1.18239,2.76298 -1.85782,5.47941c-3.36449,3.00617 -4.94363,3.30759 -15.34721,2.92937c-3.29692,-0.11986 -5.92529,0.25972 -6.32973,0.9141c-0.97289,1.57418 -4.69512,-3.35972 -3.9667,-5.25796c1.6771,-4.37045 -5.7198,-2.22601 -8.08266,2.34326c-1.4625,2.82817 -1.46801,3.3404 -0.059,5.49081c1.88459,2.87624 0.53558,4.06552 -2.65313,2.33898c-3.20559,-1.73568 -9.9597,-1.65764 -11.854,0.13697c-2.13501,2.02264 -3.26759,2.14122 -5.51591,0.57752l-0.00003,0z" id="e_PU"> <title>Puebla</title> </path></g><g> <path d="m426.72561,534.36257c-1.47473,-0.77718 -2.96755,-2.31487 -3.31739,-3.4171c-0.34983,-1.10222 -1.25837,-2.00404 -2.01898,-2.00404c-0.7606,0 -1.8416,-0.7875 -2.4022,-1.75c-0.97075,-1.66667 -1.02073,-1.66667 -1.04969,0c-0.0369,2.12105 0.0885,2.11547 -4.49605,0.19991c-2.50811,-1.04796 -3.52966,-2.01978 -3.15351,-3c0.30601,-0.79745 0.008,-1.51845 -0.66223,-1.60222c-2.34223,-0.29276 -3.23903,-0.54421 -6.03372,-1.69176c-1.5483,-0.63576 -3.3483,-1.19264 -4,-1.2375c-2.37187,-0.16329 4.98605,-2.69093 11.55532,-3.96956c5.05781,-0.98444 6.89167,-1.78905 7.34694,-3.22349c0.49847,-1.57055 1.21195,-1.79805 3.99916,-1.27516c1.86585,0.35003 5.21167,0.0914 7.43516,-0.5748c5.74402,-1.72095 6.54606,-0.56903 6.19106,8.89188c-0.1581,4.21353 -0.65995,7.90211 -1.11522,8.19683c-0.45527,0.29473 -1.1249,1.48902 -1.48807,2.65399c-0.36317,1.16496 -1.43632,2.81515 -2.38478,3.66709c-1.50698,1.35363 -2.06263,1.37077 -4.4058,0.13593z" id="e_CO"> <title>Colima</title> </path></g><g> <path d="m436.90694,526.99731c0,-0.98059 0.43206,-4.06115 0.96013,-6.84567c0.75073,-3.95858 0.6377,-5.7091 -0.51825,-8.02627l-1.4784,-2.96351l-8.67811,0.24631c-7.53362,0.21382 -8.79397,0.50596 -9.55662,2.21512c-0.69482,1.55715 -2.94182,2.34587 -10.74644,3.77209c-9.11785,1.6662 -9.99174,1.67948 -11.49655,0.17466c-0.89574,-0.89573 -2.33237,-1.62861 -3.19252,-1.62861c-1.91494,0 -6.26391,-4.44046 -8.29324,-8.46772c-0.825,-1.63723 -2.59252,-3.52066 -3.92782,-4.1854c-2.46171,-1.22549 -4.97209,-4.78284 -5.03674,-7.13737c-0.0382,-1.38927 -4.04969,-7.49362 -5.28544,-8.04284c-0.4125,-0.18334 -0.75,-1.39511 -0.75,-2.69284c0,-1.29773 -0.96374,-3.99292 -2.14164,-5.98932c-2.00311,-3.39502 -2.03331,-3.7383 -0.46687,-5.30716c0.92112,-0.92254 3.75024,-2.12735 6.28695,-2.67735c2.53778,-0.55024 5.10903,-1.81595 5.71687,-2.81418c2.47791,-4.06937 9.30571,-10.68582 11.02714,-10.68582c1.01282,0 3.35028,-0.93249 5.19437,-2.0722c4.19567,-2.59307 6.45779,-1.97195 12.30036,3.37735l4.41718,4.04425l1.34874,-4.62552c0.74181,-2.54404 1.79158,-4.89921 2.33282,-5.23372c1.46394,-0.90476 1.19015,-4.42695 -0.47343,-6.09053c-1.91942,-1.91942 -0.92346,-4.71221 1.24725,-3.49742c2.33197,1.30503 5.94827,-0.72223 6.71127,-3.76227c0.5181,-2.06427 0.0878,-3.09684 -2.06036,-4.94465c-2.54374,-2.18803 -2.64339,-2.57524 -1.57793,-6.13143c1.49989,-5.00617 1.63065,-4.512 -2.36383,-8.93341l-3.50111,-3.8753l1.6016,-7.09208c1.68549,-7.4636 2.75255,-8.55997 8.40062,-8.63144c2.00495,-0.0254 2.56536,-0.60421 2.83008,-2.92312c0.18154,-1.59032 -0.22154,-3.23241 -0.89572,-3.64908c-2.18822,-1.35239 -0.18426,-4.1216 2.73284,-3.7764c2.72412,0.32236 4.62233,2.81697 2.14349,2.81697c-1.23789,0 -2.89339,4.56592 -4.48778,12.3774c-0.44366,2.17363 -0.24924,2.76548 0.79489,2.41982c1.47216,-0.48735 3.28101,-3.48917 4.91464,-8.15591c0.83692,-2.39082 1.24551,-2.65552 2.49646,-1.61732c0.95094,0.78921 1.16213,1.64834 0.57981,2.35869c-0.50378,0.61453 -1.23045,3.65894 -1.61482,6.76536l-0.69886,5.64803l3.14345,0.69042c4.00995,0.88073 6.06152,-0.76701 6.06152,-4.86839c0,-4.01745 2.37898,-5.57521 6.75,-4.41992c3.84145,1.01533 3.88429,1.35687 1.121,8.93546c-1.99576,5.47357 -2.3175,5.82419 -5.14119,5.60267c-1.69764,-0.13318 -3.20514,0.3092 -3.45433,1.01369c-0.24318,0.6875 0.27035,1.25 1.14119,1.25c0.87083,0 1.58333,0.44143 1.58333,0.98095c0,1.13376 -3.58358,2.10199 -6.5,1.75619c-1.41546,-0.16783 -1.91412,0.27433 -1.70616,1.51286c0.16161,0.9625 -0.20622,1.75 -0.81739,1.75c-0.62223,0 -0.85533,0.80627 -0.5297,1.83222c0.36,1.13425 -0.18455,2.5255 -1.42947,3.65214c-1.10605,1.00096 -2.76959,4.22647 -3.69676,7.16779c-0.92717,2.94132 -2.27858,5.34785 -3.00314,5.34785c-2.20167,0 -1.47056,2.81661 0.92878,3.57813c1.23539,0.3921 2.73835,1.38602 3.33992,2.20871c0.84738,1.15886 1.97455,1.30785 5.00384,0.66142c2.15054,-0.45891 5.93508,-0.87342 8.41008,-0.92114c15.05927,-0.29032 15.47773,-0.37594 20.33589,-4.16089c5.24684,-4.08778 6.13796,-7.72244 2.66411,-10.86623c-2.61482,-2.36638 -2.52268,-3.30473 0.45781,-4.66273c2.00452,-0.91332 3.40433,-0.71268 7.58992,1.08792c5.94625,2.558 8.66236,2.05131 13.69152,-2.55417c1.72434,-1.57906 4.56808,-4.14381 6.31943,-5.69944l3.18428,-2.82843l3.17613,3.07843c1.74687,1.69313 3.91079,3.07842 4.80871,3.07842c1.35277,0 1.47909,0.53521 0.73701,3.12269c-0.49257,1.71749 -1.69207,4.30499 -2.66556,5.75c-1.164,1.7278 -1.66301,4.02991 -1.45752,6.72405c0.28454,3.7305 0.0452,4.20747 -2.67763,5.33529c-1.69528,0.70221 -3.24138,2.23974 -3.57039,3.55061c-0.31916,1.27164 -2.21818,4.27076 -4.22005,6.66471c-5.28965,6.32568 -5.91082,8.1032 -3.90275,11.1679c1.60255,2.44582 1.57717,2.70071 -0.55643,5.58655c-1.73236,2.34315 -3.26868,3.16296 -6.82504,3.64196c-6.26268,0.84352 -10.70631,2.28967 -12.06463,3.92635c-0.62435,0.75229 -4.15957,1.87793 -7.85605,2.50143c-7.79553,1.31488 -8.29359,1.5828 -9.95182,5.3534c-1.47636,3.35704 -0.88513,4.67683 2.09208,4.67011c1.20504,-0.003 4.28895,0.74696 6.85313,1.66596c4.38668,1.57217 4.60521,1.82068 3.69842,4.20571c-0.64419,1.69436 -0.58245,4.12417 0.18624,7.3284c1.02921,4.29024 1.39069,4.73318 3.44248,4.21821c1.26089,-0.31646 2.58721,-0.0986 2.94739,0.48422c1.0623,1.71884 -3.42001,6.84912 -6.52696,7.47051c-1.57619,0.31523 -5.37212,2.61458 -8.43539,5.10965c-4.25046,3.46204 -6.12283,4.39763 -7.90546,3.95022c-1.28474,-0.32245 -3.9633,-0.13692 -5.95238,0.41229c-3.17642,0.87706 -3.61649,0.78161 -3.61649,-0.78434z" id="e_JA"> <title>Jalisco</title> </path></g><g> <path d="m527.15954,488.79938c-0.38513,-1.47276 -1.44856,-1.80183 -5.61387,-1.73719c-2.8263,0.0439 -6.10155,0.68746 -7.27834,1.43022c-1.8479,1.16634 -2.34656,1.11859 -3.65753,-0.35026c-0.83486,-0.9354 -1.67204,-3.05072 -1.86039,-4.70072c-0.18836,-1.65 -1.01747,-3.30587 -1.84247,-3.67971c-2.65216,-1.20182 -6.81412,-0.86331 -8.35714,0.67971c-2.31069,2.31068 -5.53138,1.83877 -6.82481,-1c-0.6265,-1.375 -1.40435,-2.50689 -1.72857,-2.51531c-0.32421,-0.008 -1.20484,-0.40515 -1.95694,-0.88162c-1.10704,-0.70132 -0.93123,-1.45635 0.92318,-3.96457c2.15203,-2.91077 2.1894,-3.21017 0.61747,-4.94713c-2.46464,-2.72339 -2.10207,-4.20903 2.3387,-9.58297c2.20653,-2.67021 4.27069,-5.88609 4.587,-7.14639c0.31631,-1.26029 1.84681,-2.8182 3.40111,-3.46201c3.01043,-1.24696 4.28746,-4.18476 3.36028,-7.73029c-0.34803,-1.33086 0.20709,-3.25777 1.43553,-4.98295c1.10165,-1.54713 2.16077,-3.93206 2.35359,-5.29986c0.43071,-3.05513 3.84232,-3.80653 7.05766,-1.55443c1.23087,0.86214 3.82532,1.56968 5.76545,1.57231c2.6572,0.004 4.50003,0.89791 7.46942,3.62485c2.16807,1.99104 5.24554,3.99394 6.83884,4.45089c2.44464,0.70112 3.29025,0.40842 5.41655,-1.87485c2.76717,-2.97145 8.37543,-3.76166 9.36359,-1.31935c0.30849,0.76248 3.34599,2.2413 6.75,3.28628c3.71223,1.13959 6.18909,2.45714 6.18909,3.29224c0,0.76577 0.675,2.0673 1.5,2.8923c1.33333,1.33334 1.32562,1.67439 -0.0694,3.06945c-1.15979,1.15979 -2.05619,1.30894 -3.43425,0.57143c-2.90045,-1.55227 -4.9963,-1.18332 -4.9963,0.87954c0,1.03265 -0.675,2.43775 -1.5,3.12244c-0.825,0.68469 -1.5,2.07854 -1.5,3.09744c0,1.52507 -0.53034,1.74649 -3,1.25256c-2.0018,-0.40036 -3,-0.20018 -3,0.60162c0,0.76251 -1.27049,1.09216 -3.47675,0.90208c-4.55319,-0.39228 -6.69889,2.22466 -5.85944,7.1463c0.32833,1.925 0.93633,3.95 1.35111,4.5c0.41477,0.55 1.06424,2.45059 1.44325,4.22354c0.44365,2.07529 2.44393,4.80127 5.61547,7.65276c5.44935,4.89943 6.11608,6.6237 2.56122,6.6237c-1.30083,0 -3.45058,0.8538 -4.77722,1.89734c-3.41065,2.68281 -14.90075,2.65381 -15.60504,-0.0394l-0.00005,0.00001z" id="e_GU"> <title>Guanajuato</title> </path></g><g> <path d="m553.11609,487.75058c-0.66503,-0.66503 -1.21483,-1.68165 -1.22177,-2.25915c-0.007,-0.5775 -2.44527,-3.18332 -5.4185,-5.7907c-3.6574,-3.20737 -5.63132,-5.7949 -6.10286,-8c-0.38333,-1.79262 -1.05132,-3.7093 -1.48442,-4.2593c-1.09047,-1.38481 -1.42102,-5.67469 -0.58482,-7.58968c0.43563,-0.99764 2.07118,-1.64145 4.39158,-1.72868c2.03359,-0.0764 3.84477,-0.58102 4.02485,-1.12126c0.18008,-0.54024 1.64577,-0.71858 3.2571,-0.39632c2.45933,0.49187 2.92969,0.26443 2.92969,-1.41662c0,-1.1014 0.675,-2.56275 1.5,-3.24744c0.825,-0.68469 1.5,-2.13793 1.5,-3.22943c0,-1.49783 0.42919,-1.80786 1.75,-1.26411c4.00496,1.64877 5.11492,1.5549 7.12488,-0.60253c2.10864,-2.26336 2.10884,-2.27044 0.11869,-4.12455c-2.3203,-2.16168 -2.2721,-1.9166 -1.02306,-5.20182l0.97052,-2.55265l4.67842,2.48755c5.6029,2.97909 7.38055,3.1232 7.38055,0.59832c0,-2.5887 3.39864,-6.60048 4.83805,-5.71087c0.63907,0.39497 1.16195,1.39893 1.16195,2.23104c0,0.8321 1.14579,3.46805 2.5462,5.85767l2.5462,4.34476l-2.79379,2.59055c-1.53658,1.4248 -2.94487,2.13729 -3.12953,1.58331c-0.81296,-2.43887 -3.83491,-0.81967 -5.11891,2.74276c-0.74339,2.0625 -2.40214,5.41802 -3.68612,7.45672c-1.28397,2.0387 -2.09554,4.32942 -1.80349,5.0905c0.3523,0.91807 -1.16715,2.19001 -4.51478,3.77936c-4.75392,2.25702 -5.04578,2.61511 -5.04578,6.19089c0,2.45111 -0.53126,3.99916 -1.5,4.3709c-0.825,0.31659 -1.5,1.65246 -1.5,2.96862c0,1.31615 -0.34577,2.39301 -0.76838,2.39301c-0.42261,0 -1.45349,1.12912 -2.29085,2.50915c-1.19054,1.96212 -1.78608,2.24554 -2.73162,1.3z" id="e_QR"> <title>Queretaro</title> </path></g><g> <path d="m900.2186,473.45717c-10.54845,-12.06954 -11.90657,-13.28732 -13.35583,-11.97577c-0.88732,0.80302 -3.26538,1.46003 -5.28457,1.46003l-3.67126,0l0,-6.44098c0,-3.54254 -0.45,-6.7191 -1,-7.05902c-2.42488,-1.49866 -0.9452,-6.13649 3.25,-10.18659c7.28813,-7.03606 21.5756,-12.76488 36.88093,-14.78808c2.67999,-0.35427 7.10348,-2.11967 10.5,-4.19052c3.22799,-1.9681 7.89407,-4.11994 10.36907,-4.78186c7.46066,-1.99532 25.34426,0.30074 30.24316,3.88289c1.0311,0.75398 2.0568,3.447 2.5384,6.66469c0.6716,4.48734 0.3937,6.66645 -1.6448,12.89947l-2.4529,7.5l-19.92407,15c-10.95824,8.25 -23.24992,17.3516 -27.31484,20.22577l-7.39076,5.22576l-11.74253,-13.43579z" id="e_YU"> <title>Yucatan</title> </path></g><g> <path d="m593.46581,443.40963c-1.06762,-0.80751 -2.78002,-1.4682 -3.80532,-1.4682c-1.28697,0 -2.64116,-1.6971 -4.37343,-5.48088c-1.38007,-3.01448 -2.96349,-5.76163 -3.5187,-6.10477c-1.3957,-0.86259 -5.86142,3.52584 -5.86142,5.75996c0,2.57863 -2.96945,2.29933 -6.97525,-0.65605c-3.47793,-2.56594 -6.02475,-2.07068 -6.02475,1.17157c0,1.5835 -2.24443,1.19185 -7.40364,-1.29194c-1.597,-0.76884 -3.5095,-1.39789 -4.25,-1.39789c-0.7405,0 -1.34636,-0.675 -1.34636,-1.5c0,-1.10747 -1.1586,-1.5 -4.42742,-1.5c-3.53151,0 -4.82535,0.50588 -6.39392,2.5c-2.7771,3.53051 -5.29685,3.12172 -10.22244,-1.6584c-3.62995,-3.52274 -4.9666,-4.18141 -8.74432,-4.30897c-2.94811,-0.0996 -4.88975,-0.73916 -5.72932,-1.88734c-0.90959,-1.24394 -2.00951,-1.55114 -3.87627,-1.08262c-2.92355,0.73377 -3.27217,-0.16701 -1.2062,-3.1166c2.10026,-2.99854 3.13509,-13.09627 1.53919,-15.01921c-1.06951,-1.28867 -0.99216,-2.06737 0.44743,-4.50439c1.97037,-3.33557 1.47627,-6.228 -1.64702,-9.64165c-2.20931,-2.41469 -3.73971,-2.17318 -3.73971,0.59014c0,2.12082 -5.62396,6.54651 -6.50581,5.11964c-0.98392,-1.59202 -2.49038,-1.14134 -2.53839,0.7594c-0.0268,1.06228 -0.79365,0.33191 -1.9513,-1.85851c-1.06146,-2.00844 -3.21514,-4.15031 -4.85702,-4.8304c-5.03103,-2.08392 -7.38671,-5.44775 -7.89827,-11.27846c-0.27547,-3.13978 -1.10028,-5.78549 -2.03334,-6.5223c-0.86343,-0.68181 -1.37772,-1.38051 -1.14287,-1.55266c3.02356,-2.21628 6.29152,-3.71056 8.14182,-3.72285c6.79968,-0.0452 11.01377,-2.57776 19.82229,-11.91281c8.56492,-9.07689 8.73488,-9.35305 8.20186,-13.32704c-0.50341,-3.7532 -0.38534,-4.01651 1.57159,-3.50476c2.43554,0.63691 3.74163,-0.60781 4.71745,-4.4958c0.37885,-1.50943 1.09002,-2.74441 1.5804,-2.74441c0.49037,0 1.85992,-0.96833 3.04343,-2.15184l2.15183,-2.15183l2.82127,3.40183c2.43159,2.93199 2.82497,4.27828 2.84816,9.74747c0.0206,4.86667 0.52955,7.05154 2.18358,9.37441c1.87221,2.62927 2.14296,4.29843 2.05261,12.65437c-0.1313,12.14393 0.15725,13.12559 3.8581,13.12559c1.61293,0 2.93261,-0.49878 2.93261,-1.10841c0,-1.31748 5.32179,-0.23881 5.83333,1.18235c0.18334,0.50933 1.03373,0.92606 1.88976,0.92606c1.7382,0 4.19626,2.79177 4.24511,4.82143c0.0175,0.72678 -0.6432,1.99643 -1.4682,2.82143c-1.82498,1.82498 -1.94706,4.77794 -0.25,6.047c0.6875,0.51411 4.76847,2.00815 9.06883,3.32009c6.47383,1.97501 7.96491,2.14898 8.66804,1.0113c1.30427,-2.11037 5.02971,0.80078 6.39622,4.99816c0.98203,3.01643 1.66032,3.5314 5.61691,4.26441c2.475,0.45853 7.81822,0.61274 11.87382,0.34269c6.68546,-0.44517 7.73566,-0.25155 11.25,2.07413c4.23312,2.80134 4.7051,3.7673 2.29302,4.6929c-0.87073,0.33413 -1.38154,1.16978 -1.13513,1.85699c0.65596,1.82934 -1.11225,4.74947 -2.87591,4.74947c-0.97571,0 -1.23834,0.44963 -0.73013,1.25c0.43654,0.6875 0.82272,1.475 0.85817,1.75c0.0355,0.275 0.42287,1.5525 0.86092,2.83889c0.61532,1.80701 0.31989,2.67268 -1.29916,3.8067c-2.47403,1.73288 -2.67015,4.08911 -0.58782,7.06205c1.38797,1.98161 1.34344,2.20481 -0.56045,2.80908c-1.68844,0.53589 -1.95071,1.19139 -1.42832,3.56985c0.6306,2.87108 0.57697,2.91297 -3.68955,2.88163c-2.38121,-0.0175 -5.20297,-0.6925 -6.27059,-1.5z" id="e_SL"> <title>SanLuisPotosi</title> </path></g><g> <path d="m460.44624,427.98485c-1.55638,-1.71977 -2.06196,-7.51781 -0.91597,-10.50423c0.34284,-0.89341 2.38976,-2.52555 4.54873,-3.62697c2.15896,-1.10142 4.1766,-2.65725 4.48365,-3.4574c0.30705,-0.80015 0.98481,-1.45482 1.50614,-1.45482c1.51463,0 9.65954,-3.90198 10.29662,-4.9328c1.25022,-2.02291 9.14259,7.92408 8.21183,10.34961c-0.32048,0.83516 0.46746,2.09866 1.89005,3.03077c3.05054,1.99879 3.13164,4.33627 0.18965,5.46569c-1.2375,0.47507 -3.49097,2.26393 -5.00771,3.97525c-3.24538,3.6617 -6.30211,3.94841 -12.43077,1.16595c-4.04965,-1.83857 -4.30523,-1.84208 -7.7107,-0.10587c-3.31335,1.68924 -3.6135,1.69487 -5.06152,0.0948l0,0.00002z" id="e_AG"> <title>Aguascalientes</title> </path></g><g> <path d="m622.46368,405.99054c-4.4712,-3.8698 -7.34411,-4.92577 -8.97567,-3.29911c-0.41374,0.4125 -2.17624,0.77565 -3.91666,0.80699c-1.74043,0.0313 -6.76441,0.38537 -11.16441,0.78672c-4.4,0.40135 -9.98685,0.36976 -12.41523,-0.0702c-3.82218,-0.69248 -4.5653,-1.24566 -5.53254,-4.11839c-1.23535,-3.66904 -5.03808,-7.09851 -7.90922,-7.13289c-1.30064,-0.0156 -1.67174,0.46051 -1.23866,1.5891c0.40327,1.05089 0.17962,1.44345 -0.64301,1.12863c-1.83492,-0.70222 -12.04495,-4.00173 -13.51134,-4.36637c-1.43402,-0.35659 -1.73034,-5.3736 -0.31739,-5.3736c0.51294,0 1.2132,-0.88405 1.55614,-1.96456c0.73701,-2.32212 -3.27581,-8.33113 -5.09686,-7.63233c-0.78315,0.30053 -1.19189,-0.74755 -1.19189,-3.05618c0,-3.2094 0.20775,-3.46141 2.4,-2.91119c1.32,0.3313 2.42457,0.25629 2.4546,-0.16669c0.03,-0.42298 0.16946,-2.62996 0.30987,-4.9044c0.1404,-2.27445 1.05576,-5.35705 2.03413,-6.85024c1.60488,-2.44936 2.18649,-2.65376 5.94669,-2.08988c3.53766,0.5305 4.46509,0.28107 6.13395,-1.64976c2.40253,-2.77968 2.1051,-5.14211 -1.19158,-9.46427c-1.94181,-2.54585 -2.35702,-3.93894 -1.80566,-6.05829c1.21533,-4.67159 0.88136,-8.19322 -0.97114,-10.24021c-1.71566,-1.89578 -1.68553,-1.99509 0.90395,-2.97961c1.47331,-0.56015 4.1202,-2.36951 5.88197,-4.0208c1.76177,-1.65128 3.97489,-3.00442 4.91804,-3.00696c2.02942,-0.005 3.78518,-2.91378 3.78518,-6.26991c0,-2.54435 3.51685,-5.15785 6.14441,-4.56613c1.64393,0.37021 16.48194,-10.6019 17.8865,-13.22635c1.05314,-1.9678 0.34033,-2.94224 -2.15226,-2.94224c-2.04291,0 -2.74809,-2.89966 -3.13274,-12.88168l-0.24591,-6.38169l-3.5,-0.27603c-1.925,-0.15182 -4.00279,0.13799 -4.61732,0.64402c-0.71341,0.58744 -1.57105,0.37333 -2.37245,-0.59229c-0.69031,-0.83178 -2.50187,-1.51233 -4.02569,-1.51233c-2.81337,0 -3.98454,-1.49369 -3.98454,-5.08179c0,-1.19783 -0.69289,-1.91821 -1.84501,-1.91821c-3.13195,0 -5.15499,-3.26391 -5.15499,-8.31692c0,-4.64247 -0.0142,-4.66172 -3.89821,-5.28279c-3.82271,-0.61128 -3.88081,-0.68401 -3,-3.75522c1.24348,-4.33577 1.16933,-4.64507 -1.11361,-4.64507c-1.77877,0 -1.93951,-0.45218 -1.38761,-3.90358c0.81066,-5.06958 -2.0268,-13.91256 -5.33942,-16.6404l-2.48217,-2.04398l4.07863,-2.69911c3.51625,-2.32695 4.42773,-2.54004 6.61051,-1.5455c2.45719,1.11957 3.05723,2.83552 2.65016,7.57872c-0.10602,1.23538 0.34316,3.24754 0.99818,4.47146c0.65502,1.22392 1.13511,3.71069 1.06686,5.52615c-0.0682,1.81547 0.76258,4.8795 1.84629,6.80896c1.08372,1.92946 2.00202,4.73193 2.04068,6.2277c0.0625,2.41931 0.16517,2.49876 0.92971,0.71958c0.88833,-2.06726 1.03816,-1.77295 1.4,2.75c0.055,0.6875 0.85187,1.81306 1.77082,2.50124c0.91895,0.68819 1.9672,2.60069 2.32945,4.25c0.50613,2.30439 1.20823,2.99876 3.03213,2.99876c3.16492,0 7.61694,1.96559 9.4676,4.17999c0.89216,1.06751 3.52615,2.04559 6.5,2.41363c3.52237,0.43594 5.59729,1.32013 7.02111,2.99195c1.71548,2.01429 3.22762,2.45823 10,2.93583c11.23887,0.79258 10.89765,0.70081 13.56393,3.64779c3.28368,3.62935 6.56422,4.51126 7.36743,1.98057c0.58113,-1.83099 4.39555,-3.63508 5.45201,-2.57861c1.36732,1.36732 -2.27762,15.60871 -5.74044,22.42885c-2.09441,4.125 -4.32974,9.3 -4.96741,11.5c-3.38636,11.68316 -4.19801,15.13856 -4.21194,17.9315c-0.008,1.68768 -0.45153,3.7435 -0.98469,4.5685c-0.86167,1.33333 -0.96765,1.33333 -0.95381,0c0.0646,-6.22686 2.42982,-16.9386 5.40823,-24.49312c1.95007,-4.94622 3.54558,-9.45047 3.54558,-10.00946c0,-0.55898 -0.94709,-1.60779 -2.10464,-2.3307c-1.18284,-0.73869 -1.80737,-0.83336 -1.42591,-0.21615c0.37331,0.60403 0.36435,2.52963 -0.0199,4.27913l-0.69864,3.1809l-1.78575,-2.2053c-2.23145,-2.75572 -3.57609,-2.8011 -4.27091,-0.14413c-0.32988,1.2615 0.0128,2.27293 0.88337,2.60699c0.78231,0.3002 1.42238,0.97423 1.42238,1.49785c0,0.52361 -0.41891,0.69313 -0.9309,0.3767c-0.512,-0.31644 -1.21356,-0.11799 -1.55902,0.44098c-0.34546,0.55897 -0.1158,1.01631 0.51036,1.01631c0.74813,0 0.90947,1.04263 0.47056,3.04096c-0.40648,1.85073 -0.1978,3.6074 0.53317,4.48817c0.95008,1.14476 0.89573,1.56438 -0.26006,2.00789c-1.10014,0.42217 -1.36039,1.8457 -1.05336,5.76184c0.38715,4.93802 0.32505,5.09996 -1.22761,3.20114c-1.54369,-1.88785 -1.6082,-1.6453 -1.15048,4.32545c0.43959,5.73432 1.66734,9.98289 1.66734,5.76979c0,-1.571 0.14924,-1.58886 1.55229,-0.18581c1.26307,1.26308 1.35727,2.25453 0.50558,5.32143c-0.5757,2.07303 -1.11681,5.56914 -1.20249,7.76914l-0.15577,4l-0.69961,-4.5c-0.49234,-3.16682 -0.74411,-0.75539 -0.84981,8.13953c-0.0947,7.97415 0.43479,15.7233 1.43465,20.99412c1.32798,7.00056 1.38462,9.29805 0.34947,14.17592c-0.70816,3.33698 -1.55124,5.31024 -1.97552,4.62375c-0.708,-1.14556 -0.92922,-0.69415 -2.60552,5.31668c-0.26843,0.9625 -0.008,1.75 0.57934,1.75c0.58707,0 1.13355,-0.7875 1.21441,-1.75c0.0809,-0.9625 0.45312,0.95 0.82723,4.25c0.37412,3.3 0.58586,6.1346 0.47054,6.29911c-0.11532,0.16451 -2.31494,-1.52299 -4.88805,-3.75l0,0.00001z" id="e_TM"> <title>Tamaulipas</title> </path></g><g> <path d="m406.76855,399.93663c-0.90111,-0.53331 -1.94929,-2.2084 -2.32928,-3.72241c-0.37999,-1.51402 -1.21772,-3.08787 -1.86161,-3.49746c-1.959,-1.24613 -5.60333,-0.86559 -8.23711,0.86013c-3.33613,2.18591 -4.32279,0.93993 -1.57328,-1.98678c1.81237,-1.92919 2.10463,-3.1217 1.6533,-6.74606c-0.30152,-2.42144 -0.77016,-5.10943 -1.0414,-5.9733c-0.56857,-1.8108 -10.5063,-5.23721 -12.7228,-4.38666c-0.94792,0.36375 -1.68146,-0.17475 -2.02439,-1.4861c-0.32494,-1.2426 -1.35977,-2.05656 -2.61457,-2.05656c-1.48367,0 -2.79014,-1.40776 -4.57461,-4.92923c-1.37381,-2.71108 -2.95639,-5.21264 -3.51684,-5.55902c-0.56046,-0.34638 -1.01902,-1.8531 -1.01902,-3.34826c0,-1.49516 -0.64399,-3.6379 -1.43109,-4.76164c-0.7871,-1.12374 -1.72505,-4.9162 -2.08434,-8.42767c-0.7231,-7.06707 -2.95737,-12.23042 -6.87432,-15.88634c-2.40591,-2.24559 -2.86653,-2.32763 -6.67018,-1.18803c-4.35735,1.30549 -6.94007,0.35448 -6.94007,-2.5555c0,-2.89974 -5.36626,-11.96807 -9.11561,-15.40429c-2.13641,-1.95798 -3.88439,-4.29931 -3.88439,-5.20294c0,-0.90364 -0.50616,-2.75388 -1.12481,-4.11165c-0.74696,-1.63941 -0.88476,-5.3503 -0.41023,-11.04706l0.71458,-8.57837l5.36318,0c5.28103,0 10.25166,-1.47931 11.69197,-3.47965c0.40408,-0.56119 0.74158,-3.08811 0.75,-5.61536c0.011,-3.30265 0.57463,-5.10119 2.00398,-6.39474c1.59002,-1.43895 1.86509,-2.57256 1.37219,-5.65499c-0.55796,-3.48935 -0.40828,-3.85526 1.57707,-3.85526c1.20646,0 3.11192,-0.4915 4.23437,-1.09221c1.62488,-0.86961 1.91565,-1.71804 1.42668,-4.16289c-0.64313,-3.21563 1.44392,-6.7449 3.98862,-6.7449c0.70269,0 1.57631,-0.94108 1.94137,-2.09128c0.63902,-2.01338 0.77385,-1.97867 3.61957,0.93201c1.6257,1.6628 4.28759,3.31579 5.91531,3.67329c1.66917,0.36662 4.07055,2.1067 5.50785,3.9911c3.03839,3.98353 8.20647,6.23654 9.08058,3.95865c0.66976,-1.74537 3.48927,-1.92222 5.09209,-0.3194c0.85915,0.85915 1.86009,0.84789 4.01612,-0.0452c3.59454,-1.48891 7.7882,-0.0965 8.73983,2.9018c1.16638,3.67493 4.57739,1.99579 9.11818,-4.4886c3.41215,-4.87266 4.8749,-6.12929 7.85559,-6.74858c2.11057,-0.43851 4.45338,-0.33783 5.52856,0.23759c1.02623,0.54922 3.18017,0.99858 4.78655,0.99858c2.23025,0 4.10742,1.25479 7.94078,5.30801c2.76105,2.91941 5.79322,6.80307 6.73815,8.63036c1.62356,3.13962 1.62366,3.53166 0.002,7.1282c-1.25215,2.77677 -1.53281,5.02875 -1.03799,8.3285c0.56576,3.77271 0.25453,5.28153 -1.87689,9.09927c-2.71508,4.86318 -3.229,7.97113 -1.49526,9.04264c0.67488,0.4171 0.43971,1.10847 -0.64746,1.90343c-2.2081,1.6146 -1.49242,4.43175 2.93664,11.55959c5.21044,8.38534 7.03283,10 11.28651,10c2.05106,0 4.52664,0.74177 5.54186,1.66054c2.26426,2.04912 2.42644,1.88765 4.76023,-4.73937c1.03881,-2.94981 2.26531,-5.48697 2.72556,-5.63812c1.52666,-0.5014 4.75282,9.1212 5.15946,15.38895l0.40042,6.172l-4.36153,0.62669c-2.39884,0.34468 -6.83653,0.35634 -9.86153,0.0259c-16.24882,-1.77493 -17.96299,-1.7595 -18.67969,0.16813c-0.8734,2.34909 -9.80209,11.33527 -11.26275,11.33527c-1.57901,0 -2.89774,4.02217 -3.2522,9.9193c-0.19865,3.30494 -0.75315,5.08038 -1.58674,5.08051c-0.70477,0.0001 -1.58288,0.78769 -1.95138,1.75019c-0.36849,0.9625 -1.49255,2.425 -2.49791,3.25c-2.46117,2.01964 -3.95365,10.10525 -4.46242,24.17538c-0.26619,7.3617 -0.86272,12.02976 -1.61454,12.63453c-1.92288,1.54677 -7.05586,2.23573 -8.83076,1.18529l-0.00015,0.00005z" id="e_DU"> <title>Durango</title> </path></g><g> <path d="m539.81302,374.69143c-0.0516,-0.6875 -0.0141,-5.44609 0.0835,-10.57464c0.16374,-8.60613 -0.0303,-9.63845 -2.5177,-13.39723c-2.33597,-3.52989 -2.63274,-4.8192 -2.22707,-9.67536c0.43099,-5.15927 0.21207,-5.9194 -2.76564,-9.60277c-2.80775,-3.47312 -3.20051,-4.6586 -2.98175,-9c0.13856,-2.75 0.56752,-5.75115 0.95325,-6.66921c0.40839,-0.97202 -0.0206,-2.77106 -1.02719,-4.30724c-1.65574,-2.52699 -1.64344,-2.75138 0.29215,-5.33079c1.93155,-2.57402 2.35318,-2.67717 9.56188,-2.33914c6.84441,0.32094 7.64572,0.15836 8.6721,-1.75945c0.9869,-1.84403 0.79917,-2.23919 -1.47446,-3.10362c-1.43294,-0.5448 -3.2029,-0.99055 -3.93325,-0.99055c-0.73035,0 -1.58693,-0.675 -1.90352,-1.5c-0.31658,-0.825 -1.51628,-1.5 -2.666,-1.5c-1.29173,0 -1.8252,-0.42911 -1.39628,-1.12312c0.39981,-0.64691 -1.53911,-3.17624 -4.57291,-5.96535c-4.672,-4.2952 -5.19935,-5.1807 -4.66786,-7.83811c0.32954,-1.64773 0.16391,-3.26488 -0.36807,-3.59366c-0.53199,-0.32879 -0.96725,-1.60695 -0.96725,-2.84037c0,-1.31019 -1.89894,-4.19631 -4.56734,-6.94172l-4.56733,-4.69914l6.30128,-5.40925c5.15404,-4.42441 6.6384,-5.22882 8.15298,-4.41824c1.01844,0.54505 1.92718,0.84204 2.01944,0.65998c0.0922,-0.18206 1.17871,-1.7753 2.41435,-3.54053c2.98849,-4.26933 3.08427,-11.22245 0.19068,-13.84111c-1.6933,-1.53242 -2.39645,-1.64795 -3.98643,-0.65499c-2.72401,1.70117 -3.95763,1.49979 -3.95763,-0.64608c0,-3.0584 5.32105,-7.77645 9.54305,-8.46158c4.93367,-0.80063 6.48096,-2.44686 7.17696,-7.63588c0.74419,-5.54837 3.95511,-7.36307 7.38093,-4.17144c3.04621,2.83798 4.24973,2.68099 7.30775,-0.95326c2.45963,-2.9231 2.67197,-2.98835 4.32996,-1.33036c1.19396,1.19397 1.36814,1.86861 0.5526,2.14046c-5.23547,1.74516 -8.22467,7.94539 -4.32252,8.96582c2.51073,0.65657 6.43016,10.70023 5.57221,14.27898c-1.16044,4.84056 -1.0292,5.38331 1.44898,5.99239c1.68395,0.41388 2.08856,0.86002 1.25,1.37828c-0.68196,0.42147 -1.23992,2.08976 -1.23992,3.7073c0,2.3787 0.43017,2.94391 2.25,2.95629c3.76159,0.0256 4.9069,1.47975 5.59296,7.10116c0.60995,4.99768 0.88998,5.45211 3.90704,6.34033c2.55675,0.7527 3.25327,1.49928 3.26531,3.5c0.0233,3.87027 1.31061,5.25049 4.21674,4.52109c1.95404,-0.49043 2.9134,-0.10832 4.14587,1.65128c1.25403,1.79037 1.86712,2.02579 2.81281,1.0801c0.6651,-0.6651 2.67738,-1.20927 4.47174,-1.20927l3.26248,0l0.28752,9.25c0.27358,8.80125 0.39948,9.26587 2.59516,9.5771c1.2692,0.17991 2.13178,0.85491 1.91684,1.5c-0.66451,1.9944 -15.12995,12.66839 -16.82287,12.41353c-2.92344,-0.44011 -6.9016,2.43855 -6.9016,4.99409c0,3.35755 -1.7564,6.26514 -3.78518,6.26606c-0.94315,0.00043 -3.48406,1.57543 -5.64647,3.5c-2.16241,1.92457 -4.76404,3.49922 -5.78139,3.49922c-2.90117,0 -3.28412,2.77684 -0.67437,4.89008c2.1848,1.76915 2.26292,2.20489 1.2669,7.06713c-1.00747,4.91812 -0.91694,5.38125 1.77952,9.1036c1.56255,2.15703 2.84099,4.40791 2.84099,5.00196c0,2.33318 -3.01706,3.93723 -7.40552,3.93723c-5.43516,0 -7.54869,2.41411 -8.35184,9.53964c-0.4174,3.70322 -0.81742,4.41271 -2.23435,3.96299c-2.15331,-0.68343 -4.44383,1.91998 -3.60727,4.10003c0.51414,1.33982 0.0748,1.54741 -2.48075,1.17233c-2.01978,-0.29644 -3.28536,0.0128 -3.61989,0.88461c-0.64948,1.69253 -4.26833,1.76698 -4.3943,0.0904l-0.00001,0z" id="e_NL"> <title>NuevoLeon</title> </path></g><g> <path d="m526.63068,326.62248c-0.51107,-1.30217 -1.30768,-1.63049 -2.80389,-1.15561c-2.51669,0.79876 -6.15464,-2.26385 -8.01009,-6.7433c-1.20015,-2.89742 -1.44499,-2.99733 -6.018,-2.45573c-4.35211,0.51545 -4.79413,0.37352 -5.07935,-1.63092c-0.20182,-1.41827 -1.0157,-2.19613 -2.29906,-2.19729c-1.09266,-0.00098 -2.11652,-0.67598 -2.27524,-1.5c-0.41528,-2.15588 -17.57708,-7.41752 -23.23811,-7.12457c-7.81203,0.40426 -7.45725,0.10046 -11.53098,9.87375c-1.47607,3.54123 -2.0136,4.04555 -3.23319,3.03338c-0.80454,-0.66771 -3.50668,-1.45403 -6.00476,-1.74738c-4.44966,-0.52254 -4.64019,-0.69597 -9.37476,-8.53338c-2.65804,-4.4 -4.83809,-8.3375 -4.84455,-8.75c-0.006,-0.4125 1.11324,-0.75 2.48824,-0.75c3.06692,0 3.12775,-0.70289 0.31954,-3.69209l-2.18047,-2.321l2.42592,-4.24345c1.6644,-2.9114 2.6402,-6.59777 3.10853,-11.74346c0.37544,-4.125 0.98757,-8.93871 1.36029,-10.69713c0.7607,-3.58886 -1.04891,-6.85764 -7.64135,-13.80287c-3.7817,-3.98408 -3.81143,-4.08168 -7.46796,-24.51714l-3.67115,-20.51713l3.33246,-4.98287c1.83285,-2.74057 3.68834,-5.13286 4.12332,-5.31619c0.43498,-0.18334 0.79087,-0.73142 0.79087,-1.21797c0,-0.48655 3.77341,-6.63655 8.38536,-13.66667c4.61195,-7.03012 8.71415,-13.90703 9.116,-15.28203c0.40186,-1.375 2.15799,-3.87148 3.90252,-5.54773c4.41943,-4.24647 7.34295,-8.55751 8.14674,-12.01326c0.78529,-3.37621 4.52354,-9.42205 5.83208,-9.43218c0.48549,-0.004 1.70931,-0.95991 2.71961,-2.12479c1.48344,-1.71042 2.46811,-1.97997 5.11729,-1.40081c3.17862,0.69491 10.62517,1.29177 23.50942,1.88434c6.65955,0.30628 10.27098,2.34193 10.27098,5.78942c0,1.08859 0.71746,1.84705 1.75,1.84998c1.33561,0.004 1.05949,0.55748 -1.16611,2.33832c-2.13669,1.70969 -2.57455,2.54445 -1.6382,3.12314c0.75161,0.46452 1.63741,0.22223 2.1508,-0.58831c0.48009,-0.75797 0.88068,-0.92812 0.8902,-0.37812c0.01,0.55 1.64684,1.11659 3.63847,1.25908c3.4034,0.24351 10.12999,4.5504 10.30264,6.59656c0.0397,0.47061 1.1972,2.19263 2.5722,3.82673c1.375,1.63409 2.50168,3.72405 2.50374,4.64436c0.002,0.9203 0.90205,3.14665 2,4.94744c1.09794,1.80079 1.99626,4.23332 1.99626,5.40561c0,1.17229 1.18903,3.69033 2.64228,5.59565c1.45326,1.90532 2.71565,4.19779 2.80532,5.09439c0.31677,3.16744 2.70316,6.69481 6.10735,9.0274c1.89478,1.29832 3.4456,2.64008 3.44627,2.98168c0.00067,0.34161 1.03893,1.82764 2.30723,3.3023c2.86836,3.33504 2.52805,8.68432 -0.74829,11.76228l-2.23978,2.10417l-2.6049,-2.60489c-2.39325,-2.39325 -2.83057,-2.49673 -5.38255,-1.2736c-2.16869,1.03943 -2.9407,2.28639 -3.52135,5.68771c-0.96757,5.66782 -2.05597,6.84232 -7.11915,7.68235c-4.96365,0.82352 -9.58923,5.47736 -9.65179,9.71078c-0.0334,2.26004 0.39427,2.75 2.40034,2.75c1.34254,0 2.73722,-0.47931 3.09928,-1.06514c0.43167,-0.69846 1.30407,-0.48073 2.53415,0.63248c3.92988,3.55649 0.5234,13.93266 -4.57408,13.93266c-2.70352,0 -14.35074,9.12686 -14.44414,11.31855c-0.0309,0.7252 1.93393,3.36609 4.36629,5.86865c3.70053,3.80732 4.52661,5.38778 5.06032,9.68145c0.89565,7.20552 2.15271,9.82916 5.82174,12.1507c1.75529,1.11065 3.19235,2.86006 3.19345,3.8876c0.001,1.02753 0.90201,2.36882 2.00201,2.98065c1.1,0.61182 2.27933,1.49484 2.62074,1.96226c0.3414,0.46743 2.0512,1.14243 3.79955,1.5c1.74835,0.35758 3.26902,1.10014 3.37927,1.65014c0.28714,1.43252 -8.17915,1.84482 -9.82548,0.47849c-1.86413,-1.54709 -4.99213,-0.40665 -7.44799,2.71548c-2.40062,3.05189 -2.61796,6.56993 -0.51376,8.31626c1.14718,0.95208 1.23941,1.58398 0.38198,2.61712c-0.6217,0.7491 -0.91208,2.19669 -0.6453,3.21687c0.26679,1.02018 0.19336,3.61008 -0.16316,5.75533c-0.48883,2.94142 -0.82375,3.45321 -1.36211,2.0815z" id="e_CH"> <title>Coahuila</title> </path></g><g> <path d="m368.90694,395.07629c0,-2.14468 -3.63345,-7.13486 -5.19502,-7.13486c-0.63908,0 -0.55493,0.59637 0.21508,1.52417c0.69572,0.83829 1.02384,1.76527 0.72916,2.05995c-0.82836,0.82835 -6.72378,-5.80916 -7.37216,-8.30015c-0.55051,-2.11494 -7.37706,-10.18719 -7.37706,-8.72321c0,0.38675 0.98361,2.33129 2.18579,4.32121l2.18579,3.61803l-2.28817,-1.99764c-1.25849,-1.0987 -2.98307,-3.3487 -3.83239,-5c-0.84932,-1.6513 -3.95325,-5.75227 -6.89762,-9.11326c-2.94437,-3.361 -5.3534,-6.70536 -5.3534,-7.43191c0,-1.98864 -7.33993,-13.91965 -8.57569,-13.93972c-0.59162,-0.01 -2.15604,-1.16745 -3.47647,-2.57299c-1.97251,-2.09965 -2.06565,-2.42692 -0.52209,-1.8346c1.67045,0.64101 1.6259,0.379 -0.40195,-2.36381c-1.25435,-1.69661 -2.82576,-2.87556 -3.49201,-2.6199c-0.66625,0.25567 -1.78856,-0.23063 -2.49402,-1.08066c-0.70546,-0.85003 -2.0949,-1.54551 -3.08763,-1.54551c-0.99274,0 -2.72802,-1.2375 -3.85618,-2.75c-1.12816,-1.5125 -3.04939,-3.74893 -4.26941,-4.96984c-2.99358,-2.9958 -1.61367,-4.04604 1.79411,-1.36548c1.91262,1.50446 3.03858,1.82808 3.78018,1.08648c1.7827,-1.7827 -0.7637,-4.54638 -3.86967,-4.19987c-1.48535,0.16571 -3.28002,-0.17955 -3.98816,-0.76725c-0.70813,-0.5877 -1.93544,-0.81991 -2.72736,-0.51603c-0.79191,0.30389 -2.28345,-0.37965 -3.31453,-1.51898c-1.66794,-1.84306 -1.7326,-2.46446 -0.58625,-5.63462c0.93751,-2.59263 0.98865,-3.86289 0.18778,-4.66376c-0.80087,-0.80087 -1.10065,-0.36526 -1.10065,1.59935c0,1.485 -0.45,2.7 -1,2.7c-0.55,0 -1,-0.70714 -1,-1.57143c0,-0.86428 -0.67914,-2.25056 -1.50919,-3.08062c-2.12204,-2.12203 -0.9257,-3.46379 2.07213,-2.32402c2.28277,0.86791 2.40286,0.78068 1.42942,-1.03821c-0.5845,-1.09215 -1.41585,-1.98572 -1.84744,-1.98572c-0.43158,0 -2.28122,-1.33609 -4.11031,-2.9691c-1.82908,-1.633 -3.67409,-2.75371 -4.10003,-2.49047c-0.42594,0.26324 -1.61506,-0.59006 -2.64249,-1.89622c-1.02743,-1.30617 -2.86999,-2.69285 -4.09459,-3.08153c-1.2246,-0.38867 -2.01057,-1.05612 -1.7466,-1.48323c0.26397,-0.42711 -0.4045,-1.7259 -1.48548,-2.88619c-1.08098,-1.1603 -1.96542,-2.80345 -1.96542,-3.65145c0,-2.01822 -1.89138,-1.98845 -2.67055,0.042c-0.48935,1.27522 -0.77253,1.32393 -1.4533,0.25c-0.6498,-1.02509 -0.84907,-0.93372 -0.86084,0.39471c-0.013,1.46971 -0.38145,1.56174 -2.4603,0.61455c-3.21318,-1.46402 -3.9448,-3.58462 -1.50398,-4.35931c2.07196,-0.65761 2.54482,-1.99751 1.03438,-2.93101c-0.50302,-0.31089 -1.10126,-0.005 -1.32941,0.67922c-0.32866,0.98596 -1.00452,0.97578 -3.2537,-0.049c-2.53757,-1.15619 -2.70189,-1.12841 -1.54814,0.26176c2.34016,2.81973 -0.76272,1.70505 -4.18838,-1.50464c-3.116,-2.91954 -3.15112,-3.03177 -0.76578,-2.44714l2.5,0.61273l-2.36776,-2.0585c-1.94411,-1.69019 -2.14585,-2.32588 -1.12755,-3.55286c0.97881,-1.17939 0.98224,-1.80517 0.0163,-2.96905c-0.9832,-1.18469 -0.80078,-2.34874 0.92759,-5.91908c1.18332,-2.44441 2.86888,-5.03976 3.7457,-5.76746c1.40615,-1.167 1.51082,-1.02909 0.88728,1.16908l-0.70693,2.49216l1.92,-2.38657l1.92,-2.38657l0.66174,2.63657c0.36395,1.45011 1.07175,2.63657 1.57288,2.63657c0.53119,0 0.56221,-1.21665 0.0744,-2.91758c-0.80552,-2.80868 -0.56271,-3.09117 6.50505,-7.56792c7.70889,-4.88285 14.88801,-11.85012 16.45368,-15.96813c0.90069,-2.369 1.01616,-2.39381 4.06376,-0.87347c2.51972,1.257 3.64044,1.33531 5.69743,0.39808c1.40838,-0.6417 2.87306,-0.80769 3.25485,-0.36885c0.95013,1.09208 4.78509,16.72885 5.50987,22.4661c0.72325,5.72504 1.70527,6.59248 8.57522,7.57474c5.05331,0.72252 5.43918,0.97344 5.75478,3.74225c0.18605,1.6323 1.87355,4.66717 3.75,6.74418c3.74184,4.14177 3.93096,5.40604 2.39623,16.01884c-0.77197,5.3382 -0.66639,7.63665 0.50525,11c0.81462,2.33847 1.48768,4.89977 1.49569,5.69178c0.008,0.79202 1.75633,3.04202 3.88517,5c2.30845,2.12319 5.34087,6.68785 7.5135,11.30998c3.84488,8.17974 4.38233,8.53776 10.27818,6.84685c2.73713,-0.785 3.47259,-0.55606 5.62195,1.75c2.63489,2.82701 5.97214,9.2817 5.5643,10.76211c-0.52239,1.89623 1.40845,10.91988 2.74486,12.82787c0.77363,1.1045 1.40659,3.2315 1.40659,4.72666c0,1.49516 0.45856,3.00188 1.01902,3.34826c0.56045,0.34638 2.14303,2.84794 3.51684,5.55902c1.74714,3.44782 3.10327,4.92923 4.51237,4.92923c2.39104,0 3.69089,2.66088 2.08455,4.26722c-0.62303,0.62303 -1.13278,2.06765 -1.13278,3.21027c0,1.14263 -0.72883,3.11805 -1.61962,4.38983c-1.59396,2.2757 -1.53799,7.25012 0.12808,11.38268c0.58157,1.44255 0.15967,1.75 -2.40147,1.75c-2.36544,0 -3.10699,-0.44516 -3.10699,-1.86514l-0.00001,0.00003z" id="e_SI"> <title>Sinaloa</title> </path></g><g> <path d="m333.15694,278.20922c-3.20608,-0.28876 -4.25,-0.80568 -4.25,-2.10445c0,-0.94691 -1.53615,-3.3032 -3.41367,-5.2362c-1.93766,-1.99492 -3.5591,-4.79092 -3.75,-6.46649c-0.3128,-2.74542 -0.72112,-3.01202 -5.83633,-3.81064c-3.025,-0.47229 -6.03405,-1.29324 -6.68679,-1.82434c-0.65273,-0.5311 -1.48809,-3.52164 -1.85635,-6.64565c-0.36826,-3.12401 -1.65816,-9.28002 -2.86644,-13.68002l-2.19687,-8l-5.05501,0.30781c-4.71764,0.28727 -5.33327,0.0405 -9.22449,-3.69823l-4.16948,-4.00604l0.67149,-8.05177c0.4449,-5.33477 0.3208,-8.05177 -0.36778,-8.05177c-0.5716,0 -1.90421,-1.6875 -2.96135,-3.75c-1.05715,-2.0625 -2.9825,-5.7256 -4.27856,-8.14021c-1.30533,-2.4319 -2.39035,-6.22345 -2.43242,-8.5l-0.0759,-4.10979l7.75,0.31707c8.67145,0.35476 8.73888,0.2838 6.70144,-7.0525c-0.62771,-2.26024 -0.68467,-4.43229 -0.14424,-5.5c0.49125,-0.97051 0.62309,-7.2611 0.29299,-13.97908c-0.57417,-11.68501 -0.51349,-12.22688 1.39981,-12.5c1.69561,-0.24204 2.11474,-1.35086 2.75387,-7.28549c1.31486,-12.20911 1.28379,-27.80649 -0.0602,-30.22421c-0.68003,-1.22332 -2.0385,-8.32901 -3.0188,-15.79042c-2.0358,-15.49507 -1.8389,-16.11125 4.79055,-14.99121l4.03459,0.68164l0,-9.0879c0,-6.88627 0.32157,-9.0879 1.3274,-9.0879c0.73007,0 11.19257,0.66204 23.25,1.47119c12.05743,0.80915 25.43028,1.59589 29.71744,1.7483l7.79484,0.27711l2.37762,5.0017c2.29275,4.82317 8.31688,12.5017 9.8081,12.5017c0.76653,0 4.7246,3.70405 4.7246,4.42139c0,0.23175 2.925,3.43405 6.5,7.11621c3.575,3.68215 6.5,7.04375 6.5,7.47021c0,0.42646 1.21135,1.0794 2.69188,1.45099c3.512,0.88146 11.02897,8.99378 11.86631,12.80612c0.36022,1.64011 1.57821,4.54681 2.70662,6.45933c1.14107,1.93397 1.99335,5.02877 1.92026,6.97287c-0.0723,1.92255 0.53152,5.08215 1.34176,7.02134c0.81024,1.93918 1.47776,4.25833 1.48337,5.15366c0.006,0.89534 2.70561,3.59163 6,5.99178c3.29439,2.40014 5.9898,4.73945 5.9898,5.19847c0,1.85036 4.69889,5.71931 7.75832,6.38802c1.79207,0.39169 3.70083,1.53902 4.24168,2.54961c0.54085,1.01059 2.30601,2.12794 3.92258,2.483c1.61658,0.35506 3.51432,1.33851 4.21722,2.18545c1.12754,1.35861 5.16933,3.51428 7.02687,3.74776c2.16913,0.27264 0.7783,2.96438 -9.65811,18.69186c-6.3475,9.56556 -11.91194,18.06693 -12.36542,18.89193c-0.48897,0.88959 0.51799,8.82493 2.47449,19.5c4.25511,23.21686 4.27743,21.94137 -0.36763,21.00886c-11.6691,-2.34262 -12.39055,-2.06774 -19.45517,7.41263c-4.02975,5.40772 -5.12453,5.84507 -6.58851,2.63199c-1.36795,-3.00233 -5.52178,-4.25034 -9.34433,-2.80749c-2.15545,0.81359 -3.0478,0.73505 -3.94609,-0.34733c-1.51976,-1.8312 -3.40025,-1.77145 -5.3414,0.1697c-2.13096,2.13096 -5.00267,1.0479 -8.14494,-3.07183c-1.4376,-1.88478 -3.85424,-3.65053 -5.48701,-4.00915c-1.60484,-0.35248 -4.15948,-1.95634 -5.67697,-3.56413c-3.06458,-3.24692 -4.76259,-3.67639 -5.62721,-1.42325c-0.31658,0.825 -1.15222,1.51414 -1.85699,1.53142c-2.28541,0.056 -5.01696,4.91009 -4.55073,8.08676c0.49667,3.38399 0.12405,3.76315 -4.1921,4.26569c-4.03943,0.47032 -4.07412,0.52454 -3.09978,4.84464c0.6779,3.00573 0.48635,3.98178 -1.05526,5.37691c-1.31829,1.19304 -1.88811,3.08347 -1.89882,6.29957c-0.008,2.52725 -0.34592,5.05417 -0.75,5.61536c-0.83409,1.15841 -5.96516,3.57003 -7.03174,3.30494c-0.38662,-0.0961 -2.61545,-0.34696 -4.95295,-0.5575l-0.00006,0z" id="e_CU"> <title>Chihuahua</title> </path></g><g> <path d="m819.59362,672.27757c-4.50267,-4.21513 -9.31168,-8.77207 -10.68668,-10.12655c-2.47134,-2.43446 -2.47419,-2.45657 -0.24862,-1.9294c1.31794,0.31219 2.00323,0.13178 1.65286,-0.43513c-0.61423,-0.99385 -4.59165,-2.75682 -7.58934,-3.36394c-3.18292,-0.64464 -5.39016,-2.33024 -10.99912,-8.39968c-3.09103,-3.34479 -6.16919,-6.08144 -6.84036,-6.08144c-0.86888,0 -0.91877,-0.36334 -0.17322,-1.26167c0.77677,-0.93594 0.40231,-1.56595 -1.45048,-2.44032c-2.14021,-1.01002 -2.32653,-0.97258 -1.3022,0.26166c2.41039,2.90434 -1.08133,1.44012 -7.22317,-3.02897c-3.37816,-2.45811 -6.63357,-4.70811 -7.23424,-5c-0.74404,-0.36156 -0.69372,-0.71661 0.15789,-1.11403c1.93419,-0.90263 1.47625,-2.41667 -0.73095,-2.41667c-1.35095,0 -2.16908,-0.87457 -2.57252,-2.75c-0.32536,-1.5125 -1.28431,-4.39766 -2.131,-6.41148c-1.47522,-3.50873 -1.40404,-4.0719 1.70624,-13.5c1.78512,-5.41118 3.57345,-10.28852 3.97407,-10.83852c0.40061,-0.55 1.02195,-2.22932 1.38076,-3.73181c0.37402,-1.5662 1.84317,-3.3476 3.4432,-4.17501c3.00972,-1.55638 5.1802,-5.31306 5.1802,-8.96592c0,-1.25325 1.15676,-3.36535 2.57058,-4.69357c1.85382,-1.74157 2.43438,-3.11462 2.0821,-4.92431c-0.67605,-3.47295 2.09117,-9.00938 4.50307,-9.00938c3.01234,0 5.57323,3.12132 6.17363,7.52465c0.92256,6.76603 2.34962,9.47535 4.99088,9.47535c1.30337,0 3.18425,0.9 4.17974,2c0.99549,1.1 2.30273,1.99223 2.90499,1.98272c1.38232,-0.0218 4.75482,-3.55834 7.20837,-7.55898c3.43718,-5.6045 7.22948,-9.42374 9.35726,-9.42374c1.15486,0 3.23455,-0.74355 4.62154,-1.65234c2.43143,-1.59314 2.68203,-1.53939 6.99405,1.5c2.45974,1.73379 4.89327,3.15234 5.40784,3.15234c1.67334,0 3.01852,3.58743 1.80153,4.80442c-1.61041,1.61041 0.35174,3.59405 5.10773,5.16367c2.16257,0.71371 3.74116,1.80036 3.50798,2.41478c-0.23318,0.61442 1.71639,2.45098 4.33237,4.08124c2.61599,1.63026 6.65259,4.94714 8.97023,7.37084c2.71389,2.8381 4.76069,4.19691 5.75,3.81728c0.84486,-0.3242 1.53611,-0.18848 1.53611,0.3016c0,0.49009 1.49719,1.38518 3.32709,1.9891c3.37011,1.11224 6.84035,4.85853 8.05993,8.7011c0.41086,1.29451 2.4136,2.77192 5.20015,3.83611c4.30868,1.6455 4.44993,1.82138 2.86731,3.57016c-1.17062,1.29351 -1.55926,3.14982 -1.30956,6.25489l0.35508,4.41549l-16.5,0.65762c-9.075,0.36169 -19.09876,0.93394 -22.27503,1.27166l-5.77503,0.61404l-5.89892,11.118c-3.2444,6.1149 -6.30992,11.58312 -6.81225,12.1516c-2.3265,2.63287 -2.21012,6.14469 0.28122,8.48518c2.53388,2.38046 3.23319,5.82804 1.52804,7.53319c-0.84904,0.84904 -1.09734,3.50373 -1.06129,11.34692c0.0116,2.52885 -1.58813,5.10111 -3.17251,5.10111c-0.51748,0 -4.62488,-3.44874 -9.12755,-7.66386z" id="e_CS"> <title>Chiapas</title> </path></g><g> <path d="m674.64279,643.81348c-0.88394,-0.49468 -3.87497,-1.3295 -6.64673,-1.85515c-2.77177,-0.52565 -6.8851,-2.17705 -9.14075,-3.66976c-3.19294,-2.11299 -5.91128,-2.88827 -12.27477,-3.50079c-4.49548,-0.43272 -9.88837,-0.9671 -11.9842,-1.18752c-2.28019,-0.23981 -4.89072,-1.41569 -6.5,-2.92784c-4.9107,-4.61431 -9.43749,-6.72332 -14.4394,-6.72725c-2.6125,-0.002 -4.75,-0.28964 -4.75,-0.63907c0,-0.34943 1.0125,-1.66677 2.25,-2.92743c1.2375,-1.26065 2.7,-2.76836 3.25,-3.35046c0.55,-0.58209 3.38144,-3.20225 6.2921,-5.82257l5.2921,-4.76421l-0.93585,-4.87235c-0.7497,-3.90317 -1.83201,-5.69341 -5.44106,-9c-5.2748,-4.83274 -6.55683,-8.34271 -6.81399,-18.6555c-0.23251,-9.32417 1.10036,-11.97215 6.02625,-11.97215c1.89115,0 4.93261,0.54029 6.7588,1.20065c4.48735,1.62265 6.31404,0.0222 4.29038,-3.75907c-1.19889,-2.24016 -1.18446,-2.96654 0.10458,-5.26313c1.8747,-3.33999 4.92669,-4.15201 4.92669,-1.31079c0,1.10787 0.47776,2.30958 1.06168,2.67046c0.58393,0.36089 1.47279,1.73745 1.97525,3.05902c1.10233,2.89934 2.53277,3.07539 3.92044,0.48251c0.89308,-1.66873 2.07046,-1.90038 8.98593,-1.76797c6.59877,0.12635 8.4241,-0.19548 10.68571,-1.88401c3.23479,-2.41513 9.25649,-12.93253 9.32372,-16.28466c0.0347,-1.72938 0.46846,-2.19536 1.62906,-1.75c0.86998,0.33385 1.97745,0.60699 2.46104,0.60699c1.51773,0 4.95717,4.29381 4.95717,6.18856c0,0.99629 0.47341,1.81144 1.05202,1.81144c0.57861,0 1.53383,1.38213 2.12272,3.07141c1.22164,3.5044 4.11999,4.92859 10.03012,4.92859c2.70788,0 4.52026,0.58701 5.40309,1.75c1.79468,2.36419 1.73774,7.71821 -0.0983,9.24198c-1.55854,1.29346 -1.28881,4.57709 0.7162,8.71895c1.56115,3.22497 9.05171,4.24838 12.07991,1.65043c3.11445,-2.67195 9.58326,-5.80565 10.36686,-5.02205c0.36338,0.36338 0.13569,0.66069 -0.50597,0.66069c-4.14652,0 3.26902,9.72787 9.08333,11.91571c1.75383,0.65994 2.75,1.76824 2.75,3.05954c0,1.11361 0.5625,2.02716 1.25,2.03009c6.04841,0.0259 33.13439,1.04572 33.34416,1.25549c0.14851,0.14851 -1.73014,5.78229 -4.17479,12.5195l-4.44481,12.24949l2.01272,3.94525c2.13814,4.19109 2.58982,7.02493 1.11971,7.02493c-0.49116,0 -1.16298,-0.70352 -1.49294,-1.56338c-0.32996,-0.85986 -1.09588,-1.25686 -1.70205,-0.88223c-0.60618,0.37463 -2.39113,-0.27184 -3.96658,-1.43662c-3.41347,-2.52369 -3.94542,-2.60275 -3.94542,-0.58639c0,0.84227 0.7875,1.79595 1.75,2.11931c4.4586,1.49787 11.25,4.77843 11.25,5.43426c0,0.40065 -3.0375,-0.5674 -6.75,-2.1512c-3.7125,-1.5838 -8.325,-2.89871 -10.25,-2.92201c-4.3689,-0.0529 -6.96718,-1.42662 -4.4936,-2.37582c0.92074,-0.35333 2.08348,-0.38939 2.58384,-0.0802c0.50037,0.30925 0.90976,0.10154 0.90976,-0.46157c0,-0.56311 -0.93743,-1.52553 -2.08319,-2.13872c-1.63896,-0.87715 -2.45541,-0.77803 -3.82874,0.46482c-2.32385,2.10305 -3.08807,1.99127 -3.08807,-0.45168c0,-3.07092 -2.72314,-3.53209 -4.90994,-0.83151c-2.27105,2.80462 -1.74627,4.19287 1.2441,3.29117c1.48143,-0.4467 1.84984,-0.32587 1.16584,0.38238c-0.55,0.56949 -2.125,1.24092 -3.5,1.49205c-1.375,0.25113 -0.25,0.29724 2.5,0.10248c3.45805,-0.24492 4.53741,-0.0583 3.5,0.60503c-0.825,0.52754 -4.25423,0.96605 -7.62052,0.97447c-5.81875,0.0146 -6.31179,0.21248 -10,4.01442c-2.13371,2.19951 -4.68281,3.99951 -5.66466,4c-0.98185,0.00049 -2.88525,0.72168 -4.22977,1.60264c-1.34452,0.88096 -4.24884,2.00714 -6.45405,2.50262c-2.2052,0.49548 -6.15181,2.21286 -8.77023,3.8164c-2.61842,1.60354 -6.33577,3.16929 -8.26077,3.47944c-7.75906,1.25013 -9.72619,1.33253 -11.26415,0.47184l0.00002,0.00005z" id="e_OA"> <title>Oaxaca</title> </path></g><g> <path d="m605.28445,621.48283c-0.32532,-0.84777 -1.02239,-1.5414 -1.54906,-1.5414c-0.52666,0 -2.03329,-1.27842 -3.34806,-2.84094c-1.94836,-2.31549 -3.22073,-2.85348 -6.87936,-2.90879c-3.13369,-0.0474 -5.18067,-0.71238 -6.78039,-2.20274c-1.26034,-1.17419 -2.44807,-1.66523 -2.63941,-1.09121c-0.56865,1.70593 -2.96472,1.19244 -5.09236,-1.0913c-1.51618,-1.62743 -2.70489,-1.99182 -5.00018,-1.53276c-1.65613,0.33123 -3.24658,0.22129 -3.53433,-0.24431c-0.69956,-1.13191 -4.55436,-2.10285 -4.55436,-1.14714c0,0.41446 1.0125,1.24187 2.25,1.8387c2.22271,1.07197 2.22419,1.08595 0.12244,1.15281c-1.17015,0.0372 -2.71688,-0.64242 -3.43718,-1.51033c-0.7203,-0.8679 -3.5879,-2.7192 -6.37245,-4.114c-2.78454,-1.39479 -5.87778,-3.2543 -6.87386,-4.13223c-1.39761,-1.23183 -1.98658,-1.31222 -2.57995,-0.35213c-0.75611,1.22342 -4.109,0.62577 -4.109,-0.73243c0,-0.38215 -1.52901,-0.73817 -3.39781,-0.79114c-1.86879,-0.053 -6.8589,-1.71716 -11.08913,-3.69819c-4.23023,-1.98103 -8.10122,-3.60187 -8.60219,-3.60187c-0.50098,0 -0.91087,-0.65603 -0.91087,-1.45785c0,-0.80181 -2.025,-2.64457 -4.5,-4.09502c-2.475,-1.45044 -4.5,-3.21766 -4.5,-3.92714c0,-1.63387 -4.16949,-4.3979 -7.75428,-5.14045c-1.70446,-0.35306 -4.01705,-2.27498 -6.09813,-5.06796c-3.35174,-4.4983 -9.15694,-7.90571 -11.76432,-6.90516c-1.01263,0.38858 -1.38327,-0.39171 -1.38327,-2.91212c0,-2.76606 0.55497,-3.72993 2.82283,-4.90268c4.69641,-2.42861 5.61802,-4.1131 4.16697,-7.61624c-1.08473,-2.61878 -1.0129,-3.29237 0.5333,-5.0009c2.3039,-2.54579 6.92298,-2.5284 9.48709,0.0357c1.65744,1.65744 2.75418,1.88863 6.25,1.31749c7.69971,-1.25797 16.87519,-0.53148 27.89139,2.20837c2.13991,0.53222 2.78122,0.25103 3.32339,-1.45718c0.36949,-1.16416 0.54286,-3.34593 0.38526,-4.84837c-0.30546,-2.91212 0.66318,-5.2305 2.18537,-5.2305c1.22901,0 3.9544,6.61848 3.9544,9.60307c0,1.71891 0.72038,2.53963 2.65544,3.0253c2.18542,0.5485 3.11469,0.10777 5.25,-2.48996c2.15164,-2.6176 3.29937,-3.1549 6.72324,-3.14742c3.58989,0.008 4.28111,-0.35899 5.29674,-2.81094c0.99893,-2.41163 1.61494,-2.75436 4.25434,-2.36697c3.40044,0.49907 6.27138,2.88224 7.27267,6.03705c0.80987,2.55167 4.1643,3.71285 6.09556,2.11004c0.7986,-0.66278 1.45201,-0.79835 1.45201,-0.30126c0,1.24286 9.72403,11.34109 10.92083,11.34109c0.53117,0 1.55926,0.7875 2.28464,1.75c1.62332,2.15395 5.23662,4.25 7.32642,4.25c0.85746,0 2.7158,1.15678 4.12964,2.57063c2.43689,2.43689 2.54113,2.97013 2.00354,10.25c-0.43176,5.84681 -0.22083,8.14259 0.88392,9.6205c0.79806,1.06762 1.45101,2.75512 1.45101,3.75c0,0.99488 0.36826,1.80887 0.81835,1.80887c0.45009,0 2.41829,1.4625 4.37377,3.25c2.78777,2.54829 3.6839,4.25655 4.15044,7.91184c0.56817,4.45155 0.41997,4.81997 -3.2853,8.16746c-2.13417,1.9281 -4.82013,4.00861 -5.96879,4.62335c-1.14866,0.61474 -2.08847,1.69226 -2.08847,2.39448c0,0.70221 -1.35697,2.28001 -3.0155,3.50621c-2.57357,1.90272 -3.10218,2.00356 -3.60699,0.68806l0,0.00001z" id="e_GO"> <title>Guerrero</title> </path></g><g> <path d="m851.57361,579.27476c-0.36667,-0.36666 -0.66667,-1.39867 -0.66667,-2.29334c0,-0.99975 -1.63797,-2.23434 -4.25,-3.20336c-3.40251,-1.26228 -4.20017,-2.01457 -4.00011,-3.7726c0.3041,-2.67219 -1.37483,-6.04913 -3.03507,-6.10467c-0.66815,-0.0224 -2.77282,-1.37235 -4.67705,-3c-3.736,-3.19338 -7.44048,-3.72711 -10.38497,-1.49624c-1.01596,0.76973 -2.52226,1.14047 -3.34734,0.82385c-1.5488,-0.59433 -4.37042,2.2244 -8.72196,8.71303c-3.26313,4.86569 -6.13429,8 -7.32835,8c-0.55564,0 -1.57046,-0.675 -2.25515,-1.5c-0.68469,-0.825 -2.28823,-1.5 -3.56343,-1.5c-2.95036,0 -3.39682,-0.78585 -4.10538,-7.22618c-0.68986,-6.27043 -3.6513,-9.77382 -8.26187,-9.77382c-2.37147,0 -3.36562,0.67231 -4.64094,3.1385c-0.9423,1.82221 -1.39361,4.28536 -1.07607,5.87303c0.40652,2.0326 -0.0534,3.29848 -1.79171,4.93154c-1.28624,1.20836 -2.6507,3.628 -3.03213,5.37697l-0.69351,3.17996l-1.02104,-2.5c-2.11154,-5.1701 -3.69755,-7.53358 -5.787,-8.62384c-3.73524,-1.94903 -8.78984,-8.26224 -9.31408,-11.63332c-0.27737,-1.78356 -0.80948,-4.1818 -1.18247,-5.32941c-0.5178,-1.59318 -0.0225,-2.51618 2.09461,-3.90337c1.8845,-1.23476 2.89594,-1.4473 3.15723,-0.66342c0.54829,1.64485 1.58502,1.43675 4.21779,-0.84664c1.26831,-1.1 3.11061,-2 4.09399,-2c0.98339,0 2.10665,-0.51563 2.49615,-1.14584c0.68793,-1.1131 -1.0717,-0.91112 -6.24724,0.71708c-1.66698,0.52443 -1.65866,0.46274 0.0872,-0.64623c2.08069,-1.32164 14.48114,-3.93164 18.56987,-3.90852c1.79194,0.0101 2.11392,0.25874 1.13685,0.87777c-1.14345,0.72444 -1.14489,0.93639 -0.009,1.31505c0.74482,0.24827 1.94099,-0.13536 2.65815,-0.85253c0.71717,-0.71716 2.97118,-1.75976 5.00893,-2.3169c2.03775,-0.55713 5.07456,-2.25652 6.74846,-3.77642c2.84666,-2.58477 6.85677,-5.26346 7.87961,-5.26346c0.24762,0 0.59122,1.4625 0.76357,3.25c0.29051,3.01302 0.60502,3.27195 4.31336,3.55102c4.86221,0.3659 6.49509,2.28068 6.51531,7.64011c0.0192,5.07573 0.50171,5.7919 5.66684,8.41025c2.30018,1.16602 4.46424,2.57647 4.80902,3.13433c0.75671,1.22439 7.47405,1.32265 9.34502,0.13669c0.7349,-0.46583 1.1849,-1.92144 1,-3.23468c-0.27435,-1.94853 0.15566,-2.44457 2.33782,-2.69681c1.47071,-0.17 4.49028,0.6175 6.71016,1.75c2.21989,1.1325 5.58094,2.05909 7.469,2.05909c2.13897,0 3.65124,0.56911 4.01227,1.50993c0.31868,0.83046 0.88434,6.90546 1.25703,13.5l0.67761,11.99007l-6.48337,0c-3.56586,0 -6.78338,-0.3 -7.15004,-0.66667l0.0001,0z" id="e_TA"> <title>Tabasco</title> </path></g><g> <path d="m474.90694,564.44143c-1.925,-0.74131 -4.8106,-1.38208 -6.41245,-1.42392c-1.60185,-0.0418 -4.97685,-1.38004 -7.5,-2.97378c-2.52315,-1.59373 -7.05234,-3.41092 -10.06487,-4.03819c-5.60163,-1.16638 -14.02268,-5.41302 -14.02268,-7.07147c0,-0.50768 -1.27408,-2.40121 -2.83129,-4.20784c-4.23867,-4.91762 -4.53431,-6.56159 -1.77065,-9.84602c1.32585,-1.57569 2.57524,-3.35867 2.77641,-3.96218c0.20117,-0.60351 1.83526,-1.13908 3.63131,-1.19014c1.79605,-0.0511 3.50959,-0.48772 3.80786,-0.97034c0.29828,-0.48262 2.01802,-0.60064 3.82166,-0.26228c2.85043,0.53474 4.01548,0.0156 8.90789,-3.96932c3.0957,-2.52148 6.56028,-4.58452 7.69905,-4.58452c3.00404,0 8.09647,-5.9185 7.74384,-9c-0.23424,-2.04697 -0.78441,-2.46588 -3.03608,-2.31174c-2.23699,0.15315 -2.75,-0.22928 -2.75,-2.05c0,-1.23104 -0.46672,-2.70498 -1.03716,-3.27542c-0.71621,-0.71621 -0.71621,-1.88131 0,-3.7651c0.57044,-1.50037 1.03716,-3.06204 1.03716,-3.47039c0,-0.97135 -6.732,-3.92375 -10.8037,-4.73809c-3.61502,-0.723 -3.78179,-1.10834 -1.74081,-4.02226c1.07076,-1.52872 2.9498,-2.23223 7.10856,-2.66145c3.59187,-0.37072 7.03625,-1.49881 9.44665,-3.09393c2.82569,-1.86996 5.7504,-2.68781 11.46309,-3.20548l7.66949,-0.69499l2.87199,3.14443c3.35022,3.66802 4.83039,3.88017 7.98473,1.14442c4.19151,-3.63528 9,-1.55029 9,3.90245c0,3.72914 3.71511,5.85557 7.08209,4.05361c3.94472,-2.11114 9.21296,-2.0082 10.97284,0.21441c1.19789,1.51285 2.98818,2.02236 7.79666,2.2189c5.20603,0.21279 6.764,-0.13021 9.38934,-2.06713c3.42278,-2.52524 7.65876,-3.02255 9.55907,-1.12224c1.44799,1.44799 1.61086,7.8 0.2,7.8c-0.55,0 -1,0.8625 -1,1.91667c0,1.05416 -0.40102,2.06666 -0.89116,2.25c-0.49014,0.18333 -1.3261,4.94508 -1.85769,10.58167c-1.078,11.4302 -5.32276,23.17452 -8.39416,23.22478c-2.10406,0.0344 -2.85699,2.0678 -2.85699,7.71566c0,3.92852 -0.23075,4.42639 -1.75,3.77582c-4.00876,-1.71661 -12.4099,-2.78055 -22.65996,-2.8697c-7.76492,-0.0675 -11.03201,-0.45524 -11.33334,-1.3449c-0.70844,-2.09167 -8.66504,-1.56126 -10.72499,0.71496c-1.63411,1.80568 -1.7073,3.19894 -0.4184,7.96489c0.21878,0.80899 -1.24162,2.51004 -3.36331,3.91754c-3.37349,2.23793 -3.75,2.92268 -3.75,6.82015c0,4.0781 -0.16146,4.32799 -2.75,4.25638c-1.5125,-0.0418 -4.325,-0.68261 -6.25,-1.42392z" id="e_MI"> <title>Michoacan</title> </path></g><g> <path d="m586.90694,545.94143c-2.25426,-3.16582 -5,-4.00678 -5,-1.53138c0,0.89459 -0.58629,1.24363 -1.5,0.89301c-0.825,-0.31659 -1.5,-1.20687 -1.5,-1.97841c0,-0.77154 -0.9,-2.1734 -2,-3.11525c-1.1,-0.94185 -2,-2.03507 -2,-2.42939c0,-0.39432 1.8,-2.79668 4,-5.33858c2.2,-2.5419 4,-5.31935 4,-6.17211c0,-1.23974 0.75153,-1.42111 3.75,-0.90498c8.68358,1.49471 9.25,1.71862 9.25,3.65655c0,1.52912 0.71505,1.92054 3.50847,1.92054c3.25815,0 3.41936,0.1427 2.25946,2c-0.9987,1.59916 -0.9987,2.40084 0,4c0.74037,1.18552 0.83833,2 0.24054,2c-0.55466,0 -1.00847,1.57881 -1.00847,3.50847c0,3.30729 -0.12218,3.43631 -2.13065,2.25c-1.71594,-1.01352 -2.22013,-1.01107 -2.59035,0.0126c-0.40012,1.10633 -5.31873,4.22896 -6.66125,4.22896c-0.26486,0 -1.44285,-1.35 -2.61775,-3l0,-0.00003z" id="e_MO"> <title>Morelos</title> </path></g><g> <path d="m547.57361,547.27476c-0.36667,-0.36666 -0.66667,-1.58912 -0.66667,-2.71656c0,-1.12745 -0.71312,-3.91718 -1.58471,-6.19941c-1.54131,-4.03587 -1.51184,-4.29331 1.07611,-9.40039c1.95913,-3.86616 2.91102,-7.79123 3.60958,-14.88392c0.95571,-9.70369 2.39811,-15.13305 4.02034,-15.13305c0.48327,0 0.87868,-1.99286 0.87868,-4.42857c0,-2.53864 0.61982,-5.04839 1.45238,-5.88095c0.79881,-0.79881 1.15596,-1.7488 0.79367,-2.1111c-0.36229,-0.36229 0.35959,-0.925 1.60418,-1.25046c1.38006,-0.3609 2.058,-1.12569 1.73771,-1.96034c-0.72304,-1.88421 0.38319,-1.70566 3.91206,0.63142c1.65,1.09275 4.44667,1.98979 6.21482,1.99341c3.5796,0.007 4.70991,1.42321 5.80771,7.275c0.63895,3.40587 0.98567,3.73159 3.97213,3.73159c2.42447,0 3.40674,-0.51497 3.79194,-1.98796c0.55827,-2.13483 5.22348,-4.43286 6.89806,-3.39791c0.55926,0.34563 0.77398,1.84268 0.47716,3.32675c-0.53648,2.68244 -0.50638,2.69791 5.11238,2.62872c5.29646,-0.0652 5.71406,0.10445 6.63779,2.69696c0.84394,2.36858 0.65477,2.99838 -1.31497,4.37804c-1.79701,1.25867 -2.00475,1.79411 -0.94887,2.44567c1.96223,1.21083 2.58544,20.82987 0.69964,22.02497c-2.43916,1.54577 -4.84779,0.99167 -4.84779,-1.11524c0,-1.11111 -0.66667,-2 -1.5,-2c-1.06405,0 -1.50428,-1.08989 -1.51474,-3.75c-0.008,-2.0625 -0.65026,-4.875 -1.42701,-6.25c-0.77674,-1.375 -2.17138,-3.9625 -3.0992,-5.75c-1.74749,-3.36666 -3.45905,-4.2849 -3.45905,-1.85576c0,0.76684 -1.40719,2.90065 -3.12708,4.7418c-3.07222,3.28882 -3.10557,3.43146 -1.90123,8.13055c1.36371,5.32091 1.00731,6.23267 -4.92038,12.58745c-2.71164,2.90702 -3.57261,3.27074 -6.45998,2.72907c-3.01279,-0.5652 -3.45101,-0.33608 -4.58266,2.39596c-1.11859,2.7005 -1.70853,3.02093 -5.5619,3.02093c-3.64816,0 -4.63886,0.46102 -6.44677,3c-2.06377,2.8983 -3.94523,3.72144 -5.33333,2.33333z" id="e_EM"> <title>EdoMex</title> </path></g><g> <path d="m864.72823,555.79775c-0.30274,-3.16258 -0.58105,-3.38944 -4.82129,-3.93007c-2.475,-0.31556 -6.61898,-1.63373 -9.20884,-2.92927c-4.03479,-2.01834 -5.08721,-2.18312 -7.35211,-1.15116c-2.14619,0.97787 -2.52646,1.66978 -2.02211,3.67927c0.57825,2.30394 0.36189,2.47491 -3.13204,2.47491c-4.68159,0 -13.97361,-4.72182 -14.71399,-7.47705c-0.29898,-1.11262 -0.54975,-3.62045 -0.55726,-5.57295c-0.0174,-4.53824 -1.48725,-5.95 -6.1946,-5.95c-3.19812,0 -3.87758,-0.38503 -4.40784,-2.49776c-1.24596,-4.96427 -0.20335,-5.57957 9.08697,-5.36278c5.52417,0.1289 8.91501,0.65348 9.60601,1.48608c2.08357,2.51055 -0.0659,3.4781 -6.18803,2.78546c-4.29825,-0.48629 -5.91616,-0.34211 -5.91616,0.52722c0,0.74942 0.76255,0.95453 2.04064,0.54888c1.12236,-0.35622 4.42739,0.10305 7.34451,1.02059c4.90042,1.54138 5.26766,1.87076 4.82785,4.33029l-0.47602,2.66202l2.00363,-2c1.102,-1.1 1.80962,-2.3375 1.57249,-2.75c-0.62288,-1.08355 3.10627,-0.92125 6.24412,0.27176c2.41342,0.91758 2.63466,0.82 2.16995,-0.95706c-0.40558,-1.55095 0.1975,-2.21476 2.78925,-3.07012c4.90238,-1.61793 6.81532,-6.94838 3.36168,-9.36741c-1.1522,-0.80703 -1.79776,-1.94814 -1.43457,-2.5358c0.40557,-0.65623 0.0616,-0.83869 -0.89159,-0.47293c-0.85357,0.32755 -1.55194,0.99739 -1.55194,1.48855c0,0.49115 -0.45,0.89301 -1,0.89301c-2.32399,0 -0.62474,-1.97942 5.03139,-5.86095c3.31727,-2.27648 6.44584,-4.13905 6.95238,-4.13905c0.50655,0 3.10389,-2.18289 5.77187,-4.85088c4.70281,-4.7028 4.88441,-5.10485 5.94943,-13.17163c0.88871,-6.73133 1.53333,-8.64871 3.37459,-10.03758c2.13984,-1.61408 2.26798,-2.36745 2.1414,-12.58926c-0.0741,-5.97985 0.28902,-11.54254 0.80684,-12.36155c0.70195,-1.11025 0.94537,-0.66225 0.95679,1.7609c0.0151,3.21315 0.0697,3.25 4.81531,3.25c2.64,0 5.2275,-0.41747 5.75,-0.92771c0.59201,-0.57812 5.3344,4.07307 12.58487,12.34286l11.63486,13.27057l1.58425,11.40714c1.77023,12.74633 5.24002,54.67097 4.57414,55.26825c-0.23547,0.21121 -9.87812,0.90521 -21.42812,1.54222c-11.55,0.63701 -23.33042,1.4172 -26.17871,1.73375l-5.17871,0.57555l-0.32129,-3.35631z" id="e_CA"> <title>Campeche</title> </path></g><g> <path d="m585.96718,523.97782c-2.82942,-0.44121 -3.58298,-1.09136 -4.2469,-3.66408c-0.70556,-2.73407 -0.37091,-3.60394 2.65903,-6.91187c3.11092,-3.39633 3.53614,-3.58822 4.1489,-1.87231c0.3755,1.05153 1.28105,2.61315 2.01233,3.47028c0.73128,0.85712 1.53645,3.17405 1.78927,5.14872c0.52166,4.07446 -0.57144,4.73233 -6.36263,3.82926z" id="e_DF"> <title>DistritoFederal</title> </path></g><g> <path d="m616.89195,519.45388c-1.38324,-0.73153 -3.99216,-3.38699 -5.79761,-5.90103c-2.38759,-3.32466 -3.88224,-4.50832 -5.48178,-4.34119c-1.60625,0.16782 -2.28617,-0.37684 -2.52194,-2.02023c-0.29695,-2.06997 0.0676,-2.25 4.55564,-2.25c2.68313,0 5.72968,-0.62245 6.7701,-1.38323c1.15826,-0.84694 2.49241,-1.06421 3.44113,-0.5604c0.8522,0.45255 2.81715,1.09116 4.36656,1.41912c1.69646,0.35909 3.48657,1.77605 4.5,3.56197c0.92559,1.63111 2.2556,2.75017 2.95557,2.48678c1.12999,-0.42519 5.22732,2.69113 5.22732,3.97576c0,0.275 -1.12119,0.5 -2.49153,0.5c-1.37834,0 -3.03,0.86225 -3.69675,1.92988c-0.94639,1.5154 -1.61278,1.71177 -3.10283,0.91432c-1.46606,-0.78461 -2.38781,-0.55916 -4.05324,0.99138c-1.90321,1.77191 -2.45017,1.85117 -4.67064,0.67687z" id="e_TL"> <title>Tlaxcala</title> </path></g><g> <path d="m605.2942,502.19143c-1.8983,-6.04039 -2.14534,-6.25 -7.36582,-6.25c-4.70614,0 -5.02144,-0.15895 -5.02144,-2.53138c0,-1.39227 -0.66015,-2.78471 -1.46701,-3.09433c-2.36952,-0.90927 -6.9512,1.07343 -8.03299,3.47625c-1.62984,3.62011 -4.81976,2.37044 -6,-2.35054c-1.40514,-5.62057 -2.18355,-6.49575 -5.80902,-6.53121c-3.62279,-0.0354 -11.45834,-4.3765 -9.7761,-5.41618c0.59682,-0.36886 1.08913,-2.33159 1.09402,-4.36163c0.008,-3.45002 0.35106,-3.86149 5.25,-6.30285c3.5722,-1.78018 5.14675,-3.13693 4.94478,-4.2608c-0.16297,-0.90691 1.07453,-4.14678 2.75,-7.19972c1.67548,-3.05294 3.04632,-6.20189 3.04632,-6.99768c0,-1.16008 0.36856,-1.21671 1.8594,-0.28566c1.4964,0.93451 2.36156,0.78975 4.43162,-0.74153c1.41473,-1.04651 3.04921,-2.9281 3.63218,-4.18131c0.96764,-2.08013 1.25665,-2.15581 3.31838,-0.86906c1.24213,0.77524 4.66833,1.67251 7.61378,1.99394l5.35536,0.58442l-0.40121,-3.43672c-0.25296,-2.16678 0.0658,-3.61592 0.86261,-3.92169c1.64724,-0.6321 2.50064,0.81391 1.70461,2.88832c-0.87855,2.28946 3.43567,6.73368 5.80631,5.98126c0.99933,-0.31717 1.81696,-0.14884 1.81696,0.37408c0,0.52292 0.92937,1.19379 2.06527,1.49084c1.96235,0.51316 1.98762,0.69023 0.50707,3.55328c-0.857,1.65727 -1.28823,3.71671 -0.95827,4.57655c0.69792,1.81876 0.00074,1.96275 -2.64568,0.54644c-1.5433,-0.82595 -2.20981,-0.54427 -3.54926,1.5c-0.90703,1.3843 -2.2724,2.51691 -3.03414,2.51691c-0.76174,0 -1.38499,0.675 -1.38499,1.5c0,0.825 0.64051,1.5 1.42336,1.5c1.21395,0 1.20254,0.44262 -0.0776,3.00865c-1.67501,3.35763 -1.01428,8.7976 1.17036,9.63592c1.96481,0.75397 5.29746,-1.34601 9.94643,-6.26749c4.56102,-4.82837 5.97279,-5.3006 7.47198,-2.49934c0.81885,1.53004 0.31614,2.58984 -2.71482,5.72333c-2.04586,2.11507 -4.35601,3.85758 -5.13366,3.87226c-2.47462,0.0467 -2.29938,2.34081 0.30938,4.05014c2.09498,1.37268 2.4194,2.184 1.92483,4.81373c-0.32716,1.73954 -1.20806,3.87323 -1.95756,4.74154c-0.74951,0.86831 -1.36274,2.90878 -1.36274,4.53439c0,2.20194 -0.74062,3.39315 -2.90429,4.67126c-3.80561,2.24803 -7.99636,2.23148 -8.70845,-0.0344l0.00004,0.00001z" id="e_HI"> <title>Hidalgo</title> </path></g><g> <path d="m431.65694,448.17847c-0.9625,-0.21103 -1.75,-0.77037 -1.75,-1.24298c0,-0.4726 -0.95946,-1.1638 -2.13213,-1.536c-1.17267,-0.37219 -1.68788,-0.96501 -1.14491,-1.31738c0.54297,-0.35238 1.52805,-2.30006 2.18906,-4.3282c0.66101,-2.02813 2.02634,-4.73569 3.03405,-6.01679c2.46602,-3.13504 5.04286,-9.4597 4.21882,-10.3548c-0.36569,-0.39724 0.50134,-0.44325 1.92672,-0.10227c5.5066,1.31731 13.04381,-8.75294 13.29773,-17.76672c0.10326,-3.66535 -0.11857,-3.98806 -3.31608,-4.8244c-4.90096,-1.28187 -8.07326,0.60385 -8.07326,4.79903c0,3.81277 -1.77612,5.58628 -4.80204,4.79499c-2.63254,-0.68843 -2.65749,-1.07256 -0.55608,-8.56193c1.57478,-5.61247 1.56456,-5.91014 -0.25,-7.2838c-2.81236,-2.129 -3.0857,-1.9337 -4.88797,3.49245c-0.91126,2.74353 -2.07242,5.24509 -2.58037,5.55901c-1.15829,0.71587 -1.19618,0.93047 0.91335,-5.17292c0.97438,-2.81912 2.53469,-5.88877 3.46735,-6.82143c3.01501,-3.015 1.80131,-4.11535 -5.30424,-4.80889c-2.15075,-0.20992 -2.54378,0.21001 -2.81336,3.00599c-0.18691,1.93858 0.14379,3.25 0.81955,3.25c0.6231,0 0.98911,1.0125 0.81336,2.25c-0.25095,1.767 -0.85622,2.17421 -2.81955,1.89694c-1.375,-0.19418 -2.84654,-0.86918 -3.27009,-1.5c-1.15261,-1.71664 -0.16859,-19.30663 1.45539,-26.01627c0.78133,-3.22813 2.18427,-6.42774 3.11765,-7.11024c0.93338,-0.6825 1.69705,-1.75381 1.69705,-2.38067c0,-0.62687 1.1293,-1.13976 2.50955,-1.13976c2.38539,0 2.48902,-0.23499 2.09473,-4.75c-0.60349,-6.91062 0.22941,-9.83042 3.24786,-11.38568c1.45632,-0.75038 3.506,-2.4251 4.55483,-3.72161c1.04884,-1.2965 2.66429,-3.0965 3.5899,-4c0.9256,-0.90349 1.987,-2.48535 2.35866,-3.51524c0.58315,-1.61597 1.39294,-1.79206 5.91011,-1.28517c2.8789,0.32306 7.25936,0.95995 9.73436,1.41532c2.475,0.45537 7.2,0.5837 10.5,0.28516l6,-0.54278l0.29369,-6.66234c0.2308,-5.23551 -0.23009,-7.9514 -2.15203,-12.68131c-1.34515,-3.31042 -2.18981,-6.27487 -1.87702,-6.58765c1.12445,-1.12445 10.81762,-0.44994 14.73536,1.02538c5.10585,1.92273 5.36445,2.00391 9.25,2.90348c1.8498,0.42827 3.25,1.38517 3.25,2.22106c0,0.80774 0.80522,1.67919 1.78937,1.93655c0.98416,0.25736 2.22166,1.45273 2.75,2.65638c0.82858,1.88762 1.61358,2.14274 5.71063,1.85594c2.93889,-0.20573 4.75,0.0791 4.75,0.74712c0,0.59379 1.65361,2.90998 3.67469,5.14707c2.89717,3.20682 4.1667,3.94396 6,3.48383c3.25903,-0.81796 3.10512,2.14206 -0.18943,3.64316c-1.49179,0.67971 -2.84832,2.39981 -3.33479,4.22856c-0.67942,2.55412 -1.26412,3.03544 -3.40962,2.80678c-2.98718,-0.31837 -4.20968,2.05986 -3.17596,6.17851c0.55319,2.20409 -0.47953,3.81345 -7.2096,11.23515c-7.79524,8.59634 -11.90395,11.36233 -16.87804,11.36233c-3.3044,0 -11.07744,3.51572 -11.7714,5.32417c-0.29162,0.75995 0.32141,2.11091 1.36229,3.00215c1.38107,1.18251 1.73518,2.40706 1.31034,4.53129c-0.91853,4.59264 1.95273,9.33164 7.6807,12.67695c2.92517,1.70839 5.25284,3.86046 5.57839,5.15755c0.79297,3.15944 3.16209,4.99355 3.91518,3.03102c0.32795,-0.85463 1.35104,-1.29954 2.3735,-1.03217c2.19584,0.57423 7.07375,-3.70848 7.07375,-6.21062c0,-1.71387 0.0854,-1.71303 2,0.0197c2.48272,2.24683 2.62585,7.04806 0.25,8.38644c-1.66541,0.93817 -1.66452,1.14599 0.0185,4.29969c2.26873,4.25114 1.44935,11.1758 -1.80541,15.25766l-2.33071,2.92298l-3.29815,-3.22455c-1.89646,-1.85415 -4.15581,-3.12271 -5.31621,-2.9849c-3.12407,0.371 -6.51663,-2.30402 -6.52872,-5.14787c-0.007,-1.56408 -1.65827,-4.29586 -4.38421,-7.25143c-3.71691,-4.03003 -4.55686,-4.52109 -5.59456,-3.27075c-1.59772,1.92515 -6.83227,4.51273 -9.12901,4.51273c-0.99615,0 -2.29036,0.89534 -2.87601,1.98965c-0.58566,1.09431 -2.35886,2.65882 -3.94044,3.47669c-5.0322,2.60225 -6.06745,4.29328 -6.0333,9.85509c0.0299,4.86625 1.56319,8.60858 3.57844,8.7339c1.78274,0.11086 5.52629,5.93915 4.96026,7.72256c-0.313,0.98616 -2.45121,3.23957 -4.75158,5.00757c-4.25751,3.2722 -8.83226,4.05974 -19.81892,3.41181c-1.925,-0.11353 -4.625,0.16031 -6,0.60852c-1.375,0.44821 -3.2875,0.64228 -4.25,0.43125l0.00003,-0.00004z" id="e_ZA"> <title>Zacatecas</title> </path></g><g> <path d="m733.90694,584.82376c0,-1.29093 -1.13573,-2.46342 -3.25,-3.35519c-1.7875,-0.75395 -4.8198,-3.00061 -6.73844,-4.99259c-2.73735,-2.84198 -3.19042,-3.80597 -2.10429,-4.47724c1.66595,-1.02961 0.73059,-4.05731 -1.25344,-4.05731c-0.77492,0 -1.96914,0.675 -2.65383,1.5c-0.68469,0.825 -1.95267,1.5 -2.81773,1.5c-0.86506,0 -2.77927,1.15584 -4.2538,2.56853c-6.47389,6.20238 -15.49434,-2.03252 -10.31943,-9.42074c1.37587,-1.96433 1.43209,-2.92925 0.38796,-6.65852c-1.39752,-4.99144 -2.1698,-5.47524 -7.86446,-4.92673c-2.30368,0.22189 -4.13254,-0.0358 -4.13254,-0.58225c0,-0.53916 -0.9,-0.98029 -2,-0.98029c-1.11111,0 -2,-0.66667 -2,-1.5c0,-0.825 -0.9,-2.4 -2,-3.5c-1.1,-1.1 -2.01431,-2.5625 -2.0318,-3.25c-0.0561,-2.20634 -2.4357,-4.50067 -6.37495,-6.14659c-5.2199,-2.18101 -5.84617,-2.04192 -5.16264,1.14659c0.39915,1.86195 -0.0924,3.86123 -1.52208,6.19113l-2.11159,3.44112l-1.68239,-2.23038c-1.61419,-2.13999 -1.8316,-2.16804 -5.36384,-0.69218c-3.46817,1.4491 -3.74141,1.42621 -4.71609,-0.395c-0.56904,-1.06326 -1.03462,-2.60204 -1.03462,-3.41949c0,-0.84562 -1.3223,-1.77671 -3.06757,-2.16004c-4.00855,-0.88043 -4.60074,-2.73786 -2.0258,-6.35404c1.15135,-1.61692 2.09337,-4.29019 2.09337,-5.9406c0,-2.65265 0.493,-3.15674 4.25,-4.34563c5.72225,-1.81078 5.94737,-4.90271 0.44027,-6.04691c-5.54006,-1.15106 -7.38154,-2.40261 -7.9559,-5.40719c-0.66932,-3.50133 3.71558,-15.31802 6.99758,-18.85751c2.05196,-2.21294 2.27585,-2.91452 1.15635,-3.62348c-0.76356,-0.48354 -1.89011,-0.88607 -2.50344,-0.89449c-0.61333,-0.008 -2.26085,-0.91653 -3.66117,-2.01801c-2.57292,-2.02387 -5.72369,-1.79834 -5.72369,0.40969c0,2.57535 -2.14468,3.44833 -3.975,1.61801c-0.97625,-0.97625 -2.22017,-1.94375 -2.76426,-2.15c-0.60423,-0.22905 -0.7016,-2.12644 -0.25017,-4.875c0.40651,-2.475 0.79542,-4.13186 0.86426,-3.68191c0.0688,0.44996 1.45484,-0.12871 3.08,-1.28592c3.4027,-2.42294 3.19399,-3.85863 -0.90067,-6.19559c-2.14556,-1.22454 -2.99891,-2.54375 -3.23434,-5c-0.27307,-2.84882 -0.6598,-3.28897 -2.6455,-3.0109c-2.80414,0.39268 -6.17432,3.55677 -6.17432,5.79676c0,1.32766 -0.27211,1.39662 -1.49764,0.37952c-1.22874,-1.01976 -2.1302,-0.76046 -5.02058,1.44414c-1.93761,1.47789 -4.19498,3.71275 -5.01638,4.96636c-0.82139,1.25361 -2.62476,2.79475 -4.00747,3.42475c-2.27078,1.03464 -2.61034,0.89211 -3.50963,-1.47319c-0.78773,-2.07188 -0.57559,-3.33054 1.01597,-6.02803l2.01158,-3.40937l-2.23793,-0.89993c-1.52328,-0.61254 -1.71804,-0.92016 -0.60989,-0.9633c0.89541,-0.0349 2.26805,-1.02732 3.0503,-2.20545c1.18171,-1.77975 1.77209,-1.95484 3.49049,-1.03518c2.45078,1.31162 3.33118,0.66613 3.33118,-2.44237c0,-1.25746 0.51616,-3.41913 1.14702,-4.80372c0.88376,-1.93964 0.85776,-2.86599 -0.1133,-4.03605c-0.69319,-0.83523 -1.65935,-1.272 -2.14703,-0.97059c-0.48768,0.3014 -0.88669,-0.18388 -0.88669,-1.0784c0,-1.19008 -0.55577,-1.45001 -2.07166,-0.96888c-2.68511,0.85222 -5.89,-1.95338 -5.20846,-4.55955c0.2766,-1.05775 -0.42384,-3.7012 -1.55655,-5.87435l-2.05947,-3.95117l2.02603,-2.57567c1.48678,-1.89015 1.85249,-3.36574 1.37404,-5.54411c-0.43464,-1.97891 -0.12727,-3.71756 0.92205,-5.21568c0.86571,-1.23598 1.57402,-2.99896 1.57402,-3.91774c0,-0.91878 0.675,-1.92952 1.5,-2.24611c2.40356,-0.92233 1.76238,-2.38797 -2.23213,-5.10232c-3.82102,-2.59645 -3.72585,-2.87423 0.88296,-2.57705c1.45796,0.094 2.94702,-0.30831 3.30902,-0.89404c1.05356,-1.70469 2.03475,-1.30265 7.16294,2.93504c2.6623,2.2 5.34304,4 5.95719,4c1.15762,0 3.01053,3.91912 7.06509,14.94346c1.30339,3.5439 3.24845,7.37875 4.32237,8.52188c1.07392,1.14314 3.11432,4.99358 4.53423,8.55654c1.52321,3.82216 2.2842,5.04316 1.85612,2.97812c-0.39904,-1.925 -0.66944,-5.525 -0.60089,-8c0.10911,-3.93928 -0.38127,-5.06072 -3.93553,-9c-2.23309,-2.475 -3.73826,-3.6 -3.34483,-2.5c0.39343,1.1 0.96339,2.675 1.26657,3.5c0.41763,1.13641 0.2555,1.22781 -0.66886,0.37707c-0.67105,-0.61761 -1.34428,-2.64261 -1.49605,-4.5c-0.15178,-1.85739 -1.46896,-5.12737 -2.92708,-7.26662c-1.45811,-2.13925 -2.65112,-4.36675 -2.65112,-4.95c0,-1.4273 0.89585,-0.32666 5.45074,6.69683c2.08922,3.2215 5.26917,6.72494 7.06655,7.78542c3.74718,2.21089 4.82515,5.01162 3.25516,8.45738c-1.38075,3.03041 0.52894,14.60675 3.3092,20.06007c1.05509,2.06951 1.91835,4.37193 1.91835,5.11651c0,0.74458 2.57436,3.91193 5.7208,7.03856c6.80351,6.76068 11.13462,12.24975 14.68897,18.61621c1.43719,2.57425 3.58226,5.99134 4.76681,7.59354c1.37801,1.86386 2.32074,4.92687 2.6174,8.50421c0.40884,4.93005 0.87046,5.90917 3.90419,8.28097c1.8923,1.47942 4.07939,3.89546 4.86022,5.36898c0.78082,1.47352 2.25632,2.94467 3.27889,3.26922c1.02256,0.32455 2.37197,1.71548 2.99867,3.09095c0.62671,1.37547 2.27,2.93068 3.65176,3.45603c2.97152,1.12977 3.41257,2.42518 0.51229,1.50467c-1.14731,-0.36414 -2,-0.1797 -2,0.43261c0,0.58707 0.45,1.06739 1,1.06739c0.55,0 0.8875,0.55758 0.75,1.23906c-0.1627,0.80637 0.72882,1.12816 2.55295,0.9215c1.54162,-0.17466 3.5273,0.28026 4.41262,1.01094c1.36057,1.12291 1.5337,1.09637 1.11872,-0.1715c-0.27002,-0.825 -1.4682,-1.6438 -2.66262,-1.81955c-1.19442,-0.17575 -2.17167,-0.71829 -2.17167,-1.20564c0,-0.48735 1.77247,-0.26073 3.93883,0.50361c2.55312,0.90079 5.91376,1.18587 9.55247,0.81032c5.32825,-0.54992 5.78424,-0.41401 8.9698,2.67356c1.84589,1.78911 4.85523,3.55952 6.68741,3.93424c2.03139,0.41546 3.77774,1.57692 4.47555,2.97657c0.62937,1.26239 1.61126,2.76221 2.18198,3.33293c0.57072,0.57072 0.77614,1.77034 0.45649,2.66582c-0.31966,0.89547 -0.21235,1.2935 0.23845,0.8845c0.45079,-0.409 1.48119,0.20087 2.28976,1.35527c1.34555,1.92104 2.07946,2.0418 8.66087,1.42507l7.19073,-0.67382l1.17883,3.93458c0.64836,2.16402 1.18628,4.78237 1.19539,5.81856c0.009,1.03619 2.08452,3.68398 4.61202,5.88398c7.27233,6.33003 8.48603,7.7956 9.95762,12.02409c1.83474,5.27198 1.92058,4.97935 -2.16822,7.3918c-3.28331,1.9372 -4.99282,2.10666 -20.5,2.03213c-16.17961,-0.0778 -16.91798,-0.16792 -16.91798,-2.06569z" id="e_VE"> <title>Veracruz</title> </path></g><g> <path d="m919.47313,551.69143c-0.30599,-2.3375 -1.26435,-13.25 -2.12968,-24.25c-0.86533,-11 -2.21754,-24.15766 -3.00492,-29.23923c-0.78737,-5.08158 -1.43159,-9.45613 -1.43159,-9.72122c0,-0.26509 3.33305,-2.85743 7.40677,-5.76076c10.07867,-7.18304 43.59849,-32.4223 46.17159,-34.76557c3.3846,-3.08233 6.4721,-15.40724 5.5524,-22.16432l-0.7692,-5.65111l3.7619,-0.60153c2.069,-0.33085 4.0392,-1.05035 4.3782,-1.5989c1.2659,-2.04826 -0.5745,-2.71158 -5.2289,-1.88467c-3.3185,0.58957 -6.2963,0.43226 -9.7728,-0.51626l-5,-1.36419l6.5,0.0915c3.575,0.0503 9.0496,-0.53688 12.1657,-1.30486c5.563,-1.37104 5.7391,-1.34764 9.7285,1.29242c2.2346,1.4788 4.7118,2.68873 5.5048,2.68873c1.0419,0 1.6422,1.87059 2.1639,6.74271c1.1352,10.59994 -1.2078,16.73961 -9.879,25.88751c-2.0175,2.12838 -3.9468,5.33228 -4.2873,7.11978c-0.3405,1.7875 -0.9842,3.25 -1.4303,3.25c-1.6882,0 -3.0628,7.08068 -2.5601,13.18705c0.2858,3.47212 0.2784,5.52545 -0.0166,4.56295c-0.9206,-3.00441 -2.2724,-1.9343 -3.7896,3c-0.8034,2.6125 -1.492,3.9625 -1.5303,3c-0.0383,-0.9625 -0.5197,-1.75 -1.0697,-1.75c-1.4633,0 -1.2204,2.57213 0.3674,3.88989c1.0417,0.8646 1.6751,0.76387 2.6602,-0.42307c0.7111,-0.85681 1.8958,-1.32648 2.6327,-1.04371c0.765,0.29357 1.3397,-0.15164 1.3397,-1.03783c0,-0.85357 0.5625,-1.36268 1.25,-1.13136c2.9312,0.98622 -1.4041,11.10994 -4.4758,10.45183c-1.5891,-0.34048 -3.1437,2.8901 -2.3619,4.90833c0.6911,1.78397 0.8003,1.79132 2.0194,0.13592c0.7089,-0.9625 2.2517,-1.75 3.4286,-1.75c2.6503,0 2.6721,0.46766 0.1397,3c-1.3446,1.34466 -2.0195,3.39261 -2.0596,6.25c-0.0328,2.3375 -0.4681,6.5 -0.9674,9.25c-0.4993,2.75 -1.4193,8.6 -2.0445,13c-1.0272,7.22947 -2.9285,12.55316 -2.9285,8.2c0,-0.935 -0.45,-1.7 -1,-1.7c-0.55,0 -0.9273,-0.3375 -0.8385,-0.75c0.3428,-1.59198 -2.1755,-6.25076 -3.3867,-6.26531c-3.2501,-0.039 -3.7407,-1.44741 -2.2407,-6.43159c1.6739,-5.56184 1.8967,-9.5531 0.5333,-9.5531c-0.5129,0 -1.2109,0.87698 -1.5511,1.94885c-0.3402,1.07186 -1.5192,2.23471 -2.6201,2.5841c-1.4658,0.46523 -1.7238,0.96979 -0.9641,1.88522c1.6222,1.95461 -1.61659,9.11263 -4.79008,10.58655c-1.45309,0.67488 -3.2902,1.54456 -4.08246,1.93261c-0.79227,0.38806 -1.86893,2.02341 -2.39259,3.63411c-0.52365,1.61071 -1.84565,4.20408 -2.93777,5.76305c-1.09212,1.55896 -2.73602,4.93176 -3.65311,7.4951c-1.8401,5.14319 -4.13391,6.33301 -7.07605,3.67041c-2.83349,-2.56427 -5.44528,-1.54973 -5.81336,2.25819c-0.2855,2.95357 -0.61347,3.24181 -3.68873,3.24181c-3.21708,0 -3.40145,-0.1993 -3.93172,-4.25l0,-0.00003z" id="e_QU"> <title>QuintanaRoo</title> </path></g><g> <path d="m378.93678,462.30272c-0.0164,-0.62629 -1.60484,-1.43418 -3.52984,-1.79531c-1.925,-0.36113 -3.48562,-0.97372 -3.46805,-1.36129c0.0176,-0.38758 2.2816,-2.95469 5.03117,-5.70469c3.75418,-3.75477 4.86922,-5.53234 4.47723,-7.13749c-0.28709,-1.17563 -0.12507,-4.26208 0.36005,-6.85879c0.73805,-3.95057 0.59371,-5.00961 -0.88418,-6.4875c-0.97142,-0.97142 -2.17914,-1.93497 -2.68381,-2.14122c-0.50468,-0.20625 -1.94763,-2.0625 -3.20656,-4.125c-1.90509,-3.12109 -2.02373,-3.75 -0.70741,-3.75c2.00254,0 2.05078,-2.3657 0.0816,-4c-1.26027,-1.04593 -1.50986,-0.86573 -1.5617,1.12756c-0.0832,3.19799 -2.34551,-4.34386 -4.38783,-14.62756c-0.87384,-4.4 -1.85763,-9.0125 -2.18621,-10.25c-0.35755,-1.34664 -0.14911,-2.25 0.51916,-2.25c0.61412,0 1.11658,1.15087 1.11658,2.5575c0,2.39039 0.2777,2.5374 4.25,2.25c3.19739,-0.23134 4.15202,-0.67901 3.85439,-1.8075c-0.21759,-0.825 -0.85607,-3.12384 -1.41883,-5.10853c-0.88472,-3.12007 -0.71701,-4.03857 1.23898,-6.78549c1.24421,-1.74733 2.03035,-3.78116 1.74697,-4.51962c-1.2896,-3.36066 3.57105,-4.49279 10.44592,-2.43303c3.3477,1.00299 3.92399,1.62215 4.42114,4.75c0.31442,1.97817 0.72984,4.38457 0.92316,5.34755c0.19797,0.98616 -0.74918,2.61667 -2.16857,3.73316c-4.69583,3.69374 -0.43541,6.90518 4.53868,3.42119c3.23346,-2.2648 7.16816,-1.11715 7.16816,2.09077c0,3.40396 4.05619,5.91884 8.40748,5.21273l3.36875,-0.54668l-1.37625,5.16898c-1.97606,7.42179 -1.76718,8.9444 1.67801,12.23188c2.90428,2.77133 3.041,3.23593 2.42242,8.23214c-0.59926,4.84014 -0.44215,5.46293 1.82862,7.24912c4.32994,3.40593 0.66047,8.62613 -4.22552,6.01123c-1.08461,-0.58047 -2.22661,-1.0554 -2.53777,-1.0554c-1.23035,0 -0.47506,5.94783 0.93426,7.35714c1.86809,1.86809 1.89568,3.06959 0.10461,4.55604c-0.76747,0.63694 -1.69918,2.7774 -2.07048,4.75658l-0.67508,3.5985l-3.75748,-3.66908c-4.8504,-4.73629 -9.84805,-5.73036 -13.67503,-2.72006c-1.48294,1.16648 -3.64807,2.11391 -4.8114,2.1054c-1.25392,-0.009 -3.62987,1.72129 -5.8353,4.25c-2.04609,2.34601 -3.73359,3.75306 -3.75,3.12677l-0.00004,0z" id="e_NA"> <title>Nayarit</title> </path></g><g> <path d="m225.91505,372.45006c-1.51661,-1.61435 -2.59382,-4.34252 -3.06006,-7.75c-0.39575,-2.89225 -2.00846,-7.91224 -3.5838,-11.15553c-2.3426,-4.82293 -3.75658,-6.38858 -7.76383,-8.5966c-3.12381,-1.72123 -5.55529,-3.9778 -6.70876,-6.22614c-2.61932,-5.10557 -16.3387,-18.62087 -19.63229,-19.34024c-4.33366,-0.94654 -8.25937,-2.60612 -8.25937,-3.49163c0,-0.44489 1.4625,-0.40471 3.25,0.0893l3.25,0.89816l-2.75,-2.42c-1.5125,-1.331 -2.75,-3.26481 -2.75,-4.29737c0,-2.03456 -3.87685,-2.56674 -5.23469,-0.71856c-0.40408,0.55 -0.75589,-0.125 -0.7818,-1.5c-0.0259,-1.375 -0.70781,-3.37351 -1.51531,-4.44113c-0.80751,-1.06762 -1.52144,-2.86762 -1.58651,-4c-0.0831,-1.44654 -0.34536,-1.16663 -0.88169,0.94113c-0.71918,2.82632 -0.77429,2.85527 -0.95197,0.5c-0.17238,-2.28492 -0.25641,-2.32794 -0.97678,-0.5c-0.68835,1.74668 -0.87974,1.58725 -1.51109,-1.25873c-0.3976,-1.7923 -1.13629,-3.00324 -1.64153,-2.69098c-0.50525,0.31226 -0.91863,-0.13381 -0.91863,-0.99127c0,-0.85746 0.50625,-1.44652 1.125,-1.30902c0.61875,0.1375 1.35213,-0.37514 1.62973,-1.1392c0.30912,-0.85081 0.0669,-1.1186 -0.625,-0.69098c-1.57874,0.97572 -1.42465,-0.24952 0.87027,-6.91982c1.1,-3.19721 2,-6.64265 2,-7.65655c0,-1.0139 0.5051,-1.84345 1.12244,-1.84345c0.77551,0 0.73766,-0.46364 -0.12244,-1.5c-0.8601,-1.03636 -0.89795,-1.5 -0.12244,-1.5c0.6923,0 1.06806,-1.82027 0.98053,-4.75l-0.1419,-4.75l-0.71619,4c-0.71001,3.96548 -0.7178,3.95253 -0.90223,-1.5c-0.23088,-6.82569 -2.25665,-14.78037 -3.64608,-14.31723c-0.57164,0.19055 -1.61809,-1.25403 -2.32544,-3.21018c-1.00683,-2.78434 -1.69192,-3.42783 -3.15502,-2.96346c-1.11841,0.35497 -2.60443,-0.13013 -3.70046,-1.20798c-1.00734,-0.99063 -3.09734,-2.46216 -4.64444,-3.27005c-1.5471,-0.8079 -2.32092,-1.6329 -1.71962,-1.83334c1.64502,-0.54834 1.31338,-2.19776 -0.44189,-2.19776c-2.45597,0 -6.39176,-3.02683 -5.83212,-4.48521c0.2816,-0.73385 -0.22382,-2.75722 -1.12317,-4.49637c-1.35591,-2.62203 -1.4123,-3.43065 -0.3302,-4.7345c1.14618,-1.38107 1.00172,-1.47784 -1.18717,-0.79526c-2.41575,0.75331 -2.4385,0.71699 -0.74216,-1.1845c1.77549,-1.99022 2.42041,-6.30416 0.94245,-6.30416c-0.44416,0 -1.58842,1.76988 -2.54281,3.93306c-1.66891,3.78265 -1.85069,3.89281 -4.75371,2.88082c-1.92876,-0.67237 -2.82715,-1.55072 -2.48857,-2.43306c0.30244,-0.78814 -0.10049,-1.38082 -0.93874,-1.38082c-0.80774,0 -1.46862,0.81 -1.46862,1.8c0,0.99 -0.50483,2.30483 -1.12186,2.92186c-1.27442,1.27442 -4.16224,0.54683 -3.30901,-0.83371c0.3067,-0.49625 -0.13678,-1.16875 -0.98551,-1.49444c-0.84873,-0.32568 -2.48896,-2.12251 -3.64494,-3.99293c-1.4202,-2.29793 -2.85964,-3.40078 -4.43868,-3.40078c-1.57904,0 -3.01848,-1.10285 -4.43868,-3.40078c-2.21606,-3.58567 -4.21698,-4.86045 -6.34643,-4.04331c-2.37008,0.90949 -5.71256,-3.36255 -5.74669,-7.34487c-0.03803,-4.43763 -1.53889,-6.64844 -5.11827,-7.53937c-1.74519,-0.43438 -3.00789,-1.68604 -3.69798,-3.66564c-0.57635,-1.65332 -1.66169,-3.00603 -2.41187,-3.00603c-1.78194,0 -6.00371,-5.71903 -4.78004,-6.4753c1.26011,-0.77879 4.76192,-0.0855 9.43882,1.86859c4.7858,1.99964 8.63621,2.04742 11.16001,0.13851c2.64978,-2.00419 3.44113,-1.88911 3.44113,0.50042c0,1.18887 0.93373,2.38512 2.25,2.88259c2.49436,0.94272 4.09461,0.4518 3.20729,-0.98391c-0.31643,-0.51199 0.12623,-0.9309 0.98369,-0.9309c0.85746,0 1.55902,-0.45857 1.55902,-1.01905c0,-0.58887 -1.06013,-0.75298 -2.5113,-0.38876c-2.11632,0.53116 -2.40358,0.34957 -1.8264,-1.15455c0.53228,-1.38708 0.30984,-1.64093 -0.99809,-1.13903c-1.33622,0.51276 -1.21746,0.0128 0.57639,-2.42634c2.07733,-2.82461 2.28513,-2.90309 2.57873,-0.97387c0.39757,2.61232 0.44103,2.62095 23.87401,4.74015c10.55634,0.95468 18.98562,2.07189 18.73173,2.48269c-0.98762,1.59801 4.90636,11.99879 7.58431,13.38361c2.9277,1.51397 6.8182,8.65778 7.71091,14.15892c0.38507,2.37294 1.4682,3.83991 3.89035,5.26901c2.90941,1.71659 3.27883,2.36988 2.77229,4.90258c-0.33521,1.67603 -0.11503,3.21218 0.51633,3.60238c0.60541,0.37416 1.11075,2.79124 1.12298,5.37128c0.0251,5.28893 3.03481,10.52287 4.95245,8.6123c0.77639,-0.77353 0.50877,-1.80828 -0.94601,-3.65773c-1.99882,-2.54108 -2.88358,-9.76359 -1.19604,-9.76359c1.56077,0 7.2008,7.91721 7.81003,10.96335c0.33403,1.67016 1.22581,3.03665 1.98173,3.03665c0.89265,0 1.35952,1.13918 1.33194,3.25c-0.0599,4.58848 1.10449,11.03041 2.25249,12.4613c0.63649,0.79334 0.5565,2.46974 -0.23184,4.85842c-1.10879,3.35966 -0.93926,4.19101 2.15095,10.54789c1.84503,3.79542 4.03353,7.11625 4.86333,7.37962c0.8298,0.26337 1.5549,1.49673 1.61134,2.74081c0.29015,6.39656 1.7116,11.55141 4.38205,15.89146c3.7007,6.0144 4.6095,9.44966 3.00983,11.37714c-0.87421,1.05336 -1.02022,3.42877 -0.50593,8.23114c0.90103,8.4137 3.32175,12.22932 7.82953,12.34117c1.75005,0.0434 2.61941,0.30592 1.93191,0.58333c-1.97799,0.79814 -1.45421,2.33772 0.79531,2.33772c1.75708,0 1.96548,-0.45801 1.47881,-3.25c-0.31158,-1.7875 -0.13866,-3.90028 0.38426,-4.69507c0.76127,-1.15705 1.96133,-0.3855 6.02119,3.87123c2.78874,2.92396 5.07043,5.93674 5.07043,6.69506c0,0.80403 1.04214,1.37878 2.5,1.37878c1.91616,0 2.5,0.51862 2.5,2.22072c0,1.2214 0.5625,4.67551 1.25,7.6758c1.01496,4.42936 1.85151,5.811 4.44903,7.34798c5.40183,3.19633 5.5819,12.00023 0.35805,17.5055c-1.17425,1.2375 -2.77649,2.25 -3.56055,2.25c-0.78406,0 -3.44063,1.125 -5.90349,2.5c-2.46286,1.375 -4.65039,2.5 -4.86117,2.5c-0.21078,0 -1.43648,-1.12112 -2.72376,-2.49137l0,-0.00002z" id="e_BS"> <title>BajaCaliforniaSur</title> </path></g><g> <path d="m130.63284,176.952c-9.22575,-0.94899 -16.99416,-1.94549 -17.26312,-2.21446c-0.26897,-0.26897 0.19204,-2.11906 1.02446,-4.11133c1.34147,-3.21059 1.34296,-3.55685 0.0131,-3.04655c-1.66479,0.63884 -2.07853,-1.64263 -0.57819,-3.18823c0.50721,-0.5225 1.21867,-2.56494 1.58104,-4.53875c0.57557,-3.13509 0.273,-3.95293 -2.39357,-6.46974c-1.67884,-1.58456 -3.96468,-5.0016 -5.07966,-7.59343c-1.11498,-2.59184 -2.89024,-4.98634 -3.94503,-5.32111c-1.05479,-0.33478 -2.41681,-1.8278 -3.02672,-3.31783c-3.02065,-7.37956 -10.1464,-16.20914 -13.08128,-16.20914c-0.90688,0 -3.25013,-1.6875 -5.20722,-3.75c-1.9571,-2.0625 -5.40592,-5.32115 -7.66405,-7.24145c-3.42057,-2.90884 -4.10569,-4.10079 -4.10569,-7.14301c0,-2.34949 -0.54362,-3.86017 -1.52456,-4.23659c-0.9657,-0.37057 -1.35536,-1.41787 -1.06297,-2.85699c1.62815,-8.01383 1.53559,-10.45059 -0.47913,-12.61314c-1.11945,-1.20159 -1.78007,-2.59779 -1.46804,-3.10266c0.31203,-0.50488 0.10999,-1.20061 -0.44898,-1.54607c-0.56623,-0.34995 -1.01632,0.30987 -1.01632,1.48991c0,1.16492 -0.45,1.83992 -1,1.5c-0.55,-0.33991 -1,-3.7262 -1,-7.52509c0,-6.61321 -2.20468,-13.97491 -4.18521,-13.97491c-0.44813,0 -0.81479,-2.25681 -0.81479,-5.01514c0,-3.75882 -0.77543,-6.38914 -3.09544,-10.49997c-1.70249,-3.01665 -3.50249,-5.73639 -4,-6.04387c-0.4975,-0.30748 -0.90456,-2.01749 -0.90456,-3.80003c0,-1.78254 -0.5325,-3.77349 -1.18333,-4.42432c-0.65083,-0.65083 -0.86833,-1.49833 -0.48333,-1.88333c0.385,-0.385 1.2325,-0.1675 1.88333,0.48333c1.74708,1.74708 2.78333,1.44303 2.78333,-0.81667c0,-1.11111 -0.66666,-2 -1.5,-2c-0.825,0 -1.5,-0.46881 -1.5,-1.04181c0,-0.573 -0.86919,-1.97478 -1.93154,-3.11508c-1.06235,-1.1403 -2.22496,-3.93399 -2.58357,-6.20819c-0.35861,-2.2742 -1.73942,-6.26413 -3.06846,-8.86651c-1.32903,-2.60238 -2.41643,-5.18988 -2.41643,-5.75c0,-1.40624 9.09477,-1.28912 38.5,0.49578c29.29522,1.77822 35.5,2.36672 35.5,3.36704c0,0.40553 -2.26069,3.08275 -5.02376,5.94938c-3.90492,4.05128 -4.82713,5.59706 -4.14086,6.94073c2.81421,5.50997 1.67739,14.73077 -1.66201,13.48064c-1.51022,-0.56536 -1.52713,-0.44178 -0.17337,1.26753c0.825,1.04168 2.2875,2.70093 3.25,3.68723c1.8643,1.91039 2.2824,4.78103 0.92388,6.34326c-1.57678,1.81323 -3.27879,8.97672 -3.31445,13.95c-0.0539,7.51759 0.13319,8.55994 1.6402,9.13824c1.12642,0.43224 1.29865,3.58514 0.92712,16.97203c-0.38988,14.04784 -0.2358,16.52577 1.05847,17.02243c0.83313,0.3197 1.51478,1.17599 1.51478,1.90286c0,0.72687 0.71871,2.04029 1.59713,2.91871c0.87842,0.87842 1.34807,2.24615 1.04367,3.0394c-0.5699,1.48514 0.78103,2.78718 3.28431,3.16543c0.78382,0.11843 1.87309,1.01581 2.4206,1.99417c0.54752,0.97836 1.98788,2.77123 3.20081,3.98416c1.21292,1.21292 3.26903,3.69916 4.56912,5.52498c1.3001,1.82581 3.84868,4.62339 5.66353,6.21684c1.81484,1.59346 3.21044,3.62249 3.10132,4.50897c-0.10911,0.88648 0.15904,2.89758 0.59591,4.46911c0.52527,1.88958 0.39663,3.1031 -0.37981,3.58297c-0.86659,0.53558 -0.89378,1.46294 -0.10382,3.54069c1.02111,2.68571 1.13399,2.72791 2.45699,0.9186c1.58483,-2.16738 3.05024,-1.23499 3.05024,1.94077c0,1.49286 0.61749,2.15974 2,2.15997c1.66512,0.00027 2.02422,0.71533 2.14466,4.27061c0.17103,5.04859 1.44755,6.87077 5.42536,7.74444c2.48102,0.54492 3.02876,1.25014 3.56225,4.58644c0.34674,2.16838 1.02133,4.18409 1.49908,4.47936c0.47776,0.29527 0.86865,2.3103 0.86865,4.47784c0,3.91082 -0.0287,3.93997 -3.75,3.80898c-2.0625,-0.0726 -11.29834,-0.90845 -20.5241,-1.85743l0.00003,0z" id="e_BN"> <title>BajaCaliforniaNorte</title> </path></g><g> <path d="m258.47439,247.14453c0.59798,-4.50779 0.45613,-5.06084 -1.45346,-5.66692c-2.90654,-0.9225 -4.68087,-4.27608 -2.49388,-4.71356c1.37712,-0.27548 1.2913,-0.68788 -0.58738,-2.82262c-1.54447,-1.75497 -2.03289,-1.97158 -1.63894,-0.72686c0.49033,1.54924 0.27993,1.62557 -1.6663,0.60449c-2.21414,-1.16165 -2.21608,-1.15579 -0.3225,0.97686c1.04774,1.18003 1.4118,2.14551 0.80901,2.14551c-0.60278,0 -1.39304,-0.48068 -1.75613,-1.06817c-0.3631,-0.5875 -1.21796,-0.85413 -1.8997,-0.59252c-0.68175,0.26161 -1.743,0.16449 -2.35835,-0.21581c-1.60579,-0.99244 -6.36837,-12.1235 -5.18721,-12.1235c0.54306,0 0.98739,-0.44871 0.98739,-0.99713c0,-1.27759 -6.33531,-3.93535 -7.00237,-2.9376c-0.27631,0.41328 -3.20131,-0.53899 -6.5,-2.11615c-3.2987,-1.57717 -5.60503,-2.88593 -5.12519,-2.90835c0.47985,-0.0224 0.30434,-0.72531 -0.39003,-1.56196c-0.69436,-0.83665 -1.41269,-3.19523 -1.59628,-5.24128c-0.1836,-2.04605 -0.79559,-3.87402 -1.35997,-4.06214c-1.25835,-0.41945 -1.37704,-4.17539 -0.13195,-4.17539c0.49182,0 0.86926,-1.0125 0.83875,-2.25c-0.0305,-1.2375 0.23,-2.925 0.5789,-3.75c0.40285,-0.95255 -0.33239,-2.20412 -2.01453,-3.42928c-2.29464,-1.67126 -2.56255,-1.70425 -2.00322,-0.24667c0.59959,1.56252 0.46941,1.56711 -1.82422,0.0643c-1.51135,-0.99027 -2.46989,-2.56682 -2.46989,-4.06234c0,-1.47868 -0.4219,-2.18325 -1.06817,-1.78384c-0.5875,0.3631 -0.85413,1.21796 -0.59252,1.8997c0.26161,0.68175 0.0581,1.87373 -0.45215,2.64885c-0.75779,1.1511 -1.29052,0.97676 -2.90748,-0.95146c-1.08882,-1.29844 -1.97968,-3.00177 -1.97968,-3.78519c0,-1.09966 -0.44213,-1.18778 -1.93931,-0.38651c-2.30205,1.23202 -2.41286,1.07597 -4.15338,-5.84848c-1.23943,-4.93097 -1.71024,-5.53429 -5.62992,-7.21446c-2.49391,-1.06901 -4.27739,-2.50158 -4.27739,-3.43576c0,-0.88125 -1.125,-3.07721 -2.5,-4.87993c-2.86886,-3.76127 -3.17657,-5.58889 -0.94098,-5.58889c0.85746,0 1.26194,-0.48068 0.89885,-1.06817c-0.3631,-0.5875 -1.26406,-0.83644 -2.00215,-0.55321c-1.37272,0.52676 -7.32976,-5.47033 -7.61224,-7.66342c-0.0861,-0.66836 -0.24357,-2.4215 -0.34996,-3.89586c-0.33005,-4.57382 -2.53812,-8.68435 -4.84134,-9.01261c-1.83862,-0.26204 -2.15218,-0.96235 -2.15218,-4.80673c0,-3.52996 -0.73713,-5.52393 -3.41952,-9.25c-1.88074,-2.6125 -3.75079,-4.75 -4.15567,-4.75c-0.40489,0 -0.77707,-3.7842 -0.82707,-8.40933c-0.10282,-9.51019 -0.52409,-11.20739 -2.93857,-11.83879c-1.06732,-0.27911 -2.18365,-2.32267 -2.99223,-5.47758c-0.70937,-2.76781 -2.83713,-7.43414 -4.72835,-10.36962c-2.43883,-3.78545 -3.43859,-6.48713 -3.43859,-9.29221c0,-2.34519 -0.70383,-4.73271 -1.72919,-5.86571c-1.63891,-1.81098 -1.63891,-1.96125 0,-2.87843c2.27147,-1.27118 2.18147,-2.47942 -0.38436,-5.16014l-2.11355,-2.20819l0.68094,2.25c0.7622,2.51851 -0.89893,3.13846 -1.83979,0.68662c-0.32996,-0.85986 -0.96231,-1.33941 -1.40524,-1.06567c-0.44292,0.27374 -3.9336,-0.26024 -7.75706,-1.18662c-6.5148,-1.57846 -6.93304,-1.84572 -6.65407,-4.25208c0.22536,-1.94388 -0.32814,-2.85291 -2.27806,-3.74135c-1.41666,-0.64548 -2.85074,-1.89022 -3.18685,-2.76609c-0.38353,-0.99946 -0.85601,-1.19621 -1.26878,-0.52834c-0.84659,1.3698 -8.06399,-3.42743 -8.06399,-5.35994c0,-0.76525 -1.11969,-2.27211 -2.4882,-3.34858c-2.18929,-1.7221 -2.36451,-2.31201 -1.4586,-4.9107c1.0236,-2.9363 0.79353,-8.3136 -0.48706,-11.38392c-0.4143,-0.99333 0.20867,-2.59584 1.63187,-4.19777l2.30199,-2.59109l16.5,8.57921c9.075,4.71856 23.025,12.06413 31,16.32349c62.18723,33.21352 61.10685,32.68503 68,33.26299c27.57793,2.31226 56.04923,4.88613 58.75994,5.31202c2.83477,0.44538 3.12786,0.75895 2.24729,2.40431c-0.55695,1.04068 -0.62867,2.12944 -0.15938,2.41948c0.46929,0.29004 1.42153,5.37985 2.11609,11.31069c0.69456,5.93084 1.94616,12.80834 2.78134,15.28334c1.20394,3.56782 1.38932,7.29654 0.89488,18c-0.74797,16.19173 -1.29711,19.12785 -3.50986,18.76635c-1.22518,-0.20016 -1.5994,0.47914 -1.50593,2.73365c0.10823,2.61082 0.20254,15.28603 0.20832,28c0.001,2.2 0.15155,4.9 0.33456,6c0.31076,1.8678 -0.13373,1.97789 -6.72468,1.6655c-8.8987,-0.42177 -9.96935,0.52169 -8.4229,7.42226c0.59312,2.64664 2.54377,7.3096 4.33477,10.36215c5.79591,9.87842 7.17158,14.53636 5.55157,18.79731c-0.9872,2.59654 1.20183,9.25278 3.04296,9.25278c0.57807,0 1.05103,1.28664 1.05103,2.85921c0,3.87545 -6.49501,11.10679 -15.0206,16.72348c-3.68778,2.42952 -6.99178,4.41731 -7.34223,4.41731c-0.35044,0 -0.63717,-1.1625 -0.63717,-2.58333c0,-3.18819 -2.21116,-2.75825 -3,0.58333c-0.30534,1.29345 -1.12667,2.54222 -1.82519,2.77506c-0.97015,0.32339 -1.11356,-0.75611 -0.60736,-4.57196l0,-0.00004z" id="e_SO"> <title>Sonora</title> </path> </g></svg>'
  }
}
var table = DB.table();

console.log('ATMs');
var indAtm = DB.indicadoresATM;
var i,a,entidad,colelction;
var catalogos = [];
var atms      = {};
for(i in indAtm){
  entidad     = i;
  collection  = indAtm[i];
  // console.log(collection);
  for(a in collection){
    catalogos.push(a);
    // console.log(i+ " " + a);
  }
}

var actual,minimo,verificaMes,inmdtAnte;

    actual = Math.max.apply(Math, catalogos)+'';
    minimo = Math.min.apply(Math, catalogos)+'';

var min,max,numPeriodo,r,x;
    min = minimo;
    max = actual;
    numPeriodo = (max-min);

    for (var r = -1; r < numPeriodo; r++) {
      verificaMes = max.substr(actual.length - 2);
      verificaMes = parseInt(verificaMes);
      actual = parseInt(actual);

      if(verificaMes == 01){
        inmdtAnte = actual-89;
      }else{
        inmdtAnte = actual-1;
      }

      inmdAnAc   = inmdtAnte - 1;
      inmdAnAcAn = inmdAnAc - 1;

  /*empezamos a calcular...*/
    for(e in indAtm){
      var entidad = e;
      var collection = indAtm[e];
      // console.log(collection);
      var indicadorActual = collection[actual].TO_ATM;
      var indicadorInmAnt = collection[inmdtAnte].TO_ATM;

      var indicadorInmAc    = collection[inmdAnAc].TO_ATM;
      var indicadorInmAcAn  = collection[inmdAnAcAn].TO_ATM;

      var desviacion = (indicadorActual-indicadorInmAnt)/indicadorActual*100;
          desviacion = desviacion.toFixed(2);

        if(undefined == collection[actual].desviacion){
          collection[actual].desviacion = '';
        }
          collection[actual].desviacion = desviacion;

      desviacion = (indicadorInmAnt-indicadorInmAc)/indicadorInmAnt*100;
      desviacion = desviacion.toFixed(2);

        if(undefined == collection[inmdtAnte].desviacion){
          collection[inmdtAnte].desviacion = '';
        }
          collection[inmdtAnte].desviacion = desviacion;

      desviacion = (indicadorInmAc-indicadorInmAcAn)/indicadorInmAc*100;
      desviacion = desviacion.toFixed(2);
        if(undefined == collection[inmdAnAc].desviacion){
          collection[inmdAnAc].desviacion = '';
        }
          collection[inmdAnAc].desviacion = desviacion;
    }

}
