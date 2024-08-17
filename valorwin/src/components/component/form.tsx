"use client";

import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Form() {
  const [formData, setFormData] = useState({
    team1Loadout: '',
    team2Loadout: '',
    team1Rounds: '',
    team2Rounds: '',
    map: '',
    notes: ''
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const validateForm = () => {
    const errors: string[] = [];

    // Validate rounds won are integers between 0 and 12
    if (isNaN(parseInt(formData.team1Rounds, 10)) || parseInt(formData.team1Rounds, 10) < 0 || parseInt(formData.team1Rounds, 10) > 12) {
      errors.push("Team 1 Rounds Won must be an integer between 0 and 12.");
    }
    if (isNaN(parseInt(formData.team2Rounds, 10)) || parseInt(formData.team2Rounds, 10) < 0 || parseInt(formData.team2Rounds, 10) > 12) {
      errors.push("Team 2 Rounds Won must be an integer between 0 and 12.");
    }

    // Ensure all required fields are filled
    if (!formData.team1Loadout) errors.push("Team 1 Loadout is required.");
    if (!formData.team2Loadout) errors.push("Team 2 Loadout is required.");
    if (!formData.map) errors.push("Map selection is required.");

    setErrors(errors);

    return errors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      console.error("Validation failed");
      return;
    }

    // Create the data object based on form data
    const data = {
      'team_score': parseInt(formData.team1Rounds, 10),
      'enemy_score': parseInt(formData.team2Rounds, 10),
      'team_loadout_eco': formData.team1Loadout === "team_loadout_eco",
      'team_loadout_full-buy': formData.team1Loadout === "team_loadout_full_buy",
      'team_loadout_semi-buy': formData.team1Loadout === "team_loadout_semi_buy",
      'team_loadout_semi-eco': formData.team1Loadout === "team_loadout_semi_eco",
      'enemy_loadout_eco': formData.team2Loadout === "team_loadout_eco",
      'enemy_loadout_full-buy': formData.team2Loadout === "team_loadout_full_buy",
      'enemy_loadout_semi-buy': formData.team2Loadout === "team_loadout_semi_buy",
      'enemy_loadout_semi-eco': formData.team2Loadout === "team_loadout_semi_eco",
      'map_name_Ascent': formData.map === "ascent",
      'map_name_Bind': formData.map === "bind",
      'map_name_Breeze': formData.map === "breeze",
      'map_name_Fracture': formData.map === "fracture",
      'map_name_Haven': formData.map === "haven",
      'map_name_Icebox': formData.map === "icebox",
      'map_name_Lotus': formData.map === "lotus",
      'map_name_Pearl': formData.map === "pearl",
      'map_name_Split': formData.map === "split",
      'map_name_Sunset': formData.map === "sunset",
    };

    // Call the getPrediction function with the data
    const predictionResult = await getPrediction(data);

    if (predictionResult) {
      console.log("Prediction result:", predictionResult);
      // You can update the UI with the prediction result here
    }
  };

  // Prediction Request Function
  async function getPrediction(data: Record<string, any>) {
    const url = "https://valorwin.onrender.com/predict";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching prediction:", error);
      return null;
    }
  }

  return (
    <section id="prediction-tool" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
            Valorant Match Prediction
          </h2>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Enter the details of your Valorant match and get the predicted win probability for each team.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto max-w-2xl w-full grid gap-6">
          {errors.length > 0 && (
            <div className="text-red-600">
              Errors:
              <ul>
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="team1Loadout">Team 1 Loadout</Label>
              <Select value={formData.team1Loadout} onValueChange={(value) => handleSelectChange('team1Loadout', value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Team 1 Loadout" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="team_loadout_full_buy">Full</SelectItem>
                    <SelectItem value="team_loadout_semi_buy">Semi</SelectItem>
                    <SelectItem value="team_loadout_semi_eco">Semi Eco</SelectItem>
                    <SelectItem value="team_loadout_eco">Eco</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="team2Loadout">Team 2 Loadout</Label>
              <Select value={formData.team2Loadout} onValueChange={(value) => handleSelectChange('team2Loadout', value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Team 2 Loadout" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="team_loadout_full_buy">Full</SelectItem>
                    <SelectItem value="team_loadout_semi_buy">Semi</SelectItem>
                    <SelectItem value="team_loadout_semi_eco">Semi Eco</SelectItem>
                    <SelectItem value="team_loadout_eco">Eco</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="team1Rounds">Team 1 Rounds Won</Label>
              <Input id="team1Rounds" type="number" value={formData.team1Rounds} onChange={handleChange} placeholder="Enter Team 1's Rounds Won" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="team2Rounds">Team 2 Rounds Won</Label>
              <Input id="team2Rounds" type="number" value={formData.team2Rounds} onChange={handleChange} placeholder="Enter Team 2's Rounds Won" className="mt-1" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="map" className="text-sm font-medium">Select Map</Label>
              <Select value={formData.map} onValueChange={(value) => handleSelectChange('map', value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a map" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="bind">Bind</SelectItem>
                    <SelectItem value="haven">Haven</SelectItem>
                    <SelectItem value="split">Split</SelectItem>
                    <SelectItem value="ascent">Ascent</SelectItem>
                    <SelectItem value="icebox">Icebox</SelectItem>
                    <SelectItem value="breeze">Breeze</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-center">
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Predict Match Outcome
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
