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
    const errorList = [];

    if (!formData.team1Loadout) errorList.push("Team 1 Loadout is required.");
    if (!formData.team2Loadout) errorList.push("Team 2 Loadout is required.");
    if (!formData.team1Rounds) errorList.push("Team 1 Rounds Won is required.");
    if (!formData.team2Rounds) errorList.push("Team 2 Rounds Won is required.");
    if (!formData.map) errorList.push("Map selection is required.");

    return errorList;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors([]);
      // Proceed with form submission, e.g., send data to a backend.
      console.log('Form data submitted:', formData);
    }
  };

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
            <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
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
                    <SelectItem value="Ascent">Ascent</SelectItem>
                    <SelectItem value="Bind">Bind</SelectItem>
                    <SelectItem value="Breeze">Breeze</SelectItem>
                    <SelectItem value="Fracture">Fracture</SelectItem>
                    <SelectItem value="Haven">Haven</SelectItem>
                    <SelectItem value="Icebox">Icebox</SelectItem>
                    <SelectItem value="Lotus">Lotus</SelectItem>
                    <SelectItem value="Pearl">Pearl</SelectItem>
                    <SelectItem value="Split">Split</SelectItem>
                    <SelectItem value="Sunset">Sunset</SelectItem>
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
