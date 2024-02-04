import React, { useEffect, useState } from 'react';
import Grid from "@mui/material/Grid";
import Card, { MonsterCardProps } from "../components/Card";
import { loadMonsters } from "./Route2";

const Route3 = () => {
  const [monsters, setMonsters] = useState<MonsterCardProps[]>([]);
  const [displayedMonsters, setDisplayedMonsters] = useState<MonsterCardProps[]>([]);

  useEffect(() => {
    loadMonsters().then(data => {
      setMonsters(data);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
        if (monsters.length > 0) {
          // Find the index of the next monster based on the displayed monsters
          let nextIndex = 0;
          if (displayedMonsters.length > 0) {
            const lastDisplayedId = displayedMonsters[displayedMonsters.length - 1].id;
            nextIndex = monsters.findIndex(monster => monster.id === lastDisplayedId) + 1;
            if (nextIndex === monsters.length) nextIndex = 0; // Loop back to the beginning
          }
          const newMonster = monsters[nextIndex];

          setDisplayedMonsters(prevMonsters => [...prevMonsters, newMonster]);

          // Schedule deletion of current monster after 10 seconds
          setTimeout(() => {
            setDisplayedMonsters(prevMonsters => prevMonsters.slice(1)); // Delete the oldest monster
            console.log(`Deleted oldest monster`);
          }, 10000);
        }
        console.log(`Displayed ${displayedMonsters.length} monsters`);
      }, 1000);
      return () => clearInterval(interval);
  }, [displayedMonsters, monsters]);

  return (
    <>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

      {displayedMonsters.map((monster: MonsterCardProps, index: number) => (
        <Grid  item key={index} xs={2} sm={4} md={4} margin={'20px 0'}>
          <Card
            id={monster.id}
            name={monster.name}
            level={monster.level}
            type={{ species: monster.type?.species, subspecies: monster.type?.subspecies }}
            image={monster.image}
          />
        </Grid>
      ))}

    </Grid>
    </>
  );
};

export default Route3;
