export interface Skill {
    name: string;
    percent: number;
}

export interface SkillGroup {
    name: string;
    skills: Skill[];
}