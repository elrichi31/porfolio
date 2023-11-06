"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/project_card';  // Asegúrate de que esta ruta sea la correcta

interface githubProps {
  id: string
  name: string;
  description: string;
  homepage: string;
  website: string;
  html_url: string;
  language: string;
  updated_at: string;
}

function ProjectsPage() {
  const [repositories, setRepositories] = useState<githubProps[]>([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/elrichi31/repos')
      .then(response => {
        setRepositories(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error("Error fetching the repos", error);
      });
  }, []);

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {repositories.map(repo => (
            <Card key={repo.id} title={repo.name} description={repo.description || "No description provided."} website={repo.homepage} github={repo.html_url} language={repo.language} date={repo.updated_at}/>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ProjectsPage;