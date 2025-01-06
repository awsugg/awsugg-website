import React from "react";

function CommunityLeaders() {
  const leaders = [
    {
      name: "Hazel Saenz",
      role: "Líder de la comunidad",
      profile: "https://www.linkedin.com/in/hazelsaenz/",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQFCO6xGDGDROA/profile-displayphoto-shrink_200_200/B4EZPsjqHkGcAc-/0/1734840592265?e=1741219200&v=beta&t=4XSlekae69ieKbP76ai0e6g7iSXiOxfQ3A3max4tgKk",
    },
    {
      name: "Astrid Carolina Villatoro Rodríguez",
      role: "Líder Girls Chapter",
      profile:
        "https://www.linkedin.com/in/astrid-carolina-villatoro-rodr%C3%ADguez-94b32395/",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQHVFyhbh8cQNA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713067883245?e=1741824000&v=beta&t=zwGdVXHkZUIS16PKshyGziKYsv5pld92b4lMvzeBa3A",
    },
    {
      name: "Melissa Moreno",
      role: "Líder de la comunidad",
      profile: "https://www.linkedin.com/in/melissammoreno/",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQE7P8d2EssLoA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1670440423019?e=1741824000&v=beta&t=DoQeRlr3mLu3Xd7I52TMr9N9M58EgO3td-AM7u5_B2U",
    },
    {
      name: "Ramiro Marroquín Osoy",
      role: "Voluntario de la comunidad",
      profile: "https://www.linkedin.com/in/ramiro-marroquin-osoy-130640b9/",
      image:
        "https://media.licdn.com/dms/image/v2/C5603AQF4zW18g8kQsQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1622677969409?e=1741824000&v=beta&t=MZt0Rel1XptzRmIiOAwQ1G4ejETEqTMmmSP8E9d1ezA",
    },
    {
      name: "Jennifer Chavez",
      role: "Voluntaria de la comunidad",
      profile: "https://www.linkedin.com/in/jennifer-chavez-05b8b065/",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQGBSDwLD_83vQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726021050500?e=1741824000&v=beta&t=XOkb4gsZXecwl4dqTR_hoiasKYmPimhvc6f5KixmujM",
    },
  ];

  return (
    <section>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Lideres de la Comunidad
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-4 bg-[#131118] p-4 rounded-lg shadow-lg"
          >
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
              style={{ backgroundImage: `url(${leader.image})` }}
            ></div>
            <div className="flex flex-col">
              <p className="text-white text-[18px] font-bold leading-tight tracking-[-0.015em]">
                {leader.name}
              </p>
              <p className="text-[#a49db9] text-sm font-normal leading-normal">
                {leader.role}
              </p>
              <a
                href={leader.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6b3bf1] text-sm font-bold leading-normal underline"
              >
                View profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CommunityLeaders;
