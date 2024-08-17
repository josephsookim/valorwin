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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., sending the data to a backend.
    console.log('Form data submitted:', formData);
  };

  return (
    <section id="prediction-tool" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
            Valorant Match Prediction
          </h2>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Enter the details of your current Valorant match and get the predicted win probability for each team.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto max-w-2xl w-full grid gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="team1Loadout">Team 1 Loadout</Label>
              <Select value={formData.team1Loadout} onValueChange={(value) => handleSelectChange('team1Loadout', value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select team 1 loadout" />
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
                  <SelectValue placeholder="Select team 2 loadout" />
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
              <Input id="team1Rounds" type="number" value={formData.team1Rounds} onChange={handleChange} placeholder="Enter team 1 rounds won" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="team2Rounds">Team 2 Rounds Won</Label>
              <Input id="team2Rounds" type="number" value={formData.team2Rounds} onChange={handleChange} placeholder="Enter team 2 rounds won" className="mt-1" />
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
          <div>
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea id="notes" value={formData.notes} onChange={handleChange} placeholder="Enter any additional details" className="mt-1" />
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
