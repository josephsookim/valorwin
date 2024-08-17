from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load map outcome model
with open('./models/map_outcome_model.pkl', 'rb') as f:
    map_rf = pickle.load(f)


@app.route('/', methods=['GET'])
def home():
    return "This is the ValorWin API."


@app.route('/predict', methods=['POST'])
def predict():
    # Get the JSON data from the request
    data = request.get_json()

    # Ensure that the data is in the correct order as required by the model
    input_data = {
        'team_score': data['team_score'],
        'enemy_score': data['enemy_score'],
        'team_loadout_eco': data['team_loadout_eco'],
        'team_loadout_full-buy': data['team_loadout_full-buy'],
        'team_loadout_semi-buy': data['team_loadout_semi-buy'],
        'team_loadout_semi-eco': data['team_loadout_semi-eco'],
        'enemy_loadout_eco': data['enemy_loadout_eco'],
        'enemy_loadout_full-buy': data['enemy_loadout_full-buy'],
        'enemy_loadout_semi-buy': data['enemy_loadout_semi-buy'],
        'enemy_loadout_semi-eco': data['enemy_loadout_semi-eco'],
        'map_name_Ascent': data['map_name_Ascent'],
        'map_name_Bind': data['map_name_Bind'],
        'map_name_Breeze': data['map_name_Breeze'],
        'map_name_Fracture': data['map_name_Fracture'],
        'map_name_Haven': data['map_name_Haven'],
        'map_name_Icebox': data['map_name_Icebox'],
        'map_name_Lotus': data['map_name_Lotus'],
        'map_name_Pearl': data['map_name_Pearl'],
        'map_name_Split': data['map_name_Split'],
        'map_name_Sunset': data['map_name_Sunset']
    }

    # Convert input data to DataFrame
    input_df = pd.DataFrame(input_data, index=[0])

    # Predict probabilities for map outcome
    map_probabilities = map_rf.predict_proba(input_df)

    # Predict Map Winner
    map_winner = 1 if map_probabilities[:,
                                        0][0] > map_probabilities[:, 1][0] else 2

    return jsonify(
        {
            "team1_win_probability": map_probabilities[:, 0][0],
            "team2_win_probability": map_probabilities[:, 1][0],
            "map_winner": map_winner
        }
    )


if __name__ == '__main__':
    app.run(debug=True)
