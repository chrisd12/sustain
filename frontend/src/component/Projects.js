//projects page
import * as React from 'react';
import { ProjectCard } from './projetCard';

export default function MultiActionAreaCard() {

  return (
    <div>
      <ProjectCard 
        title="30 kW Solar Plant in Nairobi, Kenya"
        picture = 'nairobi.jpg'
        description = "This investment will be used to build a solar plant in Nairobi, on the roof of a school. This solar plant will be loaned to the school, and thus providing a 10% ROI."
        company = "Nairobi Solar"
        contract = "0x8A13F5a7658FA6639B9d09C475b80b1B546BD8A4"
       />

      <ProjectCard 
        title="Water pump for 200 inhabitants"
        picture = 'water_access.jpg'
        description = "The water access project in Thacd aims to improve the quality and availability of clean drinking water for the community. The project includes the construction of a new well and  water treatment system. In addition, the project will also include the installation of a distribution network to ensure that the water is easily accessible to all households in the community."
        company = "TchadDrinks"
        contract = "0x8A13F5a7658FA6639B9d09C475b80b1B546BD8A4"
       />
       
</div>
  );
}