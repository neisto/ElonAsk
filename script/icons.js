const iconObj= [
	{
		"code" : 1000,
		"day" : "Sunny",
		"night" : "Clear",
		"icon" : 113
	},
	{
		"code" : 1003,
		"day" : "Partly cloudy",
		"night" : "Partly cloudy",
		"icon" : 122
	},
	{
		"code" : 1006,
		"day" : "Cloudy",
		"night" : "Cloudy",
		"icon" : 119
	},
	{
		"code" : 1009,
		"day" : "Overcast",
		"night" : "Overcast",
		"icon" : 122
	},
	{
		"code" : 1030,
		"day" : "Mist",
		"night" : "Mist",
		"icon" : 143
	},
	{
		"code" : 1063,
		"day" : "Patchy rain possible",
		"night" : "Patchy rain possible",
		"icon" : 263
	},
	{
		"code" : 1066,
		"day" : "Patchy snow possible",
		"night" : "Patchy snow possible",
		"icon" : 179
	},
	{
		"code" : 1069,
		"day" : "Patchy sleet possible",
		"night" : "Patchy sleet possible",
		"icon" : 182
	},
	{
		"code" : 1072,
		"day" : "Patchy freezing drizzle possible",
		"night" : "Patchy freezing drizzle possible",
		"icon" : 182
	},
	{
		"code" : 1087,
		"day" : "Thundery outbreaks possible",
		"night" : "Thundery outbreaks possible",
		"icon" : 389
	},
	{
		"code" : 1114,
		"day" : "Blowing snow",
		"night" : "Blowing snow",
		"icon" : 179
	},
	{
		"code" : 1117,
		"day" : "Blizzard",
		"night" : "Blizzard",
		"icon" : 338
	},
	{
		"code" : 1135,
		"day" : "Fog",
		"night" : "Fog",
		"icon" : 143
	},
	{
		"code" : 1147,
		"day" : "Freezing fog",
		"night" : "Freezing fog",
		"icon" : 143
	},
	{
		"code" : 1150,
		"day" : "Patchy light drizzle",
		"night" : "Patchy light drizzle",
		"icon" : 263
	},
	{
		"code" : 1153,
		"day" : "Light drizzle",
		"night" : "Light drizzle",
		"icon" : 263
	},
	{
		"code" : 1168,
		"day" : "Freezing drizzle",
		"night" : "Freezing drizzle",
		"icon" : 263
	},
	{
		"code" : 1171,
		"day" : "Heavy freezing drizzle",
		"night" : "Heavy freezing drizzle",
		"icon" : 263
	},
	{
		"code" : 1180,
		"day" : "Patchy light rain",
		"night" : "Patchy light rain",
		"icon" : 263
	},
	{
		"code" : 1183,
		"day" : "Light rain",
		"night" : "Light rain",
		"icon" : 263
	},
	{
		"code" : 1186,
		"day" : "Moderate rain at times",
		"night" : "Moderate rain at times",
		"icon" : 263
	},
	{
		"code" : 1189,
		"day" : "Moderate rain",
		"night" : "Moderate rain",
		"icon" : 263
	},
	{
		"code" : 1192,
		"day" : "Heavy rain at times",
		"night" : "Heavy rain at times",
		"icon" : 333
	},
	{
		"code" : 1195,
		"day" : "Heavy rain",
		"night" : "Heavy rain",
		"icon" : 333
	},
	{
		"code" : 1198,
		"day" : "Light freezing rain",
		"night" : "Light freezing rain",
		"icon" : 263
	},
	{
		"code" : 1201,
		"day" : "Moderate or heavy freezing rain",
		"night" : "Moderate or heavy freezing rain",
		"icon" : 308
	},
	{
		"code" : 1204,
		"day" : "Light sleet",
		"night" : "Light sleet",
		"icon" : 182
	},
	{
		"code" : 1207,
		"day" : "Moderate or heavy sleet",
		"night" : "Moderate or heavy sleet",
		"icon" : 182
	},
	{
		"code" : 1210,
		"day" : "Patchy light snow",
		"night" : "Patchy light snow",
		"icon" : 179
	},
	{
		"code" : 1213,
		"day" : "Light snow",
		"night" : "Light snow",
		"icon" : 179
	},
	{
		"code" : 1216,
		"day" : "Patchy moderate snow",
		"night" : "Patchy moderate snow",
		"icon" : 338
	},
	{
		"code" : 1219,
		"day" : "Moderate snow",
		"night" : "Moderate snow",
		"icon" : 338
	},
	{
		"code" : 1222,
		"day" : "Patchy heavy snow",
		"night" : "Patchy heavy snow",
		"icon" : 338
	},
	{
		"code" : 1225,
		"day" : "Heavy snow",
		"night" : "Heavy snow",
		"icon" : 338
	},
	{
		"code" : 1237,
		"day" : "Ice pellets",
		"night" : "Ice pellets",
		"icon" : 338
	},
	{
		"code" : 1240,
		"day" : "Light rain shower",
		"night" : "Light rain shower",
		"icon" : 263
	},
	{
		"code" : 1243,
		"day" : "Moderate or heavy rain shower",
		"night" : "Moderate or heavy rain shower",
		"icon" : 308
	},
	{
		"code" : 1246,
		"day" : "Torrential rain shower",
		"night" : "Torrential rain shower",
		"icon" : 308
	},
	{
		"code" : 1249,
		"day" : "Light sleet showers",
		"night" : "Light sleet showers",
		"icon" : 182
	},
	{
		"code" : 1252,
		"day" : "Moderate or heavy sleet showers",
		"night" : "Moderate or heavy sleet showers",
		"icon" : 182
	},
	{
		"code" : 1255,
		"day" : "Light snow showers",
		"night" : "Light snow showers",
		"icon" : 179
	},
	{
		"code" : 1258,
		"day" : "Moderate or heavy snow showers",
		"night" : "Moderate or heavy snow showers",
		"icon" : 338
	},
	{
		"code" : 1261,
		"day" : "Light showers of ice pellets",
		"night" : "Light showers of ice pellets",
		"icon" : 179
	},
	{
		"code" : 1264,
		"day" : "Moderate or heavy showers of ice pellets",
		"night" : "Moderate or heavy showers of ice pellets",
		"icon" : 179
	},
	{
		"code" : 1273,
		"day" : "Patchy light rain with thunder",
		"night" : "Patchy light rain with thunder",
		"icon" : 389
	},
	{
		"code" : 1276,
		"day" : "Moderate or heavy rain with thunder",
		"night" : "Moderate or heavy rain with thunder",
		"icon" : 389
	},
	{
		"code" : 1279,
		"day" : "Patchy light snow with thunder",
		"night" : "Patchy light snow with thunder",
		"icon" : 335
	},
	{
		"code" : 1282,
		"day" : "Moderate or heavy snow with thunder",
		"night" : "Moderate or heavy snow with thunder",
		"icon" : 335
	}
]

export default iconObj