// src/components/BioExp.tsx

import { component$ } from "@builder.io/qwik";
import { BioSkills } from "../BioSkills/BioSkills";
import { Exp } from "../Exp/Exp";
import { experiences } from "~/data/experiences";
import { bioSkillsData } from "~/data/bioSkillsData";
import { EducationList } from "../EducationList/EducationList";
import { certifications } from "~/data/certifications";
import { formations } from "~/data/formations";

export const BioExp = component$(() => {
  return (
    <div class="bio-exp flex flex-col lg:w-3/4 gap-4 slide-in-blur-left">
      <BioSkills bio={bioSkillsData.bio} skills={bioSkillsData.skills} />
      <Exp experiences={experiences} />
      <EducationList title="Formations" type="formation" items={formations} />
      <EducationList
        title="Certifications"
        type="certification"
        items={certifications}
      />
    </div>
  );
});
