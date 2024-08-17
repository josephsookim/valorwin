import requests

url = "https://valorwin.onrender.com/predict"
data = {
    "team_score": 9,
    "enemy_score": 9,
    "team_loadout_eco": False,
    "team_loadout_full-buy": False,
    "team_loadout_semi-buy": True,
    "team_loadout_semi-eco": False,
    "enemy_loadout_eco": False,
    "enemy_loadout_full-buy": True,
    "enemy_loadout_semi-buy": False,
    "enemy_loadout_semi-eco": False,
    "map_name_Ascent": False,
    "map_name_Bind": False,
    "map_name_Breeze": False,
    "map_name_Fracture": False,
    "map_name_Haven": False,
    "map_name_Icebox": False,
    "map_name_Lotus": False,
    "map_name_Pearl": False,
    "map_name_Split": False,
    "map_name_Sunset": True
}

response = requests.post(url, json=data)
print(response.json())
