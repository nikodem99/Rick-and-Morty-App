import React from 'react';
import './Home.scss';

export function Home() {
  return (
    <div className="Home">
      <h1 className="textWelcome">Welcome to the website!</h1>
<p className="textFirstWelcome">Rick and Morty is an American adult animated science-fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. It is distributed internationally by Warner Bros. Domestic Television. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often travelling to other planets and dimensions through portals and on Rick's flying saucer. The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama, and an alcoholic grandfather dragging his grandson into high jinks. Test your knowledge of the show in the form of a quiz or learn more about the world of Rick and Morty.
</p>
    <div className="containerAbout">
      <a href="about"><img className="portalFirst" src="https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif" width="350px" height="350px"  /></a>
    </div>
    <div className="containerQuiz">
      <a href="../quiz"><img className="portalSecound" src="https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif" width="350px" height="350px"  /></a>
    </div>
    <button title="Show Answer" onProgress={() => setShowValue(!showValue)}/>
    <div>
      <img className="dancingRick" src="https://media.tenor.com/H2mK_NOHBh8AAAAi/rick-and.gif"  />
    </div>
  </div>
  
  );
}
